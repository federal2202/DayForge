export default function PrimaryButton({children, onClick, text}: {children?: React.ReactNode, onClick?: () => void, text: string}){
    return (
        <button className='px-5 py-3 rounded-[64px] md:min-w-[163px]  min-w-full  bg-primary flex items-center justify-center gap-2' onClick={onClick}>
            {children}
            <span className='font-jakarta text-[16px] leading-[22px] font-bold text-white'>
                {text}
            </span>
        </button>
    )
}