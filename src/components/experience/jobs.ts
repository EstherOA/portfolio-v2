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
    role: "Software Developer",
    description: [
      "Built and maintained a crypto and NFT wallet browser extension using Zustand, React Query, and Ethers.js, serving 10,000+ users with seamless wallet and transaction capabilities.",
      "Led a team of 3 to develop the MVP of a stake-based open-governance dApp on the IC blockchain using Next.js, enabling decentralized decision-making.",
    ],
    employer: "Finity Technologies",
    dateBegan: "01/04/2022",
    location: "United Kingdom",
    commitment: "contract",
    workStyle: "remote",
    skills: ["NextJS", "Web3", "React"],
  },
  {
    role: "Software Engineer",
    description: [
      "Led a team of 3 to deliver a Scala and Java-based trade reference data system, improving data consistency and reducing access latency for traders by 40%.",
      "Collaborated with global teams to streamline data sourcing and consolidation in the Risk & P&L Calculations department, enhancing reporting accuracy and operational efficiency.",
    ],
    employer: "Morgan Stanley",
    dateBegan: "01/04/2021",
    dateEnded: "30/06/2022",
    location: "United Kingdom",
    commitment: "contract",
    workStyle: "remote",
    skills: ["Scala", "Java", "Soap"],
  },
  {
    role: "Software Engineer",
    description: [
      "Contributed to a 4-member team that built a scalable, distributed trading system using Java Spring, ensuring high availability and efficient transaction processing for financial operations.",
      "Improved system throughput and reduced latency by implementing Redis-based queuing and asynchronous batch request handling in a microservices architecture.",
    ],
    employer: "Turntabl",
    dateBegan: "01/01/2021",
    dateEnded: "30/06/2022",
    location: "Ghana",
    commitment: "full-time",
    workStyle: "hybrid",
    skills: ["Java", "Spring Boot", "React Native"],
  },
  {
    role: "Frontend Developer",
    description: [
      "Developed a secure, cross-platform healthcare app using React Native and Firebase in a team of 3, enabling real-time patient-provider data syncing and role-based access control.",
      "Implemented advanced chat functionality (group/individual messaging, online/typing/read indicators, and push notifications), significantly improving user engagement and communication efficiency.",
    ],
    employer: "Filly Coder",
    dateBegan: "01/08/2020",
    dateEnded: "30/04/2021",
    location: "United States",
    commitment: "contract",
    workStyle: "remote",
    skills: ["React Native", "Firebase", "MongoDB"],
  },
  {
    role: "Software Engineer",
    description: [
      "Built a scalable document upload service using Node.js, Express.js, GraphQL, and AWS S3, enabling secure file management via efficient API access.",
      "Developed a secure QR code service using Flask and AWS Cognito, ensuring robust authentication and protected data access.",
    ],
    employer: "Omni Strategies",
    dateBegan: "01/02/2020",
    dateEnded: "31/03/2021",
    location: "Ghana",
    commitment: "full-time",
    workStyle: "hybrid",
    skills: ["React", "GraphQL", "NodeJS"],
  },
  {
    role: "Frontend Developer",
    description: [
      "Built and maintained a reusable component library (30+ components) with React.js, Storybook, and Jest, reducing dev time by 25% and cutting UI-related bugs by 40% using Material UI design system.",
      "Developed a blog platform with React and Draft.js, boosting SEO and improving content publishing through a user-friendly rich-text editor.",
    ],
    employer: "Best Adapted",
    dateBegan: "01/09/2019",
    dateEnded: "30/06/2020",
    location: "United Kingdom",
    commitment: "contract",
    workStyle: "remote",
    skills: ["React", "SEO", "Jest"],
  },
];

export { jobList, type JobType };
