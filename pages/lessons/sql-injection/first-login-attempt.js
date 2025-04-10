"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function FirstLoginAttempt() {
  const pathname = usePathname();
  const router = useRouter();

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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logOutput, setLogOutput] = useState(["Application initialized. Awaiting login..."]);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) setUserEmail(email);
  }, []);

  const handleLogin = () => {
    const query = `SELECT * FROM users WHERE email = '${username}' AND password = '${password}'`;
    const logs = ["User is attempting to login...", query];

    const isValidInjection =
      password.includes("'") &&
      password.toLowerCase().includes("or") &&
      password.includes("1=1");

    const isBrokenQuery = password.endsWith("'");

    if (isValidInjection) {
      setLogOutput((prev) => [...prev, ...logs, "Query returned 1 row. Authentication successful."]);
    } else if (isBrokenQuery) {
      setLogOutput((prev) => [...prev, ...logs, "Invalid SQL: " + query]);
      alert("An error occurred\n\nAn unexpected error occurred.");
    } else {
      setLogOutput((prev) => [...prev, ...logs, "Credentials did not match, login failed."]);
      alert("An error occurred\n\nCredentials did not match, login failed.");
    }
  };

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
                className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${pathname.includes(step) ? "bg-indigo-400" : "bg-white"} border-gray-500`}
              />
            </Link>
          ))}
        </div>
      </div>

      <main className="flex-grow flex flex-col items-center justify-start pt-6 px-6">
        <div className="max-w-6xl w-full flex flex-col lg:flex-row justify-center gap-10">
          <div className="bg-white text-gray-900 rounded-md border border-gray-400 max-w-md w-full p-6 leading-6 text-sm relative">
            <p><strong>Go ahead and try logging in with the following credentials:</strong></p>
            <p>Email: <code className="text-gray-400 font-bold" style={{ letterSpacing: "-1.2px" }}>user@email.com</code></p>
            <p>Password: <code className="text-gray-400 font-bold" style={{ letterSpacing: "-1.2px" }}>password</code></p>
            <Link href="/lessons/sql-injection/second-login-attempt">
              <span className="absolute h-7 w-7 right-2 bottom-3 bg-gray-700 hover:bg-gray-800 text-white flex items-center justify-center rounded-full">
                ➤
              </span>
            </Link>
          </div>

          <div className="flex-1 w-full max-w-md shadow-lg border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-gray-200 px-3 py-2 flex items-center border-b border-gray-500">
              <div className="w-8 text-gray-400 flex justify-center items-center">←</div>
              <div className="w-8 text-gray-400 flex justify-center items-center">→</div>
              <input
                readOnly
                value="www.securebank.com"
                className="flex-1 ml-2 px-3 py-1 text-xs bg-white border-2 border-gray-700 rounded-lg text-gray-700"
              />
            </div>
            <div className="p-6 bg-white min-h-[240px]">
              <label className="block text-sm font-medium text-gray-900 mb-1">Email</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full rounded-md px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
              <label className="block text-sm font-medium text-gray-900 mt-4 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
              <button
                onClick={handleLogin}
                className="mt-5 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-500"
              >
                Log in
              </button>
            </div>
          </div>
        </div>

        <div className="w-full max-w-6xl mt-10">
          <div className="bg-black text-green-400 px-4 py-4 rounded-lg shadow-lg overflow-x-auto">
            <pre className="text-sm leading-snug whitespace-pre-wrap">
{logOutput.join("\n")}
            </pre>
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
