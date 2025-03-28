"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">To-Do's App Login</h1>

        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="w-full h-13 flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-2 rounded-lg mb-3 hover:bg-gray-100 transition"
        >
          <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="h-5 w-5" />
          Sign in with Google
        </button>

        <button
          onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
          className="w-full h-13 flex items-center justify-center gap-2 bg-gray-900 text-white py-2 rounded-lg mb-4 hover:bg-gray-800 transition"
        >
          <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="h-5 w-5" />
          Sign in with GitHub
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="user@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />

          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />

          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          <button
            type="submit"
            className="w-full h-13 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Sign in with Credentials
          </button>
        </form>
      </div>
    </div>
  );
}
