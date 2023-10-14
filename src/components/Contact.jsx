import contactbg from '../assets/more/contact.jpg'
import logo from '../assets/more/logo1.png'


const Contact = () => {
    return (
        <div 
        style={{
            background: `url(${contactbg})`,
          }}
        className="py-16  max-w-[1920px] mx-auto ">
            <div className="coffeeContainer">
                <div className='flex flex-col md:flex-row justify-between items-center gap-12 h-full' >
                    <div className='flex-1 space-y-3 '>
                        <div>
                            <img className='w-[70px] h-[85px]' src={logo} alt="" />
                            <p className='text-[#331A15] font-rancho text-[40px]'>Espresso Emporium</p>
                        </div>
                        <p className='text-[#1B1A1A] font-raleway text-lg'>
                            Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
                        </p>
                        <div className='text-[40px] space-x-3 text-[#331A15]'>
                            <i className='bx bxl-facebook-circle' ></i>
                            <i className='bx bxl-twitter' ></i>
                            <i className='bx bxl-instagram' ></i>
                            <i className='bx bxl-linkedin-square' ></i>
                        </div>
                        <p className='text-[#331A15] text-[40px] font-rancho'>Get in Touch</p>
                        <div className='text-xl text-[#331A15] space-y-2'>
                            <p className='flex gap-2 items-center'>
                                <i className='bx bxs-phone' ></i>
                                +88 01533 333 333
                            </p>
                            <p className='flex gap-2 items-center'>
                                <i className='bx bxs-envelope' ></i>
                                info@gmail.com
                            </p>
                            <p className='flex gap-2 items-center'>
                                <i className='bx bxs-location-plus' ></i>
                                72, Wall street, King Road, Dhaka
                            </p>
                        </div>
                    </div>
                    {/* right */}
                    <div className='flex-1 '>
                        <p className='text-[40px] font-rancho text-[#331A15] mb-4'>Connect with Us</p>
                        <div>
                            <form className='space-y-4'>
                                <input className='w-full p-2 rounded-md focus:outline-[#E3B577]' type="text" placeholder='name'/>
                                <input className='w-full p-2 rounded-md focus:outline-[#E3B577]' type="text" placeholder='email'/>
                                <textarea className='w-full p-2 rounded-md focus:outline-[#E3B577]' type="text" placeholder='message'/>
                                <input className='px-4 py-1 rounded-full font-rancho hover:bg-[#331A15] border border-[#331A15] duration-200 hover:text-white cursor-pointer' type="submit" value='send message'/>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;