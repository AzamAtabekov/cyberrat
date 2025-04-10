"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
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
    <>
      <Head>
        <title>Cyber Rat | Learn Cybersecurity</title>
        <meta name="description" content="Free cybersecurity training for students" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-start px-0 pt-0">
        <nav className="w-full flex justify-between items-center py-5 px-5">
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/MainLogo.png" alt="Logo" width={55} height={55} className="mr-1" />
              <span className="text-2xl font-bold">͓̽C͓̽y͓̽b͓̽e͓̽r͓̽ ͓̽R͓̽a͓̽t͓̽</span>
            </Link>
            <Link href="/lessons" className="text-base hover:text-blue-400 mt-3 block">Lessons</Link>
            <Link href="/owasp" className="text-base hover:text-blue-400 mt-3 block">OWASP Top 10</Link>
            <Link href="/pci" className="text-base hover:text-blue-400 mt-3 block">PCI Compliance</Link>
            <Link href="/owner" className="text-base hover:text-blue-400 mt-3 block">Owner</Link>
          </div>

          <div className="flex items-center space-x-6">
            {userEmail ? (
              <div className="text-sm text-blue-400 flex items-center gap-4">
                <span className="hidden sm:inline">{userEmail}</span>
                <button
                  onClick={handleLogout}
                  className="text-red-400 hover:text-red-500 underline"
                >
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

        {/* 🔹 Main Content */}
        <main>
          <div className="relative isolate overflow-hidden">
            <div className="mx-auto px-6 pb-32 pt-20">
              <div className="mx-auto max-w-2xl lg:mx-auto lg:flex lg:max-w-none lg:items-center gap-x-14">
                <div className="w-full max-w-xl leading-relaxed lg:shrink-0 xl:max-w-2xl pl-4 lg:pl-14">
                  <motion.h1
                    className="text-3xl md:text-5xl font-bold mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    Learn Cybersecurity Fundamentals
                  </motion.h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-300 sm:max-w-md lg:max-w-none">
                    Free cybersecurity training for students. Covers key vulnerabilities and provides direct, no-nonsense guidance for securing applications.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <motion.div
                      whileHover={{ scaleX: 1.1, scaleY: 1 }}
                      whileTap={{ scaleX: 1.05, scaleY: 0.95 }}
                      className="inline-block"
                    >
                      <Link href="/lessons" className="px-6 py-3 text-lg bg-blue-600 hover:bg-blue-700 rounded-md transition inline-block">
                        Start Learning
                      </Link>
                    </motion.div>
                  </div>
                </div>

                {/* 🔹 Images */}
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 ml-18">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img src="/ratwhite.png" alt="White Rat" className="rounded-lg shadow-lg transform transition duration-300 hover:scale-105" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img src="/ratgray.png" alt="Gray Rat" className="rounded-lg shadow-lg transform transition duration-300 hover:scale-105" />
                    </div>
                    <div className="relative">
                      <img src="/ratblack.png" alt="Black Rat" className="rounded-lg shadow-lg transform transition duration-300 hover:scale-105" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img src="/ratred.png" alt="Red Rat" className="rounded-lg shadow-lg transform transition duration-300 hover:scale-105" />
                    </div>
                    <div className="relative">
                      <img src="/ratyellow.png" alt="Yellow Rat" className="rounded-lg shadow-lg transform transition duration-300 hover:scale-105" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* 🔹 Footer */}
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
    </>
  );
}
