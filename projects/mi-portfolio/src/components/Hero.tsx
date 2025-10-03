import profilePic  from '../assets/images/perfil.webp';
import SocialLinks from './SocialLinks';


export function Hero() {


    return (
        <section className="flex flex-col lg:flex-row items-center justify-center text-center gap-4 h-[100dvh] overflow-hidden ">
         <div className="max-w-xl ">
            <img src={profilePic} alt="imagen de un programador web"
            className='w-1/2 rounded-full m-auto' />
                    <h1  className="font-extrabold text-3xl mb-5 ">
                        Lopez<span className="text-principal">Dev</span>
                    </h1>
                    <SocialLinks></SocialLinks>
         </div>
         <div className='text-center  max-w-2xl pt-10'>
          <p className="text-2xl leading-snug text-white max-w-xs text-left m-auto mb-5 pl-10
          font-bold ">
             <span className="block">Hi, I’m López</span>
             <span className="block relative bg-principal p-1 overflow-hidden px-2 w-fit 
             ">Frontend Developer <span className='block w-2 left-0 absolute top-[-20px] h-20 bg-white/30 rotate-35 animate-brillo' ></span></span>
             <span className="block font-normal text-[1.1rem]">Passionate about creating modern and dynamic web experiences</span>
             </p>
         <div className='flex flex-col gap-4 flex-wrap relative '>


<div className="w-[50%] group m-auto relative animate-appear">
  <div className="relative">
    <div className="absolute inset-0 bg-white border-2 "></div>
    <a
      href="#technologies"
      className="relative block w-full py-2 font-semibold text-center text-white
       transition-all duration-300 ease-in-out transform bg-principal    -translate-x-1.5 -translate-y-1.5 group-hover:translate-x-0
        group-hover:translate-y-0
       group-hover:bg-white group-hover:text-principal active:translate-x-0 active:translate-y-0"
    >
      Technologies
    </a>

  </div>
</div>

<div className="w-[50%] group m-auto relative animate-appear-reverse">
  <div className="relative">
    <div className="absolute inset-0 bg-white border-2  "></div>
    <a
      href="#projects"
      className="relative block w-full py-2 font-semibold text-center text-white
       transition-all duration-300 ease-in-out transform bg-principal    -translate-x-1.5 -translate-y-1.5 group-hover:translate-x-0
        group-hover:translate-y-0
       group-hover:bg-white group-hover:text-principal active:translate-x-0 active:translate-y-0"
    >
     Projects
    </a>
    
  </div>
</div>
<div className="w-[50%] group m-auto relative animate-appear ">
  <div className="relative">
    <div className="absolute inset-0 bg-white border-2 "></div>
    <a
      href="#skills"
      className="relative block w-full py-2 font-semibold text-center text-white
       transition-all duration-300 ease-in-out transform bg-principal    -translate-x-1.5 -translate-y-1.5 group-hover:translate-x-0
        group-hover:translate-y-0
       group-hover:bg-white group-hover:text-principal active:translate-x-0 active:translate-y-0"
    >
     Skills
    </a>
    
  </div>
</div>
<div className="w-[50%] group m-auto relative animate-appear-reverse">
  <div className="relative">
    <div className="absolute inset-0 bg-white border-2 "></div>
    <a
      href="#skills"
      className="relative block w-full py-2 font-semibold text-center text-white
       transition-all duration-300 ease-in-out transform bg-principal    -translate-x-1.5 -translate-y-1.5 group-hover:translate-x-0
        group-hover:translate-y-0
       group-hover:bg-white group-hover:text-principal active:translate-x-0 active:translate-y-0"
    >
     About Me
    </a>
    
  </div>
</div>
             <svg className='m-auto  animate-bounce'
              width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M12 19L5 12L6.41 10.59L11 15.17V5H13V15.17L17.59 10.59L19 12L12 19Z" fill="white"/>
             </svg>

         </div>
         </div>
        </section>
    )

}