"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PCICompliance() {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) setUserEmail(email);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <nav className="w-full flex justify-between items-center py-5 px-5">
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/MainLogo.png" alt="Logo" width={55} height={55} />
            <span className="text-2xl font-bold">͓̽C͓̽y͓̽b͓̽e͓̽r͓̽ ͓̽R͓̽a͓̽t͓̽</span>
          </Link>
          <Link href="/lessons" className="text-base hover:text-blue-400 mt-3 block">Lessons</Link>
          <Link href="/owasp" className="text-base hover:text-blue-400 mt-3 block">OWASP Top 10</Link>
          <Link href="/pci" className="text-base hover:text-blue-400 mt-3 block">PCI Compliance</Link>
        </div>
        <div className="flex items-center space-x-6">
          {userEmail ? (
            <div className="text-sm text-blue-400 flex items-center gap-4">
              <span className="hidden sm:inline">{userEmail}</span>
              <button onClick={handleLogout} className="text-red-400 hover:text-red-500 underline">
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-lg bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">Login</Link>
              <Link href="/signup" className="text-lg text-blue-600 hover:text-blue-700">Sign Up</Link>
            </div>
          )}
        </div>
      </nav>

      <main className="flex-grow px-6 py-10 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">PCI Compliance Guide</h1>
        <p className="mb-6 text-gray-300">
          PCI DSS (Payment Card Industry Data Security Standard) is a set of security standards designed to ensure that all companies that accept, process, store or transmit credit card information maintain a secure environment. This guide explains the fundamentals of PCI Compliance and what your organization needs to do to comply.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-300 mb-4">1. Who Needs PCI Compliance?</h2>
        <p className="mb-6">
          Any organization that handles cardholder data must be PCI compliant. This includes merchants, payment processors, financial institutions, and service providers. Even if your company processes just one credit card transaction, PCI DSS applies.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-300 mb-4">2. The 12 PCI DSS Requirements</h2>
        <ul className="list-decimal list-inside mb-6 space-y-2">
          <li>Install and maintain a firewall to protect cardholder data</li>
          <li>Do not use vendor-supplied defaults for system passwords</li>
          <li>Protect stored cardholder data</li>
          <li>Encrypt transmission of cardholder data across open, public networks</li>
          <li>Use and regularly update anti-virus software</li>
          <li>Develop and maintain secure systems and applications</li>
          <li>Restrict access to cardholder data by business need-to-know</li>
          <li>Assign a unique ID to each person with computer access</li>
          <li>Restrict physical access to cardholder data</li>
          <li>Track and monitor all access to network resources and cardholder data</li>
          <li>Regularly test security systems and processes</li>
          <li>Maintain a policy that addresses information security for all personnel</li>
        </ul>

        <h2 className="text-2xl font-semibold text-yellow-300 mb-4">3. Levels of PCI Compliance</h2>
        <p className="mb-6">
          There are 4 merchant levels based on the number of credit card transactions processed annually. Each level has different requirements for validation:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li><strong>Level 1:</strong> Over 6 million transactions per year</li>
          <li><strong>Level 2:</strong> 1 to 6 million transactions</li>
          <li><strong>Level 3:</strong> 20,000 to 1 million e-commerce transactions</li>
          <li><strong>Level 4:</strong> Fewer than 20,000 e-commerce transactions or up to 1 million other transactions</li>
        </ul>

        <h2 className="text-2xl font-semibold text-yellow-300 mb-4">4. How to Become PCI Compliant</h2>
        <p className="mb-6">
          Steps to achieve PCI compliance include:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Determine your compliance level</li>
          <li>Complete the Self-Assessment Questionnaire (SAQ)</li>
          <li>Conduct a vulnerability scan if required</li>
          <li>Remediate any security vulnerabilities</li>
          <li>Submit the Attestation of Compliance (AOC)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-yellow-300 mb-4">5. Maintaining Compliance</h2>
        <p className="mb-6">
          Compliance isn’t a one-time event. Your organization must maintain compliance year-round with continuous monitoring, employee training, and periodic assessments.
        </p>
      </main>

      <footer className="bg-gray-800 w-full">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
            <div className="pb-6">
              <a href="/lessons" className="text-sm leading-6 text-gray-400 hover:text-white">Lessons</a>
            </div>
            <div className="pb-6">
              <a href="/glossary" className="text-sm leading-6 text-gray-400 hover:text-white">Glossary</a>
            </div>
            <div className="pb-6">
              <a href="/terms" className="text-sm leading-6 text-gray-400 hover:text-white">Terms and Conditions</a>
            </div>
            <div className="pb-6">
              <a href="/privacy" className="text-sm leading-6 text-gray-400 hover:text-white">Privacy Policy</a>
            </div>
          </nav>
          <p className="mt-10 text-center text-xs leading-5 text-gray-500">
            © 2025 Cyberrat Inc. All rights reserved. Questions? Email us at <strong>Cyberratofficial@gmail.com</strong>
          </p>
        </div>
      </footer>
    </div>
  );
}
