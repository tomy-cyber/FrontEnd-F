"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import axios, { type AxiosError } from "axios"
import Link from "next/link"

export default function SignInForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const res = await axios.post("https://f-backend-l4sd.vercel.app/api/login", { email, password })

      localStorage.setItem("token", res.data.token)
      router.push("/") // Redirect to Home page
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        // This is an Axios error
        const axiosError = err as AxiosError<{ error: string }>
        if (axiosError.response?.data?.error) {
          setError(axiosError.response.data.error)
        } else {
          setError("An error occurred with the request.")
        }
      } else {
        // This is some other type of error
        setError("Something went wrong. Please try again.")
      }
      console.error("Login error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md p-8 mx-auto overflow-hidden rounded-xl bg-white shadow-xl">
      <h1 className="mb-6 text-2xl font-bold text-center text-gray-800">Login</h1>

      {error && <div className="p-3 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">{error}</div>}

      <form onSubmit={handleLogin} className="space-y-4">
        <div className="space-y-2">
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
          />
        </div>

        <div className="space-y-2">
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 mt-6 font-medium text-white transition-all duration-300 bg-[#4F46E5] rounded-md hover:bg-[#4338CA] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2 disabled:opacity-70"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <Link href="/signup" className="text-[#4F46E5] hover:underline transition-colors">
          Don&apos;t have an account? Register
        </Link>
      </div>
    </div>
  )
}

