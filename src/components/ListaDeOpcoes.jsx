



export function ListaDeOpcoes() {
    return (
        <>
            <div className="w-[700px] h-44 flex justify-between font-Koh-Santepheap font-normal text-[1.2rem] text-Cinza-Text">
                    <div>
                            <ul className="flex flex-col gap-1 cursor-pointer">
                                <li>Produto</li>
                                <li>Todos</li>
                                <li>Sushi</li>
                                <li>Premium</li>
                            </ul>
                    </div>

                    <div>
                            <ul className="flex flex-col gap-1 cursor-pointer">
                                <li>Informações</li>
                                <li>FAQ</li>
                                <li>Blog</li>
                                <li>Suporte</li>
                            </ul>
                    </div>

                    <div>
                            <ul className="flex flex-col gap-1 cursor-pointer">
                                <li>Empresa</li>
                                <li>Sobre nós</li>
                                <li>Local</li>
                                <li>Contato</li>
                            </ul>
                    </div>

                    <div>
                            <ul className="flex flex-col gap-1 cursor-pointer">
                                <li>Social</li>
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                            </ul>
                    </div>
            </div>
        </>
    )
}