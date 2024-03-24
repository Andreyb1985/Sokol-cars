import * as Yup from 'yup'
import 'yup-phone'

export const validationScheme = Yup.object().shape({
	name: Yup.string().required('validation.required'),
	// lastName: Yup.string().required('validation.required'),
	phoneNumber: Yup.string()
		.typeError('validation.required')
		.test('required', 'validation.required', value => Boolean(value))
		.test('is valid', 'validation.phone', value => {
			const phoneSchema = Yup.string().phone().required('validation.phone')
			const isValidPhone = phoneSchema.isValidSync(`+${value}`)
			return isValidPhone
		}),
	email: Yup.string().email('validation.email').required('validation.required'),
	// company: Yup.string().required('validation.required'),
	// message: Yup.string().required('validation.required'),
	// policy: Yup.boolean().oneOf([true], 'validation.required').required('validation.required'),
})
