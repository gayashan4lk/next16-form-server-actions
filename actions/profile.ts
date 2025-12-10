'use server'

export async function saveAction(prevState: number, formData: FormData) {
	console.log('Previous State:', prevState)
	await new Promise((resolve) => setTimeout(resolve, 5000)) // simulate async operation

	const rowFormData = {
		name: formData.get('name'),
		email: formData.get('email'),
	}
	console.log('rowFormData:', rowFormData)
	return prevState + 1
}
