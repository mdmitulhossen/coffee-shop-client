import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import bg from '../assets/more/add-new.png'
import Swal from 'sweetalert2';
import { baseURL } from '../utilitis/helper';

const ProductAdd = ({ update }) => {
    const coffeeItem = useLoaderData();
    const {name,supplier,category,photo,chef,taste,details,price}=coffeeItem || {};
    const {id} = useParams()
    const navigate = useNavigate();
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

    const handleUpdateAdd = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = {
            name: form.name.value,
            supplier: form.supplier.value,
            category: form.category.value,
            photo: form.photo.value,
            chef: form.chef.value,
            taste: form.taste.value,
            details: form.details.value,
            price: form.price.value,
        }
        console.log(data)

        if (update) {
            // update code
            fetch(`${baseURL}/coffee/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Successfully Updated',
                    showConfirmButton: false,
                    timer: 2000
                })

            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            })
           
        }
        else {
            // add code
            fetch(`${baseURL}/coffee`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Successfully Added',
                    showConfirmButton: false,
                    timer: 2000
                })

            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            })

        }
      
    }

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
                        <p className='text-[#374151] text-[45px] text-center font-rancho mb-3'>
                            {
                                update ? 'Update Existing Coffee Details' : 'Add New Coffee'
                            }
                        </p>
                        <p className='text-[#374151]/70 text-center font-raleway mb-10'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>

                    <form onSubmit={handleUpdateAdd}>
                        <div className='flex gap-4'>
                            <div className='flex-1'>
                                <label className='block mb-2' htmlFor='name'>Name</label>
                                <input className='w-full p-2 rounded-md focus:outline-[#E3B577]' type="text" placeholder='Name' id='name' name='name' defaultValue={name}/>

                                <label className='block mt-4 mb-2' htmlFor='Supplier'>Supplier</label>
                                <input className='w-full p-2 rounded-md focus:outline-[#E3B577]' type="text" placeholder='Enter coffee supplier' id='Supplier' name='supplier' defaultValue={supplier}/>

                                <label className='block mt-4 mb-2' htmlFor='Category'>Category</label>
                                <input className='w-full p-2 rounded-md focus:outline-[#E3B577]' type="text" placeholder='Enter coffee category' id='Category' name='category' defaultValue={category}/>

                                <label className='block mt-4 mb-2' htmlFor='Photo'>Photo</label>
                                <input className='w-full p-2 rounded-md focus:outline-[#E3B577]' type="text" placeholder='Enter photo URL' id='Photo' name='photo' defaultValue={photo}/>

                            </div>
                            {/* Right side */}
                            <div className='flex-1'>
                                <label className='block mb-2' htmlFor='Chef'>Chef</label>
                                <input className='w-full p-2 rounded-md focus:outline-[#E3B577]' type="text" placeholder='Enter coffee chef' id='Chef' name='chef' defaultValue={chef}/>

                                <label className='block mt-4 mb-2' htmlFor='Taste'>Taste</label>
                                <input className='w-full p-2 rounded-md focus:outline-[#E3B577]' type="text" placeholder='Enter coffee taste' id='Taste' name='taste' defaultValue={taste}/>

                                <label className='block mt-4 mb-2' htmlFor='details'>Details</label>
                                <input className='w-full p-2 rounded-md focus:outline-[#E3B577]' type="text" placeholder='Enter coffee details' id='details' name='details' defaultValue={details}/>

                                <label className='block mt-4 mb-2' htmlFor='details'>Price</label>
                                <input className='w-full p-2 rounded-md focus:outline-[#E3B577]' type="text" placeholder='Enter coffee Price' id='Price' name='price' defaultValue={price}/>
                            </div>
                        </div>
                        {
                            update ?
                                <input className='px-4 w-full py-2 mt-4 rounded font-rancho bg-[#E3B577] duration-200 hover:text-white cursor-pointer' type="submit" value='Update Coffee Details' />
                                :
                                <input className='px-4 w-full py-2 mt-4 rounded font-rancho bg-[#E3B577] duration-200 hover:text-white cursor-pointer' type="submit" value='Add Coffe' />
                        }



                    </form>

                </div>
            </div>

        </div>
    );
};

export default ProductAdd;