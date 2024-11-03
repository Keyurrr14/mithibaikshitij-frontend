import {TextGenerateEffect} from "@/components/ui/text-generate"

const ContactPage = () => {
  return (
      <div className='w-full h-full flex flex-col justify-center bg-main-gradient gap-4'>
        <div className='flex flex-col gap-4'>
             <TextGenerateEffect duration={2.2} words={"Connect With Us!"} className="p-5 text-white text-6xl font-normal font-lusitana"/>
        <div className='flex flex-1 w-full h-full items-center'>
            <img
            src="/assets/images/artists/someSinger.png"
            className="w-1/2 h-full object-cover"
            alt="SomeSinger" />

            <div className='w-1/2 h-full'>
                <form action="" className="w-full h-full px-10">
                    <div className="flex flex-col gap-2">
                    <label className='text-white text-2xl font-normal font-lusitana'>First Name</label>
                    <input type="text" placeholder="Type here" className="w-full max-w-xs text-sm p-3 rounded-lg glass-effect"/>
                    </div>
                </form>
            </div>
        </div>

        </div>
    </div>
  )
}

export default ContactPage
