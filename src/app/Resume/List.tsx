import * as React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionToggle, Split, SplitItem } from "@patternfly/react-core";

interface ListProps {
  data: {
    company: string
    date: string
    title: string
    img: string
    description: JSX.Element
  }[]
}

export const List: React.FunctionComponent<ListProps> = ({ data }) => {
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
      <Split hasGutter>
        <SplitItem>
          <img
            className={"mini-icon"}
            src={data[i].img}
            alt={"company logo"}
          />
        </SplitItem>
        <SplitItem isFilled style={{ marginTop: "0.25em" }}>
          <b>{data[i].company}</b> - {data[i].title}
        </SplitItem>
        <SplitItem style={{ marginTop: "0.25em" }}>
          {data[i].date}
        </SplitItem>
      </Split>
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
        <AccordionContent id={num} isHidden={!expanded.includes(num)}>
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
