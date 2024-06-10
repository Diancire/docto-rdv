import { UserRole } from "@prisma/client";

export type ServiceProps = {
    title:string,
    icon:React.ReactNode,
    slug:string
}

export type RegisterInputProps = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    phone: string;
    role:UserRole;
}

export type LoginInputProps = {
    email: string;
    password: string;
}