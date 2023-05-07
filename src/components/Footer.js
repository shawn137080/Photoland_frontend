import React from "react";
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-16 bg-primary">
      <div className="container mx-auto">
        <div className="text-center ">
          <h2 className="h2 uppercase mb-6 font-semibold">Subscribe to our newsletter</h2>
          <p className="text-white/70">Be the first to know about new products and special offers!</p>
        </div>
        {/* form */}
        <form action="" className="w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 my-14">
          <input className="input" type="email" name="email" placeholder="Email address" required/>
          <button className="btn btn-accent min-w-[150px]">Join</button>
        </form>
        {/* links */}
        <div className="flex text-base capitalize max-w-max mx-auto gap-x-6 text-white/70 mb-9">
          <a href="#">Return Policy</a>
          <a href="#">Track your order</a>
          <a href="#">Shipping & delivery</a>
        </div>
        {/* social  */}
        <div className="flex gap-x-6 max-w-max mx-auto text-lg mb-16">
          <a href="#" className="hover:text-white transition-all">
            <FaYoutube />
          </a> 
          <a href="#" className="hover:text-white transition-all">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-white transition-all">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-white transition-all">
            <FaFacebook />
          </a>
        </div>
      </div>
      {/* copyright */}
      <div className="py-10 border-t border-t-white/10">
        <div className="container mx-auto">
          <div className="text-center text-sm text-white/60">
            Copyright &copy; Photoland {new Date().getFullYear()}. All right
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
