import * as React from "react";
import {
  Button,
  Page,
  PageSection,
  Text,
  TextContent, TextVariants,
  Title
} from "@patternfly/react-core";
import picture from "@app/images/jvilaca.png";
import { GithubIcon, GoogleIcon, LinkedinIcon, TwitterIcon } from "@patternfly/react-icons";

const AboutMeText: React.FunctionComponent = () => (
  <TextContent className={"pf-u-font-size-4xl pf-u-text-nowrap"}>

    <Text>
      Hi there! My name is João Vilaça, I&apos;m 24 years old, and I am a
      Software Engineer with over 3 years of professional experience. I am
      currently working at
      <Text component={TextVariants.a} href={"https://redhat.com"} target={"_blank"}> Red Hat </Text>
      on the
      <Text component={TextVariants.a} href={"https://kubevirt.io"} target={"_blank"}> KubeVirt </Text>
      team, where I focus on distributed systems, virtualization, containers,
      and monitoring in Kubernetes. I have a strong technical background and am
      passionate about software development and new technologies. I am
      proficient in a range of programming languages and frameworks, including
      Golang, Java, JavaScript, and Ruby on Rails. I have also made
      contributions to open source projects such as OPNsense Firewall and Nginx.
    </Text>

    <Text>
      I completed my Master&apos;s Degree in Software Engineering in 2022 at the
      University of Minho, where I was class delegate and held several positions
      at CeSIUM, the students&apos; center. In these roles, I developed a range
      of skills, including website development, tech conference organization,
      social media management, and budget management.
    </Text>

    <Text>
      I am a team player with strong communication skills and a proactive
      approach to problem-solving. I am also a fast learner and am always
      eager to learn new things. In my current role at Red Hat, I have been
      instrumental in improving the monitoring and observability of the
      Kubevirt project, and have helped design best practices for monitoring
      in Kubernetes operators.
    </Text>

    <Text>
      To see more details about my experience head over to
      <Text component={TextVariants.a} href={"/resume"}> the resume page </Text>
      or check my socials below.
    </Text>
  </TextContent>
);

const About: React.FunctionComponent = () => (
  <Page>
    <PageSection>
      <Title size="4xl" headingLevel="h1">
        About me
      </Title>
    </PageSection>

    <PageSection className={"mw-1000"}>
      <img
        className={"mb-sm portrait"}
        src={picture}
        alt="João Vilaça picture"
      />

      <div className={"mb-sm"}>
        <AboutMeText />
      </div>

      <Button
        className={"m-xs"} variant="tertiary"
        component="a" href="https://github.com/machadovilaca" target="_blank"
      >
        <GithubIcon /> machadovilaca
      </Button>

      <Button
        className={"m-xs"} variant="secondary"
        component="a" href="https://linkedin.com/in/machadovilaca" target="_blank"
      >
        <LinkedinIcon /> machadovilaca
      </Button>

      <Button
        className={"m-xs"} variant="secondary"
        component="a" href="https://twitter.com/machadovilaca" target="_blank"
      >
        <TwitterIcon /> machadovilaca
      </Button>

      <Button
        className={"m-xs"} variant="secondary" isDanger
        component="a" href="mailto:machadovilaca@gmail.com" target="_blank"
      >
        <GoogleIcon /> machadovilaca@gmail.com
      </Button>
    </PageSection>
  </Page>
);

export { About };
