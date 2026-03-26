


export default function HeroSection(){
    return (
        <div className="h-screen w-full relative overflow-hidden px-20">
            <div 
                className="absolute bottom-0 left-0 w-full h-1/2 blur-2xl -z-10"
                style={{
                    background: 'radial-gradient(ellipse 120% 80% at 50% 100%, rgb(79 70 229 / 0.6) 0%, rgb(79 70 229 / 0.3) 40%, transparent 80%)'
                }}
            ></div>
            <div className="flex flex-col justify-center items-center lg:gap-8 mt-40">
                <h1 className="font-jakarta text-[60px] leading-[68px] text-grey-dark font-extrabold max-w-[700px] text-center">The World's Laziest Management System.</h1>
                <p className="text-secondary text-[18px] text-center max-w-[800px]">Introducing DayForge, the time management system tailored for entrepreneurs who prefer taking it easy. Say goodbye to hours of planning processes and hello to efficient planning. </p>
            </div>
        </div>
    )
}