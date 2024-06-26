"use client"
import React, { useState, useEffect } from "react";
import { RegisterInputProps } from "@/types/types";
import Link from "next/link";
import { useForm } from "react-hook-form";
import TextInput from "../formInputs/TextInput";
import SubmitButton from "../formInputs/SubmitButton";
import { createUser } from "@/actions/users";
import { UserRole } from "@prisma/client";
import toast from "react-hot-toast";
import { BsEye, BsEyeSlash, BsCheck2Circle } from "react-icons/bs";
import { IoRadioButtonOff } from "react-icons/io5";
import { useRouter } from 'next/navigation';

export default function RegisterForm({role="USER"}:{role?:UserRole}) {
    const [isLoading, setIsLoading]=useState(false);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [passwordType, setPasswordType] = useState("password");
    const [confirmPasswordType, setConfirmPasswordType] = useState("password");
    const router = useRouter();

    const {
        register, 
        handleSubmit, 
        reset, 
        watch,
        formState:{ errors }
    } = useForm<RegisterInputProps>();

    const validatePassword = (password: string): string | boolean => {
        const minLength = 12;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[-+!*$@%_#\)]/.test(password);

        if (password.length < minLength || !hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar) {
            return "Le mot de passe ne respecte pas les critères de sécurité.";
        }
        return true;

    };

    const validatePasswordConfirmation = (confirmation: string): string | boolean => {
        if (confirmation !== watch('password')) {
            return "Les mots de passe ne correspondent pas.";
        }
        return true;
    };

    async function onSubmit(data: RegisterInputProps) {
        const passwordError = validatePassword(data.password);
        if (typeof passwordError === "string") {
            setPasswordError(passwordError);
            return;
        }
        setIsLoading(true);
        data.role = role;
        try {
            const user = await createUser(data);
            if(user && user.data && user.data.id) {
                reset();
                setIsLoading(false);
                toast.success("Compte créé avec succès")
                router.push(`/verify-account/${user.data.id}`);
                
            } else {
                console.log(user.error);
            }
            reset();
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    const [passwordValidations, setPasswordValidations] = useState({
        lengthValidated: false,
        numberValidated: false,
        upperValidated: false,
        lowerValidated: false,
        specialValidated: false,
    });

    const passwordValue = watch('password');
    useEffect(() => {
        const password = passwordValue;
        if (password) {
            setPasswordValidations({
                lengthValidated: password.length >= 12,
                numberValidated: /\d/.test(password),
                upperValidated: /[A-Z]/.test(password),
                lowerValidated: /[a-z]/.test(password),
                specialValidated: /[-+!*$@%_#]/.test(password),
            });
        }
    }, [passwordValue]);

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
                    <div className='relative'>
                        <TextInput
                            label="Mot de passe"
                            register={register}
                            name="password"
                            type={passwordType}
                            errors={errors}
                            validate={validatePassword}
                        />
                        <span
                            className='absolute right-4 top-[50px] transform -translate-y-1/2 cursor-pointer'
                            onClick={() => setPasswordType(passwordType === 'password' ? 'text' : 'password')}>
                            {passwordType === "password" ? <BsEye size={18}/> : <BsEyeSlash size={18}/>}
                        </span>
                    </div>
                    <div className='relative'>
                        <TextInput
                            label="Confirmez le mot de passe"
                            register={register}
                            name="passwordConfirmation"
                            type={confirmPasswordType}
                            errors={errors}
                            validate={validatePasswordConfirmation}
                        />
                        <span
                            className='absolute right-4 top-[50px] transform -translate-y-1/2 cursor-pointer'
                            onClick={() => setConfirmPasswordType(confirmPasswordType === 'password' ? 'text' : 'password')}>
                            {confirmPasswordType === "password" ? <BsEye size={18}/> : <BsEyeSlash size={18}/>}
                        </span>
                    </div>
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    {errors.passwordConfirmation && <p className="text-red-500 text-sm">{errors.passwordConfirmation.message}</p>}
                    <div>
                        <p>Votre mot de passe doit contenir :</p>
                        <ul>
                            <li className="flex items-center">
                                {passwordValidations.lengthValidated ? < BsCheck2Circle /> : <IoRadioButtonOff />}
                                <span className="pl-2">12 caractères minimum</span>
                            </li>
                            <li className="flex items-center">
                                {passwordValidations.numberValidated ? < BsCheck2Circle /> : <IoRadioButtonOff />}
                                <span className="pl-2">Un chiffre (0...9)</span>
                            </li>
                            <li className="flex items-center">
                                {passwordValidations.upperValidated ? < BsCheck2Circle /> : <IoRadioButtonOff />}
                                <span className="pl-2">Une lettre majuscule (A...Z)</span>
                            </li>
                            <li className="flex items-center">
                                {passwordValidations.lowerValidated ? < BsCheck2Circle /> : <IoRadioButtonOff />}
                                <span className="pl-2">Une lettre minuscule (a...z)</span>
                            </li>
                            <li className="flex items-center">
                                {passwordValidations.specialValidated ? < BsCheck2Circle /> : <IoRadioButtonOff />}
                                <span className="pl-2">Un caractère spécial: -+!*$@%_#)</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <SubmitButton title="S'inscrire" isLoading={isLoading} loadingTitle="En cours..."/>
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
