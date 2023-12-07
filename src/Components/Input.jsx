import { useEffect, useState } from "react";
// import Data from "../MemeData.js";

const Input = () => {
  // const [Img, setImg] = useState("");
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [allMemes, setAllMemes] = useState();

  useEffect(() => {
    // console.log("rendered");
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  let inputHandler = (event) => {
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [event.target.name]: [event.target.value],
      };
    });
  };

  let randomUrlHandler = () => {
    // let memeArray = allMemes.data.memes;
    // console.log(memeArray)

    if (allMemes.length > 0) {
      let randomMeme = Math.floor(Math.random() * allMemes.length);
      let randomUrl = allMemes[randomMeme].url;
      // console.log(randomUrl)
      setMeme((prevMeme) => ({
        ...prevMeme,
        randomImage: randomUrl,
      }));
    } else {
      console.error("error");
    }
  };

  // console.log(data1)

  return (
    <>
      <section className="mt-[110px] flex flex-col justify-center items-center font-karla">
        <div className="flex flex-wrap gap-5 w-[100%] justify-center">
          <input
            className="border border-black border-opacity-[30%] w-[300px] px-2 py-2 rounded-md "
            placeholder="Top Text"
            type="text"
            value={meme.topText}
            onChange={inputHandler}
            name="topText"
          />
          <input
            className="border border-black border-opacity-[30%] w-[300px] px-2 py-2 rounded-md "
            placeholder="Bottom Text"
            type="text"
            value={meme.bottomText}
            onChange={inputHandler}
            name="bottomText"
          />
        </div>
        <button
          className="Button cursor-pointer mt-7  justify-center w-[300px] rounded-md px-2 py-2 bg-gradient-to-r from-purple-800 to-purple-700 text-white shadow-lg hover:shadow-sm"
          type="submit"
          onClick={randomUrlHandler}
        >
          Get Image For Your Meme 🖼️
        </button>
        <div className="ImageContainer h-[60vh] max-w-[100%] my-7 px-[5%] flex justify-center relative">
          <img
            className="memeImage drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
            src={meme.randomImage}
          />
          <h2 className=" TopText absolute font-bold text-white text-4xl top-5 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {meme.topText}
          </h2>
          <h2 className=" BottomText absolute t-5 font-bold text-white text-4xl bottom-5 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
            {meme.bottomText}
          </h2>
        </div>
      </section>
    </>
  );
};

export default Input;
