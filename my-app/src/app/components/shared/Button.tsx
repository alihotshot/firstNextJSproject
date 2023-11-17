import { FC } from "react"

const Button: FC<{ text: string }> = ({ text }) => {
    return (
        <button className=" bg-teal-900 text-white py-3 px-7 rounded-full text-sm font-medium hover:scale-105">{text}</button>
    )
}

export default Button