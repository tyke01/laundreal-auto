import { Features, LeftServices, RightService } from "../data";
// import { TbIroning1 } from "react-icons/tb";

const Services = () => {
  return (
    <section className="min-h-screen py-5 flex flex-col items-center">
      <div className="flex flex-col items-center justify-center bg-primary-white px-20">
        <div className="text-center">
          <h1 className="text-secondary-clr text-3xl font-semibold">
            WHY CHOOSE US?
          </h1>
          <p>
            This template is designed with a unique and simple, so that it can
            promote and laundry business solution.
          </p>
        </div>

        <div className=" items-center mt-10 grid grid-cols-3 gap-6">
          {Features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center ">
              <span className="text-3xl bg-secondary-blue-bg p-5 rounded-full text-primary mb-3">
                {feature.icon}
              </span>
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-bold uppercase">{feature.title}</h3>
                <p className="text-[#666666] text-center">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* bottom section */}
      <div className="mt-14 flex flex-col items-center justify-center w-full bg-gray-bg">
        <h1 className="text-secondary-clr text-3xl font-semibold uppercase mb-12 mt-10">
          {" "}
          Our Services{" "}
        </h1>
        <div className="flex items-center gap-6">
          <div className=" flex flex-col items-end gap-8">
            {/*  */}
            {LeftServices.map((service) => (
              <div key={service.id} className="flex items-center gap-4 justify-end w-[400px] ">
                <div className="w-[250px] flex flex-col items-end ">
                  <h1 className="text-2xl uppercase text-secondary-clr">
                    {service.title}
                  </h1>
                  <p className="text-sm text-end">{service.desc}</p>
                </div>

                <div className="flex items-center justify-center w-[5rem] aspect-square rounded-full bg-secondary-clr">
                  <span className="text-5xl text-primary">{service.icon}</span>
                </div>
              </div>
            ))}
            {/*  */}
          </div>

          <div className="w-[400px]">
            <img src="Fabric-Suit.png" alt="services" />
          </div>

          <div className=" flex flex-col items-end gap-8">
          {RightService.map((service) => (
              <div key={service.id} className="flex flex-row-reverse items-center justify-end w-[400px] gap-4">
                <div className="w-[250px] flex flex-col items-start ">
                  <h1 className="text-2xl uppercase text-secondary-clr">
                    {service.title}
                  </h1>
                  <p className="text-sm text-start">{service.desc}</p>
                </div>

                <div className="flex items-center justify-center w-[5rem] aspect-square rounded-full bg-secondary-clr">
                  <span className="text-5xl text-primary">{service.icon}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
