import * as React from "react";

import fosdemLogo from "./images/fosdem.png";
import devconfLogo from "./images/devconf.png";
import promconLogo from "./images/promcon.png";

import {TextLink} from "@/components/text-link";

export const speakingData = [
  {
    company: "Testing Kubernetes apps' observability end-to-end",
    date: "2023",
    title: "PromCon EU",
    img: promconLogo,
    description: (
      <>
        <p>
          This presentation is designed for developers and DevOps engineers with
          a basic understanding of Kubernetes, Prometheus, and alerting
          concepts. We will cover how to end-to-end test observability features
          in Kubernetes applications using Prometheus, Alertmanager, and various
          testing frameworks and libraries. We will demo how to set up a test
          environment, spin up a disposable local cluster, and use Prometheus
          client libraries for testing. Then, we will see how to write tests for
          Metrics and Events to ensure their availability and correctness, which
          are essential to monitoring the application&apos;`s behavior and
          diagnosing issues. Next, we will focus on Alert testing. Our primary
          goal is to understand how to test Alerts for accuracy and timeliness,
          as alerting is one of the critical components of observability. We
          will discuss how to ensure our alerts are actionable, relevant, and
          real, and show how to configure them correctly and ensure they react
          to the appropriate triggering conditions.
        </p>
        <TextLink href="https://promcon.io/2023-berlin/talks/testing-kubernetes-apps-observability-end-to-end/"
                  text="Details here"/>
        <br/>
        <TextLink href="https://www.youtube.com/live/ymR57Q0qqg4?feature=shared&t=18173" text="Video here"/>
      </>
    )
  },
  {
    company: "Testing Kubernetes apps' observability end-to-end",
    date: "2023",
    title: "DevConf.cz",
    img: devconfLogo,
    description: (
      <>
        <p>
          This presentation is designed for developers and DevOps engineers with
          a basic understanding of Kubernetes, Prometheus, and alerting
          concepts. We will cover how to end-to-end test observability features
          in Kubernetes applications using Prometheus, Alertmanager, and various
          testing frameworks and libraries. We will demo how to set up a test
          environment, spin up a disposable local cluster, and use Prometheus
          client libraries for testing. Then, we will see how to write tests for
          Metrics and Events to ensure their availability and correctness, which
          are essential to monitoring the application&apos;`s behavior and
          diagnosing issues. Next, we will focus on Alert testing. Our primary
          goal is to understand how to test Alerts for accuracy and timeliness,
          as alerting is one of the critical components of observability. We
          will discuss how to ensure our alerts are actionable, relevant, and
          real, and show how to configure them correctly and ensure they react
          to the appropriate triggering conditions.
        </p>
        <TextLink href="https://devconfcz2023.sched.com/event/1MYdn/testing-kubernetes-apps-observability-end-to-end"
                  text="Details here"/>
      </>
    )
  },
  {
    company: "Best Practices for Operators Monitoring and Observability in Operator SDK",
    date: "2023",
    title: "Free and Open source Software Developers' European Meeting (FOSDEM)",
    img: fosdemLogo,
    description: (
      <>
        <p>
          This presentation is aimed for operator developers that plan to add or
          want to improve their operator monitoring. We will present best
          practices and new tools that will help you get the best monitoring for
          your operator with a shorter and easier implementation. All operators
          start small. Usually the first metrics that we add, to a new operator,
          are the basic ones that help us in the development process. When
          adding the first metrics, developers that are not yet experienced with
          monitoring, might add metrics that would later cause issues. Like,
          metrics names that would need to be changed, metrics code that would
          complicate the core operator code, etc and the same for Alerts. This
          presentation will help developers to avoid pitfalls when implementing
          monitoring to their operator and will direct them for best practices
          and new tooling that we added to Operator SDK to assist developers in
          the first steps in implementing monitoring.
        </p>
        <TextLink href="https://fosdem.org/2023/schedule/event/operator/" text="Details here"/>
      </>
    )
  },
];
