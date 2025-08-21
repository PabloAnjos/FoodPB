import './App.css'
import { Navbar } from './components/Navbar'
import imgSushi from './assets/images/sushi.png'
import imgSegurandoPrato from './assets/images/segurandoprato.png'
import { Pratos } from './components/Pratos'
import { Comentarios } from './components/Comentarios'
import imgWoman from './assets/images/profile-woman.png'
import imgMan from './assets/images/profile-man.png'
import { ListaDeOpcoes } from './components/ListaDeOpcoes'
import logo from './assets/images/logo2.png'
import iconFacebook from './assets/images/icon-facebook.png'
import iconInstagram from './assets/images/icon-instagram.png'
import iconX from './assets/images/icon-x.png'

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

        {/* SECTION COMENTÁRIOS */}

        <section>
                  <div className='w-screen h-screen flex flex-col items-center'>
                        <h1 className='font-Koh-Santepheap text-5xl justify-center flex mt-40'>Comentários</h1>

                        <div className='flex gap-10 mt-15' >
                              <Comentarios 
                              profileImg={imgWoman}
                              clientName={"Daniele Almeida"}
                              comment={"Ótimo serviço! Encantada com a qualidade dos pratos."}
                              />
                              <Comentarios 
                              profileImg={imgMan}
                              clientName={"Ricardo França"}
                              comment={"Não é apenas a comida excelente,o serviço torna a experiência especial."}
                              />
                        </div>
                  </div>
        </section>

        {/* FOOTER */}

        <footer className='w-screen h-96 flex flex-col justify-center items-center'>
                  <ListaDeOpcoes />
                  <hr className='bg-[#F8F5F2] w-[900px]'/>

                  <div className='w-[900px] flex justify-between mt-10'>
                        <img src={logo} alt="Logo Food JP" />

                        {/* ICONS */}
                       <div className='flex gap-3 cursor-pointer'>
                              <img src={iconFacebook} alt="Icone Facebook" />
                              <img src={iconFacebook} alt="Icone Instagram" />
                              <img src={iconX} alt="Icone X" />
                       </div>
                  </div>
        </footer>
      </body>
    </>
  )
}

export default App
