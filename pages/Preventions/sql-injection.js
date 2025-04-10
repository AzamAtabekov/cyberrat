"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SqlInjection() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginResult, setLoginResult] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
  
    useEffect(() => {
      const storedUser = localStorage.getItem("userEmail");
      if (storedUser) {
        setUserEmail(storedUser);
      }
    }, []);
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
  
        const data = await response.json();
        if (data.success) {
          setUserEmail(email);
          localStorage.setItem("userEmail", email);
          setLoginResult("Login successful");
        } else {
          setLoginResult(data.message);
        }
      } catch (error) {
        setLoginResult("An error occurred. Please try again.");
      }
    };
  
    const handleLogout = () => {
      localStorage.removeItem("userEmail");
      setUserEmail(null);
    };
  
    return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <nav className="w-full flex justify-between items-center py-5 px-5 bg-gray-900">
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/MainLogo.png" alt="Logo" width={55} height={55} />
            <span className="text-2xl font-bold">͓̽C͓̽y͓̽b͓̽e͓̽r͓̽ ͓̽R͓̽a͓̽t͓̽</span>
          </Link>
          <Link href="/lessons" className="text-base hover:text-blue-400 mt-3 block">Lessons</Link>
          <Link href="/owasp" className="text-base hover:text-blue-400 mt-3 block">OWASP Top 10</Link>
          <Link href="/pci" className="text-base hover:text-blue-400 mt-3 block">PCI Compliance</Link>
        </div>
        <div>
          {userEmail ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-300">{userEmail}</span>
              <span onClick={handleLogout} className="text-sm text-red-500 cursor-pointer hover:underline">Logout</span>
            </div>
          ) : (
            <div className="space-x-4">
              <Link href="/login" className="text-sm hover:text-blue-400">Login</Link>
              <Link href="/signup" className="text-sm hover:text-blue-400">Sign Up</Link>
            </div>
          )}
        </div>
      </nav>

      <main className="flex-grow w-full px-6 py-10 flex flex-col items-center text-gray-100">
        <h1 className="text-4xl font-extrabold mb-6">SQL Injection</h1>

        <div className="flex flex-col sm:flex-row gap-6 mb-12">
          <div className="bg-orange-300 text-gray-900 p-6 rounded-2xl shadow-md w-64">
            <h3 className="text-sm text-red-600 font-semibold">Prevalence</h3>
            <p className="text-2xl font-bold">Occasional</p>
            <div className="mt-2 text-white">⚙️⚙️</div>
          </div>
          <div className="bg-orange-400 text-gray-900 p-6 rounded-2xl shadow-md w-64">
            <h3 className="text-sm text-red-600 font-semibold">Exploitability</h3>
            <p className="text-2xl font-bold">Easy</p>
            <div className="mt-2 text-white">🔧🔧</div>
          </div>
          <div className="bg-orange-500 text-gray-900 p-6 rounded-2xl shadow-md w-64">
            <h3 className="text-sm text-red-600 font-semibold">Impact</h3>
            <p className="text-2xl font-bold">Devastating</p>
            <div className="mt-2 text-white">💀💀💀</div>
          </div>
        </div>

        <div className="max-w-3xl space-y-8">
          <p>
            <strong>SQL injection</strong> is a type of <u>injection attack</u>. Injection attacks occur when maliciously crafted inputs are submitted by an attacker, causing an application to perform an unintended action. Because of the ubiquity of <u>SQL</u> databases, SQL injection is one of the most common types of attack on the internet.
          </p>
          <p className="font-semibold text-lg">
            If you only have time to protect yourself against one vulnerability, you should be checking for SQL injection vulnerabilities in your codebase!
          </p>
        </div>

        <div className="mt-20 max-w-3xl">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">Risks</h2>
          <p className="mb-4 font-semibold">
            What's the worst thing that could happen when you suffer a SQL injection attack?
          </p>
          <p className="mb-4">
            Our example hack showed how to bypass the login page — a critical security flaw for a banking site. More complex attacks will allow an attacker to run arbitrary statements on the database. In the past, hackers have used injection attacks to:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Extract sensitive information</strong>, like Social Security numbers or credit card details.</li>
            <li><strong>Enumerate user authentication details</strong>, which can be reused on other sites.</li>
            <li><strong>Delete data or drop tables</strong>, corrupting the database and breaking the site.</li>
            <li><strong>Inject malicious code</strong> executed when users visit the site.</li>
          </ul>
          <p>
            <strong>SQL injection attacks are astonishingly common.</strong> Major companies like Yahoo and Sony have been compromised. Hackers also target specific applications or write scripts to harvest user data. Not even security firms are immune.
          </p>
        </div>

        <div className="mt-20 max-w-3xl">
          <h2 className="text-3xl font-bold text-green-400 mb-4">Protection</h2>
          <p className="mb-4">
            So SQL Injection is a serious risk. How can you protect yourself?
          </p>

          <h3 className="text-2xl font-semibold text-green-300 mt-8 mb-2">Parameterized Statements</h3>
          <p className="mb-4">
            Parameterized statements ensure inputs are treated safely. For example, in JDBC:
          </p>
          <pre className="bg-gray-800 text-sm text-green-100 rounded-xl p-4 overflow-x-auto mb-4">
            <code>{`Connection conn = DriverManager.getConnection(URL, USER, PASS);
String sql = "SELECT * FROM users WHERE email = ?";
PreparedStatement stmt = conn.prepareStatement(sql);
stmt.setString(1, email);
ResultSet results = stmt.executeQuery();`}</code>
          </pre>
          <p className="mb-4">Contrast this with unsafe concatenation:</p>
          <pre className="bg-gray-800 text-sm text-red-200 rounded-xl p-4 overflow-x-auto mb-4">
            <code>{`String sql = "SELECT * FROM users WHERE email = '" + email + "'";
ResultSet results = stmt.executeQuery(sql);`}</code>
          </pre>

          <h3 className="text-2xl font-semibold text-green-300 mt-8 mb-2">Object Relational Mapping (ORM)</h3>
          <p className="mb-4">
            ORMs like Active Record generate safe queries:
          </p>
          <pre className="bg-gray-800 text-sm text-green-100 rounded-xl p-4 overflow-x-auto mb-4">
            <code>{`def current_user(email)
  User.find_by_email(email)
end`}</code>
          </pre>
          <p className="mb-4">
            But direct SQL in ORMs can still be vulnerable:
          </p>
          <pre className="bg-gray-800 text-sm text-red-200 rounded-xl p-4 overflow-x-auto mb-4">
            <code>{`def current_user(email)
  User.where("email = '" + email + "'")
end`}</code>
          </pre>

          <h3 className="text-2xl font-semibold text-green-300 mt-8 mb-2">Escaping Inputs</h3>
          <p className="mb-4">
            Escape inputs if parameterization isn’t possible. Double quotes, e.g., <code>'</code> becomes <code>''</code>. But escaping doesn’t protect against numeric injection:
          </p>
          <pre className="bg-gray-800 text-sm text-red-200 rounded-xl p-4 overflow-x-auto mb-4">
            <code>{`def current_user(id)
  User.where("id = " + id)
end`}</code>
          </pre>

          <h3 className="text-2xl font-semibold text-green-300 mt-8 mb-2">Sanitizing Inputs</h3>
          <ul className="list-disc pl-5 space-y-2 text-white mb-4">
            <li>Use regex for emails and structured input.</li>
            <li>Reject unexpected symbols in numeric/alphanumeric fields.</li>
            <li>Strip whitespace where inappropriate.</li>
          </ul>
          <p>Remember: client-side validation is not enough. Most hacks use scripts, not browsers.</p>
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
            © 2025 Cyberrat Inc. All rights reserved. Questions? Email us at <strong>Cyberratofficial@gmail.com</strong>
          </p>
        </div>
      </footer>
    </div>
  );
}