import Wrapper from "@/app/components/shared/Wrapper"
import Image from "next/image"
import HeroPoster from "@/app/assets/images/hero-poster.webp"
import Button from "@/app/components/shared/Button"

const Hero = () => {
    return (
        <section>
            <Wrapper>
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left side */}
                    <div className="flex-1">
                        <h4 className=" font-semibold text-teal-900 mt-4 text-xs md:text-lg">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
                        <h1 className=" text-3xl font-bold py-3 sm:text-5xl">Certified Web 3.0 and Metaverse Developer</h1>
                        <p className=" text-slate-500 mt-4 text-xs sm:text-lg max-w-xl">A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet.
                            <br /> <br /> Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies.</p>
                        <div className="mt-8">
                            <Button text={"Learn More"} />
                        </div>
                    </div>
                    {/* Right side */}
                    <div className="flex-1">
                        <Image src={HeroPoster} alt=" Tile Mountain Hero Poster" />
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Hero