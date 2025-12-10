'use client'

import { createAddress } from '@/actions/address'
import type { ActionResponse } from '@/types/address'
import { useActionState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const initialState: ActionResponse = {
	success: false,
	message: '',
}

export default function UltimateForm() {
	const [state, action, isPending] = useActionState(createAddress, initialState)

	console.log('errors:', state?.errors)

	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>Address</CardTitle>
				<CardDescription>Enter your shipping address.</CardDescription>
			</CardHeader>
			<CardContent>
				<form action={action} className="space-y-6">
					<div className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="streetAddress">Street Address</Label>
							<Input
								id="streetAddress"
								name="streetAddress"
								placeholder="123, Main Street"
								className={state?.errors?.streetAddress ? 'border-red-500' : ''}
							/>
							{state?.errors?.streetAddress && (
								<p id="streetAddress-error" className="text-sm text-red-500">
									{state.errors.streetAddress[0]}
								</p>
							)}
						</div>
						<div className="space-y-2">
							<Label htmlFor="apartment">Apartment/Suite (Optional)</Label>
							<Input id="apartment" name="apartment" placeholder="Apt 4B" />
						</div>
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label htmlFor="city">City</Label>
								<Input
									id="city"
									name="city"
									placeholder="New York"
									className={state?.errors?.city ? 'border-red-500' : ''}
								/>
								{state?.errors?.city && (
									<p id="city-error" className="text-sm text-red-500">
										{state.errors.city[0]}
									</p>
								)}
							</div>

							<div className="space-y-2">
								<Label htmlFor="state">State</Label>
								<Input
									id="state"
									name="state"
									placeholder="NY"
									className={state?.errors?.state ? 'border-red-500' : ''}
								/>
								{state?.errors?.state && (
									<p id="state-error" className="text-sm text-red-500">
										{state.errors.state[0]}
									</p>
								)}
							</div>
						</div>
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label htmlFor="zipCode">ZIP Code</Label>
								<Input
									id="zipCode"
									name="zipCode"
									placeholder="10001"
									className={state?.errors?.zipCode ? 'border-red-500' : ''}
								/>
								{state?.errors?.zipCode && (
									<p id="zipCode-error" className="text-sm text-red-500">
										{state.errors.zipCode[0]}
									</p>
								)}
							</div>

							<div className="space-y-2">
								<Label htmlFor="country">Country</Label>
								<Input
									id="country"
									name="country"
									placeholder="United States"
									className={state?.errors?.country ? 'border-red-500' : ''}
								/>
								{state?.errors?.country && (
									<p id="country-error" className="text-sm text-red-500">
										{state.errors.country[0]}
									</p>
								)}
							</div>
						</div>
					</div>
					{state?.message && (
						<Alert variant={state.success ? 'default' : 'destructive'}>
							{state.success && <CheckCircle2 className="h-4 w-4" />}
							<AlertDescription>{state.message}</AlertDescription>
						</Alert>
					)}
					<Button type="submit" className="w-full" disabled={isPending}>
						{isPending ? 'Saving...' : 'Save Address'}
					</Button>
				</form>
			</CardContent>
		</Card>
	)
}
