import React from "react";

const CertificateSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          Our ISO 9001:2015 Certification
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          We are proud to announce that <strong>Om Radiant Social Welfare Society</strong> has
          achieved the prestigious <strong>ISO 9001:2015 Certification</strong> for Quality Management Systems.
          This certification reflects our commitment to providing high-quality education
          and professional courses that meet international standards.
        </p>
        <div className="flex justify-center">
          <img 
            src="/Certificate.jpg" 
            alt="ISO 9001:2015 Certificate" 
            className="rounded-2xl shadow-xl  h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
