import React from 'react'
import { BackgroundGradientAnimation } from '../components/ui/bg-gradient-animation'

function GalleryPage() {
  return (

    <div className='flex flex-col bg-main-gradient items-center justify-center w-full min-h-screen p-8 max-sm:p-3 overflow-x-hidden'>
      <div className='flex flex-col w-full sm:items-start items-center my-10 sm:ml-24 ml-0'>
        <img src="/assets/logo/text_logo.svg" alt="" className='-mb-4 sm:w-40 w-20 motion-preset-blur-right-lg' />
        <h3 className='sm:text-8xl text-5xl [text-shadow:_2px_4px_0px_#000000] text-white font-lusitana motion-preset-blur-right-lg'>Gallery</h3>
      </div>
      <div className="grid grid-cols-4 sm:gap-4 gap-2 max-w-7xl w-full">
        {/* First row */}
        <div className="col-span-2 row-span-2 sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&w=600&q=50"
            alt="Featured"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="sm:rounded-2xl rounded-[5px] overflow-hidden " >
          <img
            src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/06/Female_Woods_hike_1296x728-header-1-1296x728.jpg?w=300&q=50"
            alt="Gallery item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="sm:rounded-2xl rounded-[5px] overflow-hidden ">
          <img
            src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&w=300&q=50"
            alt="Gallery item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Second row continues */}
        <div className="col-span-2 sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1682687219800-bba120d709c5?auto=format&w=600&q=50"
            alt="Wide item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Third row */}
        <div className="row-span-2 sm:rounded-2xl rounded-[5px] overflow-hidden animation-timeline">
          <img
            src="https://images.unsplash.com/photo-1682687220199-d0124f48f95b?auto=format&w=300&q=50"
            alt="Tall item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Additional images */}
        <div className="col-span-2 row-span-2 sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?auto=format&w=600&q=50"
            alt="Large item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="sm:rounded-2xl rounded-[5px] overflow-hidden ">
          <img
            src="https://tnfd.global/wp-content/uploads/2023/09/Food-and-Agricultulre-cover-1.jpg?w=300&q=50"
            alt="Gallery item"
            className="w-full h-full object-cover a"
            loading="lazy"
          />
        </div>

        <div className="col-span-2 sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1682695794947-17061dc284dd?auto=format&w=600&q=50"
            alt="Wide item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className=" col-span-2 sm:rounded-2xl rounded-[5px] overflow-hidden ">
          <img
            src="https://images.unsplash.com/photo-1682695799561-033f55f75b25?auto=format&w=300&q=50"
            alt="Gallery item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="col-span-2 row-span-2 sm:rounded-2xl rounded-[5px] overflow-hidden motion-preset-blur-down-lg">
          <img
            src="https://images.unsplash.com/photo-1682686581264-c47e25e61d95?auto=format&w=600&q=50"
            alt="Large item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1682686580024-580519d4b2d2?auto=format&w=300&q=50"
            alt="Gallery item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            src="https://tapchimoitruong.vn/uploads/082024/Va%CC%82n%20Long%20-%20Ninh%20Bi%CC%80nh_f7155924.jpg?w=300&q=50"
            alt="Gallery item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* New items to fill gaps */}
        <div className="col-span-2 sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1682695795557-17447f921f79?auto=format&w=600&q=50"
            alt="Wide item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="row-span-2 sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1682695798522-6e208131916d?auto=format&w=300&q=50"
            alt="Tall item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1682695797873-aa4cb6edd613?auto=format&w=300&q=50"
            alt="Gallery item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="col-span-2 sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1682695798522-6e208131916d?auto=format&w=300&q=50"
            alt="Tall item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="col-span-2 sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            src="https://tapchimoitruong.vn/uploads/082024/Va%CC%82n%20Long%20-%20Ninh%20Bi%CC%80nh_f7155924.jpg?w=300&q=50"
            alt="Gallery item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className=" sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            src="https://tapchimoitruong.vn/uploads/082024/Va%CC%82n%20Long%20-%20Ninh%20Bi%CC%80nh_f7155924.jpg?w=300&q=50"
            alt="Gallery item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>


        <div className="col-span-4 sm:rounded-2xl rounded-[5px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1682695795557-17447f921f79?auto=format&w=600&q=50"
            alt="Wide item"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>


      </div>
    </div>

  )
}

export default GalleryPage
