type JobType = {
  role: string;
  description: string[];
  employer: string;
  dateBegan: string;
  dateEnded?: string;
  location: string;
  commitment: "full-time" | "part-time" | "contract";
  workStyle: "remote" | "office" | "hybrid";
  skills?: string[];
};

const jobList: JobType[] = [
  {
    role: "Software Engineer",
    description: [""],
    employer: "Finity Technologies",
    dateBegan: "01/04/2022",
    location: "UK",
    commitment: "contract",
    workStyle: "remote",
    skills: ["React"],
  },
  {
    role: "Software Engineer",
    description: [""],
    employer: "Finity Technologies",
    dateBegan: "01/04/2022",
    location: "UK",
    commitment: "contract",
    workStyle: "remote",
    skills: ["React"],
  },
  {
    role: "Software Engineer",
    description: [""],
    employer: "Finity Technologies",
    dateBegan: "01/04/2022",
    location: "UK",
    commitment: "contract",
    workStyle: "remote",
    skills: ["React"],
  },
  {
    role: "Software Engineer",
    description: [""],
    employer: "Finity Technologies",
    dateBegan: "01/04/2022",
    location: "UK",
    commitment: "contract",
    workStyle: "remote",
    skills: ["React"],
  },
  {
    role: "Software Engineer",
    description: [""],
    employer: "Finity Technologies",
    dateBegan: "01/04/2022",
    location: "UK",
    commitment: "contract",
    workStyle: "remote",
    skills: ["React"],
  },
  {
    role: "Software Engineer",
    description: [""],
    employer: "Finity Technologies",
    dateBegan: "01/04/2022",
    location: "UK",
    commitment: "contract",
    workStyle: "remote",
    skills: ["React"],
  },
  {
    role: "Software Engineer",
    description: [""],
    employer: "Finity Technologies",
    dateBegan: "01/04/2022",
    location: "UK",
    commitment: "contract",
    workStyle: "remote",
    skills: ["React"],
  },
];

export { jobList, type JobType };
