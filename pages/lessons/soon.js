"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Lessons() {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userEmail");
    if (storedUser) {
      setUserEmail(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setUserEmail(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-start">
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
            <>
              <span className="text-sm text-white">{userEmail}</span>
              <span onClick={handleLogout} className="text-sm text-red-500 cursor-pointer hover:underline">Logout</span>
            </>
          ) : (
            <>
              <Link href="/login" className="text-lg text-blue-600 hover:text-blue-700">Login</Link>
              <Link href="/signup" className="text-lg bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md">Sign Up</Link>
            </>
          )}
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-bold mb-8">Cybersecurity Lessons</h1>
        <p className="text-gray-400 text-center max-w-xl">
          Welcome to the learning zone! Soon here will be a list of lessons about key vulnerabilities, attacks, and best practices in cybersecurity.
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
            © 2025 Cyberrat Inc. All rights reserved. Questions? Email us at{" "}
            <strong>Cyberratofficial@gmail.com</strong>
          </p>
        </div>
      </footer>
    </div>
  );
}