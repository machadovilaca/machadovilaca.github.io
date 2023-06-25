import * as React from "react";
import {
  Avatar,
  Button,
  Stack,
  StackItem,
  Text,
  TextContent
} from "@patternfly/react-core";
import picture from "@app/images/jvilaca.png";
import { GithubIcon, GoogleIcon, LinkedinIcon, TwitterIcon } from "@patternfly/react-icons";
import { Page } from "@app/components/Page";
import { TextLink } from "@app/components/TextLink";

const ProfileImage: React.FunctionComponent = () => (
  <Avatar src={picture} alt="João Vilaça picture" size="xl" />
)

const age = (initialDateStr: string): number => {
  const initialDate = new Date(initialDateStr);
  const currentDate = new Date();

  let years = (currentDate.getFullYear() - initialDate.getFullYear());

  if (currentDate.getMonth() < initialDate.getMonth() ||
    currentDate.getMonth() == initialDate.getMonth() && currentDate.getDate() < initialDate.getDate()) {
    years--;
  }

  return years;
}

const AboutMeText: React.FunctionComponent = () => (
  <TextContent className="pf-u-font-size-lg pf-u-text-align-justify">

    <Text>
      João Vilaça is a {age("1998-06-30")} years old software
      engineer, with over {age("2019-08-01")} years of professional
      experience, working at
      <TextLink href="https://redhat.com" text=" Red Hat " />
      in Portugal.
    </Text>
    <Text>
      João is an active participant in the open-source community. He has made
      significant contributions to projects like
      <TextLink href="https://github.com/kubevirt/hyperconverged-cluster-operator" text=" kubevirt/hyperconverged-cluster-operator" />
      , a Kubernetes solution employing the operator pattern for managing
      multi-operator products, and
      <TextLink href="https://github.com/kubevirt/kubevirt" text=" kubevirt/kubevirt" />
      , a Kubernetes virtualization API and runtime for defining and managing
      virtual machines. His other projects include
      <TextLink href="https://github.com/machadovilaca/terraform-aws-notifications" text=" terraform-aws-notifications" />
      , a Terraform AWS module to create a Lambda function for Slack and/or S3
      bucket notifications from subscribed SNS topics and Cloudwatch log groups, and
      <TextLink href="https://github.com/geolocate-orchestration" text=" geolocate-orchestration " />
      , featuring a generic scheduler for workload distribution into cluster
      nodes and a Kubernetes/KubeEdge geographic-location aware scheduler.
    </Text>
    <Text>
      He has a strong technical background and is passionate about software
      development and new technologies. He is proficient in a range of
      programming languages and technologies, including Golang, Java, Python,
      Ruby (Rails), Kubernetes/Openshift, AWS, Terraform, Ansible, CI/CD, and
      Prometheus.
    </Text>

    <Text>
      He completed his Master&apos;s Degree in Software Engineering in 2022 at
      the University of Minho, where he was class delegate and held several
      positions at CeSIUM, the students&apos; center. In those roles, he
      developed a range of skills, including website development, tech
      conference organization, social media management, and budget management.
    </Text>

    <Text>
      He is a team player with strong communication skills and a proactive
      approach to problem-solving. He is also a fast learner and he is always
      eager to learn new things. In his current role at Red Hat, he has been
      instrumental in improving the monitoring and observability of the
      Kubevirt project, and have helped design best practices for monitoring
      in Kubernetes operators.
    </Text>

    <Text>
      To see more details about his experience head over to
      <TextLink href="/resume" text=" the resume page " newPage={false} />
      or check his socials below:
    </Text>
  </TextContent>
);

const Socials: React.FunctionComponent = () => (
  <>
    <Button
      className="pf-u-m-xs" variant="tertiary"
      component="a" href="https://github.com/machadovilaca" target="_blank"
    >
      <GithubIcon /> machadovilaca
    </Button>

    <Button
      className="pf-u-m-xs" variant="secondary"
      component="a" href="https://linkedin.com/in/machadovilaca" target="_blank"
    >
      <LinkedinIcon /> machadovilaca
    </Button>

    <Button
      className="pf-u-m-xs" variant="secondary"
      component="a" href="https://twitter.com/machadovilaca" target="_blank"
    >
      <TwitterIcon /> machadovilaca
    </Button>

    <Button
      className="pf-u-m-xs" variant="secondary" isDanger
      component="a" href="mailto:machadovilaca@gmail.com" target="_blank"
    >
      <GoogleIcon /> machadovilaca@gmail.com
    </Button>
  </>
);

export const About: React.FunctionComponent = () => (
  <Page title="About">
    <Stack hasGutter>
      <StackItem><ProfileImage /></StackItem>
      <StackItem><AboutMeText /></StackItem>
      <StackItem><Socials /></StackItem>
    </Stack>
  </Page>
);
