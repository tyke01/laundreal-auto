import { BsFacebook } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { ContactInfo } from "../data";

const Footer = () => {
  return (
    <footer id="footer" className="w-full text-primary">
      <div className="bg-[#121212] px-20 py-6 flex flex-col gap-10 lg:flex-row ">
        <div className="flex flex-col gap-4 flex-1">
          <p className="flex flex-col gap-2  mb-4">
            <h1 className="text-3xl font-Agbalumo font-bold">Laundreal Auto</h1>
            <div className="bg-secondary-blue-bg w-1/4 h-2"></div>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            debitis nisi, vel cumque ducimus aliquam facilis, 
          </p>
          <div className="flex gap-3 text-xl">
            <span className="text-xl text-secondary-clr">
              <BsFacebook />
            </span>
            <span className="text-xl text-secondary-clr">
              <AiFillInstagram />
            </span>
            <span className="text-xl text-secondary-clr">
              <AiFillTwitterCircle />
            </span>
            <span className="text-xl text-secondary-clr">
              <AiFillGithub />
            </span>
            <span className="text-xl text-secondary-clr">
              <AiFillLinkedin />
            </span>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col flex-1">
          <p className="flex flex-col gap-2  mb-4">
            <h1 className="title">Our Services</h1>
            <div className="bg-secondary-blue-bg w-1/4 h-2"></div>
          </p>
          <p className="flex flex-col gap-5">
            <span className="uppercase">Dry Cleaning</span>
            <span className="uppercase">Laundry Pickup</span>
            <span className="uppercase">Corporate Laundry</span>
            <span className="uppercase">Specialty Cleaning</span>
            <span className="uppercase">IRONING</span>
            <span className="uppercase">WASHING</span>
          </p>
        </div>
        {/*  */}
        <div className="flex flex-col flex-1">
          <p className="flex flex-col gap-2  mb-4">
            <h1 className="title">Contact Info</h1>
            <div className="bg-secondary-blue-bg w-1/4 h-2"></div>
          </p>
          <div>
            {ContactInfo.map((contact) => (
              <div key={contact.id} className="flex mb-5 gap-4">
                <div>

                  <div className="flex items-center gap-3">
                    <span className="text-sm">{contact.icon}</span>
                    <h1 className=" text-xs">{contact.title}</h1>
                  </div>
                  {Array.isArray(contact.details) ? (
                    <ul className="text-xs">
                      {contact.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs">{contact.details}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col flex-1">
          <p className="flex flex-col gap-2  mb-4">
            <h1 className="title">Newsletter</h1>
            <div className="bg-secondary-blue-bg w-1/4 h-2"></div>
          </p>
          <div className="flex flex-col gap-4">
            <p>stay upto date with our latest news and services</p>
            <input
              type="text"
              placeholder="Your Email Adress"
              className="px-4 py-3 w-full"
            />
            <button className="uppercase bg-dark-blue text-primary px-2 py-3 font-semibold hover:-translate-y-[2px] transition-all duration-75 shadow-lg w-full">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#000] flex justify-between  px-20 py-4">
        <p>
          &copy; LaundrealAuto.inc{" "}
          <span className="ml-10">All Rights Reserved</span>
        </p>
        <span>Created By: Victor Macharia</span>
      </div>
    </footer>
  );
};

export default Footer;
