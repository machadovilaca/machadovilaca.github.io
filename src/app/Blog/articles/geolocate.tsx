import * as React from "react";
import { Text } from "@patternfly/react-core";
import { TextLink } from "@app/components/TextLink";

const Geolocate: React.FunctionComponent = () => (
  <>
    <Text>
      In recent years, the deployment of computing resources at the edge of networks has gained a lot of attention, as
      it allows for low latencies and improved performance in applications that require real-time processing of data
      generated at the edge. This approach, known as Edge Computing, aims to bring computing resources closer to the
      data sources, reducing the need for data to be transmitted over long distances. However, the deployment and
      orchestration of these resources can be a challenge, as it requires considering not only the availability of
      resources but also their geographic location.</Text>

    <Text>In this context, in &quot;Geolocate: A geolocation-aware scheduling system for Edge Computing&quot; we propose
      a new scheduling solution for data-centric workloads deployed in geographically distributed Edge environments. The
      solution, called Geolocate, is integrated with KubeEdge, a popular orchestration system based on Kubernetes that
      allows for the deployment and management of applications at the Edge.</Text>

    <Text>One of the main contributions of the Geolocate scheduler is its ability to consider the geographic location of
      data-producing and data-processing workloads when deciding where to deploy them. This is achieved by allowing
      users to specify the desired location for their processing workloads and selecting the node that is closest to the
      data producers. By minimizing the distance between data producers and consumers, Geolocate aims to reduce network
      latencies and improve the performance of applications that rely on the exchange of data between these two types of
      workloads.</Text>

    <Text>To evaluate the performance of the Geolocate scheduler, we conducted a series of experiments using a modified
      version of the &quot;Data Analytics with Apache Beam&quot; service example provided by KubeEdge. The results
      showed that Geolocate was able to significantly improve the response time of the data-processing workloads when
      compared to the KubeEdge default scheduler, which does not consider the location of the workloads.</Text>

    <Text>If you want to learn more about the Geolocate scheduling system for hybrid Cloud and Edge environments, I
      encourage you to read the full article at
      <TextLink href="https://dsr-haslab.github.io/repository/vpv21.pdf" text="https://dsr-haslab.github.io/repository/vpv21.pdf" />.
      The article discusses the need for a scheduling system that takes into account the geographic location of
      data-producing workloads in order to minimize network latencies and improve service response times. It also
      presents the design principles, architecture, and integration with KubeEdge of the Geolocate scheduler, as well as
      the results of preliminary experiments that demonstrate the benefits of using the Geolocate scheduler. You can
      also check out the project code at
      <TextLink href="https://github.com/geolocate-orchestration/scheduler" text="https://github.com/geolocate-orchestration/scheduler" />
      and
      <TextLink href="https://github.com/geolocate-orchestration/geolocate-scheduler" text="https://github.com/geolocate-orchestration/geolocate-scheduler" />
      to learn more about how the Geolocate scheduler works.</Text>
  </>
);

export { Geolocate };
