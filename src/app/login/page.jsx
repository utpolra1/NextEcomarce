"use client";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/wallet"); // redirect after login
    } catch (error) {
      console.log("Login error:", error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/wallet"); // redirect after Google login
    } catch (error) {
      console.log("Google sign-in error:", error.message);
    }
  };

  return (
    <div className="bg-[#0F172A] min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8">
      <div className="bg-[#1E293B] p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-white text-2xl font-semibold mb-6 text-center">
          Sign in to NextEcomarce
        </h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-400 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#334155]"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-400 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Your Password"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#334155]"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="border rounded-full w-5 h-5 flex items-center justify-center mr-2">
              <div className="bg-white rounded-full w-3 h-3"></div>
            </div>
            <span className="text-gray-400 text-sm">Click to human inspection</span>
            <span className="ml-1 text-gray-400 text-sm">🎧</span>
          </div>
          <a
            href="#"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Forgot password?
          </a>
        </div>
        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline w-full"
        >
          Sign in
        </button>
        <div className="mt-6 text-center">
          <hr className="border-gray-600 mb-2" />
          <p className="text-gray-400 text-sm">
            Or
          </p>
          <button
            onClick={handleGoogleSignIn}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline w-full mt-4"
          >
            Sign in with Google
          </button>
          <p className="text-gray-400 text-sm mt-4">
            Don't have an account?{" "}
            <a href="#" className="font-bold text-blue-500 hover:text-blue-800">
              Sign up for free
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
