import React from "react";

const Login = () => {
  return (
    <div className="container my-5 py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card">
            <div className="row g-0">
              <div className="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src="https://raw.githubusercontent.com/elyr-1/images-src/main/images/jpn-2020.jpg"
                  alt="login form"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">
                  <form>
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <span className="h1 fw-bold mb-0">Login</span>
                    </div>

                    <div className="input-group mb-3">
                      <span className="input-group-text" id="email">
                        <i class="fa-solid fa-user"></i>
                      </span>
                      <input
                        type="email"
                        id="email"
                        className="form-control form-control-lg"
                        placeholder="Email or Username"
                      />
                    </div>

                    <div className="input-group mb-3">
                      <span className="input-group-text" id="password">
                        <i class="fa-solid fa-key"></i>
                      </span>
                      <input
                        type="password"
                        id="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                      />
                    </div>

                    <div className="pt-1 mb-4">
                      <button
                        className="btn btn-dark btn-block btn-lg"
                        type="button"
                      >
                        Login
                      </button>
                    </div>

                    <a className="small text-muted" href="#!">
                      Forgot password?
                    </a>
                    <p className="mb-5 pb-lg-2">
                      Don't have an account? <a>Register here</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
