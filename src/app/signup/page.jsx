"use client";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [bonus, setBonus] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!agree) {
      setError("Please agree to the User Agreement and Privacy Policy.");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/wallet");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/wallet");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-[#0F172A] min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-5">
      <div className="bg-[#1E293B] p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-6 text-center">
          Sign up to NextEcomarce
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <div className="space-y-4">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-400 text-sm font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="bg-[#334155] border border-gray-600 rounded-md w-full py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-gray-400 text-sm font-bold mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Your Username"
              className="bg-[#334155] border border-gray-600 rounded-md w-full py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-gray-400 text-sm font-bold mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Your Password"
              className="bg-[#334155] border border-gray-600 rounded-md w-full py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-400 text-sm font-bold mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Your Password"
              className="bg-[#334155] border border-gray-600 rounded-md w-full py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Bonus (Optional) */}
          <div>
            <label htmlFor="bonus" className="block text-gray-400 text-sm font-bold mb-1">
              Bonus (Optional)
            </label>
            <input
              type="text"
              id="bonus"
              placeholder="Optional Bonus Code"
              className="bg-[#334155] border border-gray-600 rounded-md w-full py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setBonus(e.target.value)}
            />
          </div>

          {/* Human verification (fake) */}
          <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
            <div className="border-2 border-gray-500 rounded-full w-5 h-5 flex items-center justify-center">
              <div className="bg-white rounded-full w-3 h-3"></div>
            </div>
            <span>Click to human inspection 🎧</span>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start mt-4">
            <input
              id="agree"
              type="checkbox"
              className="w-4 h-4 border-gray-300 rounded bg-gray-700 focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setAgree(e.target.checked)}
            />
            <label htmlFor="agree" className="ml-2 text-sm text-gray-400">
              By signing up I agree that I am 18 years of age or older, to the{" "}
              <a href="#" className="text-blue-400 hover:underline">User Agreement</a> and{" "}
              <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>.
            </label>
          </div>

          {/* Signup Button */}
          <button
            onClick={handleSignup}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full transition-all duration-300"
          >
            Sign up
          </button>

          {/* Or divider */}
          <div className="flex items-center justify-center my-4">
            <hr className="flex-grow border-gray-600" />
            <span className="mx-2 text-gray-400 text-sm">OR</span>
            <hr className="flex-grow border-gray-600" />
          </div>

          {/* Google Signup */}
          <button
            onClick={handleGoogleSignup}
            className="bg-[#4285F4] hover:bg-[#357AE8] text-white font-bold py-3 px-6 rounded-lg w-full transition-all duration-300"
          >
            Sign up with Google
          </button>

          {/* Login Redirect */}
          <p className="text-center text-sm text-gray-400 mt-4">
            Have an account?{" "}
            <a href="#" className="text-blue-400 font-bold hover:underline">
              Sign in right now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
