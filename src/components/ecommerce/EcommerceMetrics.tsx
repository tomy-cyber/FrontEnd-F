
"use client"

import { useEffect, useState } from "react"
import { ArrowDownIcon, ArrowUpIcon, BoxIconLine, GroupIcon } from "@/icons"

export const EcommerceMetrics = () => {
  const [usdValue, setUsdValue] = useState("0,00")
  const [btcValue, setBtcValue] = useState("0,00")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const token = localStorage.getItem("token") // Or get it from context/cookie
  
    fetch("https://back-end-f.vercel.app/api/numbers", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        setUsdValue(data.usd || "0,00")
        setBtcValue(data.btc || "0,00")
        setIsLoading(false)
      })
      .catch((err) => {
        console.error("Error fetching numbers:", err)
        setIsLoading(false)
      })
  }, [])
  interface BadgeProps {
    color: "success" | "error"; // Add other colors as needed
    className?: string; // Allow className to be passed as a prop
    children: React.ReactNode; // Define the children prop explicitly
  }
  
  const Badge: React.FC<BadgeProps> = ({ color, className, children }) => {
    return (
      <div className={`badge ${color} ${className}`}>
        {children}
      </div>
    );
  };
  
  
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
      {/* USD Metric Card */}
      <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 p-5 shadow-lg transition-all duration-300 hover:shadow-emerald-900/20 dark:border-gray-700 dark:from-gray-900 dark:to-gray-800 md:p-6">
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl filter"></div>
        <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl filter"></div>

        <div className="flex items-center space-x-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-900/30 backdrop-blur-sm">
            <GroupIcon className="size-7 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-emerald-400">USD</h3>
            <p className="text-xs text-gray-400">United States Dollar</p>
          </div>
        </div>

        <div className="mt-6 flex items-end justify-between">
          <div>
            <h4
              className={`text-2xl font-bold text-white transition-opacity duration-300 ${isLoading ? "opacity-50" : "opacity-100"}`}
            >
              ${usdValue}
            </h4>
            <div className="mt-1 h-1 w-16 overflow-hidden rounded-full bg-gray-700">
              <div className="h-full w-3/4 rounded-full bg-emerald-500"></div>
            </div>
          </div>
          <Badge color="success" className="flex items-center space-x-1 rounded-lg px-3 py-1.5 text-sm font-medium">
            <ArrowUpIcon className="mr-1" />
            11.01%
          </Badge>
        </div>

        <div className="mt-4 flex justify-between text-xs text-gray-500">
          <span>24h change</span>
          <span className="text-emerald-400">+$1,240.55</span>
        </div>
      </div>

      {/* BTC Metric Card */}
      <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 p-5 shadow-lg transition-all duration-300 hover:shadow-amber-900/20 dark:border-gray-700 dark:from-gray-900 dark:to-gray-800 md:p-6">
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-amber-500/10 blur-2xl filter"></div>
        <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-amber-500/10 blur-2xl filter"></div>

        <div className="flex items-center space-x-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-900/30 backdrop-blur-sm">
            <BoxIconLine className="size-7 text-amber-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-amber-400">BTC</h3>
            <p className="text-xs text-gray-400">Bitcoin</p>
          </div>
        </div>

        <div className="mt-6 flex items-end justify-between">
          <div>
            <h4
              className={`text-2xl font-bold text-white transition-opacity duration-300 ${isLoading ? "opacity-50" : "opacity-100"}`}
            >
              {btcValue} BTC
            </h4>
            <div className="mt-1 h-1 w-16 overflow-hidden rounded-full bg-gray-700">
              <div className="h-full w-1/4 rounded-full bg-red-500"></div>
            </div>
          </div>
          <Badge color="error" className="flex items-center space-x-1 rounded-lg px-3 py-1.5 text-sm font-medium">
            <ArrowDownIcon className="mr-1 text-error-500" />
            9.05%
          </Badge>
        </div>

        <div className="mt-4 flex justify-between text-xs text-gray-500">
          <span>24h change</span>
          <span className="text-red-400">-0.00325 BTC</span>
        </div>
      </div>
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
