import React, { useEffect, useState } from "react";
import logo from "../../assets/astro.jpg";
import { useNavigate } from "react-router";
import axios from "axios";


const Astrologers = (specializationfilter) => {
  console.log(specializationfilter,"TEST")
  const navigate = useNavigate();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [response, setResponse] = useState(null);

  const [users, setUsers] = useState([]);
  const fetchUserData = (id) => { 
  if(specializationfilter.specializationfilter ==''){

    console.log(specializationfilter,"TEST2@")
 
  

    axios
    .post("http://127.0.0.1:8000/api/users/searchAstro", {
      specialization: '1'
    })
    .then((response) => {
      console.log(response.data.data,"DATA RESPONSE")
      setUsers(response.data.data)
    });
    
  }else{
    axios
      .post("http://127.0.0.1:8000/api/users/searchAstro", {
        specialization: specializationfilter.specializationfilter
      })
      .then((response) => {
        console.log(response.data.data,"DATA RESPONSE")
        setUsers(response.data.data)
      });

  }
    
  }
  useEffect(() => {
    fetchUserData()
  }, [specializationfilter])
 

  

const handleClick = async (e) => {
  e.preventDefault();
  const to = e.target.id;
  const from = localStorage.getItem('userId');


  try {
      const res = await axios.post('http://127.0.0.1:8000/api/users/make-call', { from, to });
      setResponse(res.data);
  } catch (error) {
      console.error(error);
  }

  
};

  return (
    <main className="">
      <div className="mx-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map(user => (
        <section key={user.id}
          className="h-36 w-full mx-auto rounded-md flex m-4"
          style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }}
        >
          <div className="w-20 m-1">
            <img
              src={user.image}
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
            <p className="mb-1 cursor-pointer hover:text-gray-500" onClick={()=> navigate(`/astrologer/${user.id}`)}>{user.name}</p>
            <p className=" mb-1 text-xs text-gray-500">{user.specialization}</p>
            <p className=" mb-1 text-gray-600 text-ellipsis overflow-hidden">
              {user.languages_get}
            </p>
            <p className="text-gray-600 mb-1">Exp: {user.experience} Year</p>
            <p className="text-xs">
              
              <span className="text-rose-600 font-bold">FREE</span>{" "}
              <span className="line-through">10/min</span>
            </p>
          </div>

          <div className="right-div flex flex-col">
            
            <button
            id={`astr-${user.id}`}
           onClick={handleClick}
              className="mt-24 mr-4 border-green-500 text-green-500 hover:text-white hover:bg-green-500 border-solid border-2 rounded-lg px-3  "
            >
              Call
            </button>
            <h4 className="mb-8"></h4>
          </div>
        </section>
      ) ) }
     
 
 
      </div>
    </main>
  );
};

export default Astrologers;
