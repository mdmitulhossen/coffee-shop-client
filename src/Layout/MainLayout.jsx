import { Outlet } from "react-router-dom";

// images import
import header from '../assets/more/header.jpg';
import logo from '../assets/more/logo1.png'

const MainLayout = () => {
    return (
        <div>
            {/* Header */}
            <div className="relative max-w-[1920px] mx-auto h-[100px] md:h-[120px]">
                <img className="w-full h-full object-cover" src={header} alt="header" />
                <div className="absolute w-full h-full inset-0 flex gap-2 justify-center items-center overflow-hidden">
                    <img className="w-[60px] h-[75px] md:w-[75px] md:h-[90px]" src={logo} alt="logo" />
                    <h1  className="font-rancho text-[40px] md:text-[55px] text-white">Espresso Emporium</h1>
                </div>
            </div>


            <Outlet />
        </div>
    );
};

export default MainLayout;