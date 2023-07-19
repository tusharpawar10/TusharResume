import homeImage from "./assets/passport.jpeg";
// ========================== Header Data
const headerIds = [
  "home",
  "profile",
  "education",
  "skills",
  "certificates",
  "project",
];
const HeaderLinks = [
  {
    linkText: "Home",
    linkID: "home",
    boxIcon: "bx-home",
  },
  {
    linkText: "Profile",
    linkID: "profile",
    boxIcon: "bx-user",
  },
  {
    linkText: "Education",
    linkID: "education",
    boxIcon: "bx-book",
  },
  {
    linkText: "Skills",
    linkID: "skills",
    boxIcon: "bx-receipt",
  },
  {
    linkText: "Certificates",
    linkID: "certificates",
    boxIcon: "bx-award",
  },
  {
    linkText: "Project",
    linkID: "project",
    boxIcon: "bx-award",
  },

];

//  ===================================== Left Section Content =============================== //
// ========================== Home Data
const homeData = {
  homeImage,
  homeTitle1: "Tushar",
  homeTitle2: "Pawar",
  homeProfession: "Software Developer",
  homeInformation: [
    {
      text: " Indira Nagar, Nashik-422009",
      icon: "bx-home",
    },
    {
      text: "+91 9146874719",
      icon: "bx-phone",
    },
  ],
};

// ========================== Social Links
const socialLinks = {
  title: "Social :",
  links: [
    {
      link: "https://telegram.me/TP_1008",
      text: "TP_1008",
      icon: "bxl-telegram",
    },

    {
      link: "https://www.linkedin.com/in/tushar-pawar-",
      text: "Tushar Pawar",
      icon: "bxl-linkedin-square",
    },
    {
      link: "https://goo.gl/maps/BrDDJV5cdCbF3VAP9?coh=178573&entry=tt",
      text: "Home Location",
      icon: "bx-map",
    },
    {
      link:  "mailto: tusharbpawar10@gmail.com",
      text: "tusharbpawar10@gmail.com",
      icon: "bx-envelope",
    },
  ],
};

// ========================== Profile Data
const profileData = {
  title: "Career Objective :",
  //   Here you can add as much paragraph as you can
  descriptions: [
    `To work with leading company and use my analytical thinking and educational knowledge and provide the best pro efficiency of my working skills as well thinking ability, so to contribute towards the working organization's group's growth.`,
    `Also to further track my professional career with the proper working position in the organization. The more I work, the more I learn and want to enjoy my work.`,
  ],
};

// ========================= Education Data
const educationData = {
  title: "Education :",
  educations: [
    {
      title: "PG-DAC",
      studies: "CDAC,KOLKATA",
      Percentage: "PURSUING",
      line: true,
    },
    {
      title: "B.E.(MECHANICAL)",
      studies: "JSPM Narhe Technical Campus Pune",
      Percentage: "9.34",
      line: true,
    },
    {
      title: "Diploma (Mechanical)",
      studies: "S.S.V.P.S B.S.D Polytechnic, Dhule",
      Percentage: "76.12%",
      line: true,
    },
    {
      title: "S.S.C",
      studies: "Janta High School, Shindkheda",
      Percentage: "85.80%",
      line: false,
    },
  ],
};

// ========================= Skills Data
const skillsData = {
  title: "Technical Skills :",
  //   Here you can add further skills array
  skills: [
    [`C`,`C++`,`JAVA`,`React`, `MySQL`, `HTML/CSS`,`JavaScript`,`MS Office`,],
  ],
  
};
const skillsData1 = {
  title: "Soft Skills :",
  //   Here you can add further skills array
  skills: [
    [`Innovative`,`Initiative`,`Leadership`,`Creative`,`Teamwork`,`Adaptability`],
  ],
  
};
const logoText = "Tushar.";
const menuIcon = "bx-grid-alt";

//  ===================================== Right Section Content =============================== //

// ======================== Certificates Data
const certificatesData = {
  title: "Certificates :",
  certificates: [
    {
      title: "1. Learning Python (2021)",
    },
    {
      title: "2. Certificate from DEVTOWN bootcamp on Create Facebook login using HTML & CSS-May 2023"
    },
    
    {
      title: "3. Demonstrating theoretical and practical understanding of Introduction to C# by SoloLearn"
  },
    {
      title: "4. Demonstrating theoretical and practical understanding of Intermediate to C# by SoloLearn"
  },
    {
      title: "5. Certificate from Microsoft for Learning c#"
  },
    {
      title: "6. A Beginners Guide to Linux Kernel Development(LFD103) Certified under THE UNIX FOUNDATION"
  },
    {
      title: "7. Getting Started with MongoDB Atlas"
  },
  ],
};
const projectData = {
  title: "Projects Undertaken :",
  Project: [
    {
      title: "1. Resume Creation in HTML/CSS",
    },
    {
      title: "2. Registration Page using ASP/.NET",
    },
    {
      title: "3. Income Calculator for Coaching Institute using ADO.NET ",
    },
    {
      title: "4. Creation of Resume using React",
    },
    {
      title: "5. Creation of login page of Facebook using HTML/CSS"},
  ],
};

// ========================= Languages Data
const languageData = {
  title: "Languages :",
  languages: ["English", "Hindi", "Marathi"],
};

// ========================= INTERESTS Data
const interestsData = {
  title: "Intrests :",
  interests: [
    {
      icon: "bxs-plane-alt",
      text: "Travel",
    },
    {
      icon: "bx-headphone",
      text: "Gaming",
    },
    {
      icon: "bx-book",
      text: "Reading",
    },
  ],
};
export {
  HeaderLinks, certificatesData, educationData, headerIds, homeData, interestsData, languageData, logoText,
  menuIcon, profileData, projectData, skillsData,
  skillsData1, socialLinks
};

