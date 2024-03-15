import logo from '../../assets/img/d5389cc06b9d40c646878c60ac4bf7ed.png'
const Header = () => {
    return (
        <div className='flex justify-between mt-4 px-7' >
            <img src={logo} alt="" className='w-20' />
            <ul className='flex gap-7'>
                <li className='text-[16px] font-semibold text-[#2E2E2E]'>MENU</li>
                <li className='text-[16px] font-semibold text-[#2E2E2E]'>LOCATION</li>
                <li className='text-[16px] font-semibold text-[#2E2E2E]'>ABOUT</li>
                <li className='text-[16px] font-semibold text-[#2E2E2E]'>CONTACT</li>
            </ul>
            <button className='bg-red-800 text-white py-[6px] px-[16px] font-bold'>Login</button>

            
        </div>
    );
};

export default Header;