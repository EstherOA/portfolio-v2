import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrainFront } from "lucide-react";
import { format } from "date-fns";

import { jobList, type JobType } from "./jobs";
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
          start: "top 80%",
          end: "+=1000",
          scrub: 1,
          markers: true,
        },
        x: 10,
        y: -10,
        rotation: 15,
        scale: 0.6,
        opacity: 0,
        ease: "none",
      });
    });
  }, []);

  return (
    <div id="experience" className="bg-[#b8a4c9] px-5 pt-5 pb-10">
      <h3 className="sm:text-center text-base sm:text-xl font-semibold tracking-normal mb-12 pt-4">
        Experience
      </h3>
      <div
        ref={containerRef}
        className="flex flex-col items-center mt-10 sm:w-3/5 m-auto gap-4"
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
        <div className="sm:flex justify-between">
          <p>{job.role}</p>
          <p className="text-base sm:text-lg tracking-normal">
            <strong>{job.employer}</strong> - {job.location} ({job.workStyle})
          </p>
        </div>
        <p className="font-semibold">
          {format(new Date(job.dateBegan), "MMM yyyy")} -{" "}
          {job.dateEnded
            ? format(new Date(job.dateEnded), "MMM yyyy")
            : "present"}
        </p>
        <div className="flex flex-col">
          {job.description.map((jd, i) => (
            <div key={i} className="flex flex-row items-center mt-5">
              <TrainFront size={16} className="flex-none mr-1" />
              <span className="text-muted-foreground font-medium tracking-tight">
                {jd}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-5 mt-5">
          {job.skills?.map((skill, i) => (
            <p className="font-semibold" key={i}>
              {skill}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Experience;
