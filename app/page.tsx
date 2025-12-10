async function saveAction(formData: FormData) {
	'use server'
	const name = formData.get('name')
	const email = formData.get('email')
	console.log('name:', name)
	console.log('email:', email)
}

export default function Home() {
	return (
		<div>
			<main className="mx-auto max-w-3xl">
				<h1 className="text-4xl font-semibold mb-6">Next.js 16 - form - server actions</h1>
				<form action={saveAction}>
					<div className="space-y-4">
						<div className="space-y-1">
							<label htmlFor="name" className="block font-semibold">
								Name
							</label>
							<input
								type="text"
								name="name"
								placeholder="Enter your name"
								className="border-2 border-slate-300 p-2 rounded-md block"
							/>
						</div>
						<div className="space-y-1">
							<label htmlFor="email" className="block font-semibold">
								Email
							</label>
							<input
								type="text"
								name="email"
								placeholder="your@email.com"
								className="border-2 border-slate-300 p-2 rounded-md block"
							/>
						</div>
						<button type="submit" className="bg-sky-500 text-white font-bold cursor-pointer p-2 rounded-md px-4">
							Submit
						</button>
					</div>
				</form>
			</main>
		</div>
	)
}
