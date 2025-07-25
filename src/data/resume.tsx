import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Josh Field",
  initials: "JF",
  url: "https://joshfield.github.io",
  location: "Boston, MA",
  locationLink: "https://www.google.com/maps/place/boston",
  description:
    "Robotics Software Engineer",
  summary:
    "I'm based in Boston, MA with experience working on drones 🛩️ robotic arms 🦾 and trains 🚄. Check out my [projects](#projects) below!",
  avatarUrl: "/profile.jpeg",
  skills: {
    "Programming Languages": [
      "Python",
      "C++",
      "Java",
      "TypeScript",
      "MATLAB"
    ],
    "Robotics & Tools": [
      "ROS 2",
      "PX4",
      "Gazebo",
      "Docker",
      "Git",
      "Github Actions",
    ],
    "AI & Machine Learning": [
      "TensorFlow",
      "OpenCV",
      "Scikit-learn",
    ],
    "Cloud & Database": [
      "AWS",
      "InfluxDB",
      "SQL"
    ]
  },
  navbar: [
    { href: "#hero", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "joshfield99@gmail.com",
    social: {
      resume: {
        name: "Resume",
        url: "/resume.pdf",
        icon: Icons.file,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/josh_github",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/josh_linkedin",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:joshfield99@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Humatics",
      href: "https://humatics.com",
      badges: [],
      location: "Boston, MA",
      title: "Software Engineer",
      logoUrl: "/humatics-logo.jpeg",
      start: "June 2023",
      end: "Present",
      description: "- Architected and deployed track monitoring system with edge ROS2 sensor drivers (LIDAR, IMU, GNSS), and cloud (InfluxDB, AWS CDK, Batch) infrastructure for processing high-frequency sensor data (>RAM)  \n- Engineered a full IoT device management platform with secure remote access (SSH tunneling), automated deployment updates, and integrated CI/CD (GitHub Actions, Docker)  \n- Reduced data infrastructure costs by 75% through optimized InfluxDB querying (S2 geofencing) and developed advanced data analysis dashboards (Grafana, MQTT) providing key fleet insights"
    },
    {
      company: "Amazon Robotics",
      badges: [],
      href: "https://amazon.com",
      location: "Boston, MA",
      title: "Software Development Engineer I",
      logoUrl: "/amazon.png",
      start: "January 2021",
      end: "January 2023",
      description: "**Software Development Engineer I | Aug '22 - Jan '23** \n - The main project I worked on was developing a metrics pipeline and its surrounding infrastructure which was deployed to 100s of production robotic workcells. \n - I gained experience with developing resilient code at scale, and mainly worked with AWS (IoT, Lambda, Cloudwatch, Kinesis, CDK).  \n - Through contributing to team code reviews and supporting customers with on-call responsibilities I gained development experience. \n - Visiting a production Fufillment Center allowed me to learn about the entire Amazon delivery network, and allowed me to see the robots I was working on in real life.  \n\n**Software Development Engineering Co-op | Jan '21 - Jun '21**  \n - Developed a package singulation detection solution, using Tensorflow to classify images of packages. \n - Fully integrated the project with AWS (Sagemaker, GreengrassV2, Lambda, Cloudwatch)."
    },
    {
      company: "Caltech",
      href: "https://caltech.edu",
      badges: [],
      location: "Pasadena, CA",
      title: "Software Engineer Intern",
      logoUrl: "/caltech-circle.png",
      start: "Summer 2018",
      end: "Summer 2020",
      description: "I was a part of the Seva Sanitation Project at the [Linde & Robinson Lab](https://lindecenter.caltech.edu/). The goal of this project is to develop a sustainable onsite wastewater treatment system.  \n\n**2018:** Developed a smart maintenance sensor network that monitors the treatment of wastewater using an Arduino & Raspberry Pi and 26 unique sensors. I also coded an Android app using Android Studio, SQLite and Amazon Web Services as a backend in order to assist local operators in system repairs.  \n\n**2019:** Created predictive maintenance regression and classification models to predict the remaining useful life, and most likely root cause of a given failure.  \n\n**2020 SURF Program:** Completed a beta version of the app by changing the architecture and finalizing features such as notification and error management. Developed unsupervised predictive maintenance anomaly detection through the use of clustering and deep learning techniques. [IEEE GHTC Paper](https://ieeexplore.ieee.org/abstract/document/9342906)"
    },
    {
      company: "Scientific Systems",
      href: "https://ssci.com",
      badges: [],
      location: "Boston, MA",
      title: "Robotics Software Co-op ",
      logoUrl: "/ssci-logo.jpeg",
      start: "January 2019",
      end: "April 2019",
      description: " - As a co-op at Scientific Systems Company Inc. I wrote collaborative autonomy software for Multi-UAV missions. \n - I worked on the [DARPA project CODE](https://www.darpa.mil/research/programs/collaborative-operations-in-denied-environment) (Collaborative Operations in Denied Environments) which was wrapping up its Phase 3 development. I developed and tested missions for collaborative jamming and RF localization."
    },
  ],
  education: [
    {
      school: "Northeastern University",
      href: "https://northeastern.edu",
      degree: "BS & MS of Computer Engineering",
      logoUrl: "/neu-letter.png",
      start: "2017",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Swarm Carrier",
      href: "https://dub.sh/yt_swarm_carrier",
      dates: "Jul 2021 - Dec 2021",
      active: true,
      description: "Northeastern University Capstone project where we successfully built and flew a large octocopter for the deployment and retrieval of smaller UAVs. Software controls were implemented with a modified version of PX4, RTPS, and ROS2. Missions are performed with a behavior tree library developed by our club in C++. The main mission involved dropping UAVs from our large UAV and then having them catch themselves mid-air using a custom Drop Mode we implemented. The UAVs then performed a search mission and reintegrated back into the large UAV using Computer Vision and precision landing on ArUco markers. We received 1st place in the capstone competition (out of 27 teams) and won the Gorlov Award for Innovation.",
      technologies: [
        "Python",
        "C++",
        "ROS 2",
        "OpenCV"
      ],
      links: [
        {
          type: "Youtube",
          href: "https://dub.sh/yt_swarm_carrier",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/Iso_view_Swarm_drone_attempted_landing.png",
    },
    {
      title: "NUAV Software",
      href: "https://www.aerospacenu.com/nuav",
      dates: "June 2019 - May 2022",
      active: true,
      description: "Northeasern Unmaned Aerial Vehicles (NUAV) is a club my friends and I started my sophmore year. It focused on developing software for our custome built UAVs. We worked in the areas of computer vision, simulation, behavior trees, and path planning. As the Software Lead, I would also work with younger students to teach them about robotics and software development.",
      technologies: [
        "Python",
        "C++",
        "ROS 2"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.aerospacenu.com/nuav",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Gitlab",
          href: "https://gitlab.com/aeronu/nuav",
          icon: <Icons.gitlab className="size-3" />,
        },
      ],
      image: "/octocopter.jpg",
    },
    {
      title: "DeepFlight",
      href: "https://github.com/blakermchale/deep_flight",
      dates: "September 2020 - December 2020",
      active: true,
      description: "Reinforcement learning project, where I Developed a double DQN to train a UAV to fly through an obstacle course given depth images. Used reinforcement learning environment with OpenAI Gym and Tensorflow. The simulation environment was built in AirSim.",
      technologies: [
        "Python",
        "Tensorflow",
        "AirSim"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/blakermchale/deep_flight",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/airsim_deepgif.gif",
    },
    {
      title: "AlphaPilot Challenge",
      href: "https://www.herox.com/alphapilot/teams",
      dates: "June 2019 - December 2019",
      active: true,
      description: "Autonomous drone racing competition. Developed an image classifier using the YOLOv3 architecture in order to locate gates. Implemented quadrotor path planning and control models in the FlightGoggles simulation envirnment.",
      technologies: [
        "Python",
        "ROS"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.herox.com/alphapilot/teams",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/predictions_final.png"
    },
    {
      title: "Retro-Eye",
      href: "https://devpost.com/software/retro-eye",
      dates: "October 2019",
      active: true,
      description: "Developed at the HackHarvard Hackathon. A game Tetris that is controlled with your eyes. Uses Google's Computer Vision API.",
      technologies: [
        "Python",
        "Flask"
      ],
      links: [
        {
          type: "Website",
          href: "https://devpost.com/software/retro-eye",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/tetris.jpg"
    },
    {
      title: "Planet Polluter",
      href: "https://github.com/christianmkuss/SpaceAppsHackathon",
      dates: "April 2019",
      active: true,
      description: "1st-Place NASA SpaceApps Hackathon Project. A game where the goal is to pollute the earth, developed in Unity.",
      technologies: [
        "C#",
        "Unity"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/christianmkuss/SpaceAppsHackathon",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/planetpolluter.png"
    },
    {
      title: "Simulink Robotic Arm",
      dates: "May 2018",
      active: true,
      description: "Bluetooth control of a robotic arm using a Wiimote and an FPGA. Simulink was used to generate PWM signals in order to control the arm servos.",
      technologies: [
        "C++",
        "Simulink"
      ],
      image: "/robotic-arm.jpg",
    },
    {
      title: "Piezoelectric Keyboard",
      dates: "December 2017",
      active: true,
      description: "Generate power by typing. Designed and prototyped a keyboard that measures the power generated from piezoelectronic sensors placed under key switches.",
      technologies: [
        "Arduino",
        "Solidworks"
      ],
      image: "/piezo-pic.jpg",
    }
  ]
} as const;
