import profilePic  from '../assets/images/perfil.webp';
import SocialLinks from './SocialLinks';
export function Hero() {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-center text-center gap-4 h-[80vh] px-4">
         <div className="max-w-2xl">
            <img src={profilePic} alt="imagen de un programador web"
            className='w-1/2 rounded-full m-auto' />
                    <h1  className="font-extrabold text-3xl mb-5 ">
                        Lopez<span className="text-principal">Dev</span>
                    </h1>
                    <SocialLinks></SocialLinks>
         </div>
         <div>
          <p className="text-2xl leading-snug text-white max-w-xs text-left m-auto mb-5 pl-10
          font-bold ">
             <span className="block">Hi, I’m López</span>
             <span className="block relative bg-principal p-1 overflow-hidden px-2 w-fit 
             ">Frontend Developer <span className='block w-2 left-0 absolute top-[-20px] h-20 bg-white/30 rotate-35 animate-brillo' ></span></span>
             <span className="block font-normal text-[1.1rem]">Passionate about creating modern and dynamic web experiences</span>
             </p>
         <div className='flex flex-col gap-4 flex-wrap '>
            <button className='w-[50%] cursor-pointer hover:rounded-[5px] transition-all py-1 m-auto font-semibold bg-principal'>Technologies</button>
            <button className='w-[50%] cursor-pointer hover:rounded-[5px] transition-all py-1 m-auto font-semibold bg-principal'>Projects</button>
            <button className='w-[50%] cursor-pointer hover:rounded-[5px] transition-all py-1 m-auto font-semibold bg-principal'>Skills</button>
            <button className='w-[50%] cursor-pointer hover:rounded-[5px] transition-all py-1 m-auto font-semibold bg-principal'>About Me</button>

         </div>
         </div>
        </section>
    )

}