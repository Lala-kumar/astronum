/* eslint-disable react-hooks/exhaustive-deps */
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, message } from "antd";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";

const MyAccount = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dob: "",
    time_of_birth: "",
    place_of_birth: "",
    address: "",
  });

  const [passworData, setPasswordData] = useState({
    id: user.userID,
    current_password: "",
    new_password: "",
  });

  const [errors, setErrors] = useState({
    current_password: "",
    new_password: "",
  });

  // const validateForm = () => {
  //   const { current_password, new_password } = passworData;

  //   let isValid = true;

  //   let newErrors = {
  //     current_password: "",
  //     new_password: "",
  //   };

  //   if (current_password.trim().length < 4) {
  //     newErrors.current_password =
  //       "Password must be greater than 4 characters!";
  //     isValid = false;
  //   }

  //   if (new_password.trim().length < 8) {
  //     newErrors.new_password = "Password must be greater than 8 characters!";
  //     isValid = false;
  //   }
  //   setErrors(newErrors);
  //   return isValid;
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const fetchProfile = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_SERVER_URL + `api/users/profileget/${user.userID}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.access_token}`,
          },
        }
      );

      const data = await response.json();

      setFormData({
        name: data.data.first_name,
        gender: data.data.gender,
        dob: data.data.dob,
        time_of_birth: data.data.time_of_birth,
        place_of_birth: data.data.place_of_birth,
        address: data.data.address,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // ********************** Basic Info Submit Section  **********************
  const HandleBasicFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(
        import.meta.env.VITE_SERVER_URL +
          `api/users/updateProfile/${user.userID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.access_token}`,
          },
          body: JSON.stringify({
            name: formData.name,
            gender: formData.gender,
            dob: formData.dob,
            time_of_birth: formData.time_of_birth,
            place_of_birth: formData.place_of_birth,
            address: formData.address,
          }),
        }
      );

      const data = await response.json();
 
      if (data?.status === "success") {
        message.success("Profile Updated Successfully!");
      } else {
        message.error("Something went wrong!");
      }

      fetchProfile();
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  };

  // ********************** Change password submit Section  **********************

  const HandlePasswordSubmit = async (e) => {
    e.preventDefault();

    // if (validateForm()) {
    try {
      setLoading(true);
      const response = await fetch(
        import.meta.env.VITE_SERVER_URL + `api/users/changepassword`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.access_token}`,
          },
          body: JSON.stringify(passworData),
        }
      );

      const data = await response.json();
     
      if (data?.status === "success") {
        message.success("Password Updated Successfully!");
        HandleClear();
      } else {
        setErrors(data.data);
        // message.error("Something went wrong!");
      }

      fetchProfile();
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
    // }
  };

  const HandlePasswordChange = (event) => {
    const { name, value } = event.target;
    setPasswordData((prevState) => ({ ...prevState, [name]: value }));
  };

  const HandleClear = () => {
    setErrors({ current_password: "", new_password: "" });
    setPasswordData({ current_password: "", new_password: "" });
  };

  return (
    <>
      <Layout>
        <h1 className="font-bold px-4 sm:px-6 md:px-12 lg:px-20  text-center p-2 text-white bg-[#fbb62e]">
          <Breadcrumb
            className="text-gray-50 "
            separator={<span style={{ color: "white" }}>&gt;</span>}
            items={[
              {
                title: (
                  <HomeOutlined
                    onClick={() => navigate("/")}
                    style={{ color: "white", fontSize: "20px" }}
                  />
                ),
              },

              {
                title: <span className="text-white">My Account</span>,
              },
            ]}
          />
        </h1>

        <div className="min-h-screen mx-4 sm:mx-6 md:mx-12 lg:mx-20">
          <h1 className="font-bold text-xl mt-4">Profile</h1>
          <h1 className="text-sm text-gray-500">
            Control your profile setup and itegrations
          </h1>

          <main className="h-full pt-2 pb-2 flex flex-col md:px-28 mt-6">
            <div
              className={`flex justify-evenly w-full  flex-col lg:flex-row basis-full`}
            >
              {/* section left */}
              <div className="w-full sm:max-w-md mx-auto p-3 bg-stone-50 rounded-xl">
                <form
                  className="max-w-md mx-auto"
                  onSubmit={HandleBasicFormSubmit}
                >
                  <label htmlFor="name" className="block">
                    Full Name :
                  </label>
                  <input
                    className="w-full px-4 py-2 border mb-4 border-gray-300 rounded-md focus:outline-none focus:border-amber-400"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                  />

                  <label htmlFor="gender" className="block">
                    Gender :
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-8 py-2 border mb-4 border-gray-300 rounded-md focus:outline-none focus:border-amber-400"
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>

                  <label htmlFor="dob" className="block">
                    Date of Birth :
                  </label>
                  <input
                    className="w-full px-4 py-2 border mb-4 border-gray-300 rounded-md focus:outline-none focus:border-amber-400"
                    id="dob"
                    name="dob"
                    type="date"
                    value={formData.dob}
                    onChange={handleChange}
                  />

                  <label htmlFor="time_of_birth" className="block">
                    Time of Birth :
                  </label>
                  <input
                    className="w-full px-4 py-2 border mb-4 border-gray-300 rounded-md focus:outline-none focus:border-amber-400"
                    id="time_of_birth"
                    name="time_of_birth"
                    type="time"
                    value={formData.time_of_birth}
                    onChange={handleChange}
                  />

                  <label htmlFor="place_of_birth" className="block">
                    Place Of Birth :
                  </label>
                  <input
                    className="w-full px-4 py-2 border mb-4 border-gray-300 rounded-md focus:outline-none focus:border-amber-400"
                    id="place_of_birth"
                    name="place_of_birth"
                    type="text"
                    placeholder="Birth Place"
                    value={formData.place_of_birth}
                    onChange={handleChange}
                  />

                  <label htmlFor="address" className="block">
                    City,State,Country:
                  </label>
                  <input
                    className="w-full px-4 py-2 border mb-4 border-gray-300 rounded-md focus:outline-none focus:border-amber-400"
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                  />

                  <div className="flex justify-between mb-10">
                    <button
                      disabled
                      type="button"
                      className="w-full text-sm border-amber-500 border hover:text-white py-2 px-2 m-1 rounded-md shadow-md hover:bg-amber-500 uppercase mb-4 lg:mb-0"
                    >
                      Cancel
                    </button>
                    {loading ? (
                      <button
                        disabled
                        className="w-full cursor-not-allowed text-sm border-amber-500 border hover:text-white py-2 px-2 m-1 rounded-md shadow-md hover:bg-amber-500 uppercase mb-4 lg:mb-0"
                      >
                        <LoadingOutlined />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="w-full text-sm border-amber-500 border hover:text-white py-2 px-2 m-1 rounded-md shadow-md hover:bg-amber-500 uppercase mb-4 lg:mb-0"
                      >
                        Save Changes
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* section right */}

              <div className="w-full sm:max-w-md mx-auto p-3 bg-stone-50 rounded-xl">
                <h1 className="font-bold text-xl">Update Password</h1>
                <h1 className="text-sm text-gray-500 mb-6">
                  Enter your current password to make update
                </h1>

                <form
                  className="max-w-md mx-auto"
                  onSubmit={HandlePasswordSubmit}
                >
                  <label htmlFor="current_password" className="block">
                    Current Password :
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400"
                    id="current_password"
                    name="current_password"
                    type="current_password"
                    placeholder="Enter Password"
                    value={passworData.current_password}
                    onChange={HandlePasswordChange}
                  />
                  <p className="text-red-600  h-5 text-sm">
                    {errors.current_password}
                  </p>

                  <label htmlFor="new_password" className="block">
                    New Password :
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400"
                    id="new_password"
                    name="new_password"
                    type="password"
                    placeholder="Enter New Passowrd"
                    value={passworData.new_password}
                    onChange={HandlePasswordChange}
                  />
                  <p className="text-red-600  h-5 text-sm">
                    {errors.new_password}
                  </p>

                  <div className="flex items-end justify-between">
                    <button
                      type="button"
                      onClick={HandleClear}
                      className="w-full text-sm border-amber-500 border hover:text-white py-2 px-2 m-1 rounded-md shadow-md hover:bg-amber-500 uppercase mb-4 lg:mb-0"
                    >
                      Cancel
                    </button>
                    {loading ? (
                      <button
                        disabled
                        className="w-full  cursor-not-allowed text-sm border border-amber-500 py-2 px-2 m-1 hover:text-white rounded-md shadow-md hover:bg-amber-500 uppercase mb-4 lg:mb-0"
                      >
                        <LoadingOutlined />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="w-full  text-sm border border-amber-500 py-2 px-2 m-1 hover:text-white rounded-md shadow-md hover:bg-amber-500 uppercase mb-4 lg:mb-0"
                      >
                        Update
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
};

export default MyAccount;
