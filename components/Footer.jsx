import React from 'react'

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full h-[40vh] rounded-t-[20px] bg-dark-4">
        <div className='flex w-full h-full p-5'>
            <div className='flex flex-col gap-2 w-full h-full'>
                <div className='flex flex-row gap-2 justify-start items-center w-full'>
                    <img
                        src="/assets/logo/logo.svg"
                        alt="logo"
                        height={130}
                        width={130}
                    />

                    <img
                        src="/assets/logo/text_logo.svg"
                        alt="logo"
                        height={200}
                        width={200}
                    />
                </div>
                <div className='w-full'>
                        <img src="/assets/logo/socials.svg"
                        alt="socials"
                        width={400}
                        />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
