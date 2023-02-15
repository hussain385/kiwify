import * as yup from 'yup'

export const SignupSchema = yup
	.object({
		email: yup
			.string()
			.email('O e-mail deve ser válido')
			.required('Esse campo é obrigatório'),
		confirm_email: yup
			.string()
			.email('O e-mail deve ser válido')
			.oneOf([yup.ref('email')], 'Os dois e-mails devem ser iguais.')
			.required('Esse campo é obrigatório'),
		password: yup.string().required('Esse campo é obrigatório'),
		policy: yup.bool().oneOf([true], '(Esse campo é obrigatório)')
	})
	.required()

export type SignUpInterface = yup.InferType<typeof SignupSchema>

export const LoginSchema = yup
	.object({
		email: yup
			.string()
			.email('O e-mail deve ser válido')
			.required('Esse campo é obrigatório'),
		password: yup.string().required('Esse campo é obrigatório')
	})
	.required()

export type LoginInterface = yup.InferType<typeof LoginSchema>
