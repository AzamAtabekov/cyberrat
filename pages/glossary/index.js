"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Glossary() {
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
        <h1 className="text-4xl font-extrabold mb-10">Glossary</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {["Botnets: A botnet is network of computers infected with malware that can be used by a hacker to do their bidding.",
            "Brute Force Attacks: A brute-force attack occurs when an attacker checks all possible passwords until the correct one is found.",
            "Clean URLs: Clean URLs (or semantic URLs) are readable URLs for websites or web services that intuitively represent the underlying resource.",
            "Code Injection: Code injection can be used by an attacker to introduce malicious code into a vulnerable computer program and change the course of execution.",
            "Content Management Systems: Content Management Systems (CMS) allow non-technical users to publish and edit online resources.",
            "Cookies: HTTP is a stateless protocol. Cookies are the most common way to make a conversation between a browser and server stateful.",
            "DDL: Data Definition Language (DDL) is the subset of the SQL language that allows table structures to be edited.",
            "Defense in Depth: Defense in depth refers to employing multiple layers or security controls to reduce the likelihood and impact of an attack.",
            "Denial of Service Attacks: A denial-of-service (DOS) attack is an attempt to make a web service or website unavailable by flooding it with network packets.",
            "Dictionary Attacks: A dictionary attack is attempt to guess passwords by using well-known words or phrases.",
            "Digital Signatures: Digital signatures are used to demonstrate the authenticity of a digital message.",
            "DML: Data Manipulation Language (DML) is the subset of the SQL language that allows querying and updating of table content.",
            "Hashing: You should store user passwords as strong, cryptographic hashes.",
            "HTTP: Hypertext Transfer Protocol (HTTP) is the mechanism that websites and web services use to communicate with user agents such as browsers.",
            "HTTPS: Sensitive web traffic should be sent over an encrypted channel -- that's what HTTPS is for.",
            "LDAP: Lightweight Directory Access Protocol (LDAP) is a technology used to create directories of individuals or resources.",
            "Netmasks: Netmasks (or subnet masks) are a shorthand for referring to ranges of consecutive IP addresses in the Internet Protocol. They are used for defining networking rules in e.g. routers and firewalls.",
            "OAuth: OAuth is an open standard for authorization.",
            "OWASP: The Open Web Application Security Project (OWASP) is an online community that tracks common vulnerabilities and publishes information about web application security.",
            "Password Lists: Users are creatures of habit, which means they tend to choose obvious passwords and re-use them over multiple sites.",
            "Phishing: Phishing is when an attacker sends an email (or other electronic message) to a user, in an attempt to trick them into disclosing sensitive information.",
            "Principle of Least Privilege: Secure organizations often share information on a \"need to know\" basis, and this model can be applied to technical systems too.",
            "Randomness: Modern encryption techniques require the generation of random numbers on demand. This is a surprisingly hard problem.",
            "Releases: Software is rarely unchanging; it is important to have a clear strategy when pushing out new versions.",
            "REST: REpresentational State Transfer (REST) is a style of web service architecture designed to map create, read, update, and delete operations with their corresponding HTTP verbs.",
            "Salting: Salting refers to adding a random token to a password before hashing it.",
            "Sessions: A session is a stateful conversation between a website and a user agent, such as a browser.",
            "Social Engineering: Social engineering is when an attacker interacts directly with your users or staff, in an effort to trick them into disclosing sensitive information or performing restricted actions.",
            "SQL: Structured Query Language (SQL) is a special purpose programming language for accessing and updating data in a relational database.",
            "URLs: A Uniform Resource Locator (URL) -- informally called a web address -- specifies the location of a resource on the internet.",
            "Worms: A worm is a malicious program that replicates itself in order to spread to other systems.",
            "Zero-Day Exploits: A zero-day vulnerability is a vulnerability that the application author has not yet become aware of."]
            .map((entry, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-blue-500/40 transition">
                <p className="text-sm leading-relaxed text-gray-100">{entry}</p>
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
            © 2025 Cyberrat Inc. All rights reserved. Questions? Email us at <strong>Cyberratofficial@gmail.com</strong>
          </p>
        </div>
      </footer>
    </div>
  );
}