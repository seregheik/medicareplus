// import GoogleAuth from "../GoogleAuth";
// import AppleAuth from "../AppleAuth";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from 'framer-motion';


const Signup = () => {
  const schema = yup.object().shape({
    firstname: yup.string().required("Enter Full name"),
    lastname: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().min(5).max(15).required(),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password")])
      .required(),
  });
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    alert("You have successfully created an account!");

    console.log(data);
  };

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="d-flex vh-75 justify-content-center py-5">
      <Container className="w-75 text-center py-5" style={{ maxWidth: "30em" }}>
        <div className="login">
          <div className="team-main-title pb-5 text-primary fw-bold fs-4">
            Create Account
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              {...register("firstname")}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              {...register("lastname")}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="email"
              {...register("email")}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              {...register("password")}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              {...register("confirmpassword")}
            />
          </div>
          <div className="d-grid gap-3 py-3">
            <Button type="submit" className="btn btn-primary">
              Create Account
            </Button>
          </div>
        </form>
        <span className="d-flex justify-content-center">
          Already have an account?
          <Link
            to="/log-in"
            className="primary-color px-2 fw-semibold nav-link"
          >
            Log in
          </Link>
        </span>
        {/* <GoogleAuth></GoogleAuth> */}
        {/* <AppleAuth></AppleAuth> */}
      </Container>
    </motion.div>
  );
};

export default Signup;
