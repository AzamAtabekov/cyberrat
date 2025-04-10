"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function SqlInjectionStart() {
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
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <nav className="w-full flex justify-between items-center py-5 px-5 bg-gray-900">
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/MainLogo.png" alt="Logo" width={55} height={55} />
            <span className="text-2xl font-bold">͓̽C͓̽y͓̽b͓̽e͓̽r͓̽ ͓̽R͓̽a͓̽t͓̽</span>
          </Link>
          <Link href="/lessons" className="text-base hover:text-blue-400">Lessons</Link>
          <Link href="/owasp" className="text-base hover:text-blue-400">OWASP Top 10</Link>
          <Link href="/pci" className="text-base hover:text-blue-400">PCI Compliance</Link>
        </div>
        <div className="flex items-center space-x-6">
          {userEmail ? (
            <span className="text-sm text-gray-300">👤 {userEmail}</span>
          ) : (
            <>
              <Link href="/login" className="text-lg bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">Login</Link>
              <Link href="/signup" className="text-lg text-blue-600 hover:text-blue-700">Sign Up</Link>
            </>
          )}
        </div>
      </nav>

      <div className="w-full flex flex-col items-center pt-6 pb-4">
        <h2 className="text-2xl font-bold mb-2">SQL Injection</h2>
        <div className="flex space-x-2">
          {steps.map((step) => (
            <Link href={`/lessons/sql-injection/${step}`} key={step}>
              <div
                className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  pathname.includes(step) ? "bg-indigo-400" : "bg-white"
                } border-gray-500`}
              />
            </Link>
          ))}
        </div>
      </div>

      <main className="flex-grow flex items-start justify-center pt-2 px-6">
        <div className="mx-auto max-w-4xl flex flex-col items-center text-center gap-6 text-white">
          <h1 className="text-3xl font-bold">Welcome to the SQL Injection Lab</h1>
          <p className="text-gray-300 max-w-xl">
            In this lesson, you'll explore how SQL injection works, by interacting with a vulnerable login system. This is a hands-on, guided challenge. Click below to get started.
          </p>
          <Link href="/lessons/sql-injection/log-window">
            <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-lg font-semibold">
              Start the Challenge ➤
            </button>
          </Link>
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
