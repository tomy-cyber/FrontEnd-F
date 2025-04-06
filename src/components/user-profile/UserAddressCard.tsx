"use client"
import { useEffect, useState } from "react"
import type React from "react"

import { useModal } from "../../hooks/useModal"
import { Modal } from "../ui/modal"
import Button from "../ui/button/Button"
import Input from "../form/input/InputField"
import Label from "../form/Label"
import { Notification, useNotification } from "../ui/notification"

// interface UserAddress {
//   country?: string
//   cityState?: string
//   postalCode?: string
//   taxId?: string
//   walletAddress?: string
// }

// interface UserData {
//   address?: UserAddress
// }

interface FormDataType {
  country: string
  cityState: string
  postalCode: string
  taxId: string
  walletAddress: string
}

export default function UserAddressCard() {
  const { isOpen, openModal, closeModal } = useModal()
  const { notification, showNotification, hideNotification } = useNotification()
  // We'll use formData directly instead of a separate user state
  // since we're initializing formData from the user data
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState<FormDataType>({
    country: "United States",
    cityState: "Phoenix, Arizona, United States.",
    postalCode: "ERT 2489",
    taxId: "AS4568384",
    walletAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  })

  useEffect(() => {
    fetchUser()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  // We're intentionally only running this once on mount

  async function fetchUser() {
    try {
      setLoading(true)
      const response = await fetch("https://f-backend-l4sd.vercel.app/api/users")
      const data = await response.json()
      //setUser(data);

      // Initialize form data
      if (data && data.address) {
        setFormData((prev) => ({
          ...prev,
          country: data.address.country || "United States",
          cityState: data.address.cityState || "Phoenix, Arizona, United States.",
          postalCode: data.address.postalCode || "ERT 2489",
          taxId: data.address.taxId || "AS4568384",
          walletAddress: data.address.walletAddress || "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
        }))
      }

      setLoading(false)
    } catch (error) {
      console.error("Error fetching user:", error)
      showNotification("Failed to load user data", "error")
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setSaving(true)

      // Prepare the data to send to the backend
      const updatedAddress = {
        country: formData.country,
        cityState: formData.cityState,
        postalCode: formData.postalCode,
        taxId: formData.taxId,
        walletAddress: formData.walletAddress,
      }

      // Send the update request
      // Mocking API request for demo purposes
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Update the local state with the new data
      // Just update the form data since we're not using the user state
      setFormData(updatedAddress)

      // Close the modal
      closeModal()

      // Show success message
      showNotification("🚀 Address updated successfully!", "success")
    } catch (error) {
      console.error("Error updating address:", error)
      showNotification("❌ Failed to update address", "error")
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6 flex justify-center items-center">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-gray-300 dark:bg-gray-700 h-12 w-12"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Function to truncate wallet address for display
  const truncateAddress = (address: string) => {
    if (!address) return ""
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
  }

  return (
    <>
      {notification.visible && (
        <Notification message={notification.message} type={notification.type} onClose={hideNotification} />
      )}

      <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h4 className="text-lg font-semibold text-white lg:mb-6 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-emerald-400"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 22V12h6v10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Address
            </h4>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
              <div>
                <p className="mb-2 text-xs leading-normal text-gray-400">Country</p>
                <p className="text-sm font-medium text-white">{formData.country}</p>
              </div>

              <div>
                <p className="mb-2 text-xs leading-normal text-gray-400">City/State</p>
                <p className="text-sm font-medium text-white">{formData.cityState}</p>
              </div>

              <div>
                <p className="mb-2 text-xs leading-normal text-gray-400">Postal Code</p>
                <p className="text-sm font-medium text-white">{formData.postalCode}</p>
              </div>

              <div>
                <p className="mb-2 text-xs leading-normal text-gray-400">TAX ID</p>
                <p className="text-sm font-medium text-white">{formData.taxId}</p>
              </div>

              <div className="col-span-1 lg:col-span-2">
                <p className="mb-2 text-xs leading-normal text-gray-400">Wallet Address</p>
                <p className="text-sm font-medium text-white flex items-center">
                  <span className="bg-emerald-900/30 text-emerald-400 px-3 py-1 rounded-md font-mono">
                    {truncateAddress(formData.walletAddress)}
                  </span>
                  <button
                    className="ml-2 text-gray-400 hover:text-emerald-400"
                    onClick={() => {
                      navigator.clipboard.writeText(formData.walletAddress)
                      showNotification("Wallet address copied to clipboard!", "success")
                    }}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={openModal}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-emerald-600 bg-emerald-700/30 px-4 py-3 text-sm font-medium text-emerald-400 hover:bg-emerald-700/50 hover:text-emerald-300 lg:inline-flex lg:w-auto"
          >
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.0911 2.78206C14.2125 1.90338 12.7878 1.90338 11.9092 2.78206L4.57524 10.116C4.26682 10.4244 4.0547 10.8158 3.96468 11.2426L3.31231 14.3352C3.25997 14.5833 3.33653 14.841 3.51583 15.0203C3.69512 15.1996 3.95286 15.2761 4.20096 15.2238L7.29355 14.5714C7.72031 14.4814 8.11172 14.2693 8.42013 13.9609L15.7541 6.62695C16.6327 5.74827 16.6327 4.32365 15.7541 3.44497L15.0911 2.78206ZM12.9698 3.84272C13.2627 3.54982 13.7376 3.54982 14.0305 3.84272L14.6934 4.50563C14.9863 4.79852 14.9863 5.2734 14.6934 5.56629L14.044 6.21573L12.3204 4.49215L12.9698 3.84272ZM11.2597 5.55281L5.6359 11.1766C5.53309 11.2794 5.46238 11.4099 5.43238 11.5522L5.01758 13.5185L6.98394 13.1037C7.1262 13.0737 7.25666 13.003 7.35947 12.9002L12.9833 7.27639L11.2597 5.55281Z"
                fill=""
              />
            </svg>
            Edit Address
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="relative w-full p-4 overflow-y-auto bg-gray-900 no-scrollbar rounded-3xl lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-white flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-emerald-400"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 22V12h6v10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Edit Crypto Address
            </h4>
            <p className="mb-6 text-sm text-gray-400 lg:mb-7">Update your details to keep your profile up-to-date.</p>
          </div>
          <form className="flex flex-col" onSubmit={handleSave}>
            <div className="px-2 overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                <div>
                  <Label>Country</Label>
                  <Input
                    type="text"
                    name="country"
                    defaultValue={formData.country}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <div>
                  <Label>City/State</Label>
                  <Input
                    type="text"
                    name="cityState"
                    defaultValue={formData.cityState}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <div>
                  <Label>Postal Code</Label>
                  <Input
                    type="text"
                    name="postalCode"
                    defaultValue={formData.postalCode}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <div>
                  <Label>TAX ID</Label>
                  <Input
                    type="text"
                    name="taxId"
                    defaultValue={formData.taxId}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <div className="col-span-1 lg:col-span-2">
                  <Label>Wallet Address</Label>
                  <Input
                    type="text"
                    name="walletAddress"
                    defaultValue={formData.walletAddress}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white font-mono"
                  />
                  <p className="mt-1 text-xs text-gray-400">
                    Enter your Ethereum wallet address for receiving crypto payments
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
              <Button
                size="sm"
                variant="outline"
                onClick={closeModal}
                type="button"
                className="border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                Close
              </Button>
              <Button
                size="sm"
                type="submit"
                disabled={saving}
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                {saving ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Save Changes"
                )}
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  )
}

