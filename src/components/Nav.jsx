import { BsMapFill } from "react-icons/bs";

const Nav = () => {
  return (
    <nav className="fixed top-0 w-full z-40">
      <div className="flex items-center text-sm justify-between  px-4 py-1 text-secondary-clr bg-white">
        <p>Your Pick Up & Delivery Laundry Solution</p>
        <div className="flex items-center gap-5">
          <span className="text-xl">
            <BsMapFill />
          </span>
          <p className="flex flex-col">
            <span>Adra House, </span>
            Riverside Drive, Ground Floor
          </p>
        </div>
        <div>
          <span> Call us on:</span>
          <span>+254 123 456 789</span>
        </div>

      </div>
      <div className="flex justify-between items-center px-4 py-3  bg-secondary-blue-bg text-primary">
        <h1 className="text-3xl font-Agbalumo font-bold">Laundreal Auto</h1>

        <ul className="flex items-center gap-20 font-semibold">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#reviews">Reviews</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
