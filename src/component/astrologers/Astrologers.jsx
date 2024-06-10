import logo from "../../assets/astro.jpg";
import { useNavigate } from "react-router";

const Astrologers = () => {
  const navigate = useNavigate();

  return (
    <main className="px-2 md:px-12 lg:px-20 ">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* section 1 */}
        <section
          className="h-36 w-full mx-auto rounded-md flex"
          style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
        >
          <div className="w-20 m-1">
            <img
              src={logo}
              alt="Astrologer"
              className="mx-auto rounded-full  m-1 bg-white"
            />
            <div className="flex justify-center mb-1">
              <span className="flex justify-between ">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>

                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>

                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>

                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>

                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </span>
            </div>
            <p className="text-xs flex justify-center">237 orders</p>
          </div>

          <div className="m-1 w-full ">
            <p
              className="mb-1 cursor-pointer hover:text-gray-500"
              onClick={() => navigate("/astrologer/1")}
            >
              Moolchand
            </p>
            <p className=" mb-1 text-xs text-gray-500">Vedic</p>
            <p className="text-sm mb-1 text-gray-600 text-ellipsis overflow-hidden">
              Hindi, English
            </p>
            <p className="text-gray-600 mb-1 text-sm">Exp: 1 Year</p>
            <p className="text-sm">
              {" "}
              <span className="text-rose-600 font-bold">FREE</span>{" "}
              <span className="line-through text-xs">10/min</span>
            </p>
          </div>

          <div className="right-div flex flex-col">
            <button
              type="submit"
              className="mt-24 mr-4 border-green-500 text-green-500 hover:text-white hover:bg-green-500 border-solid border rounded-lg px-6 py-1"
            >
              Call
            </button>
            <h4 className="mb-8"></h4>
          </div>
        </section>

        {/* section 2 */}
        <section
          className="h-36 w-full mx-auto rounded-md flex "
          style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
        >
          <div className="w-20 m-1">
            <img
              src={logo}
              alt="Astrologer"
              className="mx-auto rounded-full  m-1 bg-white"
            />
            <div className="flex justify-center mb-1">
              <span className="flex justify-between ">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>

                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>

                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>

                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>

                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </span>
            </div>
            <p className="text-xs flex justify-center">237 orders</p>
          </div>

          <div className="m-1 w-full ">
            <p
              className="mb-1 cursor-pointer hover:text-gray-500"
              onClick={() => navigate("/astrologer/1")}
            >
              Moolchand
            </p>
            <p className=" mb-1 text-xs text-gray-500">Vedic</p>
            <p className="text-sm mb-1 text-gray-600 text-ellipsis overflow-hidden">
              Hindi, English
            </p>
            <p className="text-gray-600 mb-1 text-sm">Exp: 1 Year</p>
            <p className="text-sm">
              {" "}
              <span className="text-rose-600 font-bold">FREE</span>{" "}
              <span className="line-through text-xs">10/min</span>
            </p>
          </div>

          <div className="right-div flex flex-col">
            <button
              type="submit"
              className="mt-24 mr-4 px-6 py-1 border-green-500 text-green-500 hover:text-white hover:bg-green-500 border-solid border rounded-lg"
            >
              Call
            </button>
            <h4 className="mb-8"></h4>
          </div>
        </section>

        {/* section 3 */}
        <section
          className="h-36 w-full mx-auto rounded-md flex "
          style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
        >
          <div className="w-20 m-1">
            <img
              src={logo}
              alt="Astrologer"
              className="mx-auto rounded-full  m-1 bg-white"
            />
            <div className="flex justify-center mb-1">
              <span className="flex justify-between ">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>

                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>

                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>

                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>

                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </span>
            </div>
            <p className="text-xs flex justify-center">237 orders</p>
          </div>

          <div className="m-1 w-full ">
            <p
              className="mb-1 cursor-pointer hover:text-gray-500"
              onClick={() => navigate("/astrologer/1")}
            >
              Moolchand
            </p>
            <p className=" mb-1 text-xs text-gray-500">Vedic</p>
            <p className="text-sm mb-1 text-gray-600 text-ellipsis overflow-hidden">
              Hindi, English
            </p>
            <p className="text-gray-600 mb-1 text-sm">Exp: 1 Year</p>
            <p className="text-sm">
              {" "}
              <span className="text-rose-600 font-bold">FREE</span>{" "}
              <span className="line-through text-xs">10/min</span>
            </p>
          </div>

          <div className="right-div flex flex-col">
            <button
              type="submit"
              className="mt-24 mr-4 px-6 py-1 border-green-500 text-green-500 hover:text-white hover:bg-green-500 border-solid border rounded-lg"
            >
              Call
            </button>
            <h4 className="mb-8"></h4>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Astrologers;
