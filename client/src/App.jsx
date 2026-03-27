import { useEffect, useState } from "react";
import "./index.css";
import {
  fetchProfile,
  fetchProjects,
  fetchExperience,
  fetchEducation,
  fetchPublications,
  fetchAwards,
  fetchSkills,
  submitContact
} from "./services/api";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

function App() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [publications, setPublications] = useState([]);
  const [awards, setAwards] = useState([]);
  const [skills, setSkills] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    const loadData = async () => {
      const profileData = await fetchProfile();
      const projectsData = await fetchProjects();
      const experienceData = await fetchExperience();
      const educationData = await fetchEducation();
      const publicationsData = await fetchPublications();
      const awardsData = await fetchAwards();
      const skillsData = await fetchSkills();

      if (profileData) setProfile(profileData);
      setProjects(projectsData);
      setExperience(experienceData);
      setEducation(educationData);
      setPublications(publicationsData);
      setAwards(awardsData);
      setSkills(skillsData);
    };
    loadData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await submitContact(formData);
    alert(result.message || result.error);

    if (result.ok) {
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="container">
      <Navbar profile={profile} />
      <Hero profile={profile} />
      <About profile={profile} experience={experience} education={education} publications={publications} />
      <Skills skills={skills} awards={awards} />
      <Projects projects={projects} />
      <Contact profile={profile} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;