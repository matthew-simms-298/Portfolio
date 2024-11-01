import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/MainHeader'
import Footer from './components/Footer'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Matthew Simms Portfolio',
  description: 'Hello and welcome to my portfolio website!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}