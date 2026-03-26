import {Link} from 'react-router-dom'
import PrimaryButton from './PrimaryButton'



export default function Navbar(){
    return (
        <nav className='px-20 flex flex-row items-center w-full'>
            <div className='py-3 flex flex-row items-center justify-between w-full'>
                <div>
                    <span className='font-jakarta text-[22px] leading-[28px] font-bold text-black'>
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