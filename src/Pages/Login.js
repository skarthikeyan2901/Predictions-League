import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Logo from "../Images/logo.png";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function Login() {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(['user']);

  const handleSubmit = (e) => {
    console.log("button clicked")
    e.preventDefault();
    axios
      .post("http://localhost:7800/api/login", { username: username, password: password })
      .then((data) => {
        console.log("Inside then")
        console.log(data.data.auth);
        if(data.data.auth === true) {
          sessionStorage.setItem("userName", username);
          setCookie('Username', username, { path: '/' });
          navigate("/profile");
        }
        else {
          toast.error("User does not exist!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
        }
      })
  }

  return (
    <div style={{height: "100vh"}}>
      <div id="bg">
          <Navbar />
          <section className="mt-3 pt-3 mx-auto text-light">
            <ToastContainer />
            <div className="container mt-3 pt-3 ms-auto" id="form">
              <form>
                <div>
                  <div className="text-center wt-5">
                    <img src={Logo} alt="" className="w-50 border-radius: 50%;" />
                  </div>
                  <label for="un" className="form-label my-2">Username</label>
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" id="un" placeholder="Username" required />
                </div>
                <div>
                  <label for="pw" className="form-label my-2">Password</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="pw" placeholder="Password" required />
                </div>
                <div className=" my-4">
                  <button type="submit" onClick={handleSubmit} className="btn btn-primary w-100 ">Login</button>
                </div>
              </form>
              <div className="main my-3">
                <div>
                  <div className="d-flex">
                    <hr className="w-25 mx-auto" />
                    <p>or</p>
                    <hr className="w-25 mx-auto" />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Link style={{ textDecoration: 'none', textAlign: 'center' }} className="text-light" to="/signup">Sign Up</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
  )
}