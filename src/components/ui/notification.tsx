// "use client"

// import { useEffect, useState } from "react"

// type NotificationType = "success" | "error" | "info"

// interface NotificationProps {
//   message: string
//   type: NotificationType
//   duration?: number
//   onClose: () => void
// }

// export function Notification({ message, type, duration = 3000, onClose }: NotificationProps) {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onClose()
//     }, duration)

//     return () => clearTimeout(timer)
//   }, [duration, onClose])

//   const bgColor = type === "success" ? "bg-green-500" : type === "error" ? "bg-red-500" : "bg-blue-500"

//   return (
//     <div
//       className={`fixed top-4 right-4 z-50 p-4 rounded-md shadow-md text-white ${bgColor} flex items-center justify-between`}
//     >
//       <span>{message}</span>
//       <button onClick={onClose} className="ml-4 text-white hover:text-gray-200">
//         ✕
//       </button>
//     </div>
//   )
// }

// export function useNotification() {
//   const [notification, setNotification] = useState<{
//     message: string
//     type: NotificationType
//     visible: boolean
//   }>({
//     message: "",
//     type: "info",
//     visible: false,
//   })

//   const showNotification = (message: string, type: NotificationType) => {
//     setNotification({
//       message,
//       type,
//       visible: true,
//     })
//   }

//   const hideNotification = () => {
//     setNotification((prev) => ({ ...prev, visible: false }))
//   }

//   return {
//     notification,
//     showNotification,
//     hideNotification,
//   }
// }


"use client"

import { useEffect, useState } from "react"

type NotificationType = "success" | "error" | "info"

interface NotificationProps {
  message: string
  type: NotificationType
  duration?: number
  onClose: () => void
}

export function Notification({ message, type, duration = 3000, onClose }: NotificationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const bgColor = type === "success" ? "bg-emerald-500" : type === "error" ? "bg-red-500" : "bg-blue-500"

  return (
    <div
      className={`fixed top-4 right-4 z-50 p-4 rounded-md shadow-md text-white ${bgColor} flex items-center justify-between`}
    >
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 text-white hover:text-gray-200">
        ✕
      </button>
    </div>
  )
}

export function useNotification() {
  const [notification, setNotification] = useState<{
    message: string
    type: NotificationType
    visible: boolean
  }>({
    message: "",
    type: "info",
    visible: false,
  })

  const showNotification = (message: string, type: NotificationType) => {
    setNotification({
      message,
      type,
      visible: true,
    })
  }

  const hideNotification = () => {
    setNotification((prev) => ({ ...prev, visible: false }))
  }

  return {
    notification,
    showNotification,
    hideNotification,
  }
}

