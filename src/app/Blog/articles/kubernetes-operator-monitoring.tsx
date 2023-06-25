import * as React from "react";
import { Flex, FlexItem, Nav, NavExpandable, NavItem, NavList, Text, TextVariants } from "@patternfly/react-core";
import vmisucceeded from "@app/images/blog/kubernetes-operator-monitoring/vmisucceeded.png";
import vmifailed from "@app/images/blog/kubernetes-operator-monitoring/vmifailed.png";
import alerts from "@app/images/blog/kubernetes-operator-monitoring/alerts.png";

const KubernetesOperatorMonitoring: React.FunctionComponent = () => (
  <>
    <Text>Observability and monitoring are critical for maintaining the stability, performance, and reliability of
      applications, particularly in distributed systems such as cloud and Kubernetes environments. As a member of the
      KubeVirt team at Red Hat, I have firsthand experience in the importance of monitoring for Kubernetes operators,
      which manage the various components of applications.</Text>

    <Text>In my previous experience at a Public Mint, I learned the value of having a robust monitoring system in place.
      By implementing good monitoring tools and pipelines for notifications, we were able to catch issues early and
      minimize downtime. This is especially important in distributed systems, where issues can have a cascading effect
      and impact multiple components of an application.</Text>

    <Text>One key aspect of monitoring is the use of custom metrics. These are metrics that are specific to an
      application or operator, and are not provided by the monitoring tool itself. Custom metrics can be used to track
      the performance and behavior of key components, and can be used to trigger alerts when certain thresholds are
      exceeded.</Text>

    <Flex className="pf-u-my-md">
      <FlexItem>
        <img
          className="blog-image"
          src={vmisucceeded}
          alt="kubevirt_migrate_vmi_succeeded_total custom metric graph"
        />
        <Text component={TextVariants.small}>Fig. 1 - Metric to track successful VM migrations</Text>
      </FlexItem>
      <FlexItem>
        <img
          className="blog-image"
          src={vmifailed}
          alt="kubevirt_migrate_vmi_failed_total custom metric graph"
        />
        <Text component={TextVariants.small}>Fig. 2 - Metric to track failed VM migrations</Text>
      </FlexItem>
    </Flex>

    <Text>In addition to custom metrics, it is also important to have a robust alerting system in place. This should
      include a range of alerts, from simple notifications to more complex escalations and remediation processes. It is
      also important to consider the various channels through which alerts can be delivered, such as email, SMS, and
      chat tools.</Text>

    <img
      className="pf-u-my-md"
      src={alerts}
      alt="custom alert examples"
    />
    <Text component={TextVariants.small}>Fig. 3 - Alert examples</Text>

    <Text>But, as the operator code grows, it is important to also consider the growth of the monitoring code. If this
      is not well planned, it can become difficult to maintain and may bring problems down the line. This is why it is
      important to think about monitoring early on in the development process, rather than leaving it as an
      afterthought.</Text>

    <Text>In my work with KubeVirt operators, I have designed custom metrics and alerts to ensure proper monitoring. It
      is also important to have end-to-end tests for these custom metrics and alerts to ensure their accuracy. These
      tests should cover a range of scenarios, including normal operation, error conditions, and edge cases. To make the
      process of creating metrics and alerts as clean and easy as possible, I participated in the design of a code
      structure in Golang for modular metrics and alert code. This structure allows for easy maintenance and expansion
      as the operator code grows.</Text>

    <Nav className="pf-u-my-md code-struct" theme="light">
      <NavList>
        <NavItem component="p">cmd</NavItem>
        <NavItem component="p">pkg</NavItem>
        <NavExpandable title="monitoring" isExpanded>
          <NavExpandable title="metrics" isExpanded>
            <NavItem component="p">metrics.go</NavItem>
            <NavItem component="p">&lt;subtype&gt;_metrics.go</NavItem>
          </NavExpandable>
          <NavExpandable title="alerts" isExpanded>
            <NavItem component="p">alerts.go</NavItem>
            <NavItem component="p">&lt;subtype&gt;_alerts.go</NavItem>
          </NavExpandable>
          <NavExpandable title="tools" isExpanded>
            <NavItem component="p">metricsdocs.go</NavItem>
          </NavExpandable>
        </NavExpandable>
        <NavExpandable title="docs" isExpanded>
          <NavExpandable title="monitoring" isExpanded>
            <NavItem component="p">metrics.md</NavItem>
          </NavExpandable>
        </NavExpandable>
      </NavList>
    </Nav>

    <Text>In a future blog post, I will go into more detail about the implementation of the modular metrics and alert
      code structure in Golang. This will include specific examples and code snippets to illustrate the key concepts and
      techniques used in the design. Additionally, I will discuss best practices for monitoring Kubernetes operators and
      provide tips and guidelines for building robust observability systems.</Text>

    <Text>Overall, the importance of observability and monitoring cannot be understated in ensuring the stability,
      performance, and reliability of applications, particularly in distributed systems such as Kubernetes. By carefully
      designing and implementing monitoring systems, we can catch issues early and minimize downtime, leading to a more
      stable and efficient environment.</Text>
  </>
);

export { KubernetesOperatorMonitoring };
