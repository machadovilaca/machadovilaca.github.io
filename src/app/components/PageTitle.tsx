import { PageSection, Title } from "@patternfly/react-core";
import * as React from "react";

export const PageTitle: (props: { title: string }) => JSX.Element = ({ title }) => (
  <PageSection>
    <Title headingLevel="h1" size="4xl">
      {title}
    </Title>
  </PageSection>
);
