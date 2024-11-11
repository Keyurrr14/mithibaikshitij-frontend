import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';

const Images = [
    '/assets/images/artists/someSinger.png',
    '/assets/images/artists/someSinger.png',
    '/assets/images/artists/someSinger.png'
];

const CarouselComponent = () => {


    return (
        <div className='w-[90%] h-full'>
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Splide
                aria-label="My Favorite Images"
                options={{
                    type: 'loop',
                    perPage: 3,
                    autoplay: true,
                    rewind: true,
                    gap: '1rem',
                    height: '300px',
                    pagination: false,
                    arrows: true,
                    extensions: { AutoScroll },
                    autoScroll: {
                        speed: 10,
                        pauseOnHover: false,
                    },
                }}
            >
                {Images.map((image, index) => (
                    <SplideSlide key={index}>
                        <img src={image} alt={image} style={{ width: '100%', height: '100%', borderRadius:'10px', objectFit:'cover' }} />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
        </div>
    );
};

export default CarouselComponent;
