import './App.css'
import { Navbar } from './components/Navbar'
import imgSushi from './assets/images/sushi.png'


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


      </body>
    </>
  )
}

export default App
