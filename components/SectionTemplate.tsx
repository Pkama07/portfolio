import { ReactNode } from 'react'

interface SectionTemplateProps {
    name: string
    children: ReactNode
}

export default function SectionTemplate({ name, children }: SectionTemplateProps) {
    return (
        <section className="flex flex-col">
            <div className="text-primary border-primary border-b text-xl pb-1">{name}</div>
            <div className="pt-2">{children}</div>
        </section>
    )
}

