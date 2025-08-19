import imgRamenDeFrango from '../assets/images/ramen-de-frango.png'
import imgRamenApimentado from '../assets/images/ramen-apimentado.png'
import imgRamenTradicional from '../assets/images/ramen-tradicional.png'


export function Pratos() {
    return (
        <>
            <section className='mt-48'>
                <div className='flex justify-center'>
                      <h1 className='font-Koh-Santepheap font-normal text-5xl'>Populares</h1>
                </div>

                <div className='flex justify-center items-center gap-28 mt-16'>

                      <div className='flex flex-col gap-5 items-center bg-[#F8F5F2] w-80 h-[500px] rounded-2xl'>
                            <img src={imgRamenDeFrango} alt="Imagem prato da casa" className='w-60 mt-10' />
                            <h1 className='font-Koh-Santepheap font-normal text-3xl'>Ramen de frango</h1>
                            <p className='w-64 text-center font-Poppins font-normal text-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <span className='font-Koh-Santepheap font-normal text-3xl text-Red-Button'>R$ 30</span>
                      </div>

                      <div className='flex flex-col gap-5 items-center bg-[#F8F5F2] w-80 h-[500px] rounded-2xl'>
                            <img src={imgRamenApimentado} alt="Imagem prato da casa" className='w-60 mt-10'/>
                            <h1 className='font-Koh-Santepheap font-normal text-3xl'>Ramen apimentado</h1>
                            <p className='w-64 text-center font-Poppins font-normal text-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <span className='font-Koh-Santepheap font-normal text-3xl text-Red-Button'>R$ 30</span>
                      </div>

                      <div className='flex flex-col gap-5 items-center bg-[#F8F5F2] w-80 h-[500px] rounded-2xl'>
                            <img src={imgRamenTradicional} alt="Imagem prato da casa" className='w-60 mt-10'/>
                            <h1 className='font-Koh-Santepheap font-normal text-3xl'>Ramen tradicional</h1>
                            <p className='w-64 text-center font-Poppins font-normal text-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <span className='font-Koh-Santepheap font-normal text-3xl text-Red-Button'>R$ 30</span>
                      </div>
                      
                </div>
      </section>        
        </>
    )
}