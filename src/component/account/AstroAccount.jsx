/* eslint-disable react-hooks/exhaustive-deps */
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, message } from "antd";
import { useContext, useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router";
import MyContext from "../../context/MyContext";
import { LoadingOutlined } from "@ant-design/icons";

const AstroAccount = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const astro = JSON.parse(localStorage.getItem("astro"));

  const [imageUrl, setImageUrl] = useState("");

  const { allSpecialization, allLanguage, ReloadAllAstro, allSkills } =
    useContext(MyContext);

  const [formData, setFormData] = useState({
    astroname: "",
    specialization: [],
    languages: [],
    experience: "",
    expectedcallprice: "",
    profile_pic: "",
    accountno: "",
    ifsccode: "",
    bankname: "",
    skill: [],
    id: astro.userID,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // skills onchange
  const handleCheckedSkill = (e) => {
    const { value, checked } = e.target;

    setFormData((prevState) => {
      let updatedSkill;
      if (checked) {
        updatedSkill = [...prevState.skill, value];
      } else {
        updatedSkill = prevState.skill.filter((item) => item !== value);
      }

      return {
        ...prevState,
        skill: updatedSkill,
      };
    });
  };

  // specialization onchange
  const handleChecked = (e) => {
    const { value, checked } = e.target;

    setFormData((prevState) => {
      let updatedSpecialization;
      if (checked) {
        updatedSpecialization = [...prevState.specialization, value];
      } else {
        updatedSpecialization = prevState.specialization.filter(
          (item) => item !== value
        );
      }

      return {
        ...prevState,
        specialization: updatedSpecialization,
      };
    });
  };

  // language onchange
  const handleCheckedlanguage = (e) => {
    const { value, checked } = e.target;

    setFormData((prevState) => {
      let updatedLanguages;
      if (checked) {
        updatedLanguages = [...prevState.languages, value];
      } else {
        updatedLanguages = prevState.languages.filter((item) => item !== value);
      }

      return {
        ...prevState,
        languages: updatedLanguages,
      };
    });
  };

  const loadFile = async (event) => {
    var input = event.target;
    var file = input.files[0];
    var output = document.getElementById("preview_img");

    output.src = URL.createObjectURL(file);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };

    const url = import.meta.env.VITE_SERVER_URL + `api/astroUploadFile`;

    const formData = new FormData();
    formData.append("profile_pic", file);
    formData.append("fileName", file.name);
    formData.append("astroId", astro.userID);
    formData.append("_method", "POST");

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${astro.access_token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error uploading image");
      }

      const data = await response.json();

      if (data?.status === "success") {
        message.success("Profile Picture Updated!");
      }
      ReloadAllAstro();
    } catch (error) {
      console.error(error);
    }
  };

  // ********************** Update Astro Profile Section  **********************
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(
        import.meta.env.VITE_SERVER_URL +
          `api/astro/profileUpdate/${astro.userID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${astro.access_token}`,
          },
          body: JSON.stringify({ postdata: formData }),
        }
      );

      // if (!response.ok) {
      //   throw new Error("Error Updating Astro Profile!");
      // }

      const data = await response.json();
      console.log(data);

      if (data.status === "success") {
        message.success("ProfileUpdated Successfully!");
      } else {
        message.error("Something went wrong");
      }
      setLoading(false);
      ReloadAllAstro();
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  };

  // ********************** Fetch Astro Profile Section  **********************
  const fetchAstroProfile = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_SERVER_URL +
          `api/astro/fetchprofileastro/${astro.userID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${astro.access_token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error Fetching Astro Profile!");
      }

      const data = await response.json();
      console.log(data);

      if (data.status === "success") {
        setFormData({
          astroname: data.data.name,
          specialization: data.data.specialization.split(","),
          skill: data.data.skills.split(","),
          languages: data.data.languages_get.split(","),
          experience: data.data.experience ?? "",
          expectedcallprice: data.data.call_price,
          accountno: data.data.accountno ?? "",
          ifsccode: data.data.ifsccode ?? "",
          bankname: data.data.bankname ?? "",
        });
        setImageUrl(data.data.image ?? "");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchAstroProfile();
  }, []);
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
              className={`flex justify-evenly w-full text-sm flex-col lg:flex-row basis-full`}
            >
              <div className="bg-white  me-8 bg-clip-border rounded-xl w-full">
                <form className="">
                  <div className="flex items-center space-x-6">
                    <div className="shrink-0">
                      {imageUrl && (
                        <img
                          id="preview_img"
                          src={import.meta.env.VITE_SERVER_URL + `${imageUrl}`}
                          className="h-16 w-16 object-cover rounded-full"
                          alt="Current profile photo"
                        />
                      )}
                    </div>
                    <label className="block">
                      <span className="sr-only">Choose profile photo</span>
                      <input
                        type="file"
                        onChange={loadFile}
                        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                      />
                    </label>
                  </div>
                </form>

                <div className="md:grid md:grid-cols-4 gap-9 mt-9">
                  <div className="flex flex-row">Name</div>
                  <div className="flex flex-row">
                    <input
                      type="text"
                      placeholder="e.g 2"
                      name="name"
                      id="name"
                      onChange={handleChange}
                      value={formData.astroname}
                      className="w-full px-4 py-2 border mb-4 border-gray-300 rounded-md focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="flex flex-row">Call Price (Rupee)</div>
                  <div className="flex flex-row">
                    <input
                      type="text"
                      id="expectedcallprice"
                      name="expectedcallprice"
                      onChange={handleChange}
                      value={formData.expectedcallprice}
                      placeholder="e.g 10"
                      className="w-full px-4 py-2 border mb-4 border-gray-300 rounded-md focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="flex flex-row">Bank Name:</div>
                  <div className="flex flex-row">
                    <input
                      type="text"
                      id="bankname"
                      name="bankname"
                      onChange={handleChange}
                      value={formData.bankname}
                      placeholder="Bank Name"
                      className="w-full px-4 py-2 border mb-4 border-gray-300 rounded-md focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="flex flex-row">IFSC code:</div>
                  <div className="flex flex-row">
                    <input
                      type="text"
                      id="ifsccode"
                      name="ifsccode"
                      onChange={handleChange}
                      value={formData.ifsccode}
                      placeholder="IFSC Code"
                      className="w-full px-4 py-2 border mb-4 border-gray-300 rounded-md focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="flex flex-row">Account No:</div>
                  <div className="flex flex-row">
                    <input
                      type="text"
                      id="accountno"
                      name="accountno"
                      onChange={handleChange}
                      value={formData.accountno}
                      placeholder="Account No."
                      className="w-full px-4 py-2 border mb-4 border-gray-300 rounded-md focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="flex flex-row">Specialization</div>
                <div className="grid grid-cols-2 border rounded-md px-4 py-2">
                  {allSpecialization.map((speresult) => {
                    let ids = speresult.id;

                    const isChecked = formData.specialization.includes(
                      `${ids}`
                    );
                    const checkboxId = `sp${speresult.id}`;

                    return (
                      <div
                        className="flex items-center mb-4"
                        key={speresult.id}
                      >
                        <input
                          value={speresult.id}
                          id={checkboxId}
                          name="specialization"
                          onChange={handleChecked}
                          type="checkbox"
                          checked={isChecked}
                          className="w-4 h-4 text-blue-600 rounded"
                          style={{ color: "blue", backgroundColor: "blue" }}
                        />
                        <label className="ms-2 text-sm font-medium text-gray-700">
                          {speresult.name}
                        </label>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-row">Skill</div>
                <div className="grid grid-cols-2 border rounded-md px-4 py-2">
                  {allSkills.map((skresult) => {
                    let ids = skresult.id;

                    const isChecked = formData.skill.includes(`${ids}`);
                    const checkboxId = `sk${skresult.id}`;

                    return (
                      <div className="flex items-center mb-4" key={skresult.id}>
                        <input
                          value={skresult.id}
                          id={checkboxId}
                          name="skill"
                          onChange={handleCheckedSkill}
                          type="checkbox"
                          checked={isChecked}
                          className="w-4 h-4 text-blue-600 rounded"
                          style={{ color: "blue", backgroundColor: "blue" }}
                        />
                        <label className="ms-2 text-sm font-medium text-gray-700">
                          {skresult.skillname}
                        </label>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-row mt-9">Languages</div>
                <div className="grid grid-cols-2 border rounded-md px-4 py-2 mb-4">
                  {allLanguage.map((laneresult) => {
                    let ids = laneresult.id;
                    const checkboxlId = `lan${laneresult.id}`;
                    const isCheckedcheck = formData.languages.includes(
                      `${ids}`
                    );
                    return (
                      <div
                        className="flex items-center mb-4"
                        key={laneresult.id}
                      >
                        <input
                          value={laneresult.id}
                          name="languages"
                          id={checkboxlId}
                          onChange={handleCheckedlanguage}
                          type="checkbox"
                          checked={isCheckedcheck}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label className="ms-2 text-sm font-medium text-gray-700">
                          {laneresult.name}
                        </label>
                      </div>
                    );
                  })}
                </div>

                <div className="w-full flex gap-3">
                  <button
                    type="button"
                    className="w-full  bg-amber-400 text-white py-2 px-6 rounded-md shadow-md hover:bg-amber-500 uppercase mb-4 lg:mb-0"
                  >
                    Cancel
                  </button>
                  {loading ? (
                    <button
                      disabled
                      className="w-full cursor-not-allowed bg-amber-400 text-white py-2 px-6 rounded-md shadow-md hover:bg-amber-500 uppercase mb-4 lg:mb-0"
                    >
                      <LoadingOutlined />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      onClick={handleUpdate}
                      className="w-full  bg-amber-400 text-white py-2 px-6 rounded-md shadow-md hover:bg-amber-500 uppercase mb-4 lg:mb-0"
                    >
                      Update
                    </button>
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
};

export default AstroAccount;
