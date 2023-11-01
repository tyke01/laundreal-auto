import { ReviewsData } from "../data";

const Reviews = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-10 px-20 bg-primary-white py-6">
      <h1 className="text-secondary-clr text-3xl font-semibold">
        What People Say About Us
      </h1>
      <div className="grid grid-cols-2 gap-5 mt-10">
        {/*  */}
        {ReviewsData.map((review) => (
          <div key={review.id} className="flex gap-6">
            {/* left */}
            <div className="flex flex-col items-center justify-center w-[300px]">
              <span className="w-[5.5rem] aspect-square rounded-full flex items-center justify-center bg-secondary-blue-bg">
                <img
                  src={review.img}
                  alt="reviews"
                  className="w-[5rem] object-cover aspect-square rounded-full"
                />
              </span>
              <p className="text-dark-blue font-bold text-sm">{review.name}</p>
              <p className="text-[#666] text-sm">{review.title}</p>
            </div>
            {/* right */}
            <div className="bg-card-bg p-4 flex relative flex-col before:w-8 before:aspect-square before:bg-card-bg before:absolute before:rotate-45 before:top-10 before:-left-4 before:-z-[2] z-10 w-[700px]">
              <div>
                <span className="text-xl text-secondary-clr"> ❝ </span>
                <span>{review.content}</span>
                <span className="text-xl text-secondary-clr"> ❞ </span>
              </div>
              <span className="text-secondary-clr">{review.link}</span>
            </div>
          </div>
        ))}
        {/*  */}
      </div>
      <button className="uppercase bg-secondary-blue-bg text-primary px-2 py-3 font-semibold hover:-translate-y-[2px] transition-all duration-75 hover:shadow-lg mt-10">
        Read More
      </button>
    </section>
  );
};

export default Reviews;
