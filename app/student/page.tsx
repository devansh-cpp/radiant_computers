'use client';

import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CertificateData {
  ID: string;
  Name: string;
  Phone: string;
  Course: string;
  Duration: string;
  Address: string;
  Certificate_Link: string;
}

export default function CertificateVerifier() {
  const [id, setId] = useState<string>('');
  const [data, setData] = useState<CertificateData | null>(null);

  const handleFetch = async () => {
    setData(null);

    toast.promise(
      axios.get<{ data: CertificateData[] }>(
        'https://script.google.com/macros/s/AKfycbzTnRPWeZlpEoZC3g39SQ_5THl3QE9t_73ggJTbK5pOH9-oVvq_8x02tJSal4wsnmEd/exec',
        {
          params: { id },
        }
      ),
      {
        pending: 'Verifying certificate...',
        success: {
          render({ data }) {
            const res = data as any;
            const result = res?.data?.data;
            if (result?.length > 0) {
              setData(result[0]);
              return 'Certificate found!';
            } else {
              throw new Error('No certificate found.');
            }
          },
        },
        error: {
          render({ data }) {
            const error = data as any
            return error?.message || 'Error fetching data';
          },
        },
      }
    );
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-6  bg-gradient-to-br from-[#593be7] to-white">
      <ToastContainer position="bottom-center" autoClose={3000} hideProgressBar />

      <div className="sm:max-w-xl  w-full  sm:mx-auto  bg-[rgba(255,255,255,0.5)] rounded-xl shadow-md p-6">
        <h1 className="text-xl font-bold mb-4">Certificate Verification</h1>
        <div className="flex  sm:flex-row flex-col gap-4 mb-4">
          <input
            type="text"
            placeholder="Enter Name"
            className="flex-1 p-2 border border-gray-300 rounded"
           
          />
          <input
            type="text"
            placeholder="Enter Aadhar Number"
            className="flex-1 p-2 border border-gray-300 rounded"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button
  className={`px-4 py-2 rounded text-white ${
    !id ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
  }`}
  onClick={handleFetch}
  disabled={!id}
>
  Verify
</button>
        </div>

        {data && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Student Info Card */}
            <div className="bg-[rgba(255,255,255,0.5)] p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">Student Info</h2>
              <p><strong>Name:</strong> {data.Name}</p>
              <p><strong>Phone:</strong> {data.Phone}</p>
              <p><strong>Course:</strong> {data.Course}</p>
              <p><strong>Duration:</strong> {data.Duration}</p>
              <p><strong>Address:</strong> {data.Address}</p>
              <p><strong>Aadhar No:</strong> {data.ID}</p>
            </div>

            {/* Certificate Download */}
            <div className="bg-[rgba(255,255,255,0.5)] border border-gray-300 p-4 rounded-lg shadow flex flex-col justify-center items-center">
              <h2 className="text-lg font-semibold mb-4">Certificate</h2>
              {data.Certificate_Link ? (
                <a
                  href={data.Certificate_Link}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Download Certificate
                </a>
              ) : (
                <p className="text-gray-500 italic">Certificate not available.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
