import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { DiPython } from "react-icons/di";
import { FaGithub, FaBrain, FaRobot, FaCode, FaDna, FaAws, FaEye } from "react-icons/fa"; // Font Awesome ikonları
import {
  SiPython,
  SiPytorch,
  SiKeras,
  SiTensorflow,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiMysql,
  SiDotnet,
  SiJavascript,
  SiTypescript,
  SiReact
} from "react-icons/si";
import { MdGTranslate, MdImage } from "react-icons/md";
import { TbSql } from "react-icons/tb";
import { useState, useEffect } from "react";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Kemal Bayik - Portfolio";
  }, [])
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="font-poppins bg-gray-100 text-gray-900">
      {/* İlk Sayfa (Hero Section) */}
      <section id="home" className="h-screen flex flex-col justify-between items-center px-4 md:px-8">
        <div className="flex flex-1 flex-col md:flex-row w-full justify-center items-center gap-16 max-w-7xl mx-auto">
          {/* Sol Taraf: Merhaba Mesajı */}
          <div className="flex flex-col space-y-6 text-center md:text-left w-[320px] sm:w-[480px] md:w-[600px] lg:w-[700px] mx-auto">
            <h1 className="pt-8 md:pt-0 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Hello, I’m Kemal!
            </h1>
            <p className="text-sm sm:text-xl md:text-xl text-gray-700 leading-relaxed overflow-hidden">
                I’m a Machine Learning Engineer specializing in creating intelligent models and scalable AI solutions. 
                Passionate about solving real-world problems through advanced machine learning techniques.
            </p>
            {/* CV ve İletişim Alanı */}
<div className="mt-8 bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
  {/* Sol Taraf: Mesaj ve CV İndirme */}
  <div className="flex-1 flex flex-col items-center md:items-start space-y-4">
    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 text-center md:text-left">
      Get In Touch
    </h3>
    <p className="text-gray-700 text-sm md:text-base text-center md:text-left">
    Whether you have a question, want to collaborate on a project, or just want to say hi, feel free to drop me a message. I’m always open to exciting opportunities!
    </p>

    {/* CV İndirme Butonu */}
    {/* <a
      href="/files/kemal_bayik_cv.pdf"
      download="Kemal_Bayik_CV"
      className="flex items-center bg-blue-600 text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-blue-900 hover:text-white transition duration-300"
    >
      <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
      Download CV
    </a> */}
  </div>

  {/* Sağ Taraf: İletişim ve Sosyal Medya Bağlantıları */}
  <div className="flex flex-col items-center md:items-start space-y-4">
    {/* E-posta Butonu */}
    <a
      href="mailto:kemalbayikuk@gmail.com"
      className="flex items-center justify-center bg-blue-600 text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-blue-900 hover:text-white transition duration-300 w-full text-center"
    >
      📧 Email Me
    </a>

    {/* LinkedIn Butonu */}
    <a
      href="https://www.linkedin.com/in/kemal-bayik/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center bg-blue-500 text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-blue-700 hover:text-white transition duration-300 w-full text-center"
    >
      💼 Connect on LinkedIn
    </a>

    {/* GitHub Butonu */}
    <a
      href="https://github.com/kemalbayikk"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center bg-gray-800 text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-gray-900 hover:text-white transition duration-300 w-60 text-center"
    >
      🐙 GitHub
    </a>

    {/* Sosyal Medya İkonları */}
    {/* <div className="flex space-x-4">
      <a
        href="https://github.com/kemalbayikk"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-gray-900 transition-transform duration-300 hover:scale-110"
      >
        <FaGithub className="w-6 h-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/kemal-bayik/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-600 transition-transform duration-300 hover:scale-110"
      >
        <FaLinkedin className="w-6 h-6" />
      </a>
    </div> */}
  </div>
</div>
          </div>

          {/* Sağ Taraf: Brain Animation */}
          <div className="hidden sm:block">
            <img
              src="/images/person-working.png"
              alt="Person Working"
              className="w-[250px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full h-16 bg-transparent md:bg-gray-100 z-50 px-6 sm:px-8 md:shadow-md">
  <div className="flex justify-center items-center h-full relative">
    {/* Hamburger Menu */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="absolute left-4 md:hidden text-gray-700 focus:outline-none"
    >
      {menuOpen ? "✕" : "☰"}
    </button>

    {/* Navbar Links */}
    <ul
      className={`${
        menuOpen ? "block" : "hidden"
      } justify-start absolute top-12 left-0 w-full bg-gray-100 shadow-md md:relative md:top-0 md:flex md:space-x-8 md:bg-transparent shadow-none md:justify-center`}
    >
      <li className="flex items-center justify-center md:border-none py-2 md:py-0">
        <a
          href="#home"
          className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition"
        >
          <HomeIcon className="h-5 w-5" />
          <span>Home</span>
        </a>
      </li>
      <li className="flex items-center justify-center md:border-none py-2 md:py-0">
        <a
          href="#about"
          className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition"
        >
          <UserIcon className="h-5 w-5" />
          <span>About Me</span>
        </a>
      </li>
      <li className="flex items-center justify-center md:border-none py-2 md:py-0">
        <a
          href="#skills"
          className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition"
        >
          <DiPython className="h-5 w-5" />
          <span>Skills</span>
        </a>
      </li>
      <li className="flex items-center justify-center md:border-none py-2 md:py-0">
        <a
          href="#experience"
          className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition"
        >
          <BriefcaseIcon className="h-5 w-5" />
          <span>Experience</span>
        </a>
      </li>
      <li className="flex items-center justify-center md:border-none py-2 md:py-0">
        <a
          href="#projects"
          className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition"
        >
          <CodeBracketIcon className="h-5 w-5" />
          <span>Projects</span>
        </a>
      </li>
    </ul>
  </div>
</nav>
      </section>

     {/* About Me Section */}
<section
  id="about"
  className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gray-300 px-4 sm:px-6 md:px-12 space-y-4 sm:space-y-6 md:space-y-0 md:space-x-12 bg-opacity-30"
>
  {/* Sol Taraf: Fotoğraf */}
  <div className="flex-1 flex justify-center items-center">
    <img
      src="/images/kemal-image.jpg"
      alt="Kemal Bayik"
      className="w-[200px] sm:w-[250px] md:w-[350px] lg:w-[500px] h-auto object-contain rounded-lg shadow-[0px_10px_30px_rgba(0,0,0,0.3)]"
    />
  </div>

  {/* Sağ Taraf: Beni Anlatan Paragraf */}
  <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4 px-4 sm:px-6">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">About Me</h2>
    <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed w-full sm:w-4/5 md:w-3/4">
      Welcome to my portfolio! I’m Kemal Bayık, a Machine Learning Engineer
      with a strong passion for solving complex problems using artificial
      intelligence. I hold a Master’s degree in Artificial Intelligence and
      Adaptive Systems from the University of Sussex, where I graduated with
      distinction. My MSc thesis, Self-Supervised Machine Learning for
      Predicting Cancer Dependencies, introduced two innovative models—VAE-DeepDep
      and MAE-DeepDep—that significantly improved predictions of cancer gene dependencies,
      uncovering valuable insights into therapeutic targets.
    </p>
    <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed w-full sm:w-4/5 md:w-3/4">
      Throughout my academic and professional journey, I have developed expertise
      in machine learning, computer vision, and full-stack development. My projects
      have ranged from building CNN models for microscopy image analysis to creating
      optimized solutions for multi-objective problems and portfolio management.
      Additionally, my experience with tools like Flutter, React, and .NET has equipped
      me with a versatile skill set that spans both AI research and software development.
    </p>
    <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed w-full sm:w-4/5 md:w-3/4">
      I am driven by a desire to bridge the gap between cutting-edge technology
      and impactful real-world applications. Whether it is exploring innovative
      solutions in AI or contributing to interdisciplinary collaborations, my
      goal is to make meaningful contributions to science and technology.
    </p>
  </div>
</section>

{/* Skills Section */}
<section
  id="skills"
  className="h-auto min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 py-16"
>
  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Skills</h2>

  {/* Skills Kartları */}
<div className="grid grid-cols-4 gap-4 grid-cols-3 md:grid-cols-3 lg:grid-cols-5 max-w-6xl">
  {[
    { Icon: SiPython, title: "Python" },
    { Icon: SiPytorch, title: "PyTorch" },
    { Icon: SiKeras, title: "Keras" },
    { Icon: SiTensorflow, title: "TensorFlow" },
    { Icon: FaBrain, title: "Machine Learning" },
    { Icon: FaRobot, title: "Deep Learning" },
    { Icon: FaEye, title: "Computer Vision" },
    { Icon: MdImage, title: "Image Processing"},
    { Icon: MdGTranslate, title: "NLP" },
    { Icon: FaDna, title: "Genetic Algorithms" },
    { Icon: FaCode, title: "OOP" },
    { Icon: FaAws, title: "AWS" },
    { Icon: TbSql, title: "SQL" },
    { Icon: SiDotnet, title: ".Net" },
    { Icon: SiGit, title: "Git" },
    { Icon: SiFirebase, title: "Firebase" },
    { Icon: SiFlutter, title: "Flutter" },
    { Icon: SiJavascript, title: "Javascript" },
    { Icon: SiTypescript, title: "Typescript" },
    { Icon: SiReact, title: "React" },
  ].map(({ Icon, title }, index) => (
    <div
      key={index}
      className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-2 sm:p-4 lg:p-6 transition-all duration-300 transform hover:scale-105 lg:hover:scale-110"
    >
      <div className="bg-gray-200 rounded-full p-2 sm:p-3 lg:p-8 mb-1 sm:mb-2 lg:mb-3 transition-colors duration-300 hover:bg-gray-300">
        <Icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-gray-700" />
      </div>
      <h4 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-800 text-center">
        {title}
      </h4>
    </div>
  ))}
</div>

</section>





{/* Experience Section */}
<section
  id="experience"
  className="h-auto min-h-screen flex flex-col justify-center items-center bg-gray-300 px-4 py-16"
>
  <h2 className="text-2xl lg:text-4xl font-bold mb-8 text-center text-gray-800">
    Experience
  </h2>

  {/* Horizontal Scroll Container */}
  <div className="w-full overflow-x-auto">
    <div className="flex space-x-6 w-max px-8 py-8">
      {[
        {
          role: "Research Assistant",
          company: "Hochegger Lab, University of Sussex",
          image: "/images/us_logo.png",
          period: "October 2024 - Present",
          description:
          "Focused on developing Convolutional Neural Network (CNN) models for microscopy image analysis, particularly for classifying cell division stages. Collaborated with interdisciplinary teams to integrate AI-driven solutions into biological research workflows, enhancing research efficiency and accuracy.",
        },
        {
          role: "Student Research Assistant",
          company: "University of Sussex",
          image: "/images/us_logo.png",
          period: "January 2024 - August 2024",
          description:
          "Contributed to an EPSRC-funded research project investigating desert ant vision for navigation tasks. Designed and optimized CNN models, improved preprocessing pipelines, and achieved significant performance gains in image analysis tasks.",
        },
        {
          role: "Full Stack Developer",
          company: "SPP42 International",
          image: "/images/spp42_logo.png",
          period: "November 2022 - June 2023",
          description:
          "Developed a Natural Language Processing-based document retrieval system and integrated it into a scalable web application. Led the development of a mobile application using Flutter and built backend APIs using Python (Sanic framework) and .NET, delivering efficient and user-friendly solutions.",
        },
        {
          role: "Full Stack Software Developer Intern",
          company: "2C Information Technologies",
          image: "/images/2c_logo.png",
          period: "June 2022 - October 2022",
          description:
          "Designed and developed smart transportation and smart parking system applications using Flutter, React, and Firebase. Created a cryptocurrency and NFT wallet application, ensuring security and functionality for client needs.",
        },
        {
          role: "Full Stack Software Developer Intern",
          company: "Gekosis",
          image: "/images/gekosis_logo.jpeg",
          period: "January 2021 - May 2021",
          description:
            "Developed a secure file storage mobile application with encryption features to protect sensitive data and user privacy. Successfully integrated Flutter and Firebase for cross-platform functionality.",
        },
        {
          role: "Front End Developer Intern",
          company: "BiSoft Information Technologies",
          image: "/images/bisoft_logo.avif",
          period: "May 2020 - August 2020",
          description:
          "Contributed to web development projects using Angular and React, integrating backend services with NodeJS. Delivered responsive and interactive user interfaces for web applications, improving user experience and performance.",
        },
      ].map((exp, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg p-2 md:p-8 flex flex-col items-center justify-start space-y-4 hover:scale-105 hover:shadow-2xl transition-transform duration-300 
                     w-64 md:w-[30rem] lg:w-[35rem] 
                     h-96 md:h-[32rem] lg:h-[36rem]"
        >
          {/* Image Placeholder */}
          <div className="w-20 h-20 md:w-32 md:h-32 bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
            <img
              src={exp.image}
              alt="Company Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Role & Company */}
          <h3 className="text-sm md:text-2xl font-bold text-gray-800 text-center">
            {exp.role}
          </h3>
          <p className="text-xs md:text-lg text-gray-600 text-center">
            {exp.company}
          </p>

          {/* Period */}
          <p className="text-xs md:text-sm font-medium text-gray-500">
            {exp.period}
          </p>

          {/* Description */}
          <p className="text-xs md:text-sm lg:text-base text-gray-700 text-center px-2 leading-relaxed">
            {exp.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Projects Section */}
<section
  id="projects"
  className="h-auto min-h-screen flex flex-col justify-center items-center bg-gray-200 px-6 py-16"
>
  <h2 className="text-2xl lg:text-4xl font-bold mb-12 text-center text-gray-800">
    Projects
  </h2>

  {/* Horizontal Scroll Container */}
  <div className="w-full overflow-x-auto pb-6">
    <div className="flex space-x-6 w-max px-4">
      {[
        {
          title: "Self-Supervised Learning for Cancer Dependencies",
          description:
            "In my master’s thesis, I developed two novel deep learning models, VAE-DeepDep and MAE-DeepDep, to improve the performance of the existing DeepDEP model in predicting gene dependencies in cancer cells. VAE-DeepDep, utilizing variational autoencoders, demonstrated the highest prediction accuracy, while MAE-DeepDep, based on masked autoencoders, also outperformed the original model. Extensive datasets, including TCGA, DepMap, and MSigDB, were used for training and validation, ensuring robust evaluation of the models. Key parameters such as the beta-value in VAE-DeepDep and the mask ratio in MAE-DeepDep were optimized, with minimal performance differences observed across variations. Input dropout analysis revealed that fingerprint data contributed the most to model performance, emphasizing its importance in cancer dependency prediction. Synthetic lethality analyses of four genes provided insights into potential therapeutic targets, further advancing the applicability of the models in cancer research.",
          image: "/images/project_1.png",
          technologies: [SiPython, SiPytorch, SiTensorflow],
          color: "bg-blue-100 text-blue-600",
          github: "https://github.com/kemalbayikk/Self-Supervised-Machine-Learning-For-Predicting-Cancer-Dependencies-Production"
        },
        {
          title: "Comparative Analysis of DeBERTaV3, LSTM with BERT Word Embeddings, and SVM in Propaganda Detection",
          description:
            `In this study, three different language models were run in two different propaganda detection tasks and the results were compared. 
              The models used are DeBERTaV3, LSTM with BERT Word Embeddings (LBWE) and SVM. By selecting these models, a transformer-based model, 
              a model whose word embedding is provided by a transformer-based model but uses LSTM in classifica
              tion, and a traditional machine learning model that works with word2vec word embeddings were compared. The first task to which
              these models are applied is to classify whether the sentence contains propaganda or not. The second task is to classify which type of
              propaganda the sentences containing propaganda contain. In the results obtained, while DeBERTaV3 showed the best performance
              in the first task, the LBWE model showed the best performance in the second task. In both tasks, SVM achieved the lowest F1 and
              accuracy scores.`,
          image: "/images/project_2.png",
          technologies: [SiPytorch, SiKeras, FaBrain],
          color: "bg-yellow-100 text-yellow-600",
          github: "https://github.com/kemalbayikk/Propaganda-Detection/tree/master"
        },
        {
          title: "Comparative Analysis of GDE3 and NSGA-II Algorithms on Multi-Objective Capacitated Facility Location Problem",
          description:
            "In this project, the GDE3 and NSGA-II algorithms were applied and compared on the Multi-Objective Capacitated Facility Location Problem (MOCFLP). The study aimed to minimize logistics costs and CO2 emissions, revealing that while the GDE3 algorithm performed faster, the NSGA-II algorithm generally achieved more diverse and successful results. The project is significant as it marks the first application of GDE3 to MOCFLP and provides detailed insights into the performance of both algorithms.",
          image: "/images/project_3.png",
          technologies: [FaBrain, FaRobot, SiMysql],
          color: "bg-green-100 text-green-600",
          github: "https://github.com/kemalbayikk/Multi-Objective-Capacitated-Facility-Problem-GDE3-NSGA-II"
        },
        {
          title: "Stock Portfolio Optimization Using Genetic Algorithm",
          description:
            "In this project, stock portfolio optimization was performed using a Genetic Algorithm (GA) on 15 selected S&P 500 stocks to maximize the Sharpe ratio. The portfolio, tested with 2023 stock prices, achieved a return approximately 2.55 times higher than the S&P 500 index, demonstrating successful results. Additionally, the effects of crossover rate, mutation rate, and population size on convergence time were analyzed, revealing that reducing the mutation rate significantly increases the time to reach the optimal solution.",
          image: "/images/project_4.png",
          technologies: [FaCode, FaAws, SiGit],
          color: "bg-purple-100 text-purple-600",
          github: "https://github.com/kemalbayikk/Stock-Portfolio-Optimization"
        },
        {
          title: "Comparative Analysis of Connection Patterns in High-Unit Homeostat",
          description:
            "In this project, six different connection patterns were tested to determine the most efficient design for high-unit-number homeostats, focusing on adaptation time, complexity, and robustness. The analysis showed that sparse connectivity, importance-based connectivity, and the Watts-Strogatz model performed similarly with lower complexity than the fully connected pattern, which was the most complex. Sparse connectivity was the most robust for 4-7 and 9 units, importance-based connectivity excelled at 8 units, and the Watts-Strogatz model was the most robust at 10 units, while importance-based connectivity outperformed others in adaptation time for high unit numbers.",
          image: "/images/project_5.png",
          technologies: [FaRobot, SiTensorflow, SiMysql],
          color: "bg-red-100 text-red-600",
          github: "https://github.com/kemalbayikk/Comparative-Analysis-of-Connection-Patterns-in-High-Unit-Homeostat"
        }
      ].map((project, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-start bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl 
                     w-[20rem] lg:w-[56rem] lg:h-[42rem] h-auto p-4 lg:p-8"
        >
          {/* Project Image */}
          <div className="w-full h-16 lg:h-64 bg-gray-200 hidden md:block">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:p-6 space-y-4 flex flex-col items-center">
            {/* Title with GitHub Icon */}
            <div className="flex items-center space-x-3">
              <h3 className="text-sm lg:text-xl font-bold text-gray-800 text-center">
                {project.title}
              </h3>
              {/* <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a> */}
            </div>

            {/* Description */}
            <p className="text-xs lg:text-sm text-gray-700 text-center leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex space-x-3">
            <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              
              {/* {project.technologies.map((TechIcon, i) => (
                <div
                  key={i}
                  className="p-2 bg-gray-100 rounded-full flex items-center justify-center shadow-sm"
                >
                  <TechIcon className="w-6 h-6 text-gray-700" />
                </div>
              ))} */}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




    </div>
  );
};

export default Home;
