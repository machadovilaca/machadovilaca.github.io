import React from "react";

export interface Project {
  title: string;
  subtitle: string;
  url: string;
  owner: string;
  owner_url: string;
  img: string;
}

export const projectsData: Project[] = [
  {
    title: "kubevirt/kubevirt",
    subtitle: "Kubernetes Virtualization API and runtime in order to define and manage virtual machines.",
    url: "https://github.com/kubevirt/kubevirt",
    owner: "KubeVirt",
    owner_url: "https://kubevirt.io",
    img: "http://kubevirt.io/assets/images/KubeVirt_logo_color.svg",
  },
  {
    title: "kubevirt/hyperconverged-cluster-operator",
    subtitle: "Operator pattern for managing multi-operator products",
    url: "https://github.com/kubevirt/hyperconverged-cluster-operator",
    owner: "KubeVirt",
    owner_url: "https://kubevirt.io",
    img: "http://kubevirt.io/assets/images/KubeVirt_logo_color.svg",
  },
  {
    title: "Geolocate: A geolocation-aware scheduling system for Edge Computing",
    subtitle: "Publication in 2021 HPBD Workshop",
    url: "https://dsr-haslab.github.io/repository/vpv21.pdf",
    owner: "AIDA - INESC TEC",
    owner_url: "https://aida.inesctec.pt/",
    img: "https://aida.inesctec.pt/wp-content/uploads/2020/05/Logo-AIDA_azul-1536x1228.png",
  },
  {
    title: "machadovilaca/terraform-aws-notifications ",
    subtitle: "AWS Lambda Function for SNS topics and Cloudwatch logs notifications to Slack and S3",
    url: "https://github.com/machadovilaca/terraform-aws-notifications",
    owner: "machadovilaca",
    owner_url: "https://github.com/machadovilaca",
    img: "https://www.datocms-assets.com/2885/1620155117-brandhcterraformverticalcolorwhite.svg",
  },
  {
    title: "geolocate-orchestration/scheduler",
    subtitle: "Generic scheduler for workload distribution into cluster nodes, with several algorithms based on geographic location and available resources",
    url: "https://github.com/geolocate-orchestration/scheduler",
    owner: "machadovilaca",
    owner_url: "https://github.com/machadovilaca",
    img: "https://aida.inesctec.pt/wp-content/uploads/2020/05/Logo-AIDA_azul-1536x1228.png",
  },
  {
    title: "geolocate-orchestration/geolocate-scheduler",
    subtitle: "Kubernetes/KubeEdge geographic-location aware scheduler",
    url: "https://github.com/geolocate-orchestration/geolocate-scheduler",
    owner: "machadovilaca",
    owner_url: "https://github.com/machadovilaca",
    img: "https://aida.inesctec.pt/wp-content/uploads/2020/05/Logo-AIDA_azul-1536x1228.png",
  },
  {
    title: "machadovilaca/fedora-silverblue-i3-gnome-flashback",
    subtitle: "Automation for Fedora Silverblue with i3 in GNOME-Flashback session",
    url: "https://github.com/machadovilaca/fedora-silverblue-i3-gnome-flashback",
    owner: "machadovilaca",
    owner_url: "https://github.com/machadovilaca",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/I3_window_manager_logo.svg/1200px-I3_window_manager_logo.svg.png",
  },
];
