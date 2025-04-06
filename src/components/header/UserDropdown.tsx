// "use client"
// import Image from "next/image"
// import Link from "next/link"
// import { useState, useEffect } from "react"
// import { Dropdown } from "../ui/dropdown/Dropdown"
// import { DropdownItem } from "../ui/dropdown/DropdownItem"


// export default function UserDropdown() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [user, setUser] = useState(null)
//   const [loading, setLoading] = useState(true)
  

//   useEffect(() => {
//     // Fetch the current user data when component mounts
//     async function fetchCurrentUser() {
//       try {
//         const token = localStorage.getItem("token") // Get token from localStorage

//         if (!token) {
//           setLoading(false)
//           return // No token, no user
//         }

//         // First try to get the current user from /api/users/me endpoint
//         let response = await fetch("http://localhost:3001/api/users/me", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           credentials: "include",
//         })
        

//         // If that fails, try the /api/users endpoint with the token
//         if (!response.ok) {
//           // Get user ID from token
//           const tokenPayload = JSON.parse(atob(token.split(".")[1]))
//           const userId = tokenPayload.userId

//           if (!userId) {
//             console.error("No user ID in token")
//             setLoading(false)
//             return
//           }

//           // Fetch all users and find the one matching our ID
//           response = await fetch("http://localhost:3001/api/users", {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//             credentials: "include",
//           })
          

//           if (response.ok) {
//             const allUsers = await response.json()
//             const currentUser = allUsers.find((u) => u._id === userId)
//             if (currentUser) {
//               setUser(currentUser)
//             } else {
//               console.error("User not found in users list")
//             }
//           } else {
//             console.error("Failed to fetch users list")
//           }
//         } else {
//           // If /api/users/me worked, use that data
//           const userData = await response.json()
//           setUser(userData)
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchCurrentUser()
//   }, [])

//   function toggleDropdown(e) {
//     e.stopPropagation()
//     setIsOpen((prev) => !prev)
//   }

//   function closeDropdown() {
//     setIsOpen(false)
//   }

//   // Display a loading state while fetching user data
//   if (loading) {
//     return <div className="h-11 w-11 rounded-full bg-gray-200 animate-pulse"></div>
//   }

//   // If no user is found, you might want to redirect to login or show a sign-in button
//   if (!user) {
//     return (
//       <Link href="/signin" className="flex items-center text-gray-700 dark:text-gray-400">
//         Sign In
//       </Link>
//     )
//   }

//   return (
//     <div className="relative">
//       <button onClick={toggleDropdown} className="flex items-center text-gray-700 dark:text-gray-400 dropdown-toggle">
//         <span className="mr-3 overflow-hidden rounded-full h-11 w-11">
//           <Image width={44} height={44} src="/images/user/owner.jpg" alt="User" />
//         </span>

//         {/* Display the username here */}
//         <span className="block mr-1 font-medium text-theme-sm">{user.name || user.username || user.email}</span>

//         <svg
//           className={`stroke-gray-500 dark:stroke-gray-400 transition-transform duration-200 ${
//             isOpen ? "rotate-180" : ""
//           }`}
//           width="18"
//           height="20"
//           viewBox="0 0 18 20"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M4.3125 8.65625L9 13.3437L13.6875 8.65625"
//             stroke="currentColor"
//             strokeWidth="1.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </button>

//       <Dropdown
//         isOpen={isOpen}
//         onClose={closeDropdown}
//         className="absolute right-0 mt-[17px] flex w-[260px] flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
//       >
//         <div>
//           {/* Display the username and name if available */}
//           <span className="block font-medium text-gray-700 text-theme-sm dark:text-gray-400">
//             {user.name || user.username || user.email}
//           </span>
//           <span className="mt-0.5 block text-theme-xs text-gray-500 dark:text-gray-400">{user.email}</span>
//         </div>

//         {/* Display crypto balances */}
//         {user.numbers && (
//           <div className="mt-3 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
//             <div className="flex justify-between items-center">
//               <span className="text-theme-xs font-medium text-gray-600 dark:text-gray-300">BTC Balance</span>
//               <span className="text-theme-sm font-bold text-amber-500">{user.numbers.btc}</span>
//             </div>
//             <div className="flex justify-between items-center mt-1">
//               <span className="text-theme-xs font-medium text-gray-600 dark:text-gray-300">USD Balance</span>
//               <span className="text-theme-sm font-bold text-green-500">${user.numbers.usd}</span>
//             </div>
//           </div>
//         )}

//         <ul className="flex flex-col gap-1 pt-4 pb-3 border-b border-gray-200 dark:border-gray-800">
//           <li>
//             <DropdownItem
//               onItemClick={closeDropdown}
//               tag="a"
//               href="/profile"
//               className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
//             >
//               <svg
//                 className="fill-gray-500 group-hover:fill-gray-700 dark:fill-gray-400 dark:group-hover:fill-gray-300"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 14.1526 4.3002 16.1184 5.61936 17.616C6.17279 15.3096 8.24852 13.5955 10.7246 13.5955H13.2746C15.7509 13.5955 17.8268 15.31 18.38 17.6167C19.6996 16.119 20.5 14.153 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM17.0246 18.8566V18.8455C17.0246 16.7744 15.3457 15.0955 13.2746 15.0955H10.7246C8.65354 15.0955 6.97461 16.7744 6.97461 18.8455V18.856C8.38223 19.8895 10.1198 20.5 12 20.5C13.8798 20.5 15.6171 19.8898 17.0246 18.8566ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.9991 7.25C10.8847 7.25 9.98126 8.15342 9.98126 9.26784C9.98126 10.3823 10.8847 11.2857 11.9991 11.2857C13.1135 11.2857 14.0169 10.3823 14.0169 9.26784C14.0169 8.15342 13.1135 7.25 11.9991 7.25ZM8.48126 9.26784C8.48126 7.32499 10.0563 5.75 11.9991 5.75C13.9419 5.75 15.5169 7.32499 15.5169 9.26784C15.5169 11.2107 13.9419 12.7857 11.9991 12.7857C10.0563 12.7857 8.48126 11.2107 8.48126 9.26784Z"
//                   fill=""
//                 />
//               </svg>
//               Edit profile
//             </DropdownItem>
//           </li>
//           <li>
//             <DropdownItem
//               onItemClick={closeDropdown}
//               tag="a"
//               href="/wallet"
//               className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
//             >
//               <svg
//                 className="fill-gray-500 group-hover:fill-gray-700 dark:fill-gray-400 dark:group-hover:fill-gray-300"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M17.5 8.5H19C20.1046 8.5 21 9.39543 21 10.5V17.5C21 18.6046 20.1046 19.5 19 19.5H5C3.89543 19.5 3 18.6046 3 17.5V10.5C3 9.39543 3.89543 8.5 5 8.5H6.5V6.5C6.5 4.84315 7.84315 3.5 9.5 3.5H14.5C16.1569 3.5 17.5 4.84315 17.5 6.5V8.5ZM16 8.5V6.5C16 5.67157 15.3284 5 14.5 5H9.5C8.67157 5 8 5.67157 8 6.5V8.5H16ZM5 10H19C19.2761 10 19.5 10.2239 19.5 10.5V17.5C19.5 17.7761 19.2761 18 19 18H5C4.72386 18 4.5 17.7761 4.5 17.5V10.5C4.5 10.2239 4.72386 10 5 10ZM16.5 13.5C16.5 14.0523 16.0523 14.5 15.5 14.5C14.9477 14.5 14.5 14.0523 14.5 13.5C14.5 12.9477 14.9477 12.5 15.5 12.5C16.0523 12.5 16.5 12.9477 16.5 13.5Z"
//                   fill=""
//                 />
//               </svg>
//               Wallet
//             </DropdownItem>
//           </li>
//           <li>
//             <DropdownItem
//               onItemClick={closeDropdown}
//               tag="a"
//               href="/settings"
//               className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
//             >
//               <svg
//                 className="fill-gray-500 group-hover:fill-gray-700 dark:fill-gray-400 dark:group-hover:fill-gray-300"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M10.4858 3.5L13.5182 3.5C13.9233 3.5 14.2518 3.82851 14.2518 4.23377C14.2518 5.9529 16.1129 7.02795 17.602 6.1682C17.9528 5.96567 18.4014 6.08586 18.6039 6.43667L20.1203 9.0631C20.3229 9.41407 20.2027 9.86286 19.8517 10.0655C18.3625 10.9253 18.3625 13.0747 19.8517 13.9345C20.2026 14.1372 20.3229 14.5859 20.1203 14.9369L18.6039 17.5634C18.4013 17.9142 17.9528 18.0344 17.602 17.8318C16.1129 16.9721 14.2518 18.0471 14.2518 19.7663C14.2518 20.1715 13.9233 20.5 13.5182 20.5H10.4858C10.0804 20.5 9.75182 20.1714 9.75182 19.766C9.75182 18.0461 7.88983 16.9717 6.40067 17.8314C6.04945 18.0342 5.60037 17.9139 5.39767 17.5628L3.88167 14.937C3.67903 14.586 3.79928 14.1372 4.15026 13.9346C5.63949 13.0748 5.63946 10.9253 4.15025 10.0655C3.79926 9.86282 3.67901 9.41401 3.88165 9.06303L5.39764 6.43725C5.60034 6.08617 6.04943 5.96581 6.40065 6.16858C7.88982 7.02836 9.75182 5.9539 9.75182 4.23399C9.75182 3.82862 10.0804 3.5 10.4858 3.5ZM13.5182 2L10.4858 2C9.25201 2 8.25182 3.00019 8.25182 4.23399C8.25182 4.79884 7.64013 5.15215 7.15065 4.86955C6.08213 4.25263 4.71559 4.61859 4.0986 5.68725L2.58261 8.31303C1.96575 9.38146 2.33183 10.7477 3.40025 11.3645C3.88948 11.647 3.88947 12.3531 3.40026 12.6355C2.33184 13.2524 1.96578 14.6186 2.58263 15.687L4.09863 18.3128C4.71562 19.3814 6.08215 19.7474 7.15067 19.1305C7.64015 18.8479 8.25182 19.2012 8.25182 19.766C8.25182 20.9998 9.25201 22 10.4858 22H13.5182C14.7519 22 15.7518 20.9998 15.7518 19.7663C15.7518 19.2015 16.3632 18.8487 16.852 19.1309C17.9202 19.7476 19.2862 19.3816 19.9029 18.3134L21.4193 15.6869C22.0361 14.6185 21.6701 13.2523 20.6017 12.6355C20.1125 12.3531 20.1125 11.647 20.6017 11.3645C21.6701 10.7477 22.0362 9.38152 21.4193 8.3131L19.903 5.68667C19.2862 4.61842 17.9202 4.25241 16.852 4.86917C16.3632 5.15138 15.7518 4.79856 15.7518 4.23377C15.7518 3.00024 14.7519 2 13.5182 2ZM9.6659 11.9999C9.6659 10.7103 10.7113 9.66493 12.0009 9.66493C13.2905 9.66493 14.3359 10.7103 14.3359 11.9999C14.3359 13.2895 13.2905 14.3349 12.0009 14.3349C10.7113 14.3349 9.6659 13.2895 9.6659 11.9999ZM12.0009 8.16493C9.88289 8.16493 8.1659 9.88191 8.1659 11.9999C8.1659 14.1179 9.88289 15.8349 12.0009 15.8349C14.1189 15.8349 15.8359 14.1179 15.8359 11.9999C15.8359 9.88191 14.1189 8.16493 12.0009 8.16493Z"
//                   fill=""
//                 />
//               </svg>
//               Settings
//             </DropdownItem>
//           </li>
//         </ul>
//         <Link
//           href="/signin"
//           className="flex items-center gap-3 px-3 py-2 mt-3 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
//         >
//           <svg
//             className="fill-gray-500 group-hover:fill-gray-700 dark:group-hover:fill-gray-300"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fillRule="evenodd"
//               clipRule="evenodd"
//               d="M15.1007 19.247C14.6865 19.247 14.3507 18.9112 14.3507 18.497L14.3507 14.245H12.8507V18.497C12.8507 19.7396 13.8581 20.747 15.1007 20.747H18.5007C19.7434 20.747 20.7507 19.7396 20.7507 18.497L20.7507 5.49609C20.7507 4.25345 19.7433 3.24609 18.5007 3.24609H15.1007C13.8581 3.24609 12.8507 4.25345 12.8507 5.49609V9.74501L14.3507 9.74501V5.49609C14.3507 5.08188 14.6865 4.74609 15.1007 4.74609L18.5007 4.74609C18.9149 4.74609 19.2507 5.08188 19.2507 5.49609L19.2507 18.497C19.2507 18.9112 18.9149 19.247 18.5007 19.247H15.1007ZM3.25073 11.9984C3.25073 12.2144 3.34204 12.4091 3.48817 12.546L8.09483 17.1556C8.38763 17.4485 8.86251 17.4487 9.15549 17.1559C9.44848 16.8631 9.44863 16.3882 9.15583 16.0952L5.81116 12.7484L16.0007 12.7484C16.4149 12.7484 16.7507 12.4127 16.7507 11.9984C16.7507 11.5842 16.4149 11.2484 16.0007 11.2484L5.81528 11.2484L9.15585 7.90554C9.44864 7.61255 9.44847 7.13767 9.15547 6.84488C8.86248 6.55209 8.3876 6.55226 8.09481 6.84525L3.52309 11.4202C3.35673 11.5577 3.25073 11.7657 3.25073 11.9984Z"
//               fill=""
//             />
//           </svg>
//           Sign out
//         </Link>
//       </Dropdown>
//     </div>
//   )
// }
"use client"
import Image from "next/image"
import type React from "react"

import Link from "next/link"
import { useState, useEffect } from "react"
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
  } // For any other properties that might exist
}

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch the current user data when component mounts
    async function fetchCurrentUser() {
      try {
        const token = localStorage.getItem("token") // Get token from localStorage

        if (!token) {
          setLoading(false)
          return // No token, no user
        }

        // First try to get the current user from /api/users/me endpoint
        let response = await fetch("https://back-end-f.vercel.app/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        })

        // If that fails, try the /api/users endpoint with the token
        if (!response.ok) {
          // Get user ID from token
          const tokenPayload = JSON.parse(atob(token.split(".")[1]))
          const userId = tokenPayload.userId

          if (!userId) {
            console.error("No user ID in token")
            setLoading(false)
            return
          }

          // Fetch all users and find the one matching our ID
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
            } else {
              console.error("User not found in users list")
            }
          } else {
            console.error("Failed to fetch users list")
          }
        } else {
          // If /api/users/me worked, use that data
          const userData = await response.json()
          setUser(userData)
        }
      } catch (error) {
        console.error("Error fetching user data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCurrentUser()
  }, [])

  function toggleDropdown(e: React.MouseEvent) {
    e.stopPropagation()
    setIsOpen((prev) => !prev)
  }

  function closeDropdown() {
    setIsOpen(false)
  }

  // Display a loading state while fetching user data
  if (loading) {
    return <div className="h-11 w-11 rounded-full bg-gray-200 animate-pulse"></div>
  }

  // If no user is found, you might want to redirect to login or show a sign-in button
  if (!user) {
    return (
      <Link href="/signin" className="flex items-center text-gray-700 dark:text-gray-400">
        Sign In
      </Link>
    )
  }

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="flex items-center text-gray-700 dark:text-gray-400 dropdown-toggle">
        <span className="mr-3 overflow-hidden rounded-full h-11 w-11">
          <Image width={44} height={44} src="/images/user/owner.jpg" alt="User" />
        </span>

        {/* Display the username here */}
        <span className="block mr-1 font-medium text-theme-sm">{user.name || user.username || user.email}</span>

        <svg
          className={`stroke-gray-500 dark:stroke-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          width="18"
          height="20"
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
        className="absolute right-0 mt-[17px] flex w-[260px] flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
      >
        <div>
          {/* Display the username and name if available */}
          <span className="block font-medium text-gray-700 text-theme-sm dark:text-gray-400">
            {user.name || user.username || user.email}
          </span>
          <span className="mt-0.5 block text-theme-xs text-gray-500 dark:text-gray-400">{user.email}</span>
        </div>

        {/* Display crypto balances */}
        {user.numbers && (
          <div className="mt-3 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-theme-xs font-medium text-gray-600 dark:text-gray-300">BTC Balance</span>
              <span className="text-theme-sm font-bold text-amber-500">{user.numbers.btc}</span>
            </div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-theme-xs font-medium text-gray-600 dark:text-gray-300">USD Balance</span>
              <span className="text-theme-sm font-bold text-green-500">${user.numbers.usd}</span>
            </div>
          </div>
        )}

        <ul className="flex flex-col gap-1 pt-4 pb-3 border-b border-gray-200 dark:border-gray-800">
          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              tag="a"
              href="/profile"
              className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              <svg
                className="fill-gray-500 group-hover:fill-gray-700 dark:fill-gray-400 dark:group-hover:fill-gray-300"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 14.1526 4.3002 16.1184 5.61936 17.616C6.17279 15.3096 8.24852 13.5955 10.7246 13.5955H13.2746C15.7509 13.5955 17.8268 15.31 18.38 17.6167C19.6996 16.119 20.5 14.153 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM17.0246 18.8566V18.8455C17.0246 16.7744 15.3457 15.0955 13.2746 15.0955H10.7246C8.65354 15.0955 6.97461 16.7744 6.97461 18.8455V18.856C8.38223 19.8895 10.1198 20.5 12 20.5C13.8798 20.5 15.6171 19.8898 17.0246 18.8566ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.9991 7.25C10.8847 7.25 9.98126 8.15342 9.98126 9.26784C9.98126 10.3823 10.8847 11.2857 11.9991 11.2857C13.1135 11.2857 14.0169 10.3823 14.0169 9.26784C14.0169 8.15342 13.1135 7.25 11.9991 7.25ZM8.48126 9.26784C8.48126 7.32499 10.0563 5.75 11.9991 5.75C13.9419 5.75 15.5169 7.32499 15.5169 9.26784C15.5169 11.2107 13.9419 12.7857 11.9991 12.7857C10.0563 12.7857 8.48126 11.2107 8.48126 9.26784Z"
                  fill=""
                />
              </svg>
              Edit profile
            </DropdownItem>
          </li>
          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              tag="a"
              href="/wallet"
              className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              <svg
                className="fill-gray-500 group-hover:fill-gray-700 dark:fill-gray-400 dark:group-hover:fill-gray-300"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.5 8.5H19C20.1046 8.5 21 9.39543 21 10.5V17.5C21 18.6046 20.1046 19.5 19 19.5H5C3.89543 19.5 3 18.6046 3 17.5V10.5C3 9.39543 3.89543 8.5 5 8.5H6.5V6.5C6.5 4.84315 7.84315 3.5 9.5 3.5H14.5C16.1569 3.5 17.5 4.84315 17.5 6.5V8.5ZM16 8.5V6.5C16 5.67157 15.3284 5 14.5 5H9.5C8.67157 5 8 5.67157 8 6.5V8.5H16ZM5 10H19C19.2761 10 19.5 10.2239 19.5 10.5V17.5C19.5 17.7761 19.2761 18 19 18H5C4.72386 18 4.5 17.7761 4.5 17.5V10.5C4.5 10.2239 4.72386 10 5 10ZM16.5 13.5C16.5 14.0523 16.0523 14.5 15.5 14.5C14.9477 14.5 14.5 14.0523 14.5 13.5C14.5 12.9477 14.9477 12.5 15.5 12.5C16.0523 12.5 16.5 12.9477 16.5 13.5Z"
                  fill=""
                />
              </svg>
              Wallet
            </DropdownItem>
          </li>
          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              tag="a"
              href="/settings"
              className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              <svg
                className="fill-gray-500 group-hover:fill-gray-700 dark:fill-gray-400 dark:group-hover:fill-gray-300"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.4858 3.5L13.5182 3.5C13.9233 3.5 14.2518 3.82851 14.2518 4.23377C14.2518 5.9529 16.1129 7.02795 17.602 6.1682C17.9528 5.96567 18.4014 6.08586 18.6039 6.43667L20.1203 9.0631C20.3229 9.41407 20.2027 9.86286 19.8517 10.0655C18.3625 10.9253 18.3625 13.0747 19.8517 13.9345C20.2026 14.1372 20.3229 14.5859 20.1203 14.9369L18.6039 17.5634C18.4013 17.9142 17.9528 18.0344 17.602 17.8318C16.1129 16.9721 14.2518 18.0471 14.2518 19.7663C14.2518 20.1715 13.9233 20.5 13.5182 20.5H10.4858C10.0804 20.5 9.75182 20.1714 9.75182 19.766C9.75182 18.0461 7.88983 16.9717 6.40067 17.8314C6.04945 18.0342 5.60037 17.9139 5.39767 17.5628L3.88167 14.937C3.67903 14.586 3.79928 14.1372 4.15026 13.9346C5.63949 13.0748 5.63946 10.9253 4.15025 10.0655C3.79926 9.86282 3.67901 9.41401 3.88165 9.06303L5.39764 6.43725C5.60034 6.08617 6.04943 5.96581 6.40065 6.16858C7.88982 7.02836 9.75182 5.9539 9.75182 4.23399C9.75182 3.82862 10.0804 3.5 10.4858 3.5ZM13.5182 2L10.4858 2C9.25201 2 8.25182 3.00019 8.25182 4.23399C8.25182 4.79884 7.64013 5.15215 7.15065 4.86955C6.08213 4.25263 4.71559 4.61859 4.0986 5.68725L2.58261 8.31303C1.96575 9.38146 2.33183 10.7477 3.40025 11.3645C3.88948 11.647 3.88947 12.3531 3.40026 12.6355C2.33184 13.2524 1.96578 14.6186 2.58263 15.687L4.09863 18.3128C4.71562 19.3814 6.08215 19.7474 7.15067 19.1305C7.64015 18.8479 8.25182 19.2012 8.25182 19.766C8.25182 20.9998 9.25201 22 10.4858 22H13.5182C14.7519 22 15.7518 20.9998 15.7518 19.7663C15.7518 19.2015 16.3632 18.8487 16.852 19.1309C17.9202 19.7476 19.2862 19.3816 19.9029 18.3134L21.4193 15.6869C22.0361 14.6185 21.6701 13.2523 20.6017 12.6355C20.1125 12.3531 20.1125 11.647 20.6017 11.3645C21.6701 10.7477 22.0362 9.38152 21.4193 8.3131L19.903 5.68667C19.2862 4.61842 17.9202 4.25241 16.852 4.86917C16.3632 5.15138 15.7518 4.79856 15.7518 4.23377C15.7518 3.00024 14.7519 2 13.5182 2ZM9.6659 11.9999C9.6659 10.7103 10.7113 9.66493 12.0009 9.66493C13.2905 9.66493 14.3359 10.7103 14.3359 11.9999C14.3359 13.2895 13.2905 14.3349 12.0009 14.3349C10.7113 14.3349 9.6659 13.2895 9.6659 11.9999ZM12.0009 8.16493C9.88289 8.16493 8.1659 9.88191 8.1659 11.9999C8.1659 14.1179 9.88289 15.8349 12.0009 15.8349C14.1189 15.8349 15.8359 14.1179 15.8359 11.9999C15.8359 9.88191 14.1189 8.16493 12.0009 8.16493Z"
                  fill=""
                />
              </svg>
              Settings
            </DropdownItem>
          </li>
        </ul>
        <Link
          href="/signin"
          className="flex items-center gap-3 px-3 py-2 mt-3 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
        >
          <svg
            className="fill-gray-500 group-hover:fill-gray-700 dark:group-hover:fill-gray-300"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.1007 19.247C14.6865 19.247 14.3507 18.9112 14.3507 18.497L14.3507 14.245H12.8507V18.497C12.8507 19.7396 13.8581 20.747 15.1007 20.747H18.5007C19.7434 20.747 20.7507 19.7396 20.7507 18.497L20.7507 5.49609C20.7507 4.25345 19.7433 3.24609 18.5007 3.24609H15.1007C13.8581 3.24609 12.8507 4.25345 12.8507 5.49609V9.74501L14.3507 9.74501V5.49609C14.3507 5.08188 14.6865 4.74609 15.1007 4.74609L18.5007 4.74609C18.9149 4.74609 19.2507 5.08188 19.2507 5.49609L19.2507 18.497C19.2507 18.9112 18.9149 19.247 18.5007 19.247H15.1007ZM3.25073 11.9984C3.25073 12.2144 3.34204 12.4091 3.48817 12.546L8.09483 17.1556C8.38763 17.4485 8.86251 17.4487 9.15549 17.1559C9.44848 16.8631 9.44863 16.3882 9.15583 16.0952L5.81116 12.7484L16.0007 12.7484C16.4149 12.7484 16.7507 12.4127 16.7507 11.9984C16.7507 11.5842 16.4149 11.2484 16.0007 11.2484L5.81528 11.2484L9.15585 7.90554C9.44864 7.61255 9.44847 7.13767 9.15547 6.84488C8.86248 6.55209 8.3876 6.55226 8.09481 6.84525L3.52309 11.4202C3.35673 11.5577 3.25073 11.7657 3.25073 11.9984Z"
              fill=""
            />
          </svg>
          Sign out
        </Link>
      </Dropdown>
    </div>
  )
}

