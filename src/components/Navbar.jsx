import Logo from "../assets/images/logo.png"
import LogoName from "../assets/images/FOODJP.png"


export function Navbar() {
    return (
        <>
            <header>
                    <nav className="w-screen h-24 flex justify-around items-center">
                            <div className="flex items-center gap-1">
                                    <img src={Logo} alt="Logo FOODPB" className="w-6 h-6" />
                                    <img src={LogoName} alt="Nome da página" className="h-7" />
                            </div>

                            <div>
                                    <ul className="flex gap-8 font-Poppins font-medium text-[1.25rem] text-[#232323] cursor-pointer">
                                        <li>Inicio</li>
                                        <li>Sobre nós</li>
                                        <li>Populares</li>
                                    </ul>
                            </div>

                            <div className="bg-[#FF0000] p-5 w-48 h-12 rounded-3xl flex justify-center items-center cursor-pointer">
                                <button className="text-white font-Poppins font-medium cursor-pointer">Baixar o App</button>
                            </div>
                    </nav>
            </header>
        </>
    )
}