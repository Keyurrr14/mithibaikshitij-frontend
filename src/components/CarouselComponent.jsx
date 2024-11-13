import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';

const Images = [
    '/assets/images/carousel/kk.png',
    '/assets/images/carousel/sunidhi.png',
    '/assets/images/carousel/king.png',
    '/assets/images/carousel/javed.png',
    '/assets/images/carousel/sachin.png',
    '/assets/images/carousel/amit.png',
    '/assets/images/carousel/yellow.png',
];

const CarouselComponent = () => {


    return (
        <div className='w-[90%] h-full my-10'>
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Splide
                aria-label="My Favorite Images"
                options={{
                    type: 'loop',
                    perPage: 3,
                    autoplay: true,
                    rewind: true,
                    gap: '1rem',
                    height: '100%',
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
                    <SplideSlide key={index} className={`${index === 1 && 'scale-105' }`}
>
                        <img src={image} alt={image} style={{ width: '100%', height: '100%', borderRadius:'10px', objectFit:'cover' }}
                            // className={`${index === 1 && 'scale-105' }`}

                        />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
        </div>
    );
};

export default CarouselComponent;
