import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'
import { cn } from '@/app/lib/utils'
import './globals.css'

export const metadata: Metadata = {
    title: 'Pradyun Kamaraju',
    description: 'Personal website',
}

const sm = Space_Mono({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={cn(sm.className, 'mx-44 bg-theme')}>{children}</body>
        </html>
    )
}

