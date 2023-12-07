import Troll from "/assets/trollFace.png"

const Header = () => {
  return (
    <>
    <nav className="h-20 bg-gradient-to-r from-purple-800 to-purple-700 flex items-center justify-between px-[5%]  w-[100%] font-karla  fixed top-0 left-0">
        <div className="flex ">
            <img className=" h-8 w-10" src={Troll} alt="Troll Face"/>
            <div className="ml-1 text-xl font-bold text-white">Meme Generator</div>
        </div>
        {/* <div className="text-white">React Practice - Ajit Khadka</div> */}
    </nav>
    </>
  )
}

export default Header
