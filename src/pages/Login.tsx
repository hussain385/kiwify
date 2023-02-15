import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CustomInput } from '../Components/Authentication/CustomInput'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginInterface, LoginSchema } from '../Util/schemas'
import { yupResolver } from '@hookform/resolvers/yup'

function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<LoginInterface>({
		resolver: yupResolver(LoginSchema)
	})

	useEffect(() => {
		document.title = 'Login'
	}, [])

	const onSubmit: SubmitHandler<LoginInterface> = data => {
		alert(JSON.stringify(data, null, 2))
	}

	return (
		<div
			className={
				'flex min-h-screen flex-col justify-center bg-gray-50 py-12 sm:px-6 lg:px-8'
			}
		>
			<div>
				<div className={'sm:mx-auto sm:w-full sm:max-w-md'}>
					<img
						src='https://dashboard.kiwify.com.br/_nuxt/img/kiwify-green-logo.2af0e50.png'
						alt='Workflow'
						className='mx-auto h-12 w-auto'
					/>
					<h2 className='mt-6 text-center text-3xl font-extrabold leading-9 text-gray-900'>
						Entrar na sua conta
					</h2>
					<p className='mt-2 text-center text-base leading-5 text-gray-600'>
						Ou{' '}
						<Link
							to='/signup'
							className='font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:underline focus:outline-none'
						>
							fazer cadastro
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
							errors={errors}
						/>
						<CustomInput
							label={'Senha'}
							registerName={'password'}
							type={'password'}
							register={register}
							errors={errors}
						/>
						<Link
							to={'#'}
							className={
								'-mt-5 self-end text-sm font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:underline focus:outline-none'
							}
						>
							Esqueceu a senha?
						</Link>
						<button
							type='submit'
							className='focus:shadow-outline-indigo flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:border-indigo-700 focus:outline-none active:bg-indigo-700'
						>
							Entrar
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login
