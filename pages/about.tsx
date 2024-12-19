import Layout from '../components/Layout';

const About: React.FC = () => {
  return (
    <Layout>
      <section className="p-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Resim Alanı */}
          <div>
            <img
              src="/images/profile.jpg"
              alt="Kemal Bayık"
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* Metin Alanı */}
          <div>
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-lg leading-relaxed mb-6">
              I'm Kemal, an AI researcher and full-stack developer with a passion
              for creating innovative solutions in machine learning and web development.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Skills:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Programming: Python, TypeScript, React</li>
              <li>Machine Learning: TensorFlow, PyTorch</li>
              <li>Full-Stack Development: Next.js, Flutter</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
