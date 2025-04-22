 

import React from "react";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Radiant Computer Institute</title>
        <meta name="description" content="Privacy Policy for Radiant Computer Institute" />
      </Head>
      <main className="max-w-4xl mx-auto mt-12 px-4 py-10">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">Effective Date: April 22, 2025</p>

        <p className="mb-4">
          Radiant Computer Institute (“we,” “our,” or “us”) is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, disclose, and protect your information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Full Name</li>
          <li>Contact Information (Phone Number, Email Address, Address)</li>
          <li>Educational Background</li>
          <li>Aadhar Number (for certification and verification purposes)</li>
          <li>Course Preferences and Enrollments</li>
          <li>Payment Information</li>
          <li>Feedback and Testimonials</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>To manage course enrollments and administration</li>
          <li>To generate and verify certificates</li>
          <li>To provide support and communicate with you</li>
          <li>To improve our training programs and services</li>
          <li>To comply with legal and regulatory requirements</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Information Sharing</h2>
        <p className="mb-4">
          We do not sell or rent your personal data. We may share your information with trusted
          partners and service providers only for the purposes listed above and under confidentiality
          agreements.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Data Security</h2>
        <p className="mb-4">
          We implement industry-standard security measures to protect your data. However, no method of
          transmission over the Internet or method of electronic storage is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Your Rights</h2>
        <p className="mb-4">
          You may request to view, update, or delete your personal data by contacting us. We will
          respond to your request in accordance with applicable laws.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Updates will be posted on this page
          with the effective date.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">7. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <p className="mb-2">
          <strong>Radiant Computer Institute</strong><br />
          Email: - radiantcompyterinstititue3@gmail.com<br />
          Phone: +91 6394807077
        </p>
      </main>
    </>
  );
};

export default PrivacyPolicy;
