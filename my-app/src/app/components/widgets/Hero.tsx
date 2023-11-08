import Wrapper from "@/app/components/shared/Wrapper"
import Image from "next/image"
import HeroPoster from "@/app/assets/images/hero-poster.webp"

const Hero = () => {
    return (
        <section>
            <Wrapper>
                <div className="flex items-center">
                    {/* Left side */}
                    <div className="flex-1">
                        <h4 className=" font-semibold text-teal-900 text-lg">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
                        <h1 className=" text-5xl font-bold py-3">Certified Web 3.0 and Metaverse Developer</h1>
                        <p className=" text-slate-600 mt-4 text-s">A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet.
                            <br /> Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</p>
                        <button className=" bg-teal-900 text-white p-4 rounded-full mt-4 font-semibold">Learn More</button>
                    </div>
                    {/* Right side */}
                    <div>
                        <Image src={HeroPoster} alt=" Tile Mountain Hero Poster" />
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Hero