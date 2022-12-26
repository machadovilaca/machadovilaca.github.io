import * as React from 'react';
import { Button, Chip, Page, PageSection, Stack, StackItem, Text, TextVariants, Title } from "@patternfly/react-core";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from 'react-router-dom'
import { CatalogTile } from "@patternfly/react-catalog-view-extension";
import { Article, articles } from "@app/Blog/articles";

const Tile: React.FunctionComponent<{ mapkey: string, article: Article, onListClick: (a: string) => void }> = ({ mapkey, article, onListClick }) => {
  return (
    <CatalogTile
      title={article.title}
      onClick={() => onListClick(mapkey)}
    >
      <>
        <p className="mb-sm">{article.date.toDateString().split(' ').slice(1).join(' ')}</p>
        {article.tags.map((tag, i) => <Chip key={i} className="m-xs" isReadOnly>{tag}</Chip>)}
      </>
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

function Blog(): React.ReactElement {
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

  const shouldRenderPost = articleId !== null && post !== '' && articles.has(post)
  const article = articles.get(post)

  return (
    <Page>
      <PageSection>
        <Title size="4xl" headingLevel="h1">
          Blog
        </Title>
      </PageSection>

      <PageSection className={"pf-c-content mw-1000"}>
        { shouldRenderPost && article !== undefined &&
            <>
              <Text component={TextVariants.h2}>{article.title}</Text>
              <Text component={TextVariants.small}>João Vilaça · {article.date.toDateString()}</Text>
              {article.content}
            </>
        }

        { !shouldRenderPost &&
          <Index onListClick={onListClick} />
        }

        <Button
          className="mt-sm"
          variant="secondary"
          onClick={() => {
            setPost("");
            history.replace({search: ''})
          }}
        >
          Back
        </Button>
      </PageSection>
    </Page>
  );
}

export { Blog };
