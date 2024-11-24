export interface CommitSquareProps {
    count: number
    fraction: number
    date: string
}

const R_RANGE = [16, 64]
const G_RANGE = [68, 212]
const B_RANGE = [44, 84]

const getValue = (range: number[], fraction: number) => Math.round((range[1] - range[0]) * fraction) + range[0]

function generateColor(fraction: number) {
    if (fraction == 0) return `rgb(24, 28, 36)`
    return `rgb(${getValue(R_RANGE, fraction)}, ${getValue(G_RANGE, fraction)}, ${getValue(B_RANGE, fraction)})`
}

export default function CommitSquare({ count, fraction, date }: CommitSquareProps) {
    const borderColor = generateColor(fraction * 1.5)
    const backgroundColor = generateColor(fraction)
    return <div className="w-3 h-3 rounded-[0.2rem] border" style={{ backgroundColor, borderColor }}></div>
}

