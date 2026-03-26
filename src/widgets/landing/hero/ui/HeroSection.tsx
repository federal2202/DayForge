import PrimaryButton from "../../../../shared/ui/PrimaryButton";
import { LogOut } from "lucide-react";


export default function HeroSection(){
    return (
        <div className="h-screen w-full relative overflow-hidden px-10 lg:px-20 pt-50">
            <div 
                className="absolute -bottom-20 -right-20 w-[70%] h-[70%] blur-3xl -z-10"
                style={{
                    background: 'linear-gradient(135deg, transparent 30%, rgb(79 70 229 / 0.4) 50%, rgb(79 70 229 / 0.6) 70%, rgb(79 70 229 / 0.8) 100%)'
                }}
            ></div>
             <div 
                className="absolute -top-20 -left-70 w-[50%] h-[50%] blur-3xl -z-10"
                style={{
                    background: 'linear-gradient(135deg, transparent 30%, rgb(79 70 229 / 0.4) 50%, rgb(79 70 229 / 0.6) 70%, rgb(79 70 229 / 0.8) 100%)'
                }}
            ></div>
            <div className="flex flex-col justify-center items-center lg:gap-8  gap-6 pt-10 sm:pt-0">
                <h1 className="font-jakarta md:text-[60px] text-[36px] sm:text-[44px] leading-[44px] md:leading-[68px] text-grey-dark font-extrabold max-w-[700px] text-center">The World's Laziest Management System.</h1>
                <p className="text-secondary text-[18px] text-center max-w-[800px]">Introducing DayForge, the time management system tailored for entrepreneurs who prefer taking it easy. Say goodbye to hours of planning processes and hello to efficient planning. </p>
                <PrimaryButton onClick={() => {}} text="Sign In Today" ><LogOut className="text-white" /></PrimaryButton>
            </div>
        </div>
    )
}