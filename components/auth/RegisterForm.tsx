"use client"
import { RegisterInputProps } from "@/types/types";
import Link from "next/link";
import { useForm } from "react-hook-form";
import TextInput from "../formInputs/TextInput";
import SubmitButton from "../formInputs/SubmitButton";
import { useState } from "react";
import { createUser } from "@/actions/users";
import { UserRole } from "@prisma/client";
import toast from "react-hot-toast";

export default function RegisterForm({role="USER"}:{role?:UserRole}) {
    const [isLoading, setIsLoading]=useState(false)

    const {
        register, 
        handleSubmit, 
        reset, 
        formState:{ errors }
    } = useForm<RegisterInputProps>();

    async function onSubmit(data: RegisterInputProps) {
        // console.log(data);
        setIsLoading(true);
        data.role = role;
        try {
            const user = await createUser(data);
            if(user && user.status===null) {
                console.log("User created successfully");
                reset();
                setIsLoading(false);
                toast.success("User created successfully")
                
            } else {
                console.log(user.error);
            }
            reset();
            setIsLoading(false);
            console.log(user);
        } catch (error) {
            console.log(error);
        }
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
                    Créer un nouveau compte
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <TextInput
                        label="Nom"
                        register={register}
                        name="lastName"
                        errors={errors}
                    />
                    <TextInput
                        label="Prénom"
                        register={register}
                        name="firstName"
                        errors={errors}
                    />
                    <TextInput
                        label="Email"
                        register={register}
                        name="email"
                        type="email"
                        errors={errors}
                    />
                    <TextInput
                        label="Numéro de téléphone"
                        register={register}
                        name="phone"
                        type="tel"
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
                        <SubmitButton title="Connexion" isLoading={isLoading} loadingTitle="En cours..."/>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Vous avez déjà un compte ?{' '}
                    <Link href="/login" className="font-semibold leading-6 text-primary hover:text-primary">
                        Connexion
                    </Link>
                </p>
            </div>
        </div>
    )
}
