// import GoogleAuth from "./GoogleAuth";
// import AppleAuth from "./AppleAuth";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="d-flex vh-75 justify-content-center py-5">
     
      <Container className="w-75 text-center py-5" style={{maxWidth:'30em'}}>
      <div className="login">
      <div className="team-main-title pb-5 text-primary fw-bold fs-4">
          Sign In
        </div>
      </div>
        <form action=""  method="post">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-3 py-3">
            <Button type='submit' className="btn btn-primary">Sign In</Button>
          </div>
        </form>
       
        <span className="d-flex justify-content-center">
        Don't have an account?
          <Link
            to="/sign-up"
            className="primary-color px-2 fw-semibold nav-link"
          >
            Create Account
          </Link>
        </span>
        {/* <GoogleAuth></GoogleAuth> */}
        {/* <AppleAuth></AppleAuth> */}
      </Container>
    </div>
  );
};

export default Login;
