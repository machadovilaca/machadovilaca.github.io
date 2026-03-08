export const profile = {
  name: "João Vilaça",
  title: "Software Engineer",
  image: "/jvilaca.jpg",
};

export const description = [
  {
    text: "Software Engineer specialized in cloud-native platforms, observability, virtualization, and distributed systems. Strong experience building scalable, reliable, and production-grade systems using technologies such as Go, Kubernetes, OpenShift, AWS, Terraform, Ansible, CI/CD, and Prometheus.",
  },
  {
    text: "With a background spanning software engineering, platform engineering, and open-source development, he focuses on creating systems that are easier to operate, monitor, automate, and scale. His expertise is especially valuable in modern engineering organizations building resilient infrastructure, developer platforms, and AI-ready systems.",
  },
];

export const socials = [
  {
    name: "GitHub",
    href: "https://github.com/machadovilaca",
  },
  {
    name: "X",
    href: "https://x.com/machadovilaca",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/machadovilaca",
  },
];

export const metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: `${profile.title} specialized in cloud-native platforms, observability, virtualization, and distributed systems.`,
};

export const speakingData = [
  {
    title: "Reducing observability cognitive load in KubeVirt",
    conference: "Free and Open source Software Developers' European Meeting (FOSDEM)",
    year: "2025",
    image: "/images/fosdem.png",
    description:
      "KubeVirt, which provides additional functionality to Kubernetes clusters, to perform virtual machine management, is a large multi-component project that, like many others, grew rapidly with a strong focus on delivering new features. In the beginning, observability was not a priority. Whenever necessary, the developers of each component would add Prometheus instrumentation in their code bases in very different ways. This presentation outlines and demos how we modularized the code and made it more readable, and maintainable. By encapsulating the Prometheus monitoring best practices and the common patterns into a library with a strict interface and using it as a dependency for all KubeVirt components, we reduced code complexity, made it easy to maintain and evolve, and reduced the risk of introducing errors.",
    links: [
      { label: "Details", href: "https://archive.fosdem.org/2025/schedule/event/fosdem-2025-4224-reducing-observability-cognitive-load-in-kubevirt/" },
    ],
  },
  {
    title: "Testing Kubernetes apps' observability end-to-end",
    conference: "PromCon EU",
    year: "2023",
    image: "/images/promcon.png",
    description:
      "This presentation is designed for developers and DevOps engineers with a basic understanding of Kubernetes, Prometheus, and alerting concepts. We will cover how to end-to-end test observability features in Kubernetes applications using Prometheus, Alertmanager, and various testing frameworks and libraries. We will demo how to set up a test environment, spin up a disposable local cluster, and use Prometheus client libraries for testing. Then, we will see how to write tests for Metrics and Events to ensure their availability and correctness, which are essential to monitoring the application's behavior and diagnosing issues. Next, we will focus on Alert testing. Our primary goal is to understand how to test Alerts for accuracy and timeliness, as alerting is one of the critical components of observability. We will discuss how to ensure our alerts are actionable, relevant, and real, and show how to configure them correctly and ensure they react to the appropriate triggering conditions.",
    links: [
      { label: "Details", href: "https://promcon.io/2023-berlin/talks/testing-kubernetes-apps-observability-end-to-end/" },
      { label: "Video", href: "https://www.youtube.com/live/ymR57Q0qqg4?feature=shared&t=18173" },
    ],
  },
  {
    title: "Testing Kubernetes apps' observability end-to-end",
    conference: "DevConf.cz",
    year: "2023",
    image: "/images/devconf.png",
    description:
      "This presentation is designed for developers and DevOps engineers with a basic understanding of Kubernetes, Prometheus, and alerting concepts. We will cover how to end-to-end test observability features in Kubernetes applications using Prometheus, Alertmanager, and various testing frameworks and libraries. We will demo how to set up a test environment, spin up a disposable local cluster, and use Prometheus client libraries for testing. Then, we will see how to write tests for Metrics and Events to ensure their availability and correctness, which are essential to monitoring the application's behavior and diagnosing issues. Next, we will focus on Alert testing. Our primary goal is to understand how to test Alerts for accuracy and timeliness, as alerting is one of the critical components of observability. We will discuss how to ensure our alerts are actionable, relevant, and real, and show how to configure them correctly and ensure they react to the appropriate triggering conditions.",
    links: [
      { label: "Details", href: "https://devconfcz2023.sched.com/event/1MYdn/testing-kubernetes-apps-observability-end-to-end" },
    ],
  },
  {
    title: "Best Practices for Operators Monitoring and Observability in Operator SDK",
    conference: "Free and Open source Software Developers' European Meeting (FOSDEM)",
    year: "2023",
    image: "/images/fosdem.png",
    description:
      "This presentation is aimed for operator developers that plan to add or want to improve their operator monitoring. We will present best practices and new tools that will help you get the best monitoring for your operator with a shorter and easier implementation. All operators start small. Usually the first metrics that we add, to a new operator, are the basic ones that help us in the development process. When adding the first metrics, developers that are not yet experienced with monitoring, might add metrics that would later cause issues. Like, metrics names that would need to be changed, metrics code that would complicate the core operator code, etc and the same for Alerts. This presentation will help developers to avoid pitfalls when implementing monitoring to their operator and will direct them for best practices and new tooling that we added to Operator SDK to assist developers in the first steps in implementing monitoring.",
    links: [
      { label: "Details", href: "https://fosdem.org/2023/schedule/event/operator/" },
    ],
  },
];
