import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Section from "@/components/Section";

export default function Hero() {
  return (
    <Section classNames="flex max-lg:flex-col items-center justify-between pt-20">
      <article className="w-full lg:w-1/2 space-y-8">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl md:leading-relaxed">
          Unlock the Power of Web Development
        </h1>
        <p className="max-w-[600px] text-muted-foreground md:text-xl">
          Streamline your web development workflow with our cutting-edge platform. Unleash your creativity and
          build stunning experiences with ease.
        </p>
        <Button>
          Get Started
        </Button>
      </article>
      <div className="w-full lg:w-[40%]">
        <Image
          src="/svg/placeholder.svg"
          width={600}
          height={600}
          className="w-full h-full object-cover"
          alt="hero banner"
        />
      </div>
    </Section>
  )
}