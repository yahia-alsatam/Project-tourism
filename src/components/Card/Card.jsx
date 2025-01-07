import { useState } from "react";
import "../Card/Card.css";

const Card = ({ data }) => {
  const [isExpanded, setExpanded] = useState({});
  const [isActive, setActive] = useState(true);

  const handleExpanded = (id) => {
    setExpanded((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
  };

  return (
    <>
      <div className="container-css flex items-center justify-center flex-col mt-9 w-screen">
        <h1 className="text-3xl font-medium">
          {isActive ? " Our Tours" : "No Tours Left"}
        </h1>
        {isActive ? (
          <span className="w-[150px] h-[6px] bg-teal-400 mt-3"></span>
        ) : (
          <button
            type="button"
            class="text-white mt-4 bg-teal-500 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800"
          >
            Refresh
          </button>
        )}
        <div className="container-card  flex flex-wrap max-w-[1200px] gap-5 max-[1200px]:justify-center">
          {data.map((d) => (
            <div
              key={d.id}
              className="flex flex-col bg-white shadow border border-slate-200 rounded-lg my-6 w-96 "
            >
              <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center relative ">
                <img
                  className="w-full h-full object-cover"
                  src={d.image}
                  alt="profile-picture"
                />
                <span className="absolute top-0 right-0 bg-teal-500 text-white p-2">
                  ${d.price}
                </span>
              </div>
              <div className="p-6 text-center">
                <h4 className="mb-1 text-xl font-semibold text-slate-800">
                  {d.name}
                </h4>

                <span className="text-base text-slate-600 mt-4 font-light ">
                  {isExpanded[d.id] ? d.info : `${d.info.substring(0, 200)}`}
                </span>

                <button
                  onClick={() => handleExpanded(d.id)}
                  className="text-green-500"
                >
                  {isExpanded[d.id] ? " Show Less" : "... Read More"}
                </button>
              </div>
              <div className="flex justify-center p-6 pt-2 gap-7">
                <button
                  className="min-w-full  rounded-md bg-white py-2 px-4 border border-teal-500 border-transparent text-center text-sm text-teal-700 transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-teal-500 hover:text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Not Intereced
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
