import Image from "next/image";
import { eventData } from "../eventData";
import { Saira_Stencil_One, Poppins } from "next/font/google";

const SairaStencilOne = Saira_Stencil_One({
  subsets: ["latin"],
  weight: "400",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
});

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const event = eventData.find((item) => item.id === params.id);

  if (!event)
    return (
      <div className="py-10 pt-32 max-w-full max-h-full space-y-5">
        <figcaption
          className={`${poppins.className}  text-md mx-10 lg:mx-96 font-semibold text-[#252402] mb-10`}
        >
          No Event Details found.
        </figcaption>
      </div>
    );

  return (
    <div className="py-10 pt-32 max-w-full max-h-full space-y-5">
      <div className="flex justify-self-center">
        <div className="flex flex-wrap lg:flex-row space-x-5    justify-center  ">
          <div className="mx-5  shadow-2xl">
            <Image
              src={event.image2}
              alt={event.id}
              width={800}
              height={600}
              className="object-contain hover:scale-105 transition duration-200"
            />
          </div>
          <div className="mx-5 text-white bg-gray-950 mt-4 p-5 h-max rounded-md  shadow-2xl">
            <p className="font-bold text-xl pb-4">Event Information</p>
            <div className="justify-self-center w-full h-0.5 bg-gradient-to-r from-[#a0a023] via-[#ffb908] to-[#c5b89c] mb-5"></div>
            <div className="space-y-2">
              <span className="  flex text-md  gap-2">
                <p className="font-bold">Event name: </p>
                <p>{event.eventName}</p>
              </span>
              <span className="  flex text-md  gap-2">
                <p className="font-bold">Event name: </p>
                <p>{event.location}</p>
              </span>
              <span className=" flex text-md  gap-2">
                <p className="font-bold">Event name: </p>
                <p>{event.projectDate}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-self-center ">
        <div className="w-full">
          <figcaption
            className={`${SairaStencilOne.className} text-center text-4xl font-semibold text-[#9b9304] mb-10`}
          >
            {event.details}
          </figcaption>
          <figcaption
            className={`${poppins.className}  text-md mx-10 lg:mx-96 font-semibold text-[#252402] mb-10`}
          >
            {event.information}
          </figcaption>
          {event.link ? (
            <figcaption
              className={`${poppins.className} flex justify-center text-center gap-2 `}
            >
              <p>For more information</p>
              <a
                href={event.link}
                target="_blank"
                className="underline font-bold"
              >
                Click here
                <div className="justify-self-center w-full h-0.5 bg-gradient-to-r from-[#0c0c03] via-[#9e7b24] to-[#ecb94a] mb-5"></div>
              </a>
            </figcaption>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
