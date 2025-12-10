import BasicForm from '@/components/custom/BasicForm'
import IntermediateForm from '@/components/custom/IntermediateForm'

export default function Home() {
	return (
		<div>
			<main className="mx-auto max-w-3xl px-2">
				<h1 className="mb-6 text-4xl font-semibold">Next.js 16 - form - server actions</h1>

				<div className="space-y-4">
					{/* Basic Form */}
					<div className="rounded-md border border-slate-500 p-4">
						<h2 className="mb-2 text-2xl font-semibold">Basic Form</h2>
						<BasicForm />
					</div>

					{/* Basic Form */}
					<div className="rounded-md border border-slate-500 p-4">
						<h2 className="mb-2 text-2xl font-semibold">Intermediate Form</h2>
						<IntermediateForm />
					</div>
				</div>
			</main>
		</div>
	)
}
