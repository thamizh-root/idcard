import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">
        Software Developer & Team Lead
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Experienced software developer and team lead with expertise in ReactJS v19.1, Angular v19.2.8, NodeJS v23.11.0, ElectronJS v35.2.0 and Zoho platforms.
        </p>
        <p>
          Led the development of a time-tracking app, improving app performance by 80% through optimization.  Published multiple Zoho Marketplace extensions, resolving 95% of reported customer issues, boosting adoption and satisfaction. Built a Zoho Creator customer portal to streamline gig bookings, integrating with Zoho CRM and a Node.js backend.
        </p>
        <p>

          Deeply interested in ReactJS internals, {" "} <a href={socialLinks.hashnode} target="_blank">
            currently researching the architecture
          </a>{" "}
          of the scheduler and Fiber.

        </p>
        <p>
          Built and maintained by{" "}
          <a href="https://github.com/thamizh-root" target="_blank">
            Thamizh
          </a>
          .
        </p>
      </div>
    </section>
  );
}
