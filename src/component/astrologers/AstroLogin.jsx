import { useContext, useState } from "react";
import { Modal, message } from "antd";
import { useNavigate } from "react-router";
import MyContext from "../../context/MyContext";
import logo from "../../assets/astroLogo.png";

const App = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const { ReloadCheckStatus, astroLogin } = useContext(MyContext);

  const navigate = useNavigate();

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = async () => {
    // Basic validation
    if (!email || !password) {
      setErrors({
        email: email ? "" : "Email is required",
        password: password ? "" : "Password is required",
      });
      return;
    }
    // Perform authentication logic here
    setConfirmLoading(true);
    try {
      const response = await fetch(
        import.meta.env.VITE_SERVER_URL + "api/astrologin",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email, password: password }),
        }
      );

      const data = await response.json();

      if (data.status === "success") {
        message.success("Login Successfull!");
        handleCancel();
        navigate("/");
        ReloadCheckStatus();
        astroLogin(data);
      } else {
        message.error("Login Failed!");
      }

      localStorage.setItem("astro", JSON.stringify(data));

      setConfirmLoading(false);
    } catch (error) {
      console.error(error.message);
      setConfirmLoading(false);
      message.error("Something went wrong try login again.");
    }
  };

  const handleCancel = () => {
    setOpen(false);
    setEmail("");
    setPassword("");
    setErrors({ email: "", password: "" });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors({ ...errors, email: "" });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrors({ ...errors, password: "" });
  };

  return (
    <main>
      <div className="h-full flex  items-center">
        <p onClick={showModal} className="hover:cursor-pointer">
          Astrologer Login
        </p>

        <Modal
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <div className="flex justify-center">
            <img src={logo} alt="logo" className="w-20 h-20" />
          </div>
          <p className="text-center font-bold text-amber-500 text-xl rounded-md">
            Astrologer Login
          </p>
          <p className="text-center text-sm mb-4">
            Welcome back! Please enter your details{" "}
          </p>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-semibold">
              Email
            </label>
            <input
              type="text"
              placeholder="Your Email Address"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className={`border rounded-md p-2 focus:outline-none focus:border-blue-500 hover:border-blue-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="mt-4 flex flex-col">
            <label htmlFor="password" className="mb-1 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Your Password"
              value={password}
              onChange={handlePasswordChange}
              className={`border rounded-md p-2 focus:outline-none focus:border-blue-500 hover:border-blue-500 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <div className="mt-2 text-right">
            <div className="text-blue-500 hover:underline">
              Forgot Password?
            </div>
          </div>
        </Modal>
      </div>
    </main>
  );
};
export default App;
