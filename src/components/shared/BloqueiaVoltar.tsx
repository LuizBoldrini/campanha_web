"use client"
import { useEffect } from "react"

export default function BloquearVoltar() {
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
  }, [])

  return null
}
