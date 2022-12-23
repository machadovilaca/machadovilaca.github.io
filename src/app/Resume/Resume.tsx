import * as React from "react";
import { Button, Grid, GridItem, Page, PageSection, Title } from "@patternfly/react-core";
import { List } from "@app/Resume/List";
import { experienceData } from "@app/Resume/Experience";
import { educationData } from "@app/Resume/Education";

const Resume: React.FunctionComponent = () => (
  <Page>
    <PageSection>
      <Title size="4xl" headingLevel="h1">
        Resume
      </Title>
    </PageSection>

    <PageSection>
      <Grid>
        <GridItem span={4} />
        <GridItem span={4}>
          <Button
            variant="secondary" className={"mb-sm"}
            component="a" href="https://github.com/machadovilaca/curriculum-vitae/raw/master/joaovilaca_cv.pdf" target="_blank"
          >
            Download full PDF Resume
          </Button>
        </GridItem>
        <GridItem span={4} />
      </Grid>

      <Title size="2xl" headingLevel="h2" className={"mb-sm"}>
        Experience
      </Title>

      <List data={experienceData} />

      <Title size="2xl" headingLevel="h2" className={"mt-sm mb-sm"}>
        Education
      </Title>

      <List data={educationData} />
    </PageSection>
  </Page>
);

export { Resume };
