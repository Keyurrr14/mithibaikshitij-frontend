import {TextGenerateEffect} from "@/components/ui/text-generate"
import TextField from "@/components/ui/TextField"
const ContactPage = () => {
  return (
      <div className='w-full h-full flex flex-col justify-center bg-main-gradient gap-4'>
        <div className='flex flex-col gap-10 justify-center items-center'>
             <TextGenerateEffect duration={2.2} words={"Connect With Us!"} className="p-5 text-white font-normal font-lusitana"/>
        <div className='flex flex-1 w-full h-full items-center'>
            <img
            src="/assets/images/artists/someSinger.png"
            className="w-1/2 h-full object-cover max-sm:hidden"
            alt="SomeSinger" />

            <div className='md:w-1/2 w-full md:mx-0 mx-2 h-full glass-effect-no-border-radius px-10 py-20'>
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

                    <button className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] font-lusitana ">
  Submit
</button>
                </form>
            </div>
        </div>

        </div>
    </div>
  )
}

export default ContactPage
