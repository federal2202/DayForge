import {Link} from 'react-router-dom'
import PrimaryButton from './PrimaryButton'



export default function Navbar(){
    return (
        <nav className='lg:px-20 px-10 flex flex-row items-center w-full fixed top-4 left-0 right-0 z-50'>
            <div className='py-3 flex flex-row items-center justify-between w-full mx-auto max-w-7xl backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl px-8 shadow-xl backdrop-saturate-150'>
                <div>
                    <span className='font-jakarta lg:text-[22px] text-[20px] lg:leading-[28px] leading-[24px] font-bold text-secondary'>
                        <span className='text-primary'>Day</span>Forge
                    </span>
                </div>
                <div className='flex-row gap-8  hidden lg:flex font-bold text-secondary'>
                            <Link to="/" className='font-jakarta text-[16px] leading-[22px]'>Home</Link>
                            <Link to="/product" className='font-jakarta text-[16px] leading-[22px]'>Product</Link>
                            <Link to="/services" className='font-jakarta text-[16px] leading-[22px]'>Services</Link>
                            <Link to="/pricing" className='font-jakarta text-[16px] leading-[22px]'>Pricing</Link>

                </div>
                
                <div>
                    <PrimaryButton onClick={() => {}} text="Go Pro Today" />
                </div>
            </div>
            
        </nav>
    )
}