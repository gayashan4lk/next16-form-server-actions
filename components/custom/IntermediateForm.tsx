'use client'
import { useActionState } from 'react'
import { Button } from '@/components/ui/button'
import { saveAction } from '@/actions/profile'

export default function IntermediateForm() {
	const [state, action, isPending] = useActionState(saveAction, 0)

	console.log('Current state:', state)

	return (
		<form action={action}>
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
				<Button type="submit" className="cursor-pointer" disabled={isPending}>
					{isPending ? 'Loading' : 'Submit'}
				</Button>
				<p>Current State: {state}</p>
			</div>
		</form>
	)
}
