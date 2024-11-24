import { ExperienceProps } from '@/components/Experience'
import Experience from '@/components/Experience'

export default function ExperienceSection() {
    const experienceInfo: ExperienceProps[] = [
        {
            position: 'Software Engineer Intern',
            company: 'Molex',
            start: 'May 2024',
            end: 'August 2024',
            location: 'Bridgewater, NJ',
            bullets: [
                'Worked with optics and reliability engineers to create a CLI to identify LCoS phase shifts that maximize channel bandwidth',
                'Created a tool to error-check WSS devices by parsing millions of calibration datum and visualizing lens function parameters',
                'Wrote a CLI for benchmarking device performance by generating comparative datasheets from remotely-hosted metrics',
                'Enhancing C-based OSA and LCoS analysis software with new features to help engineers minimize crosstalk in WSS devices',
            ],
        },
    ]

    return (
        <div className="flex flex-col">
            {experienceInfo.map((ei, index) => (
                <Experience {...ei} key={index} />
            ))}
        </div>
    )
}

