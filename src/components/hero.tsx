import Image from "next/image";

export default function Hero() {
    return(
        
        <main className="w-full h-full md:h-[500px] flex flex-col md:flex-row justify-between items-start bg-[#F2F0F1]">

            <div className="w-full md:w-[500px] mt-3 md:mt-10 md:ml-10 pl-3">
                <h1 className="text-2xl md:text-5xl font-extrabold">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className="text-sm md:mt-3">Browse through our diverse range of meticulously crafted garments, designed to bring out
                your individuality and cater to your sense of style.</p>
                <button className="bg-black py-2 px-8 rounded-[16px] mt-4 text-sm text-white">Shop Now</button>
            </div>
            <div className="relative md:px-5 min-h-[448px] md:min-h-[428px] ">
            <Image src={"/rectangle1.jpg"} className="w-[500px] h-[600px] " width={200} height={200} alt="profile"></Image>

            <Image src={"/Vector.png"} className="w-[50px] md:w-[100px] absolute top-[100px] left-10 md:top-[300px] md:left-[-100px]" width={200} height={200} alt="profile"></Image>

            <Image src={"/Vector.png"} className="w-[60px] md:w-[100px] absolute top-10 right-[50px] md:top-[50px] md:right-[30px]" width={200} height={200} alt="profile"></Image>
            </div>
        </main>
    );
    
}