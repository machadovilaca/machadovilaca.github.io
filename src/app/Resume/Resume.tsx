import * as React from "react";
import { Bullseye, Button, PageSection, Title } from "@patternfly/react-core";
import { List, ListElem } from "@app/Resume/List";
import { experienceData } from "@app/Resume/data/Experience";
import { educationData } from "@app/Resume/data/Education";
import { Page } from "@app/components/Page";
import { publicationsData } from "@app/Resume/data/Publications";
import { speakingData } from "@app/Resume/data/Speaking";

const PDFResume: React.FunctionComponent = () => (
  <Bullseye>
    <Button
      variant="secondary"
      component="a" href="https://github.com/machadovilaca/curriculum-vitae/raw/master/joaovilaca_cv.pdf"
      target="_blank"
    >
      Download full PDF Resume
    </Button>
  </Bullseye>
)

const ResumeSection: (props: { title: string, data: ListElem[] }) => JSX.Element = ({ title, data }) => (
  <PageSection>
    <Title size="2xl" headingLevel="h2" className="pf-u-mb-sm">
      {title}
    </Title>
    <List data={data} />
  </PageSection>
)

export const Resume: React.FunctionComponent = () => (
  <Page title="Resume">
    <PageSection>
      <PDFResume />
    </PageSection>

    <ResumeSection title='Experience' data={experienceData} />

    <ResumeSection title='Speaking' data={speakingData} />

    <ResumeSection title='Publications' data={publicationsData} />

    <ResumeSection title='Education' data={educationData} />
  </Page>
);
