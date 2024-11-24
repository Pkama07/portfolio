'use server'

import { Octokit } from 'octokit'

export interface CommitData {
    max: number
    startDate: Date
    dates: {
        [key: string]: number
    }
}

const client = new Octokit({
    auth: process.env.GITHUB_TOKEN!,
    previews: ['cloak'],
})

function getDateThresholdString(weeks: number): Date {
    const today = new Date()
    today.setDate(today.getDate() - today.getDay() - 7 * (weeks - 1))
    return today
}

export async function getGithubCommits(username: string, weeks: number): Promise<CommitData> {
    const dateThreshold = getDateThresholdString(weeks)
    const dateThresholdString = dateThreshold.toISOString().slice(0, 10)
    let requests = []
    let page = 1
    while (page <= 10) {
        requests.push(
            client
                .request('GET /search/commits', {
                    q: `author:${username} author-date:>=${dateThresholdString}`,
                    sort: 'author-date',
                    order: 'asc',
                    per_page: 100,
                    page,
                })
                .then((response) => response.data.items)
        )
        page++
    }
    const groups = await Promise.all(requests)
    let commitList: CommitData = {
        max: 0,
        startDate: dateThreshold,
        dates: {},
    }
    for (let commitGroup of groups) {
        for (let item of commitGroup) {
            const dateString = item.commit.author.date.slice(0, 10)
            if (!commitList.dates[dateString]) {
                commitList.dates[dateString] = 0
            }
            commitList.dates[dateString]++
        }
    }
    for (let total of Object.values(commitList.dates)) commitList.max = Math.max(commitList.max, total)
    return commitList
}

