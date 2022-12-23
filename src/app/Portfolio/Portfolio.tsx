import * as React from "react";
import { Button, Gallery, GalleryItem, Page, PageSection, Title } from "@patternfly/react-core";
import { CatalogTile, CatalogTileBadge } from "@patternfly/react-catalog-view-extension";
import { Project, projectsData } from "@app/Portfolio/Projects";
import { ExternalLinkAltIcon } from "@patternfly/react-icons";

const ProjectTile: React.FunctionComponent<{ project: Project }> = ({ project }) => {
  return (
    <CatalogTile
      iconImg={project.img}
      iconAlt={`${project.title} image`}
      title={project.title}
      vendor={
        <span>
          project by <a href={project.owner_url}>{project.owner}</a>
        </span>
      }
      badges={[
        <CatalogTileBadge key="0">
          <a href={project.url} target="_blank" rel="noreferrer">
            <ExternalLinkAltIcon />
          </a>
        </CatalogTileBadge>
      ]}
    >
      {project.subtitle}
    </CatalogTile>
  )
}

const Projects: React.FunctionComponent = () => {
  const items: JSX.Element[] = [];

  for (let i = 0; i < projectsData.length; i++) {
    items.push(
      <GalleryItem key={i.toString()}>
        <ProjectTile project={projectsData[i]} />
      </GalleryItem>
    )
  }

  return (
    <Gallery hasGutter>
      {items}
    </Gallery>
  )
}

const Portfolio: React.FunctionComponent = () => (
  <Page>
    <PageSection>
      <Title size="4xl" headingLevel="h1">
        Portfolio
      </Title>
    </PageSection>

    <PageSection>
      <Projects />
    </PageSection>
  </Page>
);

export { Portfolio };
