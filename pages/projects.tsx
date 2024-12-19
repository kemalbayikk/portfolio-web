import Layout from '../components/Layout';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'AI-Based Cancer Research',
      description:
        'Developed CNN models for classifying cell division stages in microscopy images.',
      link: 'https://github.com/kemalbayikk/AI-Cancer-Research',
      image: '/images/project1.jpg',
    },
    {
      title: 'Self-Supervised Learning Models',
      description:
        'Created novel models (VAE-DeepDep, MAE-DeepDep) for gene dependency prediction.',
      link: 'https://github.com/kemalbayikk/Self-Supervised-Machine-Learning-For-Predicting-Cancer-Dependencies-Production',
      image: '/images/project2.jpg',
    },
  ];

  return (
    <Layout>
      <section className="p-8 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg overflow-hidden bg-white"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-medium hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
