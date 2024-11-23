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
        const results = await getGithubCommits('Pkama07', 3)
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
        console.log(weekList)
    }

    useEffect(() => {
        generateCommitSquareData()
    }, [])

    return (
        <div className={cn(className, 'p-2 h-full')}>
            oweijf
            <div className="border border-[#3d444d] rounded-md h-full flex flex-col gap-y-[1px]"></div>
        </div>
    )
}

