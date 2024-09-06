"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function BloquearVoltar() {
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handlePopState = () => {
        history.pushState(null, "", window.location.href)
      }
      history.pushState(null, "", window.location.href)

      window.addEventListener("popstate", handlePopState)

      return () => {
        window.removeEventListener("popstate", handlePopState)
      }
    }
  }, [router])

  return null
}
