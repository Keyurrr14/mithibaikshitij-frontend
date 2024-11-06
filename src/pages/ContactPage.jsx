import {TextGenerateEffect} from "@/components/ui/text-generate"
import TextField from "@/components/ui/TextField"
import Contacts from "@/components/contacts"
import MapComponent from "@/components/MapComponent"

const ContactPage = () => {
  return (
      <div className='w-full h-full flex flex-col justify-center bg-main-gradient gap-4'>
        <div className='flex flex-col gap-10 justify-center items-center'>
             <TextGenerateEffect duration={2.5} words={"Connect With Us!"} className="sm:p-7 p-2 text-white font-normal font-lusitana [text-shadow:_2px_4px_0px_#000000]"/>
        <div className='flex flex-1 w-full h-full items-center'>
            <img
            src="/assets/images/artists/someSinger.png"
            className="w-[51.5%] h-[71.3vh] object-cover hidden sm:block"
            alt="SomeSinger"
            style={{ minWidth: '51.5%', objectFit: 'cover' }} />

            <div className='sm:w-1/2 w-full sm:mx-0 mx-2 sm:glass-effect-no-border-radius glass-effect sm:px-10 px-2 sm:py-20 py-7'>
                <form action="" className="w-full h-full flex flex-col justify-center items-center sm:gap-10 gap-2">
                    <div className="sm:flex gap-10">
                        <TextField label="First Name *" type="text" name="firstName"/>
                    <   TextField label="Last Name *" type="text" name="lastName"/>
                    </div>
                    <div className="sm:flex gap-10">
                        <TextField label="Email *" type="email" name="email"/>
                        <TextField label="Phone *" type="tel" name="phoneNumber"/>
                    </div>

                    <TextField label="Message *" type="text" name="message"/>

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
