
// "use client"

// import { useEffect, useState } from "react"
// import { ArrowDownIcon, ArrowUpIcon, BoxIconLine, GroupIcon } from "@/icons"

// export const EcommerceMetrics = () => {
//   const [usdValue, setUsdValue] = useState("0,00")
//   const [btcValue, setBtcValue] = useState("0,00")
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     setIsLoading(true)
//     const token = localStorage.getItem("token") // Or get it from context/cookie
  
//     fetch("https://back-end-f.vercel.app/api/numbers", {
//       headers: {
//         Authorization: `Bearer ${token}`
//       },
//       credentials: 'include',
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setUsdValue(data.usd || "0,00")
//         setBtcValue(data.btc || "0,00")
//         setIsLoading(false)
//       })
//       .catch((err) => {
//         console.error("Error fetching numbers:", err)
//         setIsLoading(false)
//       })
//   }, [])
//   interface BadgeProps {
//     color: "success" | "error"; // Add other colors as needed
//     className?: string; // Allow className to be passed as a prop
//     children: React.ReactNode; // Define the children prop explicitly
//   }
  
//   const Badge: React.FC<BadgeProps> = ({ color, className, children }) => {
//     return (
//       <div className={`badge ${color} ${className}`}>
//         {children}
//       </div>
//     );
//   };
  
  
//   return (
//     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
//       {/* USD Metric Card */}
//       <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 p-5 shadow-lg transition-all duration-300 hover:shadow-emerald-900/20 dark:border-gray-700 dark:from-gray-900 dark:to-gray-800 md:p-6">
//         <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl filter"></div>
//         <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl filter"></div>

//         <div className="flex items-center space-x-4">
//           <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-900/30 backdrop-blur-sm">
//             <GroupIcon className="size-7 text-emerald-400" />
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold text-emerald-400">USD</h3>
//             <p className="text-xs text-gray-400">United States Dollar</p>
//           </div>
//         </div>

//         <div className="mt-6 flex items-end justify-between">
//           <div>
//             <h4
//               className={`text-2xl font-bold text-white transition-opacity duration-300 ${isLoading ? "opacity-50" : "opacity-100"}`}
//             >
//               ${usdValue}
//             </h4>
//             <div className="mt-1 h-1 w-16 overflow-hidden rounded-full bg-gray-700">
//               <div className="h-full w-3/4 rounded-full bg-emerald-500"></div>
//             </div>
//           </div>
//           <Badge color="success" className="flex items-center space-x-1 rounded-lg px-3 py-1.5 text-sm font-medium">
//             <ArrowUpIcon className="mr-1" />
//             11.01%
//           </Badge>
//         </div>

//         <div className="mt-4 flex justify-between text-xs text-gray-500">
//           <span>24h change</span>
//           <span className="text-emerald-400">+$1,240.55</span>
//         </div>
//       </div>

//       {/* BTC Metric Card */}
//       <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 p-5 shadow-lg transition-all duration-300 hover:shadow-amber-900/20 dark:border-gray-700 dark:from-gray-900 dark:to-gray-800 md:p-6">
//         <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-amber-500/10 blur-2xl filter"></div>
//         <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-amber-500/10 blur-2xl filter"></div>

//         <div className="flex items-center space-x-4">
//           <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-900/30 backdrop-blur-sm">
//             <BoxIconLine className="size-7 text-amber-400" />
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold text-amber-400">BTC</h3>
//             <p className="text-xs text-gray-400">Bitcoin</p>
//           </div>
//         </div>

//         <div className="mt-6 flex items-end justify-between">
//           <div>
//             <h4
//               className={`text-2xl font-bold text-white transition-opacity duration-300 ${isLoading ? "opacity-50" : "opacity-100"}`}
//             >
//               {btcValue} BTC
//             </h4>
//             <div className="mt-1 h-1 w-16 overflow-hidden rounded-full bg-gray-700">
//               <div className="h-full w-1/4 rounded-full bg-red-500"></div>
//             </div>
//           </div>
//           <Badge color="error" className="flex items-center space-x-1 rounded-lg px-3 py-1.5 text-sm font-medium">
//             <ArrowDownIcon className="mr-1 text-error-500" />
//             9.05%
//           </Badge>
//         </div>

//         <div className="mt-4 flex justify-between text-xs text-gray-500">
//           <span>24h change</span>
//           <span className="text-red-400">-0.00325 BTC</span>
//         </div>
//       </div>
//     </div>
//   )
// }
"use client"
import Image from "next/image"
import type React from "react"

import Link from "next/link"
import { useState, useEffect, useRef, useCallback } from "react"
import { Dropdown } from "../ui/dropdown/Dropdown"
import { DropdownItem } from "../ui/dropdown/DropdownItem"

// Define interface for user data
interface UserData {
  _id?: string
  name?: string
  username?: string
  email?: string
  numbers?: {
    btc?: string
    usd?: string
  }
}

// Define interfaces for API responses
interface BinanceResponse {
  symbol: string
  price: string
}

interface CoinGeckoResponse {
  bitcoin: {
    usd: number
  }
}

interface CoinbaseResponse {
  data: {
    base: string
    currency: string
    amount: string
  }
}

// Type for price source
interface PriceSource {
  name: string
  url: string
  extract: (data: unknown) => number
}

// Multiple API sources for BTC price to ensure reliability
const BTC_PRICE_SOURCES: PriceSource[] = [
  {
    name: "binance",
    url: "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT",
    extract: (data: unknown) => {
      const typedData = data as BinanceResponse
      return Number.parseFloat(typedData.price)
    },
  },
  {
    name: "coingecko",
    url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
    extract: (data: unknown) => {
      const typedData = data as CoinGeckoResponse
      return typedData.bitcoin?.usd
    },
  },
  {
    name: "coinbase",
    url: "https://api.coinbase.com/v2/prices/BTC-USD/spot",
    extract: (data: unknown) => {
      const typedData = data as CoinbaseResponse
      return Number.parseFloat(typedData.data?.amount)
    },
  },
]

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)
  const [btcValue, setBtcValue] = useState<string>("0")
  const [usdValue, setUsdValue] = useState<string>("0")
  const [btcToUsdRate, setBtcToUsdRate] = useState<number>(0)
  const [priceSource, setPriceSource] = useState<string>("")
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Update the USD value based on BTC value and rate - wrapped in useCallback
  const updateUsdValue = useCallback(
    (btc: string, rate: number = btcToUsdRate) => {
      if (!btc || isNaN(Number.parseFloat(btc)) || rate === 0) {
        setUsdValue("0.00")
        return
      }

      const btcNumeric = Number.parseFloat(btc)
      const usd = btcNumeric * rate
      setUsdValue(usd.toFixed(2))
    },
    [btcToUsdRate],
  )

  // Robust function to fetch BTC price from multiple sources with fallbacks - wrapped in useCallback
  const fetchBtcToUsdRate = useCallback(async () => {
    // Price validation constants
    const MIN_REALISTIC_BTC_PRICE = 10000 // $10,000 minimum realistic price
    const MAX_REALISTIC_BTC_PRICE = 150000 // $150,000 maximum realistic price

    // Try each source until we get a valid price
    for (const source of BTC_PRICE_SOURCES) {
      try {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 5000) // 5 second timeout

        const response = await fetch(source.url, {
          signal: controller.signal,
          headers: { Accept: "application/json" },
        })

        clearTimeout(timeoutId)

        if (!response.ok) {
          console.warn(`${source.name} API returned status ${response.status}`)
          continue
        }

        const data = await response.json()
        const price = source.extract(data)

        // Validate the price is reasonable
        if (price && !isNaN(price) && price > MIN_REALISTIC_BTC_PRICE && price < MAX_REALISTIC_BTC_PRICE) {
          console.log(`Successfully fetched BTC price from ${source.name}: ${price}`)
          setBtcToUsdRate(price)
          setPriceSource(source.name)

          // Update USD value based on current BTC value
          updateUsdValue(btcValue, price)
          return
        } else {
          console.warn(`${source.name} returned invalid price: ${price}`)
        }
      } catch (error) {
        console.warn(`Error fetching from ${source.name}:`, error)
        // Continue to next source
      }
    }

    // If all sources fail and we don't have a rate yet, use a fallback value
    if (btcToUsdRate === 0) {
      console.warn("All BTC price sources failed, using fallback value")
      setBtcToUsdRate(72000) // Fallback to approximate current value
      setPriceSource("fallback")
      updateUsdValue(btcValue, 72000)
    }
  }, [btcToUsdRate, btcValue, updateUsdValue])

  const handleBtcChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const btc = e.target.value
      setBtcValue(btc)
      updateUsdValue(btc)
    },
    [updateUsdValue],
  )

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    // Fetch the BTC to USD rate on component mount
    fetchBtcToUsdRate()

    async function fetchCurrentUser() {
      try {
        const token = localStorage.getItem("token") // Get token from localStorage

        if (!token) {
          setLoading(false)
          return // No token, no user
        }

        let response = await fetch("https://back-end-f.vercel.app/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        })

        if (!response.ok) {
          const tokenPayload = JSON.parse(atob(token.split(".")[1]))
          const userId = tokenPayload.userId

          if (!userId) {
            console.error("No user ID in token")
            setLoading(false)
            return
          }

          response = await fetch("https://back-end-f.vercel.app/api/users", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            credentials: "include",
          })

          if (response.ok) {
            const allUsers = await response.json()
            const currentUser = allUsers.find((u: UserData) => u._id === userId)
            if (currentUser) {
              setUser(currentUser)
              if (currentUser.numbers?.btc) {
                setBtcValue(currentUser.numbers.btc)
                updateUsdValue(currentUser.numbers.btc)
              }
            } else {
              console.error("User not found in users list")
            }
          } else {
            console.error("Failed to fetch users list")
          }
        } else {
          const userData = await response.json()
          setUser(userData)
          if (userData.numbers?.btc) {
            setBtcValue(userData.numbers.btc)
            updateUsdValue(userData.numbers.btc)
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCurrentUser()

    // Set an interval to fetch the BTC price every 60 seconds to keep the value up to date
    const intervalId = setInterval(fetchBtcToUsdRate, 60000)
    return () => clearInterval(intervalId) // Cleanup the interval on component unmount
  }, [fetchBtcToUsdRate, updateUsdValue])

  // Update USD value when BTC rate changes
  useEffect(() => {
    if (btcToUsdRate > 0) {
      updateUsdValue(btcValue)
    }
  }, [btcToUsdRate, btcValue, updateUsdValue])

  function toggleDropdown(e: React.MouseEvent) {
    e.stopPropagation()
    setIsOpen((prev) => !prev)
  }

  function closeDropdown() {
    setIsOpen(false)
  }

  if (loading) {
    return <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11 rounded-full bg-gray-200 animate-pulse"></div>
  }

  if (!user) {
    return (
      <Link href="/signin" className="flex items-center text-gray-700 dark:text-gray-400 text-sm sm:text-base">
        Sign In
      </Link>
    )
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center text-gray-700 dark:text-gray-400 dropdown-toggle"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="mr-2 sm:mr-3 overflow-hidden rounded-full h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11">
          <Image width={44} height={44} src="/images/user/owner.jpg" alt="User" className="object-cover" />
        </span>
        <span className="hidden sm:block mr-1 font-medium text-sm md:text-base">
          {user.name || user.username || user.email}
        </span>
        <svg
          className={`stroke-gray-500 dark:stroke-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          width="16"
          height="16"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.3125 8.65625L9 13.3437L13.6875 8.65625"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute right-0 mt-2 sm:mt-3 flex w-[260px] max-w-[calc(100vw-20px)] flex-col rounded-xl sm:rounded-2xl border border-gray-200 bg-white p-2 sm:p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark z-50"
      >
        <div>
          <span className="block font-medium text-gray-700 text-sm sm:text-base dark:text-gray-400 truncate">
            {user.name || user.username || user.email}
          </span>
          <span className="mt-0.5 block text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">
            {user.email}
          </span>
        </div>

        {user.numbers && (
          <div className="mt-2 sm:mt-3 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">BTC Balance</span>
              <input
                type="number"
                value={btcValue}
                onChange={handleBtcChange}
                className="text-sm sm:text-base font-bold text-amber-500 bg-transparent border-none outline-none w-20 text-right"
                aria-label="Bitcoin balance"
              />
            </div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">USD Balance</span>
              <span className="text-sm sm:text-base font-bold text-green-500">${usdValue}</span>
            </div>
            {priceSource && (
              <div className="mt-1 text-right">
                <span className="text-[10px] text-gray-400">
                  Rate: ${Number(btcToUsdRate).toLocaleString()} ({priceSource})
                </span>
              </div>
            )}
          </div>
        )}

        <ul className="flex flex-col gap-1 pt-3 pb-2 sm:pt-4 sm:pb-3 border-b border-gray-200 dark:border-gray-800">
          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              tag="a"
              href="/profile"
              className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 font-medium text-gray-700 rounded-lg group text-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              Edit profile
            </DropdownItem>
          </li>
          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              tag="a"
              href="/wallet"
              className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 font-medium text-gray-700 rounded-lg group text-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              Wallet
            </DropdownItem>
          </li>
          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              tag="a"
              href="/settings"
              className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 font-medium text-gray-700 rounded-lg group text-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              Settings
            </DropdownItem>
          </li>
        </ul>
        <Link
          href="/signin"
          className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 mt-2 sm:mt-3 font-medium text-gray-700 rounded-lg group text-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
        >
          Sign Out
        </Link>
      </Dropdown>
    </div>
  )
}



// "use client";

// import { useEffect, useState } from "react";
// import Badge from "../ui/badge/Badge";
// import { ArrowDownIcon, ArrowUpIcon, BoxIconLine, GroupIcon } from "@/icons";

// // Define types for the response data
// interface Numbers {
//   btc: number;
//   usd: number;
// }

// export const EcommerceMetrics = () => {
//   const [usdValue, setUsdValue] = useState<string>("0,00");
//   const [btcValue, setBtcValue] = useState<string>("0,00");
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const token = localStorage.getItem("token"); // Get JWT from localStorage
//     const userId = localStorage.getItem("userId"); // Assume userId is stored in localStorage

//     if (!token || !userId) {
//       console.warn("No token or userId found. Please log in.");
//       return;
//     }

//     setIsLoading(true);

//     // Sending PUT request to update individual user's numbers
//     fetch("http://localhost:3001/api/numbers", {
//       method: "PUT",  // Use PUT method to update data
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json', // Sending JSON data
//       },
//       body: JSON.stringify({
//         userId: userId,  // Pass the userId to target the specific user
//         btc: 0.1,  // Example: Update to 0.1 BTC
//         usd: 5000,  // Example: Update to 5000 USD
//       }),
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`Failed to update user numbers: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         const numbers: Numbers = data.numbers || {};
//         setUsdValue(numbers.usd?.toLocaleString() || "0,00");
//         setBtcValue(numbers.btc?.toLocaleString() || "0,00");
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching numbers:", err);
//         setIsLoading(false);
//       });
//   }, []);

//   return (
//     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
//       {/* USD Metric Card */}
//       <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 p-5 shadow-lg">
//         <h4>{usdValue}</h4>
//       </div>

//       {/* BTC Metric Card */}
//       <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 p-5 shadow-lg">
//         <h4>{btcValue}</h4>
//       </div>
//     </div>
//   );
// };
