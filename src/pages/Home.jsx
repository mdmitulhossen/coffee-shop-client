import Hero from "../components/Header/Hero";

// image import
import coffeeIcon1 from '../assets/icons/1.png';
import coffeeIcon2 from '../assets/icons/2.png';
import coffeeIcon3 from '../assets/icons/3.png';
import coffeeIcon4 from '../assets/icons/4.png';
import ProductsCard from "../components/Card/ProductsCard";
// import coffeeIcon4 from '../assets/more/popular-product.png';
// instagram image
import insta1 from "../assets/cups/1.png"
import insta2 from "../assets/cups/2.png"
import insta3 from "../assets/cups/3.png"
import insta4 from "../assets/cups/4.png"
import insta5 from "../assets/cups/5.png"
import insta6 from "../assets/cups/6.png"
import insta7 from "../assets/cups/7.png"
import insta8 from "../assets/cups/8.png"


import overlay1 from '../assets/more/4.png'
import overlay2 from '../assets/more/5.png'
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

    return (
        <div>
            <Hero />

            {/* services */}
            <div className="2xl:h-[300px] h-auto py-10 coffeeContainer bg-[#ECEAE3] flex justify-center items-center">
                <div className=" w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-between">
                    <div className="border space-y-1">
                        <img className="2xl:w-[60px] 2xl:h-[60px]  h-[50px] w-[50px]" src={coffeeIcon1} alt="coffeeIcon" />
                        <h3 className="font-rancho text-[#331A15] text-[28px] 2xl:text-[32px]">Awesome Aroma</h3>
                        <p className="font-raleway text-[#1B1A1A] text-sm">You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div className="border space-y-1">
                        <img className="2xl:w-[60px] 2xl:h-[60px] h-[50px] w-[50px]" src={coffeeIcon2} alt="coffeeIcon" />
                        <h3 className="font-rancho text-[#331A15] text-[28px] 2xl:text-[32px]">High Quality</h3>
                        <p className="font-raleway text-[#1B1A1A] text-sm">We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div className="border space-y-1">
                        <img className="2xl:w-[60px] 2xl:h-[60px] h-[50px] w-[50px]" src={coffeeIcon3} alt="coffeeIcon" />
                        <h3 className="font-rancho text-[#331A15] text-[28px] 2xl:text-[32px]">Pure Grades</h3>
                        <p className="font-raleway text-[#1B1A1A] text-sm">The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div className="border space-y-1">
                        <img className="2xl:w-[60px] 2xl:h-[60px] h-[50px] w-[50px]" src={coffeeIcon4} alt="coffeeIcon" />
                        <h3 className="font-rancho text-[#331A15] text-[28px] 2xl:text-[32px]">Proper Roasting</h3>
                        <p className="font-raleway text-[#1B1A1A] text-sm">Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>

                </div>
            </div>

            {/* Our Popular products */}
            <div className="max-w-[1920px] mx-auto relative">
                <img className="absolute left-0 top-0 w-[130px] md:w-[250px] opacity-50" src={overlay1} alt="" />
                <img className="absolute right-0 bottom-0 md:w-[250px] w-[130px]" src={overlay2} alt="" />
                <div className="coffeeContainer mt-20 mb-10">
                    {/* Section Head */}
                    <div className="w-full text-center">
                        <p className="text-[#1B1A1A] font-raleway"> --- Sip & Savor --- </p>
                        <p className="font-rancho text-[45px] text-[#331A15]">Our Popular Products</p>
                        <button onClick={()=>navigate('coffee/add')} className="bg-[#E3B577] px-4 py-1 font-rancho text-white flex justify-center items-center gap-2 mx-auto hover:bg-[#F5F4F1] hover:text-[#331A15] duration-150">
                            Add Coffee
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 21 16" fill="none">
                                <path d="M13.7143 11.4286V2.28571H2.28571V11.4286C2.28571 12.0348 2.52653 12.6162 2.95518 13.0448C3.38384 13.4735 3.96522 13.7143 4.57143 13.7143H11.4286C12.0348 13.7143 12.6162 13.4735 13.0448 13.0448C13.4735 12.6162 13.7143 12.0348 13.7143 11.4286ZM1.14286 0H18.2857C18.8919 0 19.4733 0.240816 19.902 0.66947C20.3306 1.09812 20.5714 1.67951 20.5714 2.28571V5.71429C20.5714 6.3205 20.3306 6.90188 19.902 7.33053C19.4733 7.75918 18.8919 8 18.2857 8H16V11.4286C16 12.641 15.5184 13.8038 14.6611 14.6611C13.8037 15.5184 12.641 16 11.4286 16H4.57143C3.35901 16 2.19625 15.5184 1.33894 14.6611C0.481631 13.8038 0 12.641 0 11.4286V1.14286C0 0.839753 0.120408 0.549062 0.334735 0.334735C0.549063 0.120408 0.839752 0 1.14286 0ZM16 2.28571V5.71429H18.2857V2.28571H16Z" fill="#331A15" />
                            </svg>
                        </button>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-4 mt-10">
                        <ProductsCard />
                        <ProductsCard />
                        <ProductsCard />
                        <ProductsCard />
                        <ProductsCard />
                        <ProductsCard />
                    </div>
                </div>
            </div>

            {/* Follow on instagram */}
            <div className="coffeeContainer mt-20 mb-10">
                {/* Section Head */}
                <div className="w-full text-center">
                    <p className="text-[#1B1A1A] font-raleway"> Follow Us Now</p>
                    <p className="font-rancho text-[45px] text-[#331A15]">Follow on Instagram</p>
                </div>

                <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <img className="rounded-[10px]" src={insta1} alt="" />
                    <img className="rounded-[10px]" src={insta2} alt="" />
                    <img className="rounded-[10px]" src={insta3} alt="" />
                    <img className="rounded-[10px]" src={insta4} alt="" />
                    <img className="rounded-[10px]" src={insta5} alt="" />
                    <img className="rounded-[10px]" src={insta6} alt="" />
                    <img className="rounded-[10px]" src={insta7} alt="" />
                    <img className="rounded-[10px]" src={insta8} alt="" />
                </div>
            </div>

            
        </div>
    );
};

export default Home;