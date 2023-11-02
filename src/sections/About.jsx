

const About = () => {
  return (
    <section id="about" className="flex flex-col lg:flex-row items-center gap-10 px-5 lg:px-24 lg:py-5 bg-gray-bg">

      <div className="flex flex-col">
        <h1 className="text-3xl font-bold mb-5 text-secondary-clr">Who Are We?</h1>
        <p className=" lg:mb-10">
          Having trouble finding time to do your laundry? Too much to consume
          your free time? Look no further!! Here in LAUNDREAL AUTO, we will do
          your laundry at any given time of your choosing. Over 100 reviews with
          complete satisfaction from our customers.
        </p>

        <button className="uppercase bg-secondary-blue-bg text-primary px-2 py-3 font-semibold hover:-translate-y-[2px] transition-all duration-75 hover:shadow-lg mt-10 w-fit">
          Read More
        </button>
      </div>

      <div className="lg:w-[150rem]">
        <img src="image 2.png" alt="about us" />
      </div>

    </section>
  );
};

export default About;
