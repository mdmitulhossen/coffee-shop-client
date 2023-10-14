import { useLoaderData, useNavigate } from 'react-router-dom';
import bg from '../assets/more/add-new.png'
import img1 from '../assets/1.png'

const CoffeeDetails = () => {
    const coffeeItem = useLoaderData();
    const {name,supplier,category,photo,chef,taste,details,price}=coffeeItem || {};
    const navigate = useNavigate();
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    return (
        <div
            style={{
                background: `url(${bg})`,
            }}
            className="max-w-[1920px] mx-auto">
            <div className="coffeeContainer py-16">
                <div className='mb-5 inline-block'>
                    <p onClick={() => navigate('/')} className='flex items-center hover:bg-[#E3B577] duration-200 cursor-pointer rounded py-2 px-1'>
                        <span className='text-2xl'><i className='bx bx-left-arrow-alt' ></i></span>
                        <span className='text-2xl font-rancho ml-4'>Back To Home</span>
                    </p>
                </div>

                <div>
                    <div className="bg-[#F5F4F1] w-full py-10 pl-2 pr-8 rounded-lg">
                        <div className='flex justify-center items-center gap-2  md:gap-20 lg:gap-28'>
                            <div className='max-h-[250px] max-w-[200px] '>
                                <img className='w-full h-full object-cover' src={photo} alt="" />
                            </div>
                            <div className='space-y-2 md:text-2xl'>
                                <p className='font-raleway text-[#1B1A1A] font-medium'>Name : <span className='text-[#5C5B5B]'>{name}</span></p>
                                <p className='font-raleway text-[#1B1A1A] font-medium'>Chef : <span className='text-[#5C5B5B]'>{chef}</span></p>
                                <p className='font-raleway text-[#1B1A1A] font-medium'>Supplier : <span className='text-[#5C5B5B]'>{supplier}</span></p>
                                <p className='font-raleway text-[#1B1A1A] font-medium'>Taste : <span className='text-[#5C5B5B]'>{taste}</span></p>
                                <p className='font-raleway text-[#1B1A1A] font-medium'>Category : <span className='text-[#5C5B5B]'>{category}</span></p>
                                <p className='font-raleway text-[#1B1A1A] font-medium'>Details : <span className='text-[#5C5B5B]'>{details}</span></p>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CoffeeDetails;