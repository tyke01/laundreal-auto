import { ContactInfo } from "../data";

const Contact = () => {
  return (
    <section id="contact" className=" p-5 lg:p-20 mt-10 bg-gray-bg">
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="bg-secondary-blue-bg flex flex-col lg:w-[700px] p-10 text-primary justify-center gap-4">
          <h3 className="text-lg font-semibold">CONTACT US</h3>
          <h1 className="text-2xl font-bold">GET IN TOUCH</h1>

          <div className="flex flex-col">
            <div className="flex items-start gap-4 flex-wrap mb-4">
              <input
                type="text"
                placeholder="Name"
                className="pr-14 text-black outline-none px-4 py-4 w-42"
              />
              <input
                type="text"
                placeholder="Email"
                className="pr-14 text-black outline-none px-4 py-4 w-42"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="pr-14 text-black outline-none px-4 py-4 w-42"
              />
              <input
                type="text"
                placeholder="Name"
                className="pr-14 text-black outline-none px-4 py-4 w-42"
              />
            </div>
            <span>
              <textarea
                name=""
                id=""
                cols="63"
                rows="5"
                placeholder="Your message here "
                className="p-5 outline-none w-[350px] lg:w-[600px]"
              ></textarea>
            </span>
            <span>
              <button className="uppercase bg-main-bg text-secondary-clr px-2 py-3 font-semibold hover:-translate-y-[2px] transition-all duration-75 shadow-xl mt-10">
                SUBMIT NOW
              </button>
            </span>
          </div>
        </div>

        {/*  */}

        <div className="bg-primary-white flex flex-col flex-1 justify-start items-start p-10">
          <h1 className="font-bold text-2xl mb-8">CONTACT INFO</h1>
          <div className="flex flex-col gap-6">
            {ContactInfo.map((contact) => (
              <div key={contact.id} className="flex items-center gap-5">
                <span className="text-2xl bg-secondary-blue-bg p-4 rounded-full text-primary">
                  {contact.icon}
                </span>
                <div>
                  <h1 className="text-xl font-bold">{contact.title}</h1>
                  {Array.isArray(contact.details) ? (
                    <ul>
                      {contact.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{contact.details}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
