import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/Input/PasswordInput";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate= useNavigate()
  const handelSignUp = async (e) => {
    e.preventDefault();

    if(!name){
      setError("Please enter your name")
      return;
    }
    if(!validateEmail(email)){
      setError("Please enter a valid email")
      return;
    }
    if(!password){
      setError("please enter the password")
      return
    }

    setError("")
   
    try {
      const response = await axiosInstance.post("/create-account", {
        fullName:name,
        email: email,
        password: password,
      });
      //handle successful signup
      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/login");
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
    // api call for signup

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form action="" onSubmit={handelSignUp}>
            <h4 className="text-2xl mb-2">SignUp</h4>
            <input
              type="text "
              placeholder="Name"
              className="input-box"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
              Create Account
            </button>

            <p className="text-sm text-center mt-4">
              {" "}
              Already a user?{" "}
              <Link to="/login" className="font-medium text-primary underline">
                {" "}
                Login here.
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
