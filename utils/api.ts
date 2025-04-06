// Utility function for API requests
export async function apiRequest(endpoint: string, method: string, data?: any) {
    try {
      const response = await fetch(`https://f-backend-l4sd.vercel.app/api/${endpoint}`, {
        method,
        headers: {
          "Content-Type": "application/json",
          // Add authorization if needed
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: data ? JSON.stringify(data) : undefined,
      })
  
      const result = await response.json()
  
      if (!response.ok) {
        throw new Error(result.error || "Something went wrong")
      }
  
      return result
    } catch (error) {
      console.error("API request error:", error)
      throw error
    }
  }
  
  