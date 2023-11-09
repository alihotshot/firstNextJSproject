import { FC } from "react"

const Button: FC<{ text: string }> = ({ text }) => {
    return (
        <button className=" bg-teal-900 text-white py-3 px-7 rounded-full text-lg font-medium hover:scale-105">Learn More</button>
    )
}

export default Button