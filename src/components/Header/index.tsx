import { Link } from "react-router-dom"


const Header = () => {
  return (
    <header className="bg-white-fa p-4 2xl:p-8 rounded-xl lg:rounded-[24px] flex justify-between max-w-[1320px] mx-auto items-center text-gray-dark">
        <div className="flex gap-10 whitespace-nowrap max-lg:hidden">
            <Link to="/">New Drops 🔥</Link>
            <Link to="/">Men </Link>
            <Link to="/">Women </Link>

        </div>

        <button className="lg:hidden">
            <img src="/bar.svg" alt="" />
        </button>

        <Link to="/">
            <img src="/Logo.svg" alt="" />
        </Link>
        <div className="flex gap-[9px] lg:gap-4">
            <button className="max-lg:hidden"><img src="/Search.svg" alt="" /></button>
            <button><img src="/User.svg" alt="" /></button>
            <button className="w-[25px] h-[25px] bg-yellow rounded-full font-semibold font-open grid place-items-center"><span>0</span></button>
        </div>
    </header>
  )
}

export default Header