import Image from "next/image";
import { CTA } from "@components/CTA";
import { HtmlIcon, MjmlIcon, ReactIcon } from "@components/Icons";
import homepageHeroImage from "public/static/images/homepage-hero.png";

const emailCodeTypes = [
  {
    name: "MJML",
    Icon: MjmlIcon,
  },
  {
    name: "React",
    Icon: ReactIcon,
  },
  {
    name: "HTML",
    Icon: HtmlIcon,
  },
];

export const Greeting = () => (
  <section className="max-w-6xl md:mx-auto md:flex md:items-center">
    <div className="px-4 md:flex-1">
      <div className="space-x-2 md:space-x-3">
        {emailCodeTypes.map(({ name, Icon }) => (
          <div
            key={name}
            className="inline-flex items-center justify-center gap-x-1.5 rounded-full bg-dark-900 py-1 px-2 text-neutral-500 md:py-2 md:px-4"
          >
            <Icon className="h-4 w-4 md:h-5 md:w-5" />
            <span className="text-xs font-medium md:text-sm">{name}</span>
          </div>
        ))}
      </div>
      <h1 className="mt-3 text-4xl font-semibold md:mt-5 md:text-6xl">
        Easy to build an email with React & MJML
      </h1>
      <p className="mt-4 text-lg text-neutral-500 md:mt-6 md:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </p>
      <div className="mt-6 space-y-3 md:hidden">
        <CTA href="/" color="white" fullWidth>
          Build an email
        </CTA>
        <CTA href="/" color="black" fullWidth>
          Explore components
        </CTA>
      </div>
      <div className="hidden md:mt-12 md:inline-flex md:gap-x-3">
        <CTA href="/" color="white">
          Build an email
        </CTA>
        <CTA href="/" color="black">
          Explore components
        </CTA>
      </div>
    </div>
    <div className="relative mt-8 overflow-hidden px-4 md:flex-1">
      <Image
        src={homepageHeroImage}
        alt="Homepage hero image"
        quality={100}
        className="min-w-[390px] md:min-w-[500px]"
        priority={true}
      />
      <div className="absolute bottom-0 h-1/3 w-full bg-[linear-gradient(to_bottom,transparent,#000000_80%)]" />
    </div>
  </section>
);
