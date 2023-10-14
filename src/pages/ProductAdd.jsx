import { useNavigate } from 'react-router-dom';
import bg from '../assets/more/add-new.png'

const ProductAdd = () => {
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
                <div className='bg-[#F4F3F0] rounded px-[30px] md:px-[90px] py-[70px] '>
                    <div>
                        <p className='text-[#374151] text-[45px] text-center font-rancho mb-3'>Add New Coffee</p>
                        <p className='text-[#374151]/70 text-center font-raleway mb-10'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>

                    <form >
                        <div className='flex gap-4'>
                            <div className='flex-1'>
                                <label className='block mb-2' htmlFor='name'>Name</label>
                                <input className='w-full p-2 rounded-md focus:outline-[#E3B577]' type="text" placeholder='Name' id='name' name='name' />

                                <label className='block mt-4 mb-2' htmlFor='Supplier'>Supplier</label>
                                <input className='w-full p-2 rounded-md focus:outline-[#E3B577]' type="text" placeholder='Enter coffee supplier' id='Supplier' name='supplier' />

                                <label className='block mt-4 mb-2' htmlFor='Category'>Category</label>
                                <input className='w-full p-2 rounded-md focus:outline-[#E3B577]' type="text" placeholder='Enter coffee category' id='Category' name='category' />

                                <label className='block mt-4 mb-2' htmlFor='Photo'>Photo</label>
                                <input className='w-full p-2 rounded-md focus:outline-[#E3B577]' type="text" placeholder='Enter photo URL' id='Photo' name='photo' />

                            </div>
                            {/* Right side */}
                            <div className='flex-1'>
                                <label className='block mb-2' htmlFor='Chef'>Chef</label>
                                <input className='w-full p-2 rounded-md focus:outline-[#E3B577]' type="text" placeholder='Enter coffee chef' id='Chef' name='chef' />

                                <label className='block mt-4 mb-2' htmlFor='Taste'>Taste</label>
                                <input className='w-full p-2 rounded-md focus:outline-[#E3B577]' type="text" placeholder='Enter coffee taste' id='Taste' name='taste' />

                                <label className='block mt-4 mb-2' htmlFor='details'>Details</label>
                                <input className='w-full p-2 rounded-md focus:outline-[#E3B577]' type="text" placeholder='Enter coffee details' id='details' name='details' />

                                <label className='block mt-4 mb-2' htmlFor='details'>Price</label>
                                <input className='w-full p-2 rounded-md focus:outline-[#E3B577]' type="text" placeholder='Enter coffee Price' id='Price' name='price' />
                            </div>
                        </div>



                        <input className='px-4 w-full py-2 mt-4 rounded font-rancho bg-[#E3B577] duration-200 hover:text-white cursor-pointer' type="submit" value='Add Coffe' />
                    </form>

                </div>
            </div>

        </div>
    );
};

export default ProductAdd;