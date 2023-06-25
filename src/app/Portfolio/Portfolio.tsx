import * as React from "react";
import { Gallery, GalleryItem } from "@patternfly/react-core";
import { CatalogTile, CatalogTileBadge } from "@patternfly/react-catalog-view-extension";
import { Project, projectsData } from "@app/Portfolio/Projects";
import { ExternalLinkAltIcon } from "@patternfly/react-icons";
import { Page } from "@app/components/Page";

const ProjectTile: React.FunctionComponent<{ project: Project }> = ({ project }) => {
  return (
    <CatalogTile
      className="card-350-height"
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
  <Page title="Portfolio">
    <Projects />
  </Page>
);

export { Portfolio };
