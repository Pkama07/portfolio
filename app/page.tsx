import SectionTemplate from '@/components/SectionTemplate'
import SummarySection from '@/components/SummarySection'
import ExperienceSection from '@/components/ExperienceSection'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Home() {
    return (
        <div className="flex flex-col gap-2 pt-20">
            <div className="text-5xl text-primary flex gap-4 items-center">
                <h1>Pradyun Kamaraju</h1>
                <a href="https://www.linkedin.com/in/pradyun-kamaraju-b8a28821b" target="_blank">
                    <FaLinkedin className="text-4xl" />
                </a>
                <a href="https://github.com/Pkama07" target="_blank">
                    <FaGithub className="text-4xl" />
                </a>
            </div>
            <h2 className="text-3xl text-secondary">Software engineer & aspiring entrepreneur</h2>
            <SectionTemplate name="Summary">
                <SummarySection />
            </SectionTemplate>
            <SectionTemplate name="Experience">
                <ExperienceSection />
            </SectionTemplate>
        </div>
    )
}

