import imgStar from "./../assets/images/Star.png"



export function Comentarios({ profileImg, clientName, comment }) {
    return (
        <>
            <div className="flex flex-col gap-2 justify-center p-10 bg-[#F8F5F2] w-[492px] h-[300px] rounded-2xl">
                    <img src={profileImg} alt="Profile Client" className="w-[120px] h-[120px]"/>
                    <h1 className="font-Koh-Santepheap font-normal text-4xl">{clientName}</h1>
                    <p className="font-Poppins text-[1.25rem] font-normal">
                        {comment}
                    </p>

                    <div className="flex gap-1">
                            <img src={imgStar} alt="Image Star" />
                            <img src={imgStar} alt="Image Star" />
                            <img src={imgStar} alt="Image Star" />
                            <img src={imgStar} alt="Image Star" />
                            <img src={imgStar} alt="Image Star" />
                    </div>
            </div>
        </>
    )
}