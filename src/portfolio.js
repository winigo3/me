
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

//CREDIT TO SAADPASTA at the bottom (saadpasta.github.io)

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Whi",
  title: "Hi, I'm Will",
  subTitle: emoji("I'm an engineer and entrepreneur. I'm passionate about mechatronics and IoT, especially how they relate to sports and gaming." +
  " I also truly love designing and building things, no matter the industry, from the ground up."),
  resumeLink: "https://drive.google.com/file/d/1kbFLviALwIOV5ck0nc_tsOkn_0UNS6ib/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  //github: "https://github.com/winigo3",
  linkedin: "https://www.linkedin.com/in/williaminigo/",
  gmail: "whi@duke.edu",
  /*gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta" */
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "Background",
  subTitle: ""+
      "",
  skills: [
    emoji("⚡ I'm a sophomore at Duke University studying Mechanical Engineering and Computer Science student with experience in robotics, "+
        "3D design, and hardware & software development."),
    emoji("⚡ Although I'm an engineer by trade, I also find meaning in fostering connection with my friends and colleagues. I love exploring "+
          "the relationship between tech and non-technical fields, and seeing how I can bring my variety of interests together."),
    emoji("⚡ When I'm not working, I'm probably playing soccer, baking a random type of dessert, or just listening to music and relaxing (and recently trying to improve my chess.com blitz rating).")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Physical prototyping and design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "85%"
    },
    {
      Stack: "Team Management",
      progressPercentage: "80%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Hardware & Software Development Intern",
      company: "Mobius Materials",
      companylogo: require("./assets/images/logo2.jpg"),
      date: "May 2020 – Jan 2021",
      desc: "Built basis for intiial web stack, created counterfeit IC detection machine, and performed research about potential testing methods",
      descBullets: ["Company Site: mobiusmaterials.com"]
    },
    {
      role: "Design Intern",
      company: "Protect3d",
      companylogo: require("./assets/images/protect3dlogo.png"),
      date: "Oct 2019 – May 2020",
      desc: "Designed and manufactured custom-fitting, 3D printed protective pads using Fusion 360 and Formlabs Form 2 suite, created beginning of order automation processing system",
      descBullets: ["Company Site: protect3dpads.com", "A rendering of my design for an AC joint pad: bit.ly/whi_design"]
    },
    {
      role: "Hardware Engineer",
      company: "KORA (Duke Innovation Studio)",
      companylogo: require("./assets/images/is_logo.jpg"),
      date: "Jan 2021 – Present",
      desc: "Lead hardware engineer in working to bring smart technology to the operating room, beginning by creating smart lighting",
      descBullets: ["Company Site: dukeinnovation.studio"]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Some Random Designs",
  subtitle: "SOME DESIGNS OF PRODUCTS I HAVE MADE IN THE PAST COUPLE OF YEARS (Click on the image to either see the company's site or more info on the related project",
  projects: [
    {
      image: require("./assets/images/ac_rend.png"),
      link: "https://www.protect3dpads.com/"
    },
    {
      image: require("./assets/images/ARMScropped.jpeg"),
      link: "https://drive.google.com/file/d/1yph2duZf7xyZqfzPjwxYIRKDd3genUNV/view?usp=sharing"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Projects and Other"),
  subtitle: "Just Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Shoulder Reduction Simulation Model",
      subtitle: "Developed a model and led a team of engineers in developing a medical simulation model in cooperation with Duke Engineering and Duke Hospital. Won the PDMA Innovate Carolina competition and was featured in the Dean's memo."+
          "See below for the beginning of a grant proposal which details its tech value",
      image: require("./assets/images/ARMScropped.jpeg"),
      footerLink: [
        { name: "Expanded Description", url: "https://drive.google.com/file/d/1yph2duZf7xyZqfzPjwxYIRKDd3genUNV/view?usp=sharing" },
      ]
    },
    {
      title: "Project Edge",
      subtitle: "Over three summers, moved from participant to admin team member and finally project director. Organized and led hackathon-style design sprint for over 150 incoming freshmen while helping them transition successfully into college and learn about I&E and design.",
      image: require("./assets/images/pedgelogo.PNG"),
      footerLink: [{ name: "Learn More about pEdge", url: "https://studentaffairs.duke.edu/new-students/preorientation-programs/project-edge" }]
    },
    {
      title: "Duke Men's Club Soccer",
      subtitle: "Starting goalkeeper and current Vice President - Currently creating a return to play plan for the roster of over 60 players I have constructed and redesigning merchandise for the club. This is one of my favorite activites, as I believe it is the best way to take breaks from work and stress.",
      image: require("./assets/images/dmcslogo.jpg"),
      footerLink: [
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Info"),
/* subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.", */
  number: "434-760-3439",
  email_address: "whi@duke.edu"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
