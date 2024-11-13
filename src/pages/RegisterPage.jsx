
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
import { db } from "@/FirebaseInit"
import { zodResolver } from "@hookform/resolvers/zod"
import { push, set, ref as sRef } from "firebase/database"
import { useForm } from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
    name: z.string().min(2).max(100),
    collegeName: z.string().min(2).max(250),
    email: z.string().email(),
    phoneNumber: z.string()
});

export default function MyForm() {
    function getCurrentDateTime() {
        const now = new Date();
        const date = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;
        const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
        return `${date} ${time}`;
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const timestamp = getCurrentDateTime();
        const name = event.target[0].value.trim();
        const collegeName = event.target[1].value.trim();
        const email = event.target[2].value.trim();
        const phoneNumber = event.target[3].value.trim();

        try {
            const newRegistrationRef = push(sRef(db, 'clmeet'));
            await set(newRegistrationRef, {
                timestamp,
                name,
                collegeName,
                email,
                phoneNumber
            });
            
            alert("We will contact you soon!");
            form.reset();
            
        } catch (error) {
            // console.error("Error adding document: ", error);
            // alert("An error occurred. Please try again.");
        }
    }


    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            collegeName: '',
            email: '',
            phoneNumber: ''
        }
    })


    return (
        <div className="min-h-screen w-full flex-center p-4">
            <div className="w-full max-w-[70%] h-[70%] bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-800">
                <h2 className="text-4xl font-semibold text-gray-100 text-center my-8 font-lusitana">Register</h2>

                <Form {...form}>
                    <form onSubmit={handleFormSubmit} className="space-y-5">
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
                                                required
                                                autoComplete="off"
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
                                                required
                                                autoComplete="off"
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
                                            required
                                            autoComplete="off"
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
                                            required
                                            autoComplete="off"
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
