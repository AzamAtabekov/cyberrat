"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function OWASPIndex() {
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
            <Image src="/MainLogo.png" alt="Logo" width={55} height={55} className="mr-1" />
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
              <button onClick={handleLogout} className="text-red-400 hover:text-red-500 underline">Logout</button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-lg bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">Login</Link>
              <Link href="/signup" className="text-lg text-blue-600 hover:text-blue-700">Sign Up</Link>
            </div>
          )}
        </div>
      </nav>

      <main className="flex-1 px-6 py-12 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">OWASP Top 10</h1>

        <div className="space-y-12 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-yellow-400">A01: Broken Access Control</h2>
            <p>Attackers can access unauthorized data or functions due to missing or misconfigured access control. Pen testing can find issues, but Infrastructure as Code (IaC) and secure coding practices help prevent them. Use MFA and lock down administrative controls.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-yellow-400">A02: Cryptographic Failures</h2>
            <p>Hardcoded passwords, weak keys, or old algorithms expose sensitive data. Scan for secrets and encrypt data in transit and at rest.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-yellow-400">A03: Injection</h2>
            <p>SQL, OS command, and XSS are injection vulnerabilities where malicious input alters execution. Use parameterized queries and sanitize inputs.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-yellow-400">A04: Insecure Design</h2>
            <p>Insecure design comes from poor threat modeling or lack of secure patterns. Use secure SDLC, train developers, and apply secure design principles.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-yellow-400">A05: Security Misconfiguration</h2>
            <p>Insecure defaults, verbose errors, and overly permissive settings are common. Regular hardening, reviews, and IaC scanning help reduce risk.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-yellow-400">A06: Vulnerable and Outdated Components</h2>
            <p>Outdated libraries and dependencies introduce risk. Use a Software Bill of Materials (SBoM) and tools like Veracode SCA to track and update them.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-yellow-400">A07: Identification and Authentication Failures</h2>
            <p>Poor authentication or session handling leads to unauthorized access. Prevent brute force, implement MFA, and follow secure credential handling.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-yellow-400">A08: Software and Data Integrity Failures</h2>
            <p>CI/CD pipelines and third-party components can introduce malicious code. Secure the build and analyze components with SCA tools.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-yellow-400">A09: Security Logging and Monitoring Failures</h2>
            <p>Without good logging, breaches go undetected. Use alerting, centralized logging, and test your detection mechanisms regularly.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-yellow-400">A10: Server-Side Request Forgery (SSRF)</h2>
            <p>SSRF occurs when an app fetches URLs without validation. Sanitize input, whitelist allowed destinations, and verify outbound requests.</p>
          </section>
        </div>
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