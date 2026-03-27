const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Academic Projects
const projects = [
  {
    id: 1,
    title: "Code Metrics Calculator for Java",
    description: "Console app that calculates Halstead's complexity metrics for Java code using Eclipse ASTParser",
    tech: ["Java"],
    year: 2022,
    github: "https://github.com/yasin-sazid"
  },
  {
    id: 2,
    title: "Wumpus World Game",
    description: "Web version of the Wumpus World game with a knowledge-based artificially intelligent (AI) agent",
    tech: ["Node JS"],
    year: 2021,
    github: "https://github.com/yasin-sazid"
  },
  {
    id: 3,
    title: "Doctor Appointment Hub",
    description: "Web app for patients to book doctor appointments with account management and an admin panel",
    tech: ["Angular", "Dot Net"],
    year: 2021,
    github: "https://github.com/yasin-sazid"
  },
  {
    id: 4,
    title: "Distributed Ride Sharing Service",
    description: "Console simulation of a distributed ride sharing service using microservices architecture",
    tech: ["Express JS", "Nginx", "Docker"],
    year: 2021,
    github: "https://github.com/yasin-sazid"
  },
  {
    id: 5,
    title: "Connect Four Game",
    description: "Desktop version of the Connect Four game with an artificially intelligent (AI) opponent",
    tech: ["Java", "JavaFX"],
    year: 2021,
    github: "https://github.com/yasin-sazid"
  },
  {
    id: 6,
    title: "Static OO Program Slicing Tool",
    description: "Desktop tool for static object oriented program slicing of Java source code with support for inheritance and polymorphism",
    tech: ["Java"],
    year: 2022,
    github: "https://github.com/yasin-sazid"
  }
];

// Experience
const experience = [
  {
    id: 1,
    type: "Teaching",
    position: "Lecturer of Computer Science & Engineering",
    company: "East West University",
    startDate: "January 2025",
    endDate: "Present",
    description: "Software Engineering, Human-Computer Interaction, and Software Analysis & Design. De Facto Course Lead of Human-Computer Interaction"
  },
  {
    id: 2,
    type: "Professional",
    position: "Software Engineer",
    company: "Samsung R&D Institute Bangladesh",
    startDate: "March 2024",
    endDate: "October 2024",
    description: "Backend & DevOps Engineer for A Cloud Solution of An Ultrasound System. De Facto Second-in-Command of The Cloud Solution Team"
  },
  {
    id: 3,
    type: "Professional",
    position: "Software Engineer Intern",
    company: "Orbitax",
    startDate: "January 2022",
    endDate: "June 2022",
    description: "Migration of Orbitax Website from PHP Laravel to Angular Universal. Research on Search Engine Optimization and DevOps"
  },
  {
    id: 4,
    type: "Research",
    position: "Research Assistant",
    company: "DSSE Research Group, IIT, University of Dhaka",
    startDate: "2019",
    endDate: "2024",
    description: "Detection, Prevalence and User Perception of Dark Patterns in E-Commerce of Bangladesh. Static Object Oriented Program Slicing Tool for Java Source Code. Source Code Authorship Attribution Tool for C++ Source Code"
  },
  {
    id: 5,
    type: "Consulting",
    position: "Research Assistant",
    company: "DSSE Research Group, IIT, University of Dhaka",
    startDate: "2021",
    endDate: "2023",
    description: "Enterprise Resource Planning of a University Management System - University of Chittagong. Need Analysis of a Management Information System - Bangladesh Technical Education Board. Valuation of a Software as a Service - IT Consultants PLC"
  }
];

// Education
const education = [
  {
    id: 1,
    degree: "M.Sc. in Software Engineering",
    institution: "Institute of Information Technology (IIT), University of Dhaka",
    year: 2024,
    cgpa: "4.00/4.00",
    rank: "Ranked 1st in Class",
    thesis: "Detection, Prevalence and User Perception of Dark Patterns in E-Commerce of Bangladesh",
    thesisLink: "https://github.com/yasin-sazid/dark-patterns-bangladesh/blob/main/Yasin_Sazid_MSSE_Thesis_Report.pdf"
  },
  {
    id: 2,
    degree: "B.Sc. in Software Engineering",
    institution: "Institute of Information Technology (IIT), University of Dhaka",
    year: 2022,
    cgpa: "3.97/4.00",
    rank: "Ranked 1st in Class"
  }
];

// Publications
const publications = [
  {
    id: 1,
    title: "Prevalence and User Perception of Dark Patterns: A Case Study on E-Commerce Websites of Bangladesh",
    authors: "Y. Sazid and K. Sakib",
    conference: "ENASE 2024 - 19th International Conference on Evaluation of Novel Approaches to Software Engineering",
    link: "https://www.scitepress.org/Papers/2024/127349/127349.pdf",
    year: 2024
  },
  {
    id: 2,
    title: "Commit Classification into Maintenance Activities Using In-Context Learning Capabilities of LLMs",
    authors: "Y. Sazid, S. Kuri, K. S. Ahmed, and A. Satter",
    conference: "ENASE 2024 - 19th International Conference on Evaluation of Novel Approaches to Software Engineering",
    link: "https://www.scitepress.org/Papers/2024/126867/126867.pdf",
    year: 2024
  },
  {
    id: 3,
    title: "Automated Detection of Dark Patterns Using In-Context Learning Capabilities of GPT-3",
    authors: "Y. Sazid, M. M. N. Fuad, and K. Sakib",
    conference: "APSEC 2023 - 30th Asia-Pacific Software Engineering Conference",
    link: "https://ieeexplore.ieee.org/abstract/document/10479438/",
    year: 2023
  }
];

// Awards & Grants
const awards = [
  {
    id: 1,
    title: "Research Fellowship for Master's Thesis",
    organization: "ICT Division, Government of Bangladesh",
    year: "2023 - 2024"
  },
  {
    id: 2,
    title: "Talent Pool Master's Scholarship for Top Rank in Bachelor's",
    organization: "Government of Bangladesh",
    year: "2023 - 2024"
  },
  {
    id: 3,
    title: "Provost Award for Top Rank in Master's",
    organization: "Amar Ekushey Hall, University of Dhaka",
    year: "2023"
  },
  {
    id: 4,
    title: "Provost Award for Top Rank in Bachelor's",
    organization: "Amar Ekushey Hall, University of Dhaka",
    year: "2021"
  },
  {
    id: 5,
    title: "Champion at Independence Cup Programming Contest",
    organization: "Institute of Information Technology (IIT), University of Dhaka",
    year: "2019"
  },
  {
    id: 6,
    title: "Champion at IT Quiz Competition",
    organization: "Institute of Information Technology (IIT), University of Dhaka",
    year: "2019"
  },
  {
    id: 7,
    title: "Champion at Regional Mathematical Olympiad",
    organization: "Bangladesh Mathematical Olympiad",
    year: "2015"
  },
  {
    id: 8,
    title: "High Distinction in Science",
    organization: "International Assessments for Schools, UNSW Global, Australia",
    year: "2015"
  }
];

// Skills & Research Interests
const skills = [
  {
    id: 1,
    category: "Critical Computing",
    description: "Focus on ethical computing and its societal implications"
  },
  {
    id: 2,
    category: "Human-Computer Interaction",
    description: "User experience and interface design with emphasis on ethical patterns"
  },
  {
    id: 3,
    category: "Software Engineering",
    description: "Software development practices, design patterns, and best practices"
  }
];

// Profile
const profile = {
  name: "Yasin Sazid",
  title: "Lecturer of Computer Science & Engineering",
  organization: "East West University",
  bio: "I am a Lecturer in the Department of Computer Science and Engineering at East West University, where I teach courses on Software Engineering and Human-Computer Interaction. Prior to my academic role, I worked as a software engineer at Samsung R&D for a brief period. I earned both my Bachelor's and Master's degrees in Software Engineering at the Institute of Information Technology (IIT), University of Dhaka. My research interests include Critical Computing, Human-Computer Interaction, and Software Engineering, with particular emphasis on UI dark patterns and ethical software design.",
  email: "msse1762@iit.du.ac.bd",
  linkedin: "https://linkedin.com/in/yasinsazid",
  github: "https://github.com/yasin-sazid",
  googleScholar: "https://scholar.google.com/citations?user=BQHQYJ0AAAAJ&hl=en&oi=ao",
  cv: "https://yasinsazid.vercel.app/data/Yasin_Sazid_CV.pdf"
};

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Portfolio API is running", version: "1.0.0" });
});

app.get("/profile", (req, res) => {
  res.json(profile);
});

app.get("/projects", (req, res) => {
  res.json(projects);
});

app.get("/projects/:id", (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).json({ error: "Project not found" });
  }
  res.json(project);
});

app.get("/experience", (req, res) => {
  res.json(experience);
});

app.get("/experience/:type", (req, res) => {
  const typeExperience = experience.filter(exp => exp.type.toLowerCase() === req.params.type.toLowerCase());
  if (typeExperience.length === 0) {
    return res.status(404).json({ error: "No experience found for this type" });
  }
  res.json(typeExperience);
});

app.get("/education", (req, res) => {
  res.json(education);
});

app.get("/publications", (req, res) => {
  res.json(publications);
});

app.get("/awards", (req, res) => {
  res.json(awards);
});

app.get("/skills", (req, res) => {
  res.json(skills);
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  console.log("Contact form submitted:", { name, email, message, timestamp: new Date() });

  res.json({ message: "Thank you for reaching out! I'll get back to you soon." });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});