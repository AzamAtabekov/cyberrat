// Privacy Policy for Cyberrat (Dubai Edition)

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Privacy() {
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
      </nav>

      <main className="flex-grow w-full px-6 py-10 text-gray-100 max-w-5xl mx-auto space-y-6">
        <h1 className="text-4xl font-extrabold mb-6">Privacy Policy</h1>

        <p>
          Your privacy is very important to us. This Privacy Policy outlines how Cyberrat collects, uses, and safeguards your information in accordance with applicable laws of the United Arab Emirates (UAE), including Dubai regulations. This policy applies to our website ("Site") and services ("Services").
        </p>

        <h2 className="text-2xl font-semibold mt-10">What Information We Collect</h2>
        <p>
          We may collect your email address, login credentials, IP address, and usage activity on the Site. Cookies may be used to enhance your experience and track usage anonymously.
        </p>

        <h2 className="text-2xl font-semibold mt-10">How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>To authenticate users during training sessions</li>
          <li>To personalize your learning experience</li>
          <li>To analyze performance and usage metrics</li>
          <li>To improve our platform and services</li>
          <li>To comply with applicable UAE laws</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10">Cookies and Tracking</h2>
        <p>
          We use cookies to identify returning users and improve service delivery. You may adjust your browser settings to disable cookies, although this may impact site functionality.
        </p>

        <h2 className="text-2xl font-semibold mt-10">Third-Party Disclosure</h2>
        <p>
          We do not sell or rent your personal information. However, we may share data with trusted third-party service providers (e.g., hosting and email delivery) to support our operations, under strict confidentiality agreements.
        </p>

        <h2 className="text-2xl font-semibold mt-10">International Transfers</h2>
        <p>
          If you access the Site outside the UAE, your data may be transferred to and stored in jurisdictions with different data protection laws. We ensure any such transfers meet UAE regulatory standards.
        </p>

        <h2 className="text-2xl font-semibold mt-10">Children’s Privacy</h2>
        <p>
          Our services are not intended for individuals under 18. We do not knowingly collect personal data from minors. If we learn we have collected information from a child, we will delete it promptly.
        </p>

        <h2 className="text-2xl font-semibold mt-10">Your Rights</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Request a copy of your personal data</li>
          <li>Request correction or deletion of your data</li>
          <li>Withdraw consent or object to processing</li>
        </ul>
        <p>
          To exercise these rights, email us at <strong>cyberratofficial@gmail.com</strong> with the subject "Personal Data Request".
        </p>

        <h2 className="text-2xl font-semibold mt-10">Changes to This Policy</h2>
        <p>
          We may update this policy to reflect changes in our practices or UAE legal requirements. Updates will be posted on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-10">Contact Us</h2>
        <p>
          If you have any questions or concerns about this policy, contact us at <strong>cyberratofficial@gmail.com</strong>
        </p>
      </main>

      <footer className="bg-gray-800 w-full">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
            <div className="pb-6">
              <a href="/lessons" className="text-sm leading-6 text-gray-400 hover:text-white">
                Lessons
              </a>
            </div>
            <div className="pb-6">
              <a href="/glossary" className="text-sm leading-6 text-gray-400 hover:text-white">
                Glossary
              </a>
            </div>
            <div className="pb-6">
              <a href="/terms" className="text-sm leading-6 text-gray-400 hover:text-white">
                Terms and Conditions
              </a>
            </div>
            <div className="pb-6">
              <a href="/privacy" className="text-sm leading-6 text-gray-400 hover:text-white">
                Privacy Policy
              </a>
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