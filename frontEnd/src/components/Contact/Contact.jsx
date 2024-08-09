"use client";

import { Label } from "./Label";
import { Input, Textarea } from "./Input";
import { cn } from "../../../lib/utils";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
} from "@tabler/icons-react";

export function SignupFormDemo() {
    const [isSending, setIsSending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        message: ""
    });
    const [errors, setErrors] = useState({});
    const form = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.user_name) newErrors.user_name = "Name is required";
        if (!formData.user_email) newErrors.user_email = "Email is required";
        if (!formData.message) newErrors.message = "Message is required";
        return newErrors;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSending(true);
        setErrors({});

        emailjs
            .sendForm(import.meta.env.VITE_SERVICE_ID_EMAILJS, import.meta.env.VITE_TEMPLATE_ID_EMAILJS, form.current, {
                publicKey: import.meta.env.VITE_PUBLIC_KEY_EMAILJS,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsSending(false);
                    setIsSuccess(true);
                    setTimeout(() => setIsSuccess(false), 3000); // Reset success state after 3 seconds
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setIsSending(false);
                },
            );
    };

    return (
        <div className="max-w-md w-full mx-auto rounded-2xl md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black border-4 border-cyan-400" data-aos="fade-up" data-aos-duration="1500">
            <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200 text-center">
                Let&apos;s Connect
            </h2>

            <form ref={form} onSubmit={sendEmail} className="my-8">
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        placeholder="Name"
                        type="text"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        className={errors.user_name ? "border-red-500" : ""}
                    />
                    {errors.user_name && <p className="text-red-500 text-sm">{errors.user_name}</p>}
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        placeholder="projectmayhem@fc.com"
                        type="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        className={errors.user_email ? "border-red-500" : ""}
                    />
                    {errors.user_email && <p className="text-red-500 text-sm">{errors.user_email}</p>}
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                        id="message"
                        placeholder="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </LabelInputContainer>

                <button
                    value="Send"
                    className={cn(
                        "relative group/btn block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]",
                        {
                            "bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800":
                                !isSending && !isSuccess,
                            "bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse": isSending,
                            "bg-gradient-to-r from-green-400 to-green-600": isSuccess,
                        }
                    )}
                    type="submit"
                    disabled={isSending}
                >
                    {isSending ? "Sending..." : isSuccess ? "Sent!" : "Send →"}
                    <BottomGradient />
                </button>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({ children, className }) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
