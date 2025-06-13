import { useEffect, useRef } from "react";
import { jobList, type JobType } from "./jobs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "../ui/card";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.utils.toArray<HTMLElement>(".job-card").forEach((card) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
        x: 10,
        y: -10,
        rotation: 15,
        scale: 0.6,
        opacity: 0,
        ease: "power2.out",
        yoyo: true,
      });
    });
  }, []);

  return (
    <div className="bg-[#b8a4c9] px-5 pt-5 pb-10">
      <h3 className="text-base font-semibold tracking-normal mb-7 pt-4">
        Experience
      </h3>
      <div
        ref={containerRef}
        className="flex flex-col items-center sm:w-3/5 m-auto gap-4"
      >
        {jobList.map((job, i) => (
          <Job key={i} {...job} />
        ))}
      </div>
    </div>
  );
};

const Job = (job: JobType) => {
  return (
    <Card className="job-card w-full">
      <CardContent>
        <p>{job.role}</p>
        <p>
          {job.employer} - {job.location} ({job.workStyle})
        </p>
        <p>
          {job.dateBegan} - {job.dateEnded ?? "present"}
        </p>
        <p>{job.description}</p>
        {job.skills?.map((skill, i) => (
          <p key={i}>{skill}</p>
        ))}
      </CardContent>
    </Card>
  );
};

export default Experience;
