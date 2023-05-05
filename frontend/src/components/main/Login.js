import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import * as Yup from 'yup';

const Login = () => {
  const navigate=useNavigate();
  const loginSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string()
        .required('Please Enter your password')
        .matches(
        ),
        })
  const signupform=useFormik({
    initialValues:{
      email:'',
      password:'',
    },
    onSubmit:async(values)=>{
      console.log(values);
      const res= await fetch('http://localhost:5000/user/add',{
        method:'Post',
        body:JSON.stringify(values),
        headers:{
          'Content-Type':'application/json'
        }
      });
      console.log(res.status);
      console.log(await res.text());
      console.log('Form Submitted');
      if(res.status === 200){
        Swal.fire({
          icon : "success",
          title : 'Nice',
          text: 'User Registered Successfully'
        });
        navigate('/main/login');
      }else{
        Swal.fire({
          icon : "error",
          title : 'Ooops..',
          text: 'Something went wrong!'
        });
    }
  },
  validationSchema:loginSchema
});

  return (
    <section className="vh-100 gradient-custom">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          
          <div
            className="card bg-dark text-white"
            style={{ borderRadius: "1rem" }}
          >
            <div className="card-body p-5 text-center">
              <div className="mb-md-5 mt-md-4 pb-5">
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">
                  Please enter your login and password!
                </p>
                <div className=" form-white mb-4">
                  <input
                    type="email"
                    id="typeEmailX"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label text-white-50" htmlFor="typeEmailX">
                    Email
                  </label>
                </div>
                <div className=" form-white mb-4">
                  <input
                    type="password"
                    id="typePasswordX"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label text-white-50" htmlFor="typePasswordX">
                    Password
                  </label>
                </div>
                <p className="small mb-5 pb-lg-2">
                  <a className="text-white-50" href="#!">
                    Forgot password?
                  </a>
                </p>
                <button
                  className="btn btn-outline-light btn-lg px-5"
                  type="submit"
                >
                  Login
                </button>
                <div className="d-flex justify-content-center text-center mt-4 pt-1">
                  <a href="#!" className="text-white">
                    <i className="fab fa-facebook-f fa-lg" />
                  </a>
                  <a href="#!" className="text-white">
                    <i className="fab fa-twitter fa-lg mx-4 px-2" />
                  </a>
                  <a href="#!" className="text-white">
                    <i className="fab fa-google fa-lg" />
                  </a>
                </div>
              </div>
              <div>
                <p className="mb-0">
                  Don't have an account?{" "}
                  <a href="#!" className="text-white-50 fw-bold">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  

  )
}

export default Login