import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SignUpInterface, SignupSchema } from '../Util/schemas'
import { CustomInput } from '../Components/Authentication/CustomInput'
import { Link } from 'react-router-dom'

function SignUp() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<SignUpInterface>({
		resolver: yupResolver(SignupSchema)
	})

	useEffect(() => {
		document.title = 'Cadastro'
	}, [])

	const onSubmit: SubmitHandler<SignUpInterface> = data => {
		alert(JSON.stringify(data, null, 2))
	}

	return (
		<div className='flex min-h-screen flex-col justify-center bg-gray-50 py-12 sm:px-6 lg:px-8'>
			<div>
				<div className={'sm:mx-auto sm:w-full sm:max-w-md'}>
					<img
						src={
							'https://dashboard.kiwify.com.br/_nuxt/img/kiwify-green-logo.2af0e50.png'
						}
						alt={'Kiwify'}
						className={'mx-auto h-12 w-auto'}
					/>
					<h2
						className={
							'mt-6 text-center text-3xl font-extrabold leading-9 text-gray-900'
						}
					>
						Criar nova conta
					</h2>
					<p className={'mt-2 text-center text-base leading-5 text-gray-600'}>
						Ou{' '}
						<Link
							className={
								'font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:underline focus:outline-none'
							}
							to={'/'}
						>
							entrar na sua conta existente
						</Link>
					</p>
				</div>
				<div className={'mt-8 sm:mx-auto sm:w-full sm:max-w-md'}>
					<form
						className={
							'flex flex-col gap-[23px] bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'
						}
						onSubmit={handleSubmit(onSubmit)}
					>
						<CustomInput
							label={'E-mail'}
							registerName={'email'}
							register={register}
							// type={'email'}
							errors={errors}
						/>
						<CustomInput
							label={'Repetir e-mail'}
							registerName={'confirm_email'}
							register={register}
							// type={'email'}
							errors={errors}
						/>
						<CustomInput
							label={'Senha'}
							registerName={'password'}
							register={register}
							type={'password'}
							errors={errors}
						/>
						<div>
							<label className='relative flex items-start'>
								<div className='flex h-5 items-center'>
									<input
										type='checkbox'
										className={`h-4 w-4 cursor-pointer rounded bg-gray-100 text-indigo-600 transition duration-150 ease-in-out ${
											Boolean(errors.policy?.message) ? 'border-red-500' : ''
										}`}
										{...register('policy')}
									/>
								</div>
								<div className='ml-2 text-sm leading-5'>
									<span className='font-medium text-gray-700'>
										Eu li e aceito os{' '}
										<a
											href='https://kiwify.com.br/termos-de-uso'
											target='_blank'
											className='underline'
										>
											{' '}
											termos de uso
										</a>
										,{' '}
										<a
											href='https://kiwify.com.br/licenca-de-uso-software'
											target='_blank'
											className='underline'
										>
											{' '}
											termos de licença de uso de software
										</a>
										,{' '}
										<a
											href='https://kiwify.com.br/politica-de-conteudo'
											target='_blank'
											className='underline'
										>
											{' '}
											política de conteúdo
										</a>{' '}
										da Kiwify{' '}
									</span>
									{Boolean(errors.policy) && (
										<p className={'border-b-0 text-red-500'}>
											{errors.policy?.message}
										</p>
									)}
								</div>
							</label>
						</div>
						<button className='focus:shadow-outline-indigo flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:border-indigo-700 focus:outline-none active:bg-indigo-700'>
							Criar conta
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default SignUp
