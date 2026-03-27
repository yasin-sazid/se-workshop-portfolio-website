const API_URL = import.meta.env.VITE_API_URL;

export const fetchProfile = async () => {
  try {
    const response = await fetch(`${API_URL}/profile`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching profile:", err);
    return null;
  }
};

export const fetchProjects = async () => {
  try {
    const response = await fetch(`${API_URL}/projects`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching projects:", err);
    return [];
  }
};

export const fetchExperience = async () => {
  try {
    const response = await fetch(`${API_URL}/experience`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching experience:", err);
    return [];
  }
};

export const fetchEducation = async () => {
  try {
    const response = await fetch(`${API_URL}/education`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching education:", err);
    return [];
  }
};

export const fetchPublications = async () => {
  try {
    const response = await fetch(`${API_URL}/publications`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching publications:", err);
    return [];
  }
};

export const fetchAwards = async () => {
  try {
    const response = await fetch(`${API_URL}/awards`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching awards:", err);
    return [];
  }
};

export const fetchSkills = async () => {
  try {
    const response = await fetch(`${API_URL}/skills`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching skills:", err);
    return [];
  }
};

export const submitContact = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    return { ok: response.ok, ...data };
  } catch (err) {
    console.error("Error submitting contact form:", err);
    return { ok: false, error: "Failed to send message" };
  }
};
