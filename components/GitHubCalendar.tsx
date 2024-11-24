'use client'

import { getGithubCommits, CommitData } from '@/app/lib/github'
import { useEffect, useState } from 'react'
import { cn } from '@/app/lib/utils'
import CommitSquare, { CommitSquareProps } from '@/components/CommitSquare'

interface GitHubCalendarProps {
    className?: string
}

export default function GitHubCalendar({ className }: GitHubCalendarProps) {
    const [commitSquareData, setCommitSquareData] = useState<CommitSquareProps[][]>([])

    const generateCommitSquareData = async () => {
        const results = await getGithubCommits('Pkama07', 26)
        const today = new Date()
        let currDate = results.startDate
        let currSquareList: CommitSquareProps[] = []
        let weekList: CommitSquareProps[][] = []
        let dayIndex = 0
        while (currDate.getTime() <= today.getTime()) {
            const date = currDate.toISOString().slice(0, 10)
            const count = results.dates[date] ?? 0
            const fraction = count / results.max
            currSquareList.push({ count, fraction, date })
            dayIndex = (dayIndex + 1) % 7
            if (dayIndex == 0) {
                weekList.push(currSquareList)
                currSquareList = []
            }
            currDate.setDate(currDate.getDate() + 1)
        }
        setCommitSquareData(weekList)
    }

    // useEffect(() => {
    //     generateCommitSquareData()
    // }, [])

    return (
        <div className="flex flex-col w-fit">
            <h2>My GitHub activity (custom component):</h2>
            <div className={cn(className, 'p-2 border border-[#3d444d] bg-[#0d1116] rounded-md')}>
                <div className="flex gap-1">
                    {commitSquareData.map((week, index) => (
                        <div key={index} className="flex flex-col gap-1">
                            {week.map((day, index) => (
                                <CommitSquare key={index} {...day} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

