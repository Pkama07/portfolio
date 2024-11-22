import SectionTemplate from '@/components/SectionTemplate'

// Individual sections
import Summary from '@/components/Summary'

export default function Home() {
    return (
        <div className="flex flex-col gap-2 pt-20">
            <h1 className="text-5xl text-primary">Pradyun Kamaraju</h1>
            <h2 className="text-3xl text-secondary">Software engineer & aspiring entrepreneur</h2>
            <SectionTemplate name="Summary">
                <Summary />
            </SectionTemplate>
        </div>
    )
}

