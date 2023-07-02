import * as React from "react";
import { Text } from "@patternfly/react-core";
import { TextLink } from "@app/components/TextLink";

export const publicationsData = [
  {
    company: "Geolocate: A geolocation-aware scheduling system for Edge Computing",
    positions: [
      {
        date: "2021",
        title: "Workshop on High-Performance and Reliable Big Data (HPBD), colocated with SRDS",
      }
    ],
    description: (
      <>
        <Text>
          Abstract: Edge computing has emerged as an important
          paradigm that moves the computation and data storage of
          distributed services closer to users. While virtualization
          technologies, such as containers, have eased the task of running
          distributed services in heterogeneous edge hardware, these are
          still lacking adequate scheduling and orchestration algorithms
          that can indeed place computation near data producers.
          We present Geolocate, a generic scheduler for workload
          orchestration and distribution in containerized edge deployments.
          As the main novelty, the proposed solution takes into account
          both the available computational resources and the geographical
          location of nodes when deploying service components in these.
          A preliminary experimental evaluation of our prototype shows
          that Geolocate scheduling time is on par with other schedulers
          such as the KubeEdge default scheduler. Moreover, Geolocate
          shows average gains, even on single isolated requests, of about
          62% in the response times of scheduled services.
        </Text>
        <TextLink href="https://dsr-haslab.github.io/repository/vpv21.pdf" text="Available here" />
      </>
    )
  },
];
