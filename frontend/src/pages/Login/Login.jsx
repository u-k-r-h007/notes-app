import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import PasswordInput from "../../components/Input/PasswordInput";
import { useState } from "react";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handelLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("please enter a valid email");
      return;
    }

    if (!password) {
      setError("Pease enter the password");
      return;
    }
    setError("");
    //login api call
    try {
      const response = await axiosInstance.post("/login", {
        email: email,
        password: password,
      });
      //handle successful login
      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/dashboard");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error haas occured. Please try again");
      }
    }
  };
  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form action="" onSubmit={handelLogin}>
            <h4 className="text-2xl mb-2">Login</h4>
            <input
              type="text "
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

            <button type="submit" className="btn-primary">
              Login
            </button>

            <p className="text-sm text-center mt-4">
              {" "}
              Not registered yet?{" "}
              <Link to="/signup" className="font-medium text-primary underline">
                {" "}
                create an Account
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
