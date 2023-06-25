import React from "react";
import { Text, TextVariants } from "@patternfly/react-core";

export const TextLink: React.FunctionComponent<{ href: string, text: string, newPage?: boolean }>
  = ({ href, text, newPage }) => (
  <Text component={TextVariants.a} href={href} target={newPage !== undefined && !newPage ? "_self" : "_blank"}>
    {text}
  </Text>
);
