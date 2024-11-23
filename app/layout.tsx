import type { Metadata } from 'next'
import { cn } from '@/app/lib/utils'
import localFont from 'next/font/local'
import './globals.css'

export const metadata: Metadata = {
    title: 'Pradyun Kamaraju',
    description: 'Personal website',
}

const menlo = localFont({
    src: [
        {
            path: './fonts/Menlo-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={cn(menlo.className, 'mx-44 bg-theme')}>{children}</body>
        </html>
    )
}

