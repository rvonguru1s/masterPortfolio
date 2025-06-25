/* Change this file to get your personal Porfolio */
// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rishika Vonguru's Portfolio",
  description:
    "Aspiring Cloud, DevOps & Network Engineer | Skilled in AWS, Linux, CI/CD | Master’s in Applied Computer Science",
  og: {
    title: "Rishika Vonguru Portfolio",
    type: "website",
    url: "https://rvonguru1s.github.io/masterPortfolio",
  },
};

//Home Page
const greeting = {
  title: "Rishika Vonguru",
  logo_name: "Rishika Vonguru",
  subTitle:
    "A highly motivated individual focused on delivering end-to-end technology solutions that promote operational efficiency, system scalability, and long-term value.",
  resumeLink:
    "https://drive.google.com/file/d/1Ry-8cO1Qt_EsxLzmgl87kdh1KUnIDGWy/view?usp=drive_link",
  portfolio_repository: "https://github.com/rvonguru1s/masterPortfolio",
  githubProfile: "https://github.com/rvonguru1s",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/rvonguru1s",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vonguru-r-3718581a6/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:vongururishika28@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Cloud & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "☁️ Experience with AWS EC2, S3, IAM, and CLI tools",
        "⚙️ Working knowledge of CI/CD pipelines with GitHub Actions",
        "🔐 Linux-based system troubleshooting and automation",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#2088FF",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Wireshark",
          fontAwesomeClassname: "simple-icons:wireshark",
          style: { color: "#1679A7" },
        },
      ],
    },
    {
      title: "Network Engineering",
      fileName: "FullStackImg",
      skills: [
        "📡 LTE/VoLTE Core Network Monitoring (MME, PGW, SGW)",
        "🛠️ Packet Core troubleshooting and alarm diagnostics",
        "📈 KPI monitoring and trace log analysis",
      ],
      softwareSkills: [],
    },
  ],
};
// Education Page
export const techSites = [
  {
    siteName: "AWS",
    iconifyClassname: "simple-icons:amazonaws",
    style: { color: "#FF9900" },
    profileLink: "https://aws.amazon.com/",
  },
  {
    siteName: "Git Bash",
    iconifyClassname: "simple-icons:git",
    style: { color: "#F1502F" },
    profileLink: "https://git-scm.com/downloads",
  },
  {
    siteName: "Linux",
    iconifyClassname: "simple-icons:linux",
    style: { color: "#FCC624" },
    profileLink: "https://www.linux.org/",
  },
  {
    siteName: "Wireshark",
    iconifyClassname: "simple-icons:wireshark",
    style: { color: "#1679A7" },
    profileLink: "https://www.wireshark.org/",
  },
  {
    siteName: "GitHub",
    iconifyClassname: "simple-icons:github",
    style: { color: "#181717" },
    profileLink: "https://github.com/",
  },
];

const degrees = {
  degrees: [
    {
      title: "Southeast Missouri State University",
      subtitle: "M.S. in Applied Computer Science",
      logo_path: "semo_logo.png",
      alt_name: "SEMO",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ Studied advanced topics such as Human-Computer Interaction, Mobile Computing, Cybersecurity, and Data Mining.",
        "⚡ Gained practical experience in database design, distributed computing, and advanced programming concepts using Java and Python.",
        "⚡ Explored secure system design, encryption techniques, and threat modeling in Cybersecurity coursework.",
        "⚡ Designed responsive user interfaces and accessible systems in HCI-focused projects.",
        "⚡ Applied data mining algorithms for classification, clustering, and prediction tasks in real-world datasets.",
        "⚡ Developed cloud-ready, scalable applications using concepts from DBMS, DevOps, and system architecture.",
      ],
      website_link: "https://semo.edu",
    },
    {
      title: "Siddhartha Institute of Engineering and Technology",
      subtitle: "B.Tech in Electronics & Communication Engineering",
      logo_path: "SIET.png",
      alt_name: "SIET",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ Completed core coursework in Electronics, Digital Communication, Embedded Systems, and Network Theory.",
        "⚡ Developed strong problem-solving and analytical skills through lab-based learning and mini projects.",
        "⚡ Participated in technical workshops and seminars focused on wireless communications and antenna design.",
        "⚡ Worked on academic projects involving microcontroller-based systems and basic IoT applications.",
        "⚡ Built a solid foundation in networking concepts, which sparked my interest in core network operations and DevOps.",
      ],
      website_link: "www.siddharthsa.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Networking Basics",
      subtitle: "- Amazon Web Services",
      logo_path: "AWS.png",
      alt_name: "AWS",
      color_code: "#FF9900",
    },
    {
      title: "Robotic Process Automation",
      subtitle: "- AICTE",
      logo_path: "AICTE.png", // Ensure this logo is available in your images folder
      alt_name: "AICTE",
      color_code: "#0C9D58",
    },
    {
      title: "How to Build Chatbots",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      alt_name: "IBM",
      color_code: "#1F70C1",
    },
    {
      title: "Java Programming",
      subtitle: "- Kodnest",
      logo_path: "KODNEST.png",
      alt_name: "Kodnest",
      color_code: "#E34F26",
    },
  ],
};
const projectsHeader = {
  title: "Projects",
  description:
    "I have worked on diverse projects across web development, mobile apps, AI/ML, and telecom systems. My experience includes developing a medical equipment rental platform using PHP and MySQL, building an AI & IoT-based disease diagnosis system with Python, and monitoring LTE/VoLTE core networks (PGW, SGW, MME, PCRF) at Vodafone Idea using Wireshark and Linux tools. I’ve also created an e-commerce mobile app with React Native, Node.js, and Firebase, and built machine learning models for music genre classification using scikit-learn and Pandas.",
  avatar_image_path: "projects_image.svg", // Make sure this image exists in assets/images/
};

const publicationsHeader = {
  title: "Publications",
  description:
    "Some of my published research, technical blogs, and real-world insights into AI and cloud technologies.",
  avatar_image_path: "projects_image.svg", // Same image is okay, or replace it
};

const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Hands-on Network Engineer and Cloud/DevOps enthusiast with experience in telecom core operations, cloud automation, and software development. Passionate about scalable infrastructure, automation, and performance optimization in production environments.",
  header_image_path: "experience1.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Network Engineer – Packet Core Operations (L1/NOC)",
          company: "Vodafone Idea",
          company_url: "https://www.myvi.in/",
          logo_path: "vodafone_logo.png",
          duration: "Sep 2022 – Aug 2023",
          location: "Hyderabad, India",
          description:
            "Monitored LTE/VoLTE KPIs, alarms, and node health using CLI tools. Troubleshot packet core nodes (PGW, SGW, MME, PCRF), supported QoS policy implementation, and collaborated with multi-vendor teams for node readiness. Delivered configuration validation and incident escalation during change management.",
          color: "#e60000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Graduate Engineer Intern (RF & RAN)",
          company: "Vodafone Idea",
          company_url: "https://www.myvi.in/",
          logo_path: "vodafone_logo.png",
          duration: "Mar 2022 – Jun 2022",
          location: "Hyderabad, India",
          description:
            "Assisted in RF planning and antenna deployment, tuned RAN parameters (handover, power, modulation), and optimized 4G LTE coverage while supporting network expansion projects with cross-functional collaboration.",
          color: "#e60000",
        },
        {
          title: "Robotic Process Automation Intern",
          company: "AICTE",
          company_url: "https://www.aicte-india.org/",
          logo_path: "AICTE.png",
          duration: "Oct 2021 – Dec 2021",
          location: "Hyderabad, India",
          description:
            "Built automation workflows using UiPath for telecom use cases. Learned orchestration, process simulations, and bot logic to improve operational efficiency.",
          color: "#003366",
        },
        {
          title: "Java Intern",
          company: "Kodnest",
          company_url: "https://www.kodnest.com/",
          logo_path: "KODNEST.png",
          duration: "Jun 2021 – Jul 2021",
          location: "Hyderabad, India",
          description:
            "Gained experience in Core and Advanced Java, OOP principles, file handling, and exception management. Built console-based Java projects and practiced DS & Algo problems.",
          color: "#ff9800",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Certification Holder - AWS Networking Basics",
          company: "Amazon Web Services",
          company_url: "https://aws.amazon.com/",
          logo_path: "AWS.png",
          duration: "Completed in April 2025",
          location: "Online",
          description:
            "Completed AWS Networking Basics certification covering VPCs, subnets, route tables, NAT, gateways, and cloud networking fundamentals.",
          color: "#FF9900",
        },
        {
          title: "Certified RPA Developer",
          company: "AICTE",
          company_url: "https://www.aicte-india.org/",
          logo_path: "AICTE.png",
          duration: "Completed in Dec 2021",
          location: "Online",
          description:
            "Successfully certified in Robotic Process Automation (UiPath) under AICTE's internship program.",
          color: "#007ACC",
        },
      ],
    },
  ],
};

const projects = {
  data: [
    {
      id: "medical-equipment-rental",
      name: "Medical Equipment Rental Management System",
      url:
        "https://github.com/rvonguru1s/Medical-Equipment-Rental-Management-System",
      description:
        "An online platform to streamline the rental process of medical equipment. Enhances operational and administrative tasks with an interactive web-based system.",
      features: [
        " User interface built with HTML, CSS, JavaScript",
        " PHP backend and MySQL database",
        " Runs in XAMPP local server using Apache",
      ],
      languages: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "XAMPP"],
      logos: [
        { name: "HTML5", iconifyClass: "vscode-icons:file-type-html" },
        { name: "CSS3", iconifyClass: "vscode-icons:file-type-css" },
        { name: "JavaScript", iconifyClass: "logos:javascript" },
        { name: "PHP", iconifyClass: "logos:php" },
        { name: "MySQL", iconifyClass: "logos:mysql" },
        { name: "XAMPP", iconifyClass: "logos:xampp" },
      ],
    },
    {
      id: "ai-iot-diagnosis",
      name: "AI & IoT Enabled Disease Diagnosis System",
      url: "",
      description:
        "Smart healthcare system combining IoT devices and AI algorithms (CSO) for diagnosing heart disease and diabetes with up to 97.26% accuracy.",
      features: [
        " Wearables & sensors collect real-time health data",
        " Crow Search Optimization achieves 96–97% accuracy",
        " Enables early detection & remote monitoring",
      ],
      languages: ["Python", "IoT", "CSO Algorithm", "ML"],
      logos: [
        { name: "Python", iconifyClass: "logos:python" },
        { name: "AI", iconifyClass: "logos:tensorflow" },
        { name: "IoT", iconifyClass: "logos:raspberrypi" },
      ],
    },
    {
      id: "network-core-monitoring",
      name: "LTE/VoLTE Packet Core Monitoring",
      url: "",
      description:
        "Monitored LTE/VoLTE core network nodes (PGW, SGW, MME, PCRF) at Vodafone Idea to maintain high service reliability and resolve incidents.",
      features: [
        " Used CLI, MyCOM, Service Manager & Wireshark",
        " Monitored KPIs, alarms, signaling (S1, S11, S6a, Gx)",
        " Troubleshot across multi-vendor environments",
      ],
      languages: ["Linux", "Wireshark", "Putty", "MyCOM"],
      logos: [
        { name: "Linux", iconifyClass: "logos:linux-tux" },
        { name: "Wireshark", iconifyClass: "simple-icons:wireshark" },
        { name: "Putty", iconifyClass: "logos:windows-terminal" },
      ],
    },
    {
      id: "music-genre-mining",
      name: "Music Genre Classification using ML (Mining Mavericks)",
      url: "",
      description:
        "Used data mining techniques to classify music into genres using supervised learning (SVM, Decision Trees) with preprocessing and audio feature extraction.",
      features: [
        " Handled noisy real-world datasets with preprocessing",
        " Applied classification models to detect genre labels",
        " Evaluated model performance using accuracy & confusion matrices",
      ],
      languages: ["Python", "Pandas", "scikit-learn", "NumPy"],
      logos: [
        { name: "Python", iconifyClass: "logos:python" },
        { name: "Pandas", iconifyClass: "logos:pandas-icon" },
        { name: "scikit-learn", iconifyClass: "logos:scikit-learn" },
      ],
    },
    {
      id: "retail-shop-app",
      name: "Retail Shop Online – Mobile Application",
      description:
        "A full-featured mobile retail app enabling users to register, browse, shop, track orders, and make payments securely via a user-friendly UI.",
      features: [
        " Functionalities: registration, cart, payment gateway, tracking",
        " Built with React Native / Flutter, Node.js, Firebase, MySQL",
        " Integrated Stripe for secure payment processing",
      ],
      languages: ["React Native", "Node.js", "Firebase", "MySQL", "Stripe"],
      logos: [
        { name: "React Native", iconifyClass: "logos:react" },
        { name: "Node.js", iconifyClass: "logos:nodejs-icon" },
        { name: "Firebase", iconifyClass: "logos:firebase" },
        { name: "Stripe", iconifyClass: "logos:stripe" },
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Rishika.jpg",
    description:
      "I’m currently seeking full-time roles and internship opportunities in Network Engineering while growing my skills in DevOps and cloud technologies. With hands-on experience in telecom core operations and tools like AWS, Linux, and CI/CD pipelines, I’m eager to contribute to dynamic teams. I’m always open to connecting with professionals, recruiters, and peers to explore opportunities, collaborate on projects, or exchange ideas in networking and DevOps. Feel free to reach out — I’d love to connect.",
  },

  addressSection: {
    title: "Address",
    subtitle: "Cape Girardeau, Missouri, USA 63701",
    locality: "Cape Girardeau",
    country: "USA",
    region: "Missouri",
    postalCode: "63701",
    streetAddress: "",
    avatar_image_path: "address_image1.svg",
    location_map_link: "", // optional: add if needed
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};
const contactInfo = {
  title: "Contact Me",
  subtitle:
    "Feel free to reach out for opportunities, collaborations, or just to connect.",
  number: "(573) 587-3612",
  email_address: "vongururishika28@gmail.com",
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
  contactInfo,
  projects,
};
