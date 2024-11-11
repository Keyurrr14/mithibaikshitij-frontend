import React from 'react'
import { SponsorMarquee } from './ui/sponsor-marquee'
 const sponsors = [
    {
        name:"gyaaat",
        src: "/assets/images/artists/someSinger.png"
    },
    {
        name:"gyaaat",
        src: "/assets/images/artists/someSinger.png"
    },
    {
        name:"gyaaat",
        src: "/assets/images/artists/someSinger.png"
    },
    {
        name:"gyaaat",
        src: "/assets/images/artists/someSinger.png"
    },
    {
        name:"gyaaat",
        src: "/assets/images/artists/someSinger.png"
    },
]


const SponsorComponent = () => {

  return (
    <div className='w-full h-full flex-col'>
        <SponsorMarquee direction='right' pauseOnHover={false} items={sponsors}/>
        <SponsorMarquee direction='left' pauseOnHover={false} items={sponsors}/>
    </div>
  )
}

export default SponsorComponent
