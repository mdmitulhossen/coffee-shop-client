// image import
import hero from '../../assets/more/hero.png'
const Hero = () => {
    return (
        <div>
            <div className="relative w-full max-w-[1920px] mx-auto md:h-[650px] h-[550px]">
                <img className='w-full h-full object-cover' src={hero} alt="hero" />
                <div className='absolute w-full h-full inset-0 coffeeContainer  flex justify-center md:justify-end items-center overflow-hidden'>
                    <div className=' w-full md:w-2/4  space-y-3 text-center md:text-left'>
                        <h1 className='text-white font-rancho text-[50px]'>Would you like a Cup of Delicious Coffee?</h1>
                        <p className='text-white font-raleway'> It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className='text-[#242222] bg-[#E3B577] px-4 py-1 font-rancho hover:bg-transparent hover:border hover:border-[#FFF] duration-200 hover:text-white'>Learn More</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Hero;