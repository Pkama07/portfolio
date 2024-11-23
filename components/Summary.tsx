import GitHubCalendar from '@/components/GitHubCalendar'

export default function Summary() {
    return (
        <div className="flex w-full border border-green-400">
            <p className="w-1/3">
                I'm a junior at Purdue University studying Computer Science and Math. I'm currently working on{' '}
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
            <GitHubCalendar className="w-2/3" />
        </div>
    )
}

