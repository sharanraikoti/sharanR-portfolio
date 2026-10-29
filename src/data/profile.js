// All portfolio content lives here. Edit this file to update the site.
export const profile = {
  name: "Sharan R",
  initials: "SR",
  roles: ["Computer Science Engineering Student", "Python Developer", "Aspiring AI/ML Engineer"],
  intro:
    "I'm a Computer Science Engineering student who enjoys building practical software applications and machine learning solutions with Python.",
  location: "Bengaluru, Karnataka, India",
  email: "sharanraikoti1012@gmail.com",
  github: "https://github.com/sharanraikoti",
  githubLabel: "github.com/sharanraikoti",
  linkedin: "https://www.linkedin.com/in/sharan-r-33554a380",
  linkedinLabel: "linkedin.com/in/sharan-r-33554a380",
  resume: "./Sharan_R_Resume.pdf",
};

export const about = [
  "I am a Computer Science Engineering undergraduate at SJB Institute of Technology, Bengaluru. I have a strong foundation in Python, Data Structures and Algorithms, SQL, and DBMS.",
  "I have hands-on experience developing Python applications using Streamlit, file handling, and Matplotlib, along with building supervised machine learning models using Scikit-learn.",
  "I am interested in Software Development and Artificial Intelligence & Machine Learning. I enjoy solving problems, learning new technologies, and building practical projects that address real-world challenges.",
  "My current goal is to secure an internship where I can apply my technical knowledge, gain industry experience, and grow as a software engineer.",
];

export const quickFacts = [
  { label: "Based in", value: "Bengaluru, India" },
  { label: "Degree", value: "B.E. Computer Science, 2023 – 2027" },
  { label: "Focus", value: "Python, Machine Learning, Software Development" },
  { label: "Looking for", value: "Software / AI-ML internships" },
];

export const skills = [
  { title: "Programming Languages", items: ["Python", "SQL", "Java (Basics)"] },
  { title: "Machine Learning", items: ["Regression", "Classification", "Scikit-learn", "Model Evaluation"] },
  { title: "Core Computer Science", items: ["Data Structures and Algorithms", "Object-Oriented Programming", "DBMS", "Computer Networks"] },
  { title: "Libraries and Tools", items: ["NumPy", "Pandas", "Matplotlib", "Streamlit", "Git", "GitHub"] },
];

// Add `repo` or `demo` URLs to a project only when a real repository or deployment exists.
export const projects = [
  {
    name: "Student Performance Prediction",
    kind: "Machine Learning",
    description:
      "A supervised machine learning regression model that predicts students' final examination marks using academic and study-related features.",
    tech: ["Python", "Scikit-learn"],
    features: [
      "Data preprocessing and feature analysis",
      "Train-test splitting and feature scaling",
      "Model development using Scikit-learn",
      "Model evaluation using regression metrics",
    ],
    repo: null,
    demo: null,
  },
  {
    name: "Smart Expense Tracker",
    kind: "Python Application",
    description:
      "A Python application to record income and expenses, maintain account balances, and analyze spending patterns.",
    tech: ["Python", "Matplotlib", "File handling"],
    features: [
      "Income and expense management",
      "Expense categorization",
      "Financial summaries and spending analysis",
      "Persistent data storage using file handling",
      "Data visualization using Matplotlib",
    ],
    repo: null,
    demo: null,
  },
  {
    name: "Smart Habit Tracker",
    kind: "Web Application",
    description:
      "An interactive Python and Streamlit web application to create, manage, and monitor daily habits.",
    tech: ["Python", "Streamlit", "CSV"],
    features: [
      "Daily habit tracking",
      "Habit analytics and streak monitoring",
      "Progress reports",
      "CSV export functionality",
      "Persistent file storage",
    ],
    repo: null,
    demo: null,
  },
];

// `url` only where a real credential link exists.
export const certifications = [
  {
    name: "Machine Learning Specialization",
    issuer: "DeepLearning.AI and Stanford Online",
    platform: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/specialization/BT7KAVLF6I7O",
  },
  { name: "GenAI Powered Data Analytics Job Simulation", issuer: "Tata", platform: "Forage", url: null },
  { name: "Python Essentials 1", issuer: "Cisco Networking Academy", platform: "Cisco", url: null },
  { name: "Python (Basic)", issuer: "HackerRank", platform: "HackerRank", url: null },
  { name: "Human-Computer Interaction", issuer: "NPTEL", platform: "NPTEL", url: null },
];

export const education = [
  { title: "Bachelor of Engineering – Computer Science and Engineering", place: "SJB Institute of Technology, Bengaluru", period: "2023 – 2027" },
  { title: "Class XII", place: "S.S.L.S. PU College, Alike", period: "2023" },
  { title: "Class X", place: "S.S.L.S. Vidya Kendra, Alike", period: "2021" },
];

export const languages = [
  { name: "English", level: "Professional Working Proficiency" },
  { name: "Kannada", level: "Native/Bilingual Proficiency" },
];

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
