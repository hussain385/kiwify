import React from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { SignUpInterface } from '../../Util/schemas'

interface InputProps {
	label: string
	type?: React.HTMLInputTypeAttribute
	registerName: keyof SignUpInterface
	register: UseFormRegister<any>
	errors: FieldErrors<SignUpInterface>
}

export function CustomInput({
	label,
	type,
	register,
	registerName,
	errors
}: InputProps) {
	return (
		<div>
			<label
				className={'mb-1 block text-sm font-medium leading-5 text-gray-700'}
				htmlFor={registerName}
			>
				{label}
			</label>
			<input
				className={`form-input focus:shadow-outline-blue block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm transition duration-150 ease-in-out focus:border-blue-300 focus:outline-none sm:text-sm sm:leading-5 ${
					Boolean(errors?.[registerName]) ? 'border-red-500' : ''
				}`}
				id={registerName}
				type={type}
				{...register(registerName)}
			/>
			{errors?.[registerName] !== null && (
				<p className={'mt-1 text-xs text-red-500'}>
					{errors?.[registerName]?.message}
				</p>
			)}
		</div>
	)
}
