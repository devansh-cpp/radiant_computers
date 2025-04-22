import React, { ReactNode } from 'react';
import {
  FaLaptopCode,
  FaCertificate,
  FaUserTie,
  FaChevronDown,
} from 'react-icons/fa';
import About from '../components/About';

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

type FAQItemProps = {
  question: string;
  answer: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
    <div className="text-indigo-600 mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => (
  <div className="mb-6 border-b pb-4">
    <details className="group">
      <summary className="flex items-center justify-between cursor-pointer font-medium text-lg text-gray-800">
        {question}
        <FaChevronDown className="group-open:rotate-180 transition-transform duration-300" />
      </summary>
      <p className="text-gray-600 mt-2">{answer}</p>
    </details>
  </div>
);

const AboutPage: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-[#593be7] mt-16    text-white py-32 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Radiant Computer Institute
          </h1>
          <p className="text-lg md:text-xl">
          Radiant Computer Institute, established in 2012 by Mr. Mohit Gupta, is a trusted name in computer education located in Rudauli, Ayodhya, Uttar Pradesh. Since our inception, we have been committed to providing high-quality and affordable computer training to students, professionals, and individuals seeking to enhance their digital skills.


          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-600">
              Our Mission
            </h2>
            <p>
            With over a decade of experience, Radiant has helped hundreds of learners build strong foundations in technology and prepare for successful careers in the IT field.

            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-600">
              Our Vision
            </h2>
            <p>
            At Radiant, we focus on practical learning, personalized attention, and career-oriented training. Our mission is to bridge the digital divide by empowering our students with the knowledge and skills needed in today’s competitive world.

            </p>
          </div>
        </div>
      </section>

      <About/>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Why Choose Radiant?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FaLaptopCode size={40} />}
              title="Practical Learning"
              description="Hands-on training with real projects."
            />
            <FeatureCard
              icon={<FaCertificate size={40} />}
              title="Certifications"
              description="Industry-recognized certificates for all courses."
            />
            <FeatureCard
              icon={<FaUserTie size={40} />}
              title="Expert Mentors"
              description="Experienced faculty with corporate background."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Frequently Asked Questions
          </h2>
          <FAQItem
            question="What courses do you offer?"
            answer="We offer a range of courses from basic computer skills to advanced programming, web development, and software training."
          />
          <FAQItem
            question="Do you provide certificates?"
            answer="Yes, all our courses come with industry-recognized certification."
          />
          <FAQItem
            question="Is there any placement support?"
            answer="Yes, we provide placement assistance for eligible students after course completion."
          />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
