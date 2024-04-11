import { Link } from "react-router-dom";
import AstroLogin from "../astrologers/AstroLogin";

const Footer = () => {
  return (
    <footer className="text-gray-50 body-font bg-zinc-600">
      <section className="container px-5 pt-6  mx-auto">
        <div className="flex flex-wrap mx-auto order-first">
          {/* important links */}

          <section className="lg:w-1/4 md:w-1/2  sm:w-1/2  px-4">
            <h2 className="title-font font-bold tracking-widest text-sm mb-3">
              IMPORTANT LINKS
            </h2>
            <hr />

            <nav className="list-none mb-10 my-4">
              <li className="mb-3">
                <Link to="/" className="text-gray-50 hover:text-gray-400 ">
                  Planetary Position
                </Link>
              </li>

              <li className="mb-3">
                <Link to="/" className="text-gray-50 hover:text-gray-400">
                  Live Astrologer
                </Link>
              </li>

              <li className="mb-3">
                <Link to="/" className="text-gray-50 hover:text-gray-400">
                  Kundali Matching
                </Link>
              </li>

              <li className="mb-3">
                <Link to="/" className="text-gray-50 hover:text-gray-400">
                  Free Kundali
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/" className="text-gray-50 hover:text-gray-400">
                  Talk to Astrologer
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/" className="text-gray-50 hover:text-gray-400">
                  Numerology
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/notification" className="text-gray-50 hover:text-gray-400">
                  Notification
                </Link>
              </li>
            </nav>

            <h2 className="title-font font-bold tracking-widest text-sm mb-3">
              ASTROLOGER
            </h2>
            <hr />

            <nav className="list-none mb-10 mt-6">
              <li className="mb-3">
                <AstroLogin />
              </li>

              <li className="mb-3">
                <Link
                  to="/astrologer-register"
                  className="text-gray-50 hover:text-gray-400"
                >
                  Astrologer Register
                </Link>
              </li>
            </nav>
          </section>

          {/* horoscope */}

          <section className="lg:w-1/4 md:w-1/2 sm:w-1/2  px-4">
            <h2 className="title-font font-bold tracking-widest text-sm mb-3 uppercase">
              Horoscope
            </h2>
            <hr />

            <nav className="list-none mb-10 my-4">
              <li className="mb-3">
                <Link to="/" className="text-gray-50 hover:text-gray-400">
                  Horoscope 2024
                </Link>
              </li>

              <li className="mb-3">
                <Link to="/" className="text-gray-50 hover:text-gray-400">
                  Today's Horoscope
                </Link>
              </li>

              <li className="mb-3">
                <Link to="/" className="text-gray-50 hover:text-gray-400">
                  Tomorrow's Horoscope
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/" className="text-gray-50 hover:text-gray-400">
                  Yesterday's Horoscope
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/" className="text-gray-50 hover:text-gray-400">
                  Weekly Horoscope
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/" className="text-gray-50 hover:text-gray-400">
                  Monthly Horoscope
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/" className="text-gray-50 hover:text-gray-400">
                  Yearly Horoscope
                </Link>
              </li>
            </nav>
          </section>

          {/* shubh muhurat */}

          <section className="lg:w-1/4 md:w-1/2 sm:w-1/2   px-4">
            <h2 className="title-font font-bold tracking-widest text-sm mb-3">
              SHUBH MUHURAT 2024
            </h2>
            <hr />

            <nav className="list-none mb-10 my-4">
              <li className="mb-3">
                <Link to="/" className="text-gray-50 hover:text-gray-400">
                  Car/Bike Muhurat 2024
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/" className="text-gray-50 hover:text-gray-400">
                  Naamkaran Muhurat 2024
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/" className="text-gray-50 hover:text-gray-400">
                  Marriege Muhurat 2024
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/" className="text-gray-50 hover:text-gray-400">
                  Bhoomi Puajan Muhurat 2024
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/" className="text-gray-50 hover:text-gray-400">
                  Mundan Muhurat 2024
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/" className="text-gray-50 hover:text-gray-400">
                  Griha Muhurat 2024
                </Link>
              </li>
            </nav>
          </section>

          {/* contact us */}

          <section className="lg:w-1/4 md:w-1/2 sm:w-1/2   px-4">
            <h2 className="title-font font-bold tracking-widest text-sm mb-3">
              ABOUT
            </h2>
            <hr />

            <nav className="list-none mb-10 my-4">
              <li className="mb-3">
                <Link to="/" className="text-gray-50 hover:text-gray-400">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/" className="text-gray-50 hover:text-gray-400">
                  Terms & Condition
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/" className="text-gray-50 hover:text-gray-400">
                  About
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/" className="text-gray-50 hover:text-gray-400">
                  About Us
                </Link>
              </li>
            </nav>

            <h2 className="title-font font-bold  tracking-widest text-sm mb-3">
              CONTACT US
            </h2>
            <hr />

            <nav className="list-none mb-10 my-4">
              <li className="mb-3">
                <Link to="/" className="text-gray-50 hover:text-gray-400">
                  ✉ astronum@gmail.com
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/" className="text-gray-50 hover:text-gray-400">
                  ☏ +91 9876543210
                </Link>
              </li>
            </nav>
          </section>
        </div>
      </section>

      {/* links & social median  */}

      <section className="bg-black text-white">
        <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
          <div className="flex ">
            <h1 className=" text-2xl font-bold  px-2 py-1 rounded">Astronum</h1>
          </div>
          <p className="text-sm text-white sm:ml-6 sm:mt-0 mt-4">
            © 2024 All Right Reserved ( Maintained By Ayodhya Websoft Pvt Ltd )
          </p>

          {/* social media */}

          <span className="text-white inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            {/* facebook */}
            <a className="">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>

            {/* twitter */}
            <a className="ml-3 ">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>

            {/* instagram */}
            <a className="ml-3 ">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>

            {/* linkedin */}
            <a className="ml-3">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
