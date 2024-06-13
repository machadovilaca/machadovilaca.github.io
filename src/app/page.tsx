import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Link from "next/link";
import {SVGProps} from "react";
import Image from "next/image";
import {TextLink} from "@/components/text-link";

export default function Home() {
  return (
    <main>
      <Card className="mx-auto max-w-lg">
        <CardHeader className="flex flex-col items-center space-y-4 p-6">
          <Avatar className="h-36 w-36">
            <AvatarImage asChild src="/jvilaca.jpg">
              <Image src="/jvilaca.jpg" alt="João Vilaça" width={400} height={400}/>
            </AvatarImage>
            <AvatarFallback>JV</AvatarFallback>
          </Avatar>
          <div className="grid gap-0.5 text-center">
            <CardTitle className="text-2xl font-bold">João Vilaça</CardTitle>
            <CardDescription className="text-zinc-500 dark:text-zinc-400">Software Engineer at Red Hat</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col px-6 py-4 text-justify gap-4">
          <p>
            I actively participate in the open-source community, mostly contributing to the{" "}
            <TextLink href="https://github.com/kubevirt/kubevirt" text="kubevirt/kubevirt"/>
            {" "}project, a Kubernetes virtualization API and runtime for defining and managing virtual machines.
          </p>
          <p>
            With a strong technical background, I am passionate about software development and new technologies.
            I am proficient in a range of programming languages and technologies, including
            Golang, C/C++, Java, Python, Ruby, Elixir
            Kubernetes/Openshift, AWS, Terraform, Ansible, CI/CD, and Prometheus.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center space-x-4 py-4 border-t">
          <Link
            href="https://github.com/machadovilaca"
            className="text-zinc-900 dark:text-zinc-100"
            prefetch={false}
            target="_blank"
          >
            <GithubIcon className="h-6 w-6"/>
          </Link>
          <Link
            href="https://twitter.com/machadovilaca"
            className="text-zinc-900 dark:text-zinc-100"
            prefetch={false}
          >
            <TwitterIcon className="h-6 w-6"/>
          </Link>
          <Link
            href="https://linkedin.com/in/machadovilaca"
            className="text-zinc-900 dark:text-zinc-100"
            prefetch={false}
          >
            <LinkedinIcon className="h-6 w-6"/>
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  )
}


function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}


function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
    </svg>
  )
}