import GitHubCalendar from '@/components/GitHubCalendar'

export default function SummarySection() {
    return (
        <div className="flex flex-col w-full items-start gap-4">
            <p>
                I'm a junior at Purdue University studying Computer Science and Math and an incoming SWE intern at
                Palantir. I'm currently working on{' '}
                <a href="https://www.jumpseatapp.com/" className="underline" target="_blank">
                    Jumpseat
                </a>
                , a startup aiming to provide cheap flight tickets. I ripped the color scheme for this website from{' '}
                <a
                    href="https://github.com/NLKNguyen/papercolor-theme?tab=readme-ov-file"
                    className="underline"
                    target="_blank"
                >
                    here
                </a>
                . You can view the source code for this website{' '}
                <a href="https://github.com/Pkama07/portfolio" target="_blank" className="underline">
                    here
                </a>
                .
            </p>
            <GitHubCalendar className="border border-red-400" />
        </div>
    )
}

