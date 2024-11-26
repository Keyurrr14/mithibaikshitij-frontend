import React from 'react'

const Contacts = () => {
  return (
    <div className="w-full h-full flex flex-col p-4 md:p-10 gap-4 md:gap-7 items-center my-10 mb-20">
            <div className="w-full h-full flex flex-col items-center gap-2 md:gap-4">
                <h1 className="text-white font-milker text-2xl md:text-4xl text-center">
                    Marketing
                </h1>
                <div className="text-center">

                    <p className="text-white font-lusitana text-base md:text-lg">
                        Apoorvi Bhatiya:  &nbsp; &nbsp; <a href="tel:+919826023903">+91 98260 23903</a>
                    </p>
                    <p className="text-white font-lusitana text-base md:text-lg">
                        Hasnain Agharia:  &nbsp; &nbsp; <a href="tel:+919619074161">+91 96190 74161</a>
                    </p>
                    <p className="text-white font-lusitana text-base md:text-lg">
                        Soumya Pattnaik:  &nbsp; &nbsp; <a href="8861849596">+91 88618 49596</a>
                    </p>
                    <a href="mailto:kshitij24marketing@gmail.com" className='text-white font-lusitana text-lg mt-4'>kshitij24marketing@gmail.com</a>
                </div>
            </div>

            <div className="w-full h-full flex flex-col items-center gap-2 md:gap-4">
                <h1 className="text-white font-milker text-2xl md:text-4xl text-center">
                    Public Relations
                </h1>
                <div className="text-center">
                    <p className="text-white font-lusitana text-base md:text-lg">
                        Pratham Chordiya:  &nbsp; &nbsp; <a href="+918275007093">+91 82750 07093</a>
                    </p>
                    <p className="text-white font-lusitana text-base md:text-lg">
                        Prarthana Shetty:  &nbsp; &nbsp; <a href="+919769731353">+91 97697 31353</a>
                    </p>
                    <a href="mailto:kshitijpr2024@gmail.com" className='text-white font-lusitana text-lg mt-4'>kshitijpr2024@gmail.com</a>
                </div>
            </div>

            <div className="w-full h-full flex flex-col items-center md:gap-4">
                <h1 className="text-white font-milker text-2xl md:text-4xl text-center">
                    College Relations
                </h1>
                <div className="text-center">
                    <p className="text-white font-lusitana text-base md:text-lg">
                        Lubhawani Singhal:  &nbsp; &nbsp; <a href="+919414100974">+91 94141 00974</a>
                    </p>
                    <p className="text-white font-lusitana text-base md:text-lg">
                        Rudraksh Dave:  &nbsp; &nbsp; <a href="+919769097906">+91 97690 97906</a>
                    </p>
                    <a href="mailto:logistics@mithibaikshitij.com" className='text-white font-lusitana text-lg mt-4'>logistics@mithibaikshitij.com</a>
                </div>
            </div>
        </div>
  )
}

export default Contacts
