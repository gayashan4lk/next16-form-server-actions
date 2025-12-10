import BasicForm from '@/components/custom/BasicForm'

export default function Home() {
	return (
		<div>
			<main className="mx-auto max-w-3xl">
				<h1 className="text-4xl font-semibold mb-6">Next.js 16 - form - server actions</h1>

				{/* Basic Form */}
				<div className="border-slate-500 border rounded-md p-4">
					<h2 className="text-2xl font-semibold mb-2 ">Basic Form</h2>
					<BasicForm />
				</div>
			</main>
		</div>
	)
}
