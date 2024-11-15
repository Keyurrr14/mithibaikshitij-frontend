
import { ref as sRef, push, set } from "firebase/database";
import {TextGenerateEffect} from "@/components/ui/text-generate"
import TextField from "@/components/ui/TextField"
import Contacts from "@/components/contacts"
import MapComponent from "@/components/MapComponent"
import { db } from "@/FirebaseInit"

const ContactPage = () => {
    function getCurrentDateTime() {
        const now = new Date();
        const date = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;
        const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
        return `${date} ${time}`;
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const timestamp = getCurrentDateTime();
        const fullName = event.target[0].value.trim();
        const email = event.target[1].value.trim();
        const phoneNumber = event.target[2].value.trim();
        const message = event.target[3].value.trim();

        // Validate full name
        if (!fullName) {
            alert("Please enter your full name");
            return;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return;
        }

        // Validate phone number
        const phoneRegex = /^\d{10}$/;
        if (!phoneNumber || !phoneRegex.test(phoneNumber)) {
            alert("Please enter a valid 10-digit phone number");
            return;
        }

        // Validate message
        if (!message) {
            alert("Please enter a message");
            return;
        }

        try {
            const newRegistrationRef = push(sRef(db, 'contact'));
            await set(newRegistrationRef, {
                timestamp,
                fullName,
                email,
                phoneNumber,
                message
            });
            
            alert("We will contact you soon!");
            document.getElementById("contact-form").reset();
            
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("An error occurred. Please try again.");
        }
    }

    return (
        <div className={`w-full h-full flex flex-col justify-center gap-4 bg-[url('/assets/images/bg.png')] !object-cover bg-cover`}>
            <div className='flex flex-col gap-10 justify-center items-center'>
                
                <div className='flex flex-1 w-full h-full items-center justify-evenly mt-16 motion-preset-fade-md '>
                    <img
                        src="/assets/images/artists/someSinger.png"
                        className="w-[35.5%] h-[71.3vh] object-cover hidden sm:block rounded-2xl"
                        alt="SomeSinger"
                        style={{ minWidth: '35.5%', objectFit: 'cover' }} />

                    <div className='sm:w-1/2 w-full h-full sm:mx-0 mx-2 sm:px-10 px-2 sm:py-24 py-7 flex flex-col items-center'>
                        <TextGenerateEffect duration={2.5} words={"Connect With Us!"} className="sm:p-4 p-2 mb-16 sm:mr-16 text-white font-normal font-lusitana [text-shadow:_2px_4px_0px_#000000]"/>
                        <form id="contact-form" onSubmit={handleFormSubmit} className="w-full h-full flex flex-col justify-center items-center sm:gap-10 gap-2">
                            <div className="sm:flex-row flex flex-col sm:gap-10 gap-2sm:w-full w-auto flex-center">
                                <TextField label="Full Name *" type="text" name="firstName" required/>
                                <TextField label="Email *" type="email" name="email" required   />
                            </div>
                            <div className="sm:flex-row flex flex-col sm:gap-10 gap-2 sm:w-full w-auto flex-center">
                                <TextField label="Phone *" type="tel" name="phoneNumber" minLength={10} maxLength={10} required/>
                                <TextField label="Message *" type="text" name="message" required/>
                            </div>

                            <button className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] font-lusitana sm:mt-0 mt-7">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <MapComponent />

            <Contacts />

        </div>
    )
}

export default ContactPage