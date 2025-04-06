// "use client"

// import { useEffect, useState } from "react"
// import { ArrowDownIcon, ArrowUpIcon } from "@/icons"

// export const DashboardMetrics = () => {
//   const [userData, setUserData] = useState(null)
//   const [isLoading, setIsLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const [lastUpdated, setLastUpdated] = useState(null)

//   const fetchData = async () => {
//     try {
//       setIsLoading(true)
//       setError(null)

//       // Add a cache-busting parameter to prevent browser caching
//       const timestamp = new Date().getTime()
//       const response = await fetch(`http://localhost:3001/api/numbers?t=${timestamp}`)

//       if (!response.ok) {
//         throw new Error(`API error: ${response.status}`)
//       }

//       const data = await response.json()
//       console.log("Dashboard fetched data:", data)

//       // Get the first user from the array
//       if (data && data.length > 0) {
//         setUserData(data[0])
//         setLastUpdated(new Date())
//       } else {
//         setError("No user data found")
//       }
//     } catch (err) {
//       console.error("Error fetching numbers:", err)
//       setError(err.message)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   useEffect(() => {
//     // Initial fetch
//     fetchData()

//     // Set up a refresh interval (every 5 seconds)
//     const intervalId = setInterval(fetchData, 5000)

//     // Clean up interval on component unmount
//     return () => clearInterval(intervalId)
//   }, [])

//   // Format values with proper formatting
//   const formatUsd = (value) => {
//     if (value === undefined || value === null) return "0.00"
//     return new Intl.NumberFormat("en-US", {
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2,
//     }).format(value)
//   }

//   const formatBtc = (value) => {
//     if (value === undefined || value === null) return "0.00000000"
//     return new Intl.NumberFormat("en-US", {
//       minimumFractionDigits: 8,
//       maximumFractionDigits: 8,
//     }).format(value)
//   }

//   // Get the values safely from the user data
//   const usdValue = userData?.numbers?.usd ?? 0
//   const btcValue = userData?.numbers?.btc ?? 0

//   return (
//     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
//       {/* USD Card */}
//       <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-md dark:border-gray-700 dark:bg-gray-800 md:p-6">
//         <div className="flex items-center space-x-4">
//           <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
//             <span className="text-xl font-bold text-green-600 dark:text-green-400">$</span>
//           </div>
//           <div>
//             <h3 className="text-lg font-medium text-gray-900 dark:text-white">USD</h3>
//             <p className="text-xs text-gray-500 dark:text-gray-400">United States Dollar</p>
//           </div>
//         </div>

//         <div className="mt-4">
//           <h4
//             className={`text-2xl font-bold text-gray-900 dark:text-white ${isLoading ? "opacity-50" : "opacity-100"}`}
//           >
//             ${formatUsd(usdValue)}
//           </h4>
//           <div className="mt-2 flex items-center">
//             <span className="flex items-center text-sm font-medium text-green-500">
//               <ArrowUpIcon className="mr-1 h-4 w-4" />
//               11.01%
//             </span>
//             <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">24h change</span>
//           </div>
//         </div>
//       </div>

//       {/* BTC Card */}
//       <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-md dark:border-gray-700 dark:bg-gray-800 md:p-6">
//         <div className="flex items-center space-x-4">
//           <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900/30">
//             <span className="text-xl font-bold text-amber-600 dark:text-amber-400">₿</span>
//           </div>
//           <div>
//             <h3 className="text-lg font-medium text-gray-900 dark:text-white">BTC</h3>
//             <p className="text-xs text-gray-500 dark:text-gray-400">Bitcoin</p>
//           </div>
//         </div>

//         <div className="mt-4">
//           <h4
//             className={`text-2xl font-bold text-gray-900 dark:text-white ${isLoading ? "opacity-50" : "opacity-100"}`}
//           >
//             {formatBtc(btcValue)} BTC
//           </h4>
//           <div className="mt-2 flex items-center">
//             <span className="flex items-center text-sm font-medium text-red-500">
//               <ArrowDownIcon className="mr-1 h-4 w-4" />
//               9.05%
//             </span>
//             <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">24h change</span>
//           </div>
//         </div>
//       </div>

//       {/* Error message if any */}
//       {error && (
//         <div className="col-span-full rounded-lg bg-red-100 p-4 text-red-700 dark:bg-red-900/30 dark:text-red-400">
//           Error: {error}
//         </div>
//       )}

//       {/* Last updated timestamp */}
//       <div className="col-span-full text-center text-xs text-gray-500 dark:text-gray-400">
//         {lastUpdated ? `Last updated: ${lastUpdated.toLocaleTimeString()}` : "Not yet updated"}
//         <button
//           onClick={fetchData}
//           className="ml-2 text-blue-500 hover:text-blue-700 underline dark:text-blue-400 dark:hover:text-blue-300"
//         >
//           Refresh
//         </button>
//       </div>
//     </div>
//   )
// }

