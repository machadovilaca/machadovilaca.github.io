"use client";

import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import Image, {StaticImageData} from "next/image";
import {experienceData} from "@/app/resume/experience";
import {Separator} from "@/components/ui/separator";
import {speakingData} from "@/app/resume/speaking";
import Link from "next/link";

export interface Experience {
  company: string
  date: string
  title: string
  img: StaticImageData
  description: JSX.Element
}

export default function Resume() {
  const [open, setOpen] = React.useState<string | null>(null);

  const card = (experience: Experience) => {
    return (
      <Card className="w-full max-w-3xl rounded-lg overflow-hidden">
        <CardHeader className="flex flex-row space-x-4 p-6">
          <Image
            src={experience.img} alt={experience.company}
            width={400} height={400}
            className="h-14 w-14"
          />
          <div className="grid gap-0.5 text-left">
            <CardTitle>{experience.title}</CardTitle>
            <CardDescription>{experience.company}, {experience.date}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4 border-y py-4">
          <Collapsible open={open === experience.company}
                       onOpenChange={() => setOpen(open === experience.company ? null : experience.company)}>
            <p className={open === experience.company ? "hidden" : "block text-justify"}>
              {experience.description.props.children[0].props.children.split(" ").slice(0, 20).join(" ")}...
            </p>

            <CollapsibleContent className="text-justify">
              {experience.description}
            </CollapsibleContent>

            <CollapsibleTrigger className="mt-3 underline text-center">
              {open === experience.company ? "Hide" : "Show more"}
            </CollapsibleTrigger>
          </Collapsible>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="mb-10">
      <div className="fixed bottom-0 right-0 p-6">
        <Link
          href="https://github.com/machadovilaca/curriculum-vitae/raw/master/joaovilaca_cv.pdf"
          target="_blank"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">
                Download complete resume as PDF
              </CardTitle>
            </CardHeader>
          </Card>
        </Link>
      </div>

      <div className="mx-auto max-w-3xl">
        <h1 className="mb-5 text-3xl font-bold">Work Experience</h1>
        <div className="flex flex-col space-y-5">
          {
            experienceData.map((experience, index) => (
              <div key={index}>
                {card(experience)}
              </div>
            ))
          }
        </div>

        <Separator className="my-16"/>

        <h1 className="mb-5 text-3xl font-bold">Speaking</h1>
        <div className="flex flex-col space-y-5">
          {
            speakingData.map((experience, index) => (
              <div key={index}>
                {card(experience)}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
