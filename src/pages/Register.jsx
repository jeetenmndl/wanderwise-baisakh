import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from "zod"

const formSchema = z.object({
    name: z.string().min(5, "Name should be at least 5 characters."),
    email: z.string().email("Invalid email address."),
    password: z.string().min(8, "Password should be at least 8 characters."),
    confirmPassword: z.string().min(8, "Password should be at least 8 characters.")
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    fields: ["confirmPassword"]
})

const Register = () => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
    })

    return (
        <div>Register</div>
    )
}

export default Register