import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "./data/contexts/AuthContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Votação Online",
  description: "Realize sua votação de forma rápida e segura",
  icons: "../public/favicon.ico",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className="dark">
      <body className={`${inter.className} overflow-x-hidden`}>
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="any"
          className="rounded-full"
        />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
