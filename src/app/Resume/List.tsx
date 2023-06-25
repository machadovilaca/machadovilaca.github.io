import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionToggle, Bullseye,
  Flex,
  FlexItem,
  Text
} from "@patternfly/react-core";
import '@app/Resume/List.css';
import styles from '@app/Resume/List.module.css';
import { css } from "@patternfly/react-styles";

export interface ListElem {
  company: string
  positions: {
    date: string
    title: string
  }[]
  img?: string
  description: JSX.Element
}

export const List: React.FunctionComponent<{ data: ListElem[]}> = ({ data }) => {
  const [expanded, setExpanded] = React.useState([""]);

  const toggle = id => {
    const index = expanded.indexOf(id);
    const newExpanded: string[] =
      index >= 0 ? [...expanded.slice(0, index), ...expanded.slice(index + 1, expanded.length)] : [...expanded, id];
    setExpanded(newExpanded);
  };

  const items: JSX.Element[] = [];

  for (let i = 0; i < data.length; i++) {
    const num = i.toString();

    const title = (
      <Flex alignItems={{ default: "alignItemsCenter"}} className={css(styles.details)}>
        <FlexItem>
          <Bullseye className={css(styles.logo)}>
            {
              data[i].img &&
              <img
                src={data[i].img}
                alt={data[i].company}
                width={50}
                height={50}
              />
            }
          </Bullseye>
        </FlexItem>
        <FlexItem className={css(styles.details)}>
          <Text component="p" className={css(styles.company)}>{data[i].company}</Text>
          {
            data[i].positions.map((position, i) =>
              <Flex key={i} className={css(styles.detailsText)}>
                <FlexItem>
                  <Text component="small">{position.title}</Text>
                </FlexItem>
                <FlexItem align={{ default: 'alignRight' }}>
                  <Text component="small">{position.date}</Text>
                </FlexItem>
              </Flex>
            )
          }
        </FlexItem>
      </Flex>
    );

    items.push(
      <AccordionItem key={i}>
        <AccordionToggle
          onClick={() => {
            toggle(num);
          }}
          isExpanded={expanded.includes(num)}
          id={num}
        >
          {title}
        </AccordionToggle>
        <AccordionContent id={num} isHidden={!expanded.includes(num)} className="pf-u-font-size-md pf-u-text-align-justify">
          {data[i].description}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Accordion asDefinitionList={false}>
      {items}
    </Accordion>
  );
};
