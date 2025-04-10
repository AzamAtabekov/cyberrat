"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";


export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      alert(" Please fill in all fields.");
      return;
    }
  
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert(" Login successful!");
  
        localStorage.setItem("userEmail", email);
  
        router.push("/lessons");
      } else if (response.status === 404) {
        alert(" User not found.");
      } else if (response.status === 401) {
        alert(" Incorrect password.");
      } else {
        alert(" " + data.message);
      }
    } catch (err) {
      console.error("Login error:", err);
      alert(" Server error. Try again later.");
    }
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
        </div>
        <div className="flex items-center space-x-6">
          <Link href="/login" className="text-lg bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md">Login</Link>
          <Link href="/signup" className="text-lg text-blue-600 hover:text-blue-700">Sign Up</Link>
        </div>
      </nav>

      <div className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">Login to Cyber Rat</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition"
            >
              Login
            </motion.button>
          </form>
          <p className="text-center text-gray-400 mt-4">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-400 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
