import Link from "next/link"
import Logo from "/public/logo.svg"
import Image from "next/image"
import Wrapper from "@/app/components/shared/Wrapper"

const Header = () => {
    return (
        <Wrapper>
            <header className="flex justify-between items-center my-4">
                <div>
                    <Link href={"/"}>
                        <Image src={Logo} alt={"Tile Mountain"} />
                    </Link>
                </div>
                <div>
                    <ul className="flex space-x-8 font-small">
                        <li>
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link href={"/about"}>About</Link>
                        </li>
                        <li>
                            <Link href={"/news"}>Article</Link>
                        </li>
                        <li>
                            <Link href={"/courses"}>Courses</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </Wrapper>
    )
}

export default Header
