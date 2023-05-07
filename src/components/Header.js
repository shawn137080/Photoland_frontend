import React from "react";
import Logo from "../img/logo.png";
//import icons
import { SlBag } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";
//import Link
import { Link } from "react-router-dom";

//import components
import SearchForm from "../components/SearchForm";
import CategoryNavMobile from "../components/CategoryNavMobile";
import Cart from "../components/Cart";

//import cart context
import {CartContext} from "../context/CartContext";

const Header = () => {
  //cart context
  const { isOpen, setIsOpen,itemAmount } = React.useContext(CartContext);
  const [catNavMobile, setCatNavMobile] = React.useState(false)
  

  return (
    <header className="bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]">
      <div className="container mx-auto">
        <div className="flex flex-row gap-4 lg:items-center justify-between mb-4 xl:mb-0">
          {/* menu */}
          <div 
          onClick={() => setCatNavMobile(true)}
          className="text-3xl xl:hidden cursor-pointer">
            <FiMenu className="lg:hidden" />
          </div>
          {/* ca */}
          <div className={`${catNavMobile ? "left-0" : "-left-full"} fixed top-0 bottom-0 w-full z-30 h-screen transition-all duration-500 ease-in-out`}>
            <CategoryNavMobile setCatNavMobile={setCatNavMobile}/>
          </div>
          {/*  logo*/}
          <Link to="/" className="flex items-center gap-x-2">
            <img src={Logo} alt="" />
          </Link>
          {/* search form desktop */}
          <div className="hidden w-full xl:flex xl:max-w-[743px]">
            <SearchForm />
          </div>
          {/* phone & cart */}
          <div className="flex items-center gap-x-[10px]">
            {/* cart icon  */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="relative cursor-pointer"
            >
              <SlBag className="text-2xl"/>
              {/* amount */}
              <div className="bg-accent text-primary absolute w-[18px] h-[18px] rounded-full top-3 -right-1 text-[13px] flex justify-center items-center font-bold tracking-[-0.1em]">{itemAmount}</div>
            </div>
            {/* cart  */}
            <div
              className={`
              ${isOpen ? "right-0" : "-right-full"}
              bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-500 ease-in-out`}
            >
              <Cart />
            </div>
          </div>
        </div>
        {/* search form mobile */}
        <div className="xl:hidden pt-4">
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
