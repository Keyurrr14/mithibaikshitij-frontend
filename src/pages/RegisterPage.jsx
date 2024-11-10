"use client"
import { useState } from "react"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import TextField from "@/components/ui/TextField"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { TextGenerateEffect } from "@/components/ui/text-generate"

const formSchema = z.object({
    name: z.string().min(2).max(100),
    collegeName: z.string().min(2).max(250),
    email: z.string().email(),
    phoneNumber: z.string()
});

export default function MyForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            collegeName: '',
            email: '',
            phoneNumber: ''
        }
    })

    function onSubmit(values) {
        try {
            console.log(values);
            toast(
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(values, null, 2)}</code>
                </pre>
            );
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }


    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-indigo-900 to-blue-900 flex-center p-4">
            <div className="w-full max-w-[70%] h-[70%] bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-800">
                <h2 className="text-4xl font-semibold text-gray-100 text-center my-8 font-lusitana">Register</h2>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-300 font-medium">Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your name"
                                                className="bg-gray-800 border border-gray-700 text-gray-100 placeholder:text-gray-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-lg"
                                                type="text"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-400" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="collegeName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-300 font-medium">College Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your college name"
                                                className="bg-gray-800 border border-gray-700 text-gray-100 placeholder:text-gray-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-lg"
                                                type="text"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-400" />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-300 font-medium">Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter your email"
                                            className="bg-gray-800 border border-gray-700 text-gray-100 placeholder:text-gray-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-lg"
                                            type="email"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-400" />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-300 font-medium">Phone number</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter your phone number"
                                            className="bg-gray-800 border border-gray-700 text-gray-100 placeholder:text-gray-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-lg"
                                            type="tel"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-400" />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-gray-100 font-medium py-2.5 rounded-lg transition-colors"
                        >
                            Submit
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}
