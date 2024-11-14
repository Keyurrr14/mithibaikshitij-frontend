
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
        <div className="min-h-screen w-full flex-center p-4 bg-[url('/assets/images/registerBg.png')] bg-cover">

            <div className="w-full h-full flex-center bg-[url('/assets/images/bg-items.png')] bg-cover ">

            <div className="w-full sm:max-w-[70%] h-[70%] bg-[#592D62]/60 rounded-[3rem]  p-8 shadow-[rgba(17,17,26,0.4)_0px_8px_24px,_rgba(17,17,26,0.4)_0px_16px_56px,_rgba(17,17,26,0.4)_0px_24px_80px]">
                <h2 className="text-6xl font-bold text-gray-100 text-center my-8 font-lusitana [text-shadow:_2px_4px_0px_#000000]">Register</h2>

                <Form {...form}>
                    <form onSubmit={handleFormSubmit} className="sm:space-y-20 sm:mt-20">
                        <div className="sm:flex sm:justify-evenly">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel className="text-white sm:text-xl text-md font-normal font-lusitana sm:mt-0 mt-4">Name *</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your name"
                                                className="w-full md:max-w-xs sm:text-2xl text-md sm:p-2 p-1
                                                 bg-transparent border-b-[1px] sm:border-b-2 border-gray-400/80 
                                                 outline-none text-white font-lusitana
                                                 
                                                 "
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
                                    <FormItem className="flex flex-col">
                                        <FormLabel className="text-white sm:text-xl text-md font-normal font-lusitana sm:mt-0 mt-4">College Name *</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your college name"
                                                className="w-full md:max-w-xs sm:text-2xl text-md sm:p-2 p-1
                                                 bg-transparent border-b-[1px] sm:border-b-2 border-gray-400/80 
                                                 outline-none text-white font-lusitana
                                                 
                                                 "
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

                                <div className="sm:flex sm:justify-evenly">
                                <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel className="text-white sm:text-xl text-md font-normal font-lusitana sm:mt-0 mt-4">Email *</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter your email"
                                            className="w-full md:max-w-xs sm:text-2xl text-md sm:p-2 p-1
                                                 bg-transparent border-b-[1px] sm:border-b-2 border-gray-400/80 
                                                 outline-none text-white font-lusitana
                                                 
                                                 "
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
                                <FormItem className="flex flex-col">
                                    <FormLabel className="text-white sm:text-xl text-md font-normal font-lusitana sm:mt-0 mt-4">Phone number *</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter your phone number"
                                            className="w-full md:max-w-xs sm:text-2xl text-md sm:p-2 p-1
                                                 bg-transparent border-b-[1px] sm:border-b-2 border-gray-400/80 
                                                 outline-none text-white font-lusitana
                                                 
                                                 "
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
                                </div>

                        <Button
                            type="submit"
                            className="border-2 hover:bg-gray-300 flex justify-self-center w-[65%] border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] font-lusitana sm:mt-0 mt-7"
                        >
                            Submit
                        </Button>
                    </form>
                </Form>
            </div>
            </div>
        </div>
    )
}
