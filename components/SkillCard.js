export default function SkillCard({ gambar }) {
    return(
        <div className="mt-10">
            <ul className="md:mb-10 mb-5">
              <li className="flex justify-center space-x-5 md:space-x-10">
                <div className="bg-white w-20 h-20 md:w-24 md:h-24 shadow-md rounded-3xl p-4 shadow-skill hover:scale-110 duration-700">
                  <img src="/vscode.svg"></img>
                </div>
                <div className="bg-white w-20 h-20 md:w-24 md:h-24 shadow-md rounded-3xl p-4 shadow-skill hover:scale-110 duration-700">
                  <img src="/tailwindcss.svg"></img>
                </div>
                <div className="bg-white w-20 h-20 md:w-24 md:h-24 shadow-md rounded-3xl p-4 shadow-skill hover:scale-110 duration-700">
                  <img src="/html.svg"></img>
                </div>
                <div className="bg-white w-20 h-20 md:w-24 md:h-24 shadow-md rounded-3xl p-4 shadow-skill hover:scale-110 duration-700">
                  <img src="/css.svg"></img>
                </div>
              </li>
            </ul>
            <ul className="mb-5 md:mb-10">
              <li className="flex justify-center space-x-5 md:space-x-10">
                <div className="bg-white w-20 h-20 md:w-24 md:h-24 shadow-md rounded-3xl p-4 shadow-skill hover:scale-110 duration-700">
                  <img src="/js.svg"></img>
                </div>
                <div className="bg-white w-20 h-20 md:w-24 md:h-24 shadow-md rounded-3xl p-4 shadow-skill hover:scale-110 duration-700">
                  <img src="/nextjs.svg"></img>
                </div>
                <div className="bg-white w-20 h-20 md:w-24 md:h-24 shadow-md rounded-3xl p-4 shadow-skill hover:scale-110 duration-700">
                  <img src="/bootstrap.png" width="70px" className="mt-2"></img>
                </div>
                <div className="bg-white w-20 h-20 md:w-24 md:h-24 shadow-md rounded-3xl p-4 shadow-skill hover:scale-110 duration-700">
                  <img src="/figma.svg"></img>
                </div>
              </li>
            </ul>
            <ul>
              <li className="flex justify-center space-x-5 md:space-x-10">
                <div className="bg-white w-20 h-20 md:w-24 md:h-24 shadow-md rounded-3xl p-4 shadow-skill hover:scale-110 duration-700">
                  <img src="/python.svg"></img>
                </div>
                <div className="bg-white w-20 h-20 md:w-24 md:h-24 shadow-md rounded-3xl p-4 shadow-skill hover:scale-110 duration-700">
                  <img src="/sass.svg"></img>
                </div>
              </li>
            </ul>
          </div>
    );
}