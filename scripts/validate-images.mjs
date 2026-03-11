#!/usr/bin/env node

/**
 * Validates that all images referenced in data files exist in the R2 bucket.
 * Imports the actual data modules, iterates over items, and sends HEAD
 * requests to each image URL to report missing or broken ones.
 *
 * Usage: node scripts/validate-images.mjs
 */

import { restaurantData } from "../src/data/restaurants.js";
import { stadiumData } from "../src/data/stadiums.js";

const CONCURRENCY = 10;
const TIMEOUT_MS = 15_000;

// ---------------------------------------------------------------------------
// 1. Collect image URLs from data
// ---------------------------------------------------------------------------

const restaurantUrls = [];
for (const restaurant of restaurantData) {
  if (Array.isArray(restaurant.images)) {
    for (const url of restaurant.images) {
      restaurantUrls.push({ url, source: `restaurant: ${restaurant.name}` });
    }
  }
}

const stadiumUrls = [];
for (const stadium of stadiumData) {
  if (stadium.image) {
    stadiumUrls.push({ url: stadium.image, source: `stadium: ${stadium.stadium}` });
  }
}

const allEntries = [...restaurantUrls, ...stadiumUrls];
const seen = new Set();
const uniqueEntries = allEntries.filter((e) => {
  if (seen.has(e.url)) return false;
  seen.add(e.url);
  return true;
});

console.log(`\nFound ${uniqueEntries.length} unique image URLs:`);
console.log(`  restaurants: ${restaurantUrls.length} images (${new Set(restaurantUrls.map(e => e.url)).size} unique)`);
console.log(`  stadiums:    ${stadiumUrls.length} images`);
console.log();

// ---------------------------------------------------------------------------
// 2. Validate each URL with HEAD requests (concurrency-limited)
// ---------------------------------------------------------------------------

async function checkUrl({ url, source }) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(url, {
      method: "HEAD",
      signal: controller.signal,
    });
    clearTimeout(timer);
    return { url, source, status: res.status, ok: res.ok };
  } catch (err) {
    clearTimeout(timer);
    return { url, source, status: 0, ok: false, error: err.message };
  }
}

async function validateAll(entries) {
  const results = [];
  let idx = 0;

  async function worker() {
    while (idx < entries.length) {
      const i = idx++;
      const result = await checkUrl(entries[i]);
      results.push(result);

      const done = results.length;
      if (done % 25 === 0 || done === entries.length) {
        process.stdout.write(`\r  Checked ${done}/${entries.length}...`);
      }
    }
  }

  const workers = Array.from({ length: CONCURRENCY }, () => worker());
  await Promise.all(workers);
  process.stdout.write("\n");

  return results;
}

// ---------------------------------------------------------------------------
// 3. Run and report
// ---------------------------------------------------------------------------

console.log("Validating images...");
const results = await validateAll(uniqueEntries);

const missing = results.filter((r) => !r.ok);

if (missing.length === 0) {
  console.log("\n✅ All images are present in the bucket.\n");
  process.exit(0);
} else {
  console.log(`\n❌ ${missing.length} image(s) missing or unreachable:\n`);
  for (const { url, status, error, source } of missing) {
    const reason = error ? error : `HTTP ${status}`;
    console.log(`  ${url}`);
    console.log(`    source: ${source}`);
    console.log(`    reason: ${reason}\n`);
  }
  console.log();
  process.exit(1);
}
