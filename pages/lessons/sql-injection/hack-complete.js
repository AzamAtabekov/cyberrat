"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HackComplete() {
  const pathname = usePathname();

  const steps = [
    "start",
    "log-window",
    "first-login-attempt",
    "second-login-attempt",
    "server-error",
    "a-suspicious-error",
    "checking-the-code",
    "experimenting-with-passwords",
    "injection-explained",
    "injection-vulnerability",
    "hacking-the-system",
    "hack-complete",
    "a-bit-more-detail",
    "finish",
  ];

  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("userEmail") || "user@email.com";
    setUserEmail(email);
  }, []);

  const logOutput = [
    "SELECT * FROM users WHERE email = 'user@email.com' AND password = '' or 1=1--'",
    "Logging in user user@email.com"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-start">
      <nav className="w-full flex justify-between items-center py-5 px-5 bg-gray-900">
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
          <span className="text-sm text-gray-300">👤 {userEmail}</span>
        </div>
      </nav>

      <div className="w-full flex flex-col items-center pt-6 pb-4">
        <h2 className="text-2xl font-bold mb-2">SQL Injection</h2>
        <div className="flex space-x-2">
          {steps.map((step) => (
            <Link href={`/lessons/sql-injection/${step}`} key={step}>
              <div
                className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${pathname.includes(step) ? "bg-indigo-400" : "bg-white"} border-gray-500`}
              />
            </Link>
          ))}
        </div>
      </div>

      <main className="flex-grow flex flex-col items-center justify-start pt-6 px-6">
        <div className="max-w-6xl w-full flex flex-col items-center gap-6">
          <div className="bg-white text-gray-900 rounded-md border border-gray-400 max-w-xl w-full p-6 leading-6 text-sm">
            <h3 className="text-lg font-bold mb-2">Welcome back, user@email.com!</h3>
            <p className="text-lg mb-4">Your current balance is <strong>$9.999.999</strong></p>
            <button
              className="bg-indigo-600 text-white font-semibold px-4 py-2 rounded hover:bg-indigo-700 cursor-pointer"
              onClick={() => alert("Transfer feature coming soon!")}
            >
              Initiate a transfer
            </button>
          </div>

          <div className="bg-white text-gray-900 rounded-md border border-gray-400 max-w-xl w-full p-6 leading-6 text-sm relative">
            <p><strong>And we are in!</strong><br />
            We successfully gained access to the application without having to guess the password, using <strong>SQL injection</strong>.</p>
            <Link href="/lessons/sql-injection/a-bit-more-detail">
              <span className="absolute h-7 w-7 right-2 bottom-3 bg-gray-700 hover:bg-gray-800 text-white flex items-center justify-center rounded-full">
                ➤
              </span>
            </Link>
          </div>

          <div className="w-full max-w-6xl">
            <div className="bg-black text-green-400 px-4 py-4 rounded-lg shadow-lg overflow-x-auto">
              <pre className="text-sm leading-snug whitespace-pre-wrap">
{logOutput.join("\n")}
              </pre>
            </div>
          </div>
        </div>
      </main>
      <footer>
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
              © 2025 Cyberrat Inc. All rights reserved. Questions? Email us at{" "}
              <strong>Cyberratofficial@gmail.com</strong>
            </p>
          </div>
        </footer>
    </div>
  );
}
