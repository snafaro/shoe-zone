import flip from '../../assets/img/fe15236a1a9843e35f7b3b8467e998ff.png'
import ama from '../../assets/img/4f98c0bc6952e9281673372fcb16cfc0.png'
const Text = () => {
    return (
        <div className='flex flex-col gap-6'>
           <h1 className='text-9xl font-extrabold text-black'>YOUR FEET <br />
            DESERVE <br />
            THE BEST</h1> 

            <p className='max-w-[400px] font-semibold text-[#5A5959] text-[16px]'>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            </p>

            <div className='flex gap-10'>
                <button className='bg-red-800 text-white py-[6px] px-[16px] font-bold' >Shop Now</button>
                <button className='border-2 p-2 text-[#5A5959] font-bold' >Category</button>
            </div>

            <p className='text-[#5A5959] font-normal text-[16px]'>
                Also Available On
            </p>

            <div className='flex gap-7' >
                <img src={flip} alt="" className='w-[32px]' />
                <img src={ama} alt=""  className='w-[32px]' />
            </div>
        </div>
    );
};

export default Text;