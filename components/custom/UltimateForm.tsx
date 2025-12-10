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

	const fieldErrors = state?.errors?.fieldErrors || {}

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
								className={fieldErrors?.streetAddress ? 'border-red-500' : ''}
							/>
							{fieldErrors?.streetAddress && (
								<p id="streetAddress-error" className="text-sm text-red-500">
									{fieldErrors.streetAddress[0]}
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
									className={fieldErrors?.city ? 'border-red-500' : ''}
								/>
								{fieldErrors?.city && (
									<p id="city-error" className="text-sm text-red-500">
										{fieldErrors.city[0]}
									</p>
								)}
							</div>

							<div className="space-y-2">
								<Label htmlFor="state">State</Label>
								<Input
									id="state"
									name="state"
									placeholder="NY"
									className={fieldErrors?.state ? 'border-red-500' : ''}
								/>
								{fieldErrors?.state && (
									<p id="state-error" className="text-sm text-red-500">
										{fieldErrors.state[0]}
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
									className={fieldErrors?.zipCode ? 'border-red-500' : ''}
								/>
								{fieldErrors?.zipCode && (
									<p id="zipCode-error" className="text-sm text-red-500">
										{fieldErrors.zipCode[0]}
									</p>
								)}
							</div>

							<div className="space-y-2">
								<Label htmlFor="country">Country</Label>
								<Input
									id="country"
									name="country"
									placeholder="United States"
									className={fieldErrors?.country ? 'border-red-500' : ''}
								/>
								{fieldErrors?.country && (
									<p id="country-error" className="text-sm text-red-500">
										{fieldErrors.country[0]}
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
