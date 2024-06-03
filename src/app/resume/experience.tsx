import * as React from "react";

import redhatLogo from "./images/redhat.png";
import pmintLogo from "./images/pmint.jpg";
import eurotuxLogo from "./images/eurotux.png";
import {Experience} from "@/app/resume/page";

export const experienceData: Experience[] = [
  {
    company: "Red Hat",
    date: "Sep 2021 - Present",
    title: "Software Engineer",
    img: redhatLogo,
    description: (
      <div>
        <p>As a Software Engineer at Red Hat, I have had the opportunity to work on the KubeVirt project, a tool for
          managing virtualization workloads on Kubernetes. In my role, I have focused primarily on monitoring, using
          tools such as Prometheus and Grafana to monitor and visualize performance metrics for the KubeVirt system.</p>
        <br />
        <p>One of the key challenges in this role has been the need to integrate monitoring into a complex and dynamic
          system like Kubernetes. This has required me to develop a deep understanding of the KubeVirt architecture, as
          well as the monitoring tools and techniques used in the Kubernetes ecosystem. My work on monitoring has
          included the development of custom metrics, alerts, and dashboards, as well as the implementation of best
          practices for monitoring across the various components of the KubeVirt system. In addition, I have helped to
          design and implement best practices for monitoring Kubernetes operators in general, which will be useful for
          other projects in the Kubernetes ecosystem.</p>
        <br />
        <p>In addition to my work on monitoring, I have also contributed to other areas of the KubeVirt project, such as
          the development of new features and the implementation of automated testing. Through this work, I have gained
          valuable experience in working with a large, distributed team of developers, and have learned to collaborate
          effectively with others to deliver high-quality software.</p>
        <br />
        <p>Overall, my experience working on the KubeVirt project at Red Hat has been both challenging and rewarding. I
          am proud of the contributions I have made to the monitoring aspect of the project, and am excited to continue
          working on the KubeVirt project and to continue learning and growing as a Software Engineer.</p>
      </div>
    )
  },
  {
    company: "Public Mint",
    date: "Aug 2019 - Sep 2021",
    title: "DevOps Engineer",
    img: pmintLogo,
    description: (
      <div>
        <p>As a DevOps Engineer, I was responsible for developing, maintaining, and deploying systems in the AWS cloud.
          This included tasks such as Kubernetes orchestration, infrastructure and deployment automation using Ansible
          and AWX, and monitoring and logging using Prometheus, Kibana, and Grafana. I also had experience with CI/CD
          using GitLab and Jenkins.</p>
        <br />
        <p>In this role, I was able to utilize my strong technical skills to design and implement efficient and reliable
          systems that could handle the demands of modern applications. I worked closely with other members of the
          engineering team to ensure that our systems were always up-to-date and operating at peak performance.</p>
      </div>
    )
  },
  {
    company: "Eurotux",
    date: "2018 and 2019",
    title: "Summer Internship in DevOps",
    img: eurotuxLogo,
    description: (
      <div>
        <p>During my 2018 summer internship at Eurotux Informática, I had the opportunity to work on some exciting
          projects. I contributed to the OPNsense Firewall project by creating two new plugins: Add email-config-backup
          (https://github.com/opnsense/plugins/pull/788) and Add IP support to ProxyUserACL
          (https://github.com/opnsense/plugins/pull/748). I also developed a Go service that allowed developers to
          access Docker containers via SSH, running in any EC2 machine on a given ECS service.</p>
        <br />
        <p>In my previous summer internship at Eurotux in 2017, I fixed a segmentation fault in the NGINX Cache Purge
          Module and was involved in the physical server installation and virtualization setup (using VMware ESXi) at
          SABSEG offices in Braga.</p>
        <br />
        <p>These experiences allowed me to gain valuable hands-on experience with a variety of tools and technologies,
          and I am proud of the contributions I made to the projects I worked on.</p>
      </div>
    )
  }
];
