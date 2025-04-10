"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default function Lessons() {
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

      <main className="flex-1 px-6 pt-10 pb-20">
  <h1 className="text-3xl font-bold text-center mb-10">Pick a vulnerability to learn about</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
  {[
    {
      title: "SQL Injection",
      description: "Attackers can run arbitrary commands against your database.",
      image: "sqlinj.png",
      link: "/lessons/sql-injection/start",
      active: true,
    },
    {
      title: "Cross-Site Scripting",
      description: "Make sure attackers can't inject malicious JavaScript.",
      image: "scripting.png",
      link: "/lessons/soon",
      active: false,
    },
    {
      title: "Command Execution",
      description: "Be sure command strings are securely constructed.",
      image: "command.png",
      link: "/lessons/soon",
      active: false,
    },
    {
      title: "Clickjacking",
      description: "Prevent attackers from stealing user clicks.",
      image: "click.png",
      link: "/lessons/soon",
      active: false,
    },
    {
      title: "Cross-Site Request Forgery",
      description: "Prevent forged HTTP requests triggering actions.",
      image: "request.png",
      link: "/lessons/soon",
      active: false,
    },
    {
      title: "Directory Traversal",
      description: "Hackers can access sensitive files on your server.",
      image: "directory.png",
      link: "/lessons/soon",
      active: false,
    },
  ].map(({ title, description, image, link, active }) => (
    <div
      key={title}
      className="relative bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-sm text-center hover:shadow-blue-500/40 transition"
    >
      <div className={`absolute top-3 right-3 w-3 h-3 rounded-full ${active ? "bg-green-400 animate-pulse" : "bg-red-500 animate-pulse"}`} />

      <div className="mb-4">
        <Image src={`/icons/${image}`} alt={title} width={90} height={90} className="mx-auto" />
      </div>

      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <Link href={link} className="text-sm text-blue-400 hover:underline font-semibold">
        Learn About This Vulnerability →
      </Link>
    </div>
  ))}
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
            © 2025 Cyberrat Inc. All rights reserved. Questions? Email us at{" "}
            <strong>Cyberratofficial@gmail.com</strong>
          </p>
        </div>
      </footer>
    </div>
  );
}
