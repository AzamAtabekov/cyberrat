"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Owner() {
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

      <main className="flex-grow w-full px-6 py-10 flex flex-col items-center text-gray-100">
        <h1 className="text-4xl font-extrabold mb-6">Owner</h1>
        <div className="text-lg text-center space-y-2">
          <p><strong>Name:</strong> Azam Atabekov</p>
          <p><strong>ID:</strong> 35514006</p>
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
