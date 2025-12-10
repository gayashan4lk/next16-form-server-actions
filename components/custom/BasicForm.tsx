async function saveAction(formData: FormData) {
	'use server'
	const name = formData.get('name')
	const email = formData.get('email')
	console.log('name:', name)
	console.log('email:', email)
}

export default function BasicForm() {
	return (
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
						className="block w-full rounded-md border-2 border-slate-300 p-2"
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
						className="block w-full rounded-md border-2 border-slate-300 p-2"
					/>
				</div>
				<button type="submit" className="cursor-pointer rounded-md bg-sky-500 p-2 px-4 font-bold text-white">
					Submit
				</button>
			</div>
		</form>
	)
}
