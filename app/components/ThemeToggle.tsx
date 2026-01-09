"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Éviter l'erreur d'hydratation
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg border-2 border-[#C5A028] text-[#C5A028] hover:bg-[#C5A028] hover:text-white transition-all duration-300"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? (
        <SunIcon className="h-6 w-6" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
    </button>
  )
}