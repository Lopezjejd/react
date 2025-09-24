import profilePic  from '../assets/images/perfil.webp';
import SocialLinks from './SocialLinks';
export function Hero() {
    return (
        <section className="flex flex-col items-center justify-center text-center gap-4 h-[80vh] px-4">
         <div className="max-w-2xl">
            <img src={profilePic} alt="imagen de un programador web"
            className='w-1/2 rounded-full m-auto' />
                    <h1  className="font-extrabold text-3xl mb-5 ">
                        Lopez<span className="text-principal">Dev</span>
                    </h1>
                    <SocialLinks></SocialLinks>
         </div>
         <div>
          <p className="text-2xl leading-snug text-white max-w-xs text-left m-auto mb-5
          font-bold ">
             <span className="block">Hi, I’m López</span>
             <span className="block relative bg-principal p-1 overflow-hidden px-2 w-fit after:content-[''] after:block after:w-2  after:left-0 after:absolute after:top-[-10px] 
                after:h-10 after:bg-white/60 after:rotate-35 after:brightness-1250
             ">Frontend Developer</span>
             <span className="block text-xl">Passionate about creating modern and dynamic web experiences</span>
             </p>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
         </div>
        </section>
    )

}