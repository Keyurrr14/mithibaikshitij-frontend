import React from 'react'
import { BackgroundGradientAnimation } from '../components/ui/bg-gradient-animation'

function GalleryPage() {
  return (

    <div className='flex flex-col bg-dark-3 items-center justify-center w-full min-h-screen p-8 max-sm:p-3 overflow-x-hidden'>
      <div className='flex flex-col w-full sm:items-start items-center my-10 sm:ml-24 ml-0'>
        <img src="/assets/logo/text_logo.svg" alt="" className='-mb-4 sm:w-40 w-20 motion-preset-blur-right-lg' />
        <h3 className='sm:text-8xl text-5xl [text-shadow:_2px_4px_0px_#000000] text-white font-lusitana motion-preset-blur-right-lg'>Gallery</h3>
      </div>
      <div className="grid grid-cols-4 sm:gap-4 gap-2 max-w-7xl w-full">
        {/* First row */}
        <div className="col-span-2 row-span-2 sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            src="/assets/images/Gallery/1.png"
            alt="Featured"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="sm:rounded-2xl rounded-[5px] overflow-hidden " >
          <img
            src="/assets/images/Gallery/2.png"
            alt="Gallery item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="sm:rounded-2xl rounded-[5px] overflow-hidden ">
          <img
            src="/assets/images/Gallery/4.png"
            alt="Gallery item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Second row continues */}
        <div className="col-span-2 sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            src="/assets/images/Gallery/5.png"
            alt="Wide item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Third row */}
        <div className="row-span-2 sm:rounded-2xl rounded-[5px] overflow-hidden animation-timeline">
          <img
            src="/assets/images/Gallery/3.png"
            alt="Tall item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Additional images */}
        <div className="col-span-2 row-span-2 sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            src="/assets/images/Gallery/6.png"
            alt="Large item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="sm:rounded-2xl row-span-2 rounded-[5px] overflow-hidden ">
          <img
            src="/assets/images/Gallery/7.png"
            alt="Gallery item"
            className="w-full h-full object-cover a"
            loading="lazy"
          />
        </div>

        <div className="col-span-2 sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            src="/assets/images/Gallery/8.png"
            alt="Wide item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className=" col-span-2 sm:rounded-2xl rounded-[5px] overflow-hidden ">
          <img
            src="/assets/images/Gallery/9.png"
            alt="Gallery item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="col-span-2 row-span-2 sm:rounded-2xl rounded-[5px] overflow-hidden motion-preset-blur-down-lg">
          <img
            src="/assets/images/Gallery/10.png"
            alt="Large item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            src="/assets/images/Gallery/11.png"
            alt="Gallery item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            src="/assets/images/Gallery/12.png"
            alt="Gallery item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* New items to fill gaps */}
        <div className="col-span-2 sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            src="/assets/images/Gallery/18.png"
            alt="Wide item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="row-span-2 sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            src="/assets/images/Gallery/14.png"
            alt="Tall item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            src="/assets/images/Gallery/15.png"
            alt="Gallery item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="col-span-2 sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            src="/assets/images/Gallery/16.png"
            alt="Tall item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="col-span-2 sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            src="/assets/images/Gallery/17.png"
            alt="Gallery item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className=" sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            src="/assets/images/Gallery/19.png"
            alt="Gallery item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>


        <div className="col-span-4 sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            // src="/assets/images/Gallery/13.png"
            src="/assets/images/artists/someSinger.png"
            alt="Wide item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="col-span-2 sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            src="/assets/images/Gallery/19.png"
            alt="Wide item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className=" col-span-2 sm:rounded-2xl rounded-[5px] overflow-hidden ">
          <img
            src="/assets/images/Gallery/22.png"
            alt="Gallery item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="col-span-2 row-span-2 sm:rounded-2xl rounded-[5px] overflow-hidden motion-preset-blur-down-lg">
          <img
            src="/assets/images/Gallery/21.png"
            alt="Large item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            src="/assets/images/Gallery/24.png"
            alt="Gallery item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            src="/assets/images/Gallery/23.png"
            alt="Gallery item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="col-span-2 row-span-2 sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            src="/assets/images/Gallery/13.png"
            alt="Featured"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="sm:rounded-2xl rounded-[5px] overflow-hidden " >
          <img
            src="/assets/images/Gallery/6.png"
            alt="Gallery item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="sm:rounded-2xl rounded-[5px] overflow-hidden ">
          <img
            src="/assets/images/Gallery/25.JPG"
            alt="Gallery item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="sm:rounded-2xl col-span-2 rounded-[5px] overflow-hidden ">
          <img
            src="/assets/images/Gallery/26.JPG"
            alt="Gallery item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="sm:rounded-2xl col-span-2 rounded-[5px] overflow-hidden ">
          <img
            src="/assets/images/Gallery/20.png"
            alt="Gallery item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>


      </div>
    </div>

  )
}

export default GalleryPage
