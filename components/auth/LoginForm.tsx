"use client"
import Link from "next/link";
import SubmitButton from "../formInputs/SubmitButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { LoginInputProps } from "@/types/types";
import TextInput from "../formInputs/TextInput";

export default function LoginForm() {
    const [isLoading, setIsLoading]=useState(false)

    const {
        register, 
        handleSubmit, 
        reset, 
        formState:{ errors }
    } = useForm<LoginInputProps>();

    async function onSubmit(data: LoginInputProps) {
        console.log(data);
    }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="flex justify-center">
                    <a href="/" className="-m-1.5 p-1.5 font-logo text-primary text-3xl font-bold">
                        <span className="sr-only">Docto-Rdv</span>
                        Docto-Rdv
                    </a>
                </div>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Connectez-vous à votre compte
            </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <TextInput
                    label="Email"
                    register={register}
                    name="email"
                    type="email"
                    errors={errors}
                />
                <TextInput
                    label="Mot de passe"
                    register={register}
                    name="password"
                    type="password"
                    errors={errors}
                />
                <div>
                    <SubmitButton title="S'inscrire" isLoading={isLoading} loadingTitle="En cours..."/>
                </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
                Vous n'avez pas de compte ?{' '}
                <Link href="/register" className="font-semibold leading-6 text-primary hover:text-primary">
                    S'inscrire
                </Link>
            </p>
            </div>
        </div>
    )
}
  