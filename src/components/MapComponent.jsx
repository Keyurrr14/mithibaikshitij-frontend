import React from 'react'

const MapComponent = () => {
  return (
    <div className='w-full h-full flex-center my-10'>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0978697037117!2d72.8346180752539!3d19.10336195111281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c979fec363dd%3A0xcabf0173ef40721b!2sMithibai%20Kshitij!5e0!3m2!1sen!2sin!4v1730709647174!5m2!1sen!2sin"
            className="w-[90vw] md:w-[80vw] lg:w-[1400px] h-[400px] md:h-[500px] lg:h-[600px]"
            style={{
                border: "0",
                borderRadius: "10px",
                margin: "0 auto"
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
    </div>
  )
}

export default MapComponent
