// import GoogleAuth from "../GoogleAuth";
// import AppleAuth from "../AppleAuth";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { motion } from "framer-motion";
import { Axios } from "axios";

const Signup = () => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


  const schema = yup.object().shape({
    firstname: yup.string().required("Please Enter Your First Name"),
    lastname: yup.string().required("Please Enter Your Last Name"),
    email: yup.string().email().required('Enter a valid email address'),
    gender: yup.string().required('Select your gender'),
    phone_number: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    password: yup.string().min(5).max(15).required('Enter a valid password'),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Password do not match")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    
    alert("You have successfully created an account!");
    Axios.post('https://api.medihaleconsult.com/api/patient/register', data)
    .then(function (res: any) {
      console.log(res);
    })
    .catch(function (error: any) {
      console.log(error);
    });
    console.log(data);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="d-flex vh-75 justify-content-center py-5"
    >
      <Container className="w-75 text-center py-5" style={{ maxWidth: "30em" }}>
        <div className="login">
          <div className="team-main-title pb-5 text-primary fw-bold fs-4">
            Create Account
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="form-group">

              <input
                type="text"
                className="form-control"
                placeholder="First name"
                {...register("firstname")}
              />
            <p className=" text-start text-danger">{errors.firstname?.message}</p>
            </div>
            <br />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              {...register("lastname")}
            />
            <p className=" text-start text-danger">{errors.lastname?.message}</p>
          </div>
          <br />
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="email"
              {...register("email")}
            />
            <p className="text-start text-danger">{errors.email?.message}</p>
          </div>
          <br />
          <div className="form-group">
            <select
              className="form-control form-select"
              {...register("gender")}
            >
              <option  disabled hidden selected>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <p className=" text-start text-danger">{errors.gender?.message}</p>
          </div>
          <br />
          <div className="form-group">
            <input
              type="phone"
              className="form-control"
              placeholder="Phone"
              {...register("phone_number")}
            />
            <p className=" text-start text-danger">{errors.phone_number?.message}</p>
          </div>
          <br />
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              {...register("password")}
            />
            <p className=" text-start text-danger">{errors.password?.message}</p>

          </div>
          <br />
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              {...register("password_confirmation")}
            />
            <p className=" text-start text-danger">{errors.password_confirmation?.message}</p>

          </div>
          <br />
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
