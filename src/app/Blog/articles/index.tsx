import React from "react";
import { Geolocate } from "@app/Blog/articles/geolocate";
import { KubernetesOperatorMonitoring } from "@app/Blog/articles/kubernetes-operator-monitoring";
export interface Article {
  title: string;
  date: Date;
  tags: string[];
  content: JSX.Element
}

export const articles: Map<string, Article> =
  new Map([
    ["kubernetes-operator-monitoring", {
      title: "Observability and Monitoring for Kubernetes Operators",
      date: new Date(2022, 11, 22),
      tags: ["monitoring", "observability", "metrics", "alerts", "Kubernetes"],
      content: <KubernetesOperatorMonitoring />
    }],

    ["geolocate", {
      title: "Geolocate: A geolocation-aware scheduling system for Edge Computing",
      date: new Date(2021, 8, 28),
      tags: ["scheduling", "KubeEdge", "edge-computing", "geographic-locations", "scheduling-algorithms"],
      content: <Geolocate />
    }]
  ])
