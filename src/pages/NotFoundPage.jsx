import Contact from "../components/Contact";
import Footer from "../components/Footer/Footer";

import header from '../assets/more/header.jpg';
import logo from '../assets/more/logo1.png'
import notFound from '../assets/404/404.gif'
import { useNavigate } from "react-router-dom";


const NotFoundPage = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    const navigate = useNavigate();
    return (
        <div>
            {/* Header */}
            <div className="relative max-w-[1920px] mx-auto h-[100px] md:h-[120px]">
                <img className="w-full h-full object-cover" src={header} alt="header" />
                <div className="absolute w-full h-full inset-0 flex gap-2 justify-center items-center overflow-hidden">
                    <img className="w-[60px] h-[75px] md:w-[75px] md:h-[90px]" src={logo} alt="logo" />
                    <h1 className="font-rancho text-[40px] md:text-[55px] text-white">Espresso Emporium</h1>
                </div>
            </div>


            <div className="coffeeContainer mt-10">
                <div className='mb-5 inline-block mx-auto text-center'>
                    <p onClick={() => navigate('/')} className='flex items-center hover:bg-[#E3B577] duration-200 cursor-pointer rounded py-2 px-1 '>
                        <span className='text-2xl'><i className='bx bx-left-arrow-alt' ></i></span>
                        <span className='text-2xl font-rancho ml-4'>Back To Home</span>
                    </p>
                </div>

                <div className="flex justify-center">
                    <img className="h-[500px]" src={notFound} alt="" />
                </div>
            </div>


            <Contact />
            <Footer />
        </div>
    );
};

export default NotFoundPage;