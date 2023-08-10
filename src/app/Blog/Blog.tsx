import * as React from 'react';
import {
  Chip,
  Divider,
  PanelHeader,
  PanelMain,
  PanelMainBody,
  Stack,
  StackItem,
  Text,
  TextVariants
} from "@patternfly/react-core";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from 'react-router-dom'
import { CatalogTile } from "@patternfly/react-catalog-view-extension";
import { Article, articles } from "@app/Blog/articles";
import { Page } from "@app/components/Page";
import { Panel } from '@patternfly/react-core';
import { PanelCloseIcon } from "@patternfly/react-icons";
import { Button } from '@patternfly/react-core';

const Tile: React.FunctionComponent<{ mapkey: string, article: Article, onListClick: (a: string) => void }> = ({ mapkey, article, onListClick }) => {
  return (
    <CatalogTile
      onClick={() => onListClick(mapkey)}
      title={article.title}
      vendor={article.date.toDateString().split(' ').slice(1).join(' ')}
    >
      {article.tags.map((tag, i) => <Chip key={i} className="pf-v5-u-m-xs" isReadOnly>{tag}</Chip>)}
    </CatalogTile>
  )
}

const Index: React.FunctionComponent<{onListClick: (a: string) => void}> = ({ onListClick }) => {
  const items: JSX.Element[] = [];

  articles.forEach((article: Article, mapkey: string) => {
    items.push(
      <StackItem key={mapkey}><Tile mapkey={mapkey} article={article} onListClick={onListClick}/></StackItem>
    )
  });

  return (
    <Stack hasGutter>
      {items}
    </Stack>
  )
}

const GoBack: React.FunctionComponent<{goBack: () => void, className?: string}> = ({ goBack, className }) => {
  return (
    <Button
      variant="link"
      icon={<PanelCloseIcon />}
      onClick={goBack}
      className={className}
    >
      Back
    </Button>
  )
}

export function Blog(): React.ReactElement {
  const [post, setPost] = useState('');

  const location = useLocation()
  const history = useHistory()

  const queryParams = new URLSearchParams(location.search)
  const articleId = queryParams.get("article")

  useEffect(() => {
    if (articleId != null) {
      setPost(articleId)
    }
  }, [articleId]);

  const onListClick = (article: string) => {
    history.push({
      search: `?article=${article}`
    })
  }

  const goBack = () => {
    history.push({
      search: ``
    })
  }

  const shouldRenderPost = articleId !== null && post !== '' && articles.has(post)
  const article = articles.get(post)

  return (
    <Page title="Blog">
      { shouldRenderPost && article !== undefined &&
          <Panel>
            <PanelHeader>
              <Text component={TextVariants.h2} className="pf-v5-u-font-size-lg pf-v5-u-font-weight-bold">{article.title}</Text>
              <Text component={TextVariants.small}>João Vilaça · {article.date.toDateString()}</Text>
              <GoBack goBack={goBack}/>
            </PanelHeader>
            <Divider />
            <PanelMain>
              <PanelMainBody className="line-height-1-6">
                {article.content}
              </PanelMainBody>
            </PanelMain>
            <Divider />

            <GoBack goBack={goBack} className="pf-v5-u-my-md" />
          </Panel>
      }

      { !shouldRenderPost &&
        <Index onListClick={onListClick} />
      }
    </Page>
  );
}
