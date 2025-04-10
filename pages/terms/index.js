"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function TermsAndConditions() {
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

      <main className="flex-grow w-full px-6 py-10 flex flex-col items-center text-gray-100 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms and Conditions</h1>

        <div className="space-y-6 text-sm leading-7 text-gray-300">
          <p><strong>Introduction:</strong> These terms and conditions govern your use of this website; by using it, you accept them fully. If you disagree, please do not use the site.</p>

          <p><strong>Cookies:</strong> This website uses cookies. By using it, you consent to our use of cookies according to our policy.</p>

          <p><strong>License to Use:</strong> All intellectual property rights are reserved by CyberRat unless otherwise stated. You may view and print content for personal use only.</p>

          <ul className="list-disc ml-6">
            <li>Do not republish, sell, rent, or sub-license material from the site.</li>
            <li>Do not edit or modify any material on the site.</li>
          </ul>

          <p><strong>Acceptable Use:</strong> You must not use this website for unlawful, harmful, or fraudulent purposes. Uploading malware, scraping data, or causing disruption is strictly prohibited.</p>

          <p><strong>Restricted Access:</strong> Access to parts of this site may be restricted. We may disable user credentials at our discretion.</p>

          <p><strong>No Warranties:</strong> This site is provided "as is" without warranties. We do not guarantee availability or accuracy.</p>

          <p><strong>Liabilities:</strong> We will not be liable for any indirect, special, or consequential loss arising from the use of this site.</p>

          <p><strong>Exceptions:</strong> Nothing excludes liability for death, personal injury, or fraud where it is unlawful to do so under UAE law.</p>

          <p><strong>Reasonableness:</strong> By using this site, you agree these exclusions and limitations are reasonable.</p>

          <p><strong>Indemnity:</strong> You agree to indemnify us for any loss resulting from your breach of these terms.</p>

          <p><strong>Changes:</strong> We may revise these terms anytime. Please check back regularly.</p>

          <p><strong>Jurisdiction:</strong> These terms are governed by the laws of the United Arab Emirates. Any disputes shall fall under the jurisdiction of Dubai courts.</p>

          <p><strong>Entire Agreement:</strong> These terms constitute the entire agreement between you and CyberRat.</p>
        </div>
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