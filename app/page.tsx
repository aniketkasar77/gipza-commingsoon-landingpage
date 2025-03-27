"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"

export default function ComingSoonPage() {
  // Set launch date to 30 days from now
  const launchDate = new Date()
  launchDate.setDate(launchDate.getDate() + 30)

  return (
    <div className="min-h-screen flex flex-col">
      <header className="container mx-auto py-6 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/gipza-logo.png" alt="Gipza" width={100} height={40} className="h-10 w-auto" />
          </div>
          <div className="flex gap-4">
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Something <span className="text-primary">Special</span> is Coming Soon
          </h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            We're crafting a unique gift shopping experience. Be the first to know when we launch our collection of
            thoughtfully curated gifts for every occasion.
          </p>

          <div className="mb-16">
            <CountdownTimer targetDate={launchDate} />
          </div>
        </div>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Gipza. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

