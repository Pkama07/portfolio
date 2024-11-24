export interface ExperienceProps {
    position: string
    start: string
    end: string
    company: string
    location: string
    bullets: string[]
}

export default function Experience(props: ExperienceProps) {
    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between">
                <p>
                    {props.position} at {props.company}
                </p>
                <p>
                    {props.start} - {props.end}
                </p>
            </div>
            <ul className="flex flex-col">
                {props.bullets.map((b, index) => (
                    <li key={index}>{b}</li>
                ))}
            </ul>
        </div>
    )
}

