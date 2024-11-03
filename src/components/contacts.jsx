import React from 'react'

const Contacts = () => {
  return (
    <div className="w-full h-full flex flex-col p-10 gap-7">
            <div className="w-full h-full flex flex-col items-start gap-4">
                <h1 className="text-white font-milker text-4xl">
                    Marketing
                </h1>
                <div>
                    <p className="text-white font-lusitana text-lg">
                        Apoorvi Bhatia:  &nbsp; &nbsp; +91 98260 23903
                    </p>
                    <p className="text-white font-lusitana text-lg">
                        Hasnain Agharia:  &nbsp; &nbsp; +91 96190 74161
                    </p>
                    <p className="text-white font-lusitana text-lg">
                        Soumya Pattanaik:  &nbsp; &nbsp; +91 88618 49596
                    </p>
                </div>
            </div>

            <div className="w-full h-full flex flex-col items-start gap-4">
                <h1 className="text-white font-milker text-4xl">
                    Public Relations
                </h1>
                <div>
                    <p className="text-white font-lusitana text-lg">
                        Pratham Chordiya:  &nbsp; &nbsp; +91 82750 07093
                    </p>
                    <p className="text-white font-lusitana text-lg">
                        Prarthana Shetty:  &nbsp; &nbsp; +91 97697 31353
                    </p>

                </div>
            </div>

            <div className="w-full h-full flex flex-col items-start gap-4">
                <h1 className="text-white font-milker text-4xl">
                    College Relations
                </h1>
                <div>
                    <p className="text-white font-lusitana text-lg">
                        Lubhawani Singhal:  &nbsp; &nbsp; +91 94141 00974
                    </p>
                    <p className="text-white font-lusitana text-lg">
                        Rudraksh Dave:  &nbsp; &nbsp; +91 97690 97906
                    </p>
                </div>
            </div>
        </div>
  )
}

export default Contacts
