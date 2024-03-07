import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Axios from 'axios'
import logo from '../assets/icons/logo.svg'
import { useNavigate } from "react-router-dom";

const Login = () => {

  const schema = yup.object().shape({
    email: yup.string().email().required('Enter a valid email address'),
    password: yup.string().required()
  })
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: unknown) => {
    console.log(data)
    Axios.post('https://api.medihaleconsult.com/api/patient/login',data).then((res) => {
      console.log(res)
      if (res.request.status === 200){
        console.log(res.data.token)
        localStorage.setItem('LoginToken', res.data.token)
        navigate('/profile');
      }
    }).catch((error) => {
      console.log(error)
    })
  }
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="d-flex vh-75 justify-content-center py-5">

      <Container className="w-75 text-center py-5" style={{ maxWidth: '30em' }}>
        <div className="login">
          <div className="logo"><img src={logo} alt=""/></div>
          <div className="team-main-title pb-5 text-primary fw-bold fs-4">
            Sign In
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              {...register('email')}
            />
            
          </div>
          <p className="text-danger text-start">{errors.email?.message}</p>
          
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              {...register('password')}
            />
          </div>
          <div className="d-grid gap-3 py-3">
            <Button type='submit' className="btn btn-primary">Sign In</Button>
          </div>
        </form>

        <span className="d-flex justify-content-center">
          New to Medihale?
          <Link
            to="/sign-up"
            className="primary-color px-2 fw-semibold nav-link"
          >
            Sign Up
          </Link>
          
        </span>
        <br />
          {/* <Link to="http://" className="primary-color px-2 fw-semibold nav-link">Forgot Password</Link> */}
        {/* <GoogleAuth></GoogleAuth> */}
        {/* <AppleAuth></AppleAuth> */}
      </Container>
    </motion.div>
  );
};

export default Login;
