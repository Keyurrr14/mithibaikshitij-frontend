import React from 'react'

const TextField = ({label, type, name}) => {
  return (
    <div className="flex flex-col gap-2">
                    <label className='text-gray-200 sm:text-xl text-md font-normal font-lusitana sm:mt-0 mt-4'>{label}</label>
                    <input type={type} name={name} className="w-full max-w-xs sm:text-2xl text-md p-2 bg-transparent border-b border-gray-400/80 outline-none text-gray-300 font-lusitana "/>
    </div>
  )
}

export default TextField
