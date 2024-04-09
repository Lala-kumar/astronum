import SignupSvg from "../../assets/signup.svg";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <Layout>
      <main className="h-full pt-20 pb-20 mx-auto px-10 flex flex-col md:px-28 bg-gray-100">
        <div
          className={`flex justify-evenly w-full items-center flex-col lg:flex-row-reverse basis-full`}
        >
          <div className="flex items-center justify-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <img alt="signup-img" src={SignupSvg} />
            </div>
          </div>
          <div className="w-full sm:max-w-sm mx-5">
            <form className="max-w-md mx-auto">
              <label htmlFor="email" className="block mb-4">
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                  id="name"
                  name="name"
                  type="name"
                  placeholder="Name"
                />
              </label>
              <label htmlFor="number" className="block mb-4">
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                  id="number"
                  name="number"
                  type="text"
                  placeholder="Contact No."
                />
              </label>
              <label htmlFor="address" className="block mb-4">
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                  id="address"
                  name="address"
                  type="address"
                  placeholder="Address"
                />
              </label>
              <label htmlFor="email" className="block mb-4">
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email "
                />
              </label>

              <label htmlFor="password" className="block mb-4">
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </label>

              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="w-full  bg-pink-400 text-white py-2 px-6 rounded-md shadow-md hover:bg-pink-500 uppercase mb-4 lg:mb-0"
                >
                  Sign-up
                </button>

                <p className="text-sm font-semibold mt-2 pt-1 mb-0 space-x-1 text-neutral-600">
                  <span>Do you already have an account?</span>
                  <Link
                    to={"/login"}
                    className="text-pink-500 hover:text-pink-600 transition duration-200 ease-in-out"
                  >
                    <span>Log In</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
}
