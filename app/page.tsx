import BasicForm from '@/components/custom/BasicForm'

export default function Home() {
	return (
		<div>
			<main className="mx-auto max-w-3xl">
				<h1 className="mb-6 text-4xl font-semibold">Next.js 16 - form - server actions</h1>

				{/* Basic Form */}
				<div className="rounded-md border border-slate-500 p-4">
					<h2 className="mb-2 text-2xl font-semibold">Basic Form</h2>
					<BasicForm />
				</div>
			</main>
		</div>
	)
}
