"use client"

import { ThemeProvider } from "@/context/ThemeContext"
import ThemeTogglerTwo from "@/components/common/ThemeTogglerTwo"
import Link from "next/link"
import type React from "react"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[#111827] flex">
        {/* Left side - Branding */}
        <div className="lg:w-1/2 w-full bg-[#111827] lg:flex items-center justify-center hidden">
          <div className="relative flex flex-col items-center max-w-md p-8 z-10">
            <Link href="/" className="block mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#4F46E5] rounded-xl flex items-center justify-center shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L12.26 4.145" />
                  </svg>
                </div>
                <span className="text-2xl font-bold text-white">CryptoVault</span>
              </div>
            </Link>

            <h2 className="text-3xl font-bold text-white mb-4 text-center">Secure Crypto Management Platform</h2>
            <p className="text-center text-gray-400 mb-8">
              The most secure way to manage your digital assets with advanced blockchain technology
            </p>

            <div className="grid grid-cols-2 gap-4 w-full mb-8">
              <div className="bg-[#1a2235] rounded-lg p-4">
                <div className="flex items-center justify-center w-10 h-10 mb-3 text-[#4F46E5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">Secure Storage</h3>
                <p className="text-sm text-gray-400">Military-grade encryption for your assets</p>
              </div>

              <div className="bg-[#1a2235] rounded-lg p-4">
                <div className="flex items-center justify-center w-10 h-10 mb-3 text-[#9333EA]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">Protected</h3>
                <p className="text-sm text-gray-400">Multi-factor authentication</p>
              </div>
            </div>

            <div className="flex items-center justify-between w-full p-4 bg-[#1a2235] rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-yellow-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">Ethereum Network</h3>
                  <p className="text-xs text-gray-400">Connected & Secure</p>
                </div>
              </div>
              <span className="px-2 py-1 text-xs font-medium text-green-400 bg-green-900/30 rounded-md">Active</span>
            </div>
          </div>
        </div>

        {/* Right side - Auth Forms */}
        <div className="lg:w-1/2 w-full flex items-center justify-center bg-gradient-to-br from-[#4F46E5] to-[#9333EA] p-6">
          <div className="w-full max-w-md">{children}</div>
        </div>

        {/* Theme toggler */}
        <div className="fixed bottom-6 right-6 z-50">
          <ThemeTogglerTwo />
        </div>
      </div>
    </ThemeProvider>
  )
}

