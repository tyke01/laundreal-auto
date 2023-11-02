import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen lg:pt-8 hero-img mt-16 flex flex-col items-start justify-center text-white px-5 pt-20 lg:px-40"
    >
      <div className="w-3/4 ">
        <h3 className="uppercase font-bold text-4xl">
          One wash away from your troubles
        </h3>
        <p className="my-5 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui at nulla
          ducimus quos cumque quod provident odit, perferendis vitae deserunt!
        </p>
        <button className="uppercase bg-white text-secondary-clr px-2 py-3 font-semibold hover:-translate-y-[2px] transition-all duration-75 hover:shadow-lg">
          Request A Service
        </button>
      </div>

      <div className="flex flex-col lg:flex-row w-full items-center mt-12 py-2">
        <div className="bg-secondary-blue-bg flex gap-5 items-center px-8 py-6 w-full">
          <span className="text-2xl">
            <BsFillTelephoneFill />
          </span>
          <p className="flex flex-col items-start text-sm">
            Have a question? call us now
            <span className="text-xl">+254 123 456 789</span>
          </p>
        </div>

        <div className="bg-dark-blue-bg flex gap-5 items-center px-8 py-6 w-full">
          <span className="text-2xl">
            <AiOutlineClockCircle />
          </span>
          <p className="flex flex-col items-start text-sm">
            We are open Non-Fri
            <span className="text-xl">Mon - Fri 08:00 - 17:00</span>
          </p>
        </div>

        <div className="bg-light-blue-bg flex gap-5 items-center px-8 py-6 w-full">
          <span className="text-2xl">
            <BsFillEnvelopeFill />
          </span>
          <p className="flex flex-col items-start text-sm">
            Need Support?Drop us an email
            <span className="text-xl">Support@yoursite.com</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
