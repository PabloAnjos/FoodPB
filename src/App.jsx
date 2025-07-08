import './App.css'
import { Navbar } from './components/Navbar'
import imgSushi from './assets/images/sushi.png'
import imgSegurandoPrato from './assets/images/segurandoprato.png'
import { Pratos } from './components/Pratos'

function App() {
  return (
    <>
      <body className='bg-white'>

            <Navbar />

      {/* SECTION INICIO */}
      
      <section className='flex justify-around items-center mt-10'>
                <div className='w-[500px] flex flex-col gap-5'>
                      <h1 className='font-Koh-Santepheap font-normal text-5xl text-Cinza-Text'>Comida Oriental</h1>
                      <p className='font-Poppins text-Cinza-Text text-2xl'>
                          A culinária Japonesa é bastante equilibrada, sendo muito rica em peixes (ômega 3),
                          vegetais, massas e ingredientes frescos.
                      </p>
                      <a href="" className='bg-[#FF0000] text-white font-Poppins flex justify-center items-center w-48 h-12 rounded-3xl'>Ver o cardápio</a>
                </div>

                <div>
                      <img src={imgSushi} alt="Imagem de Sushi" />
                </div>
      </section>

      {/* SECTION SOBRE NÓS */}
      
      <section className='flex justify-center items-center gap-20 mt-48'>
              <div>
                    <img src={imgSegurandoPrato} alt="Imagem de uma pessoa segurando prato" className='w-[450px]' />
              </div>

              <div className='w-96 flex flex-col'>
                    <h1 className='text-Red-Button font-Koh-Santepheap font-normal text-2xl'>Sobre nós</h1>
                    <h2 className='text-Cinza-Text font-Koh-Santepheap font-normal text-5xl mt-3'>Feita de forma tradicional</h2>
                    <p className='font-Poppins font-normal text-[1.25rem] leading-[160%] mt-10'>
                        Cada prato "feita de forma tradicional" é uma ode à excelência. 
                        Desde o meticuloso corte do sashimi até a preparação delicada do sushi, 
                        cada etapa é uma reverência à herança culinária do Japão.
                    </p>
              </div>
      </section>

      {/* SECTION POPULARES */}

        <Pratos />

      </body>
    </>
  )
}

export default App
