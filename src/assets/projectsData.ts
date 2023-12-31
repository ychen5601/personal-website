const projects = [
  {title: "Fitbook", 
    shortDesc: "Fitness social media mobile app using React Native and MongoDB in TypeScript.", 
    imageUrl: require("../assets/fitbook_logo.png"), 
    githubUrl: "https://github.com/ychen5601/fitbook", 
    longDesc: `An all-in-one fitness tracker and social media application that combines Instagram-like follower/following capabilities with robust fitness tracking, built on the MERN stack.
    
    My team and I defined the project and executed it in iterative sprints, adhering to Agile methodology and principles.
    
    As a fullstack developer on the project, I was able to create and maintain API endpoints for our MongoDB database, while creating an intuitive UI for fitness enthusiasts in React Native for iOS and Android applications.`
  },
  {title: "Portfolio Website", 
    shortDesc: "Personal website with React.js and Material UI in TypeScript.", 
    imageUrl: require("../assets/website-photo.png"), 
    githubUrl: "https://www.github.com/ychen5601/personal-website",
    otherUrl: "https://www.dsong.dev/", 
    longDesc: `The website you are on right now. 
    
    I am motivated to create and maintain this website not only to polish my skills in web development, React, and TypeScript, but to also compile all of my past projects and achievements in one place, for my peers and colleagues to view and explore.

    I'm currently working on an 'about me' page, which provides visitors with a more holistic picture of me as a person, via my hobbies and interests, past experience, and other related skillsets.

    Another goal of mine is to integrate MongoDB into my website, allowing visitors to comment below my projects and leave constructive feedback on anything related to my work, enabling me to become a more well-rounded developer.

    This project was heavily inspired stylistically by my friend and fellow developer Davis' portfolio website, which I will link below as well.`
  },
  {title: "Investobot", 
    shortDesc: "Real-time stock trading simulator in Python.", 
    imageUrl: require("../assets/investobot-logo.png"), 
    githubUrl: "https://github.com/ychen5601/investobot", 
    youtubeUrl: "https://www.youtube.com/watch?v=NP0oYD3Eom8",
    longDesc: `I delved into programming using APIs early on in my career by leveraging the Discord API to create a real-time stock simulator in the form of a Discord bot.

    I gathered real-time market information by utilizing the Yahoo Finance API, and parsing the information I received upon GET requests.

    I decided to use Firebase as a simple, robust NoSQL database to store user information, as well as their purchased stocks.
    
    I then created argument parsers in the Discord server chat for users to interact with the bot, enabling them to check the stocks they own, balance, and net worth in their own servers, promoting friendly competition by representing trading simulation as a 'game' that can be played with friends on their own Discord servers.`
  },
  {title: "LangChain JS", 
    shortDesc: "Contribution to open-source LLM management libraries in TypeScript.", 
    imageUrl: require("../assets/langchain_logo.png"), 
    githubUrl: "https://github.com/langchain-ai/langchainjs/pull/3211", 
    otherUrl:"https://js.langchain.com/docs/modules/memory/",
    longDesc: `With Large Language Models (LLMs) being all the craze recently, paired with a newfound motivation to seek and contribute to open-source projects, my team and I decided to explore the intricacies of AI, as well as its uses, by contributing to the LangChain repository.
    
    LangChain is an open-source library designed to streamline the development and deployment of LLM applications. It provides tools and frameworks to facilitate the integration of LLMs like GPT into software systems, allowing developers and users to harness the power of AI in their applications. 
    
    My team and I scoped, implemented, and tested the Conversation Token Memory module, which facilitates precise control over memory usage when communicating with the LLM, by defining maximum allocated memory for each interaction based on the number of allocated tokens.`
  },
  {title: "PintOS", 
    shortDesc: "Implementing heuristics and algorithms to improve a basic operating system's functionality.", 
    imageUrl: require("../assets/pintos-c.png"), 
    otherUrl:"https://thierrysans.me/CSCC69/projects/WWW/pintos_1.html",
    longDesc: `For our operating systems course, we were tasked to implement optimized OS-related algorithms to improve the functionality and performance of the operating system, PintOS.
    
    We implemented priority scheduling, priority donation, and the multi level feedback queue scheduler to optimize multithreading in our system. We also implemented a file system using file pointers, and paging and swapping by clock algorithm to optimize the memory usage of our system.

    Unfortunately, per the university's guidelines, I am unable to showcase my work on this project on Github. However, I have linked the documentation for the project below.
    
    It was tedious work, but watching the OS that we 'created' flourish was extremely rewarding!`
  },
  {title: "Linux System Monitor", 
    shortDesc: "Linux system health monitor written in C, executable on the command line.", 
    imageUrl: require("../assets/linux-logo.png"), 
    githubUrl: "https://github.com/ychen5601/linux-system-monitor", 
    longDesc: `An executable C file intended for Linux systems for my software systems course in 2nd year, which helped me gain experience working with Linux systems and its documentation.

    Upon running this program, a set of information such as the current users logged into the system, CPU usage, memory usage, and basic system information will be output a set number of times between time intervals, either defined by the user through command line arguments, or default if no arguments were specified.`
  },
  {title: "Linux FileSys Monitor", 
    shortDesc: "Linux file system monitor written in C, executable on the command line.", 
    imageUrl: require("../assets/filesys-logo.png"), 
    githubUrl: "https://github.com/ychen5601/linux-system-monitor", 
    longDesc: `An executable C file intended for Linux systems for my software systems course in 2nd year, which helped me gain experience working with Linux systems and its documentation.

    Upon running this program, a set of information related to the file system in the machine, granted the executing user has permissions, will be displayed in the Linux command line.`
  },
  {title: "Assembly Platform Game", 
    shortDesc: "Platform game written in MIPS assembly code.", 
    imageUrl: require("../assets/game-logo.png"), 
    githubUrl: "https://github.com/ychen5601/mips-platform-game",
    youtubeUrl: "https://www.youtube.com/watch?v=wf6ElfqlKdU",
    longDesc: `By leveraging low-level memory and register value manipulation to achieve desired effects such as graphics, gravity and collision, I was able to implement a clone of the platform game 'Transformice', which I played when I was a child (for nostalgia's sake).
    
    The objective of the game is to bring the cheese on each map back to the door. There is a comprehensive demonstration of my game provided in the link to the Youtube video below.`
  },
]

export default projects;