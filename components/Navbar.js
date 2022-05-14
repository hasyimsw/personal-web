import { useState } from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import ButtonNav from "./ButtonNav";
import classnames from "classnames";

export default function Navbar() {

    const [offcanvas, setOffcanvas] = useState(false)

    return(
        <>
          <div className="flex items-center py-6 md:py-10 px-6 md:px-0">
              <div className="w-3/12">
                <Logo></Logo>   
              </div>
              <div className="w-6/12 hidden md:block">
                <Nav dir="horizontal"></Nav>
              </div>
              <div className="w-3/12 text-right hidden md:block">
                <ButtonNav>Contact</ButtonNav>
              </div>

              <div className="w-9/12 md:hidden text-right text-white">
                <img src="/menuu.svg" className="inline-block" onClick={() => setOffcanvas(true)}></img>
              </div>
          </div>

          <div className={classnames("fixed bg-slate-200 z-10 top-0 h-full w-3/4 p-10 md:hidden transition-all duration-500", offcanvas ? "right-0" : "-right-full")}>
            <img src="/x.svg" className="absolute top-1 right-1 w-8" onClick={() => setOffcanvas(false)}></img>
            <Nav dir="vertical"></Nav>
          </div>
        </>
    );
}