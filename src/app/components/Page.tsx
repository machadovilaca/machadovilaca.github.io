import * as React from "react";
import { PageTitle } from "@app/components/PageTitle";
import { Page as PFPage, PageSection } from "@patternfly/react-core";


interface PageProps {
  title: string;
}

export const Page: (props: React.PropsWithChildren<PageProps>) => JSX.Element = ({ title, children }) => (
  <PFPage isManagedSidebar>
    <PageTitle title={title} />
    <PageSection>
      {children}
    </PageSection>
  </PFPage>
)
