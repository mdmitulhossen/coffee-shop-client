
import footerbg from '../../assets/more/footer.jpg';
const Footer = () => {
    return (
        <div
        style={{
            background: `url(${footerbg})`,
        
        }}
        className='max-w-[1920px] mx-auto h-[50px] flex justify-center items-center'
        >
            <p className='font-rancho text-xl text-white text-center'>Copyright Espresso Emporium ! All Rights Reserved</p>
        </div>
    );
};

export default Footer;