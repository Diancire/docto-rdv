"use client"
import Link from "next/link";
import SubmitButton from "../formInputs/SubmitButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { LoginInputProps } from "@/types/types";
import TextInput from "../formInputs/TextInput";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

export default function LoginForm() {
    const [isLoading, setIsLoading]=useState(false);
    const [showNotification, setShowNotification]=useState(false);
    const router = useRouter()

    const {
        register, 
        handleSubmit, 
        reset, 
        formState:{ errors }
    } = useForm<LoginInputProps>();

    async function onSubmit(data: LoginInputProps) {
        try {
            setIsLoading(true);
            console.log("Attempting to sign in with credentials:", data);
            const loginData = await signIn("credentials", {
              ...data,
              redirect: false,
            });
            console.log("SignIn response:", loginData);
            if (loginData?.error) {
                setIsLoading(false);
                toast.error("Sign-in error: Check your credentials");
                setShowNotification(true);
            } else {
                // Sign-in was successful
                setShowNotification(false);
                reset();
                setIsLoading(false);
                toast.success("Login Successful");
                router.push("/dashboard");
            }
        } catch (error) {
            setIsLoading(false);
            console.error("Network Error:", error);
            toast.error("Its seems something is wrong with your Network");
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
                Connectez-vous à votre compte
            </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {showNotification && (
                    <Alert color="failure" icon={HiInformationCircle}>
                    <span className="font-medium">Sign-in error!</span> Please Check
                    your credentials
                    </Alert>
                )}
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
                    <SubmitButton title="Connexion" isLoading={isLoading} loadingTitle="En cours..."/>
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
  