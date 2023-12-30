const projects = [
    {title: "Portfolio Website", 
      shortDesc: "Personal website with React.js and Material UI in TypeScript.", 
      imageUrl: require("../assets/website-photo.png"), 
      githubUrl: "https://www.github.com/ychen5601/personal-website", 
      longDesc: `The website you are on right now. 
      
      I am motivated to create and maintain this website not only to polish my skills in web development, React, and TypeScript, but to also compile all of my past projects and achievements in one place, for my peers and colleagues to view and explore.

      One of my future goals for this website is to enable compilation of modules in various languages, to be able to demonstrate all of my past projects in real time. However, I haven't gotten to that yet.

      Another goal of mine is MongoDB integration, allowing visitors to comment below my projects and leave constructive feedback on anything related to my work, enabling me to become a better developer. This is currently a work in progress.

      This project was heavily inspired stylistically by my friend Davis' portfolio website, which I will link below as well.`
    },
    {title: "LangChain JS", 
      shortDesc: "Contribution to open-source LLM management libraries in TypeScript.", 
      imageUrl: require("../assets/langchain_logo.png"), 
      githubUrl: "https://github.com/langchain-ai/langchainjs/pull/3211", 
      longDesc: `With Large Language Models (LLMs) being all the craze currently, paired with a newfound motivation to seek and contribute to open-source projects, my team and I decided to explore the intricacies of AI, as well as its uses, by contributing to the LangChain repository.
      
      LangChain is an open-source library designed to streamline the development and deployment of LLM applications. It provides tools and frameworks to facilitate the integration of LLMs like GPT into software systems, allowing developers and users to harness the power of AI in their applications. 
      
      My team and I scoped, implemented, and tested the Conversation Token Memory module, which facilitates precise control over memory usage when communicating with the LLM, by defining memory usage based on the number of allocated tokens.`
    },
    {title: "Fitbook", 
      shortDesc: "Fitness social media mobile app using React Native and MongoDB in TypeScript.", 
      imageUrl: require("../assets/fitbook_logo.png"), 
      githubUrl: "https://github.com/ychen5601/fitbook", 
      longDesc: "placeholder"}
  ]
  
export default projects;