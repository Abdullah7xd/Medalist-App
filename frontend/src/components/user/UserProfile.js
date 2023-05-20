import React, { useState } from "react";
import app_config from "../../config";
import Swal from "sweetalert2";
import { useFormik } from "formik";

const UserProfile = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const url = app_config.apiUrl;
  const [passwordHidden, setPasswordHidden] = useState(true);

  const updateProfile = async (data) => {
    console.log(data);
    const res = await fetch(url + "/user/update/" + currentUser._id, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.status);
    const userdata = await res.json();
    console.log(userdata);
    setCurrentUser(userdata);
    sessionStorage.setItem("user", JSON.stringify(userdata));
  };

  const uploadProfileImage = (e) => {
    const file = e.target.files[0];
    // setSelImage(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        updateProfile({ avatar: file.name });
      }
    });
  };

  const deleteAccount = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
    return;
    const res = await fetch(url + "/user/delete/" + currentUser._id, {
      method: "DELETE",
    });
    if (res.status === 200) {
      sessionStorage.removeItem("user");
      window.location.href = "/";
    }
  };

  const profileForm = useFormik({
    initialValues: currentUser,
    onSubmit: updateProfile,
  });

  return (
    <div style={{ backgroundColor: "#f0fbff" }}>
      <div className="container ">
        <div
          className="d-flex align-items-center  pt-2 mb-4"
          style={{ color: "rgb(39 5 136)", fontFamily: "cursive" }}
        >
          <img
            src="/game.jpg"
            height={100}
            // alt="userprofile"
            style={{ borderRadius: "100px" }}
          />
          <h3 className="fw-bold ms-2">My Profile</h3>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Summary</h5>
              </div>
              <div className="card-body">
                <img
                  style={{ width: "100%" }}
                  className="border-rounded d-block m-auto"
                  src={
                    currentUser.avatar
                      ? `${url}/${currentUser.avatar}`
                      : "/avatar.webp"
                  }
                  alt=""
                />
                <label
                  className="btn btn-outline-secondary w-100 mt-3"
                  htmlFor="upload-image"
                >
                  <i class="fas fa-pen"></i>&nbsp;Edit{" "}
                </label>
                <input
                  type="file"
                  hidden
                  onChange={uploadProfileImage}
                  id="upload-image"
                />
                <p className="text-center mt-1 text-dark">Welcome Back</p>
                <p className="text-center">
                  <span className="h4">{currentUser.name}</span>
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Email
                    <span className="fw-bold">{currentUser.email}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Password
                    {passwordHidden ? (
                      <span className="fw-bold">****</span>
                    ) : (
                      <span className="fw-bold">{currentUser.password}</span>
                    )}
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => setPasswordHidden(!passwordHidden)}
                    >
                      {passwordHidden ? "Show" : "Hide"}
                    </button>
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn-danger btn-block"
                  onClick={deleteAccount}
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-8 mb-4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">
                  {" "}
                  <i class="fas fa-pen-alt    "></i> Edit Profile
                </h5>
              </div>
              <div className="card-body">
                <form onSubmit={profileForm.handleSubmit}>
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className=" mb-4">
                    <div className="col">
                      <div className="">
                        <label className="form-label" htmlFor="form7Example1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={profileForm.values.name}
                          onChange={profileForm.handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="">
                      <label className="form-label" htmlFor="form7Example2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={profileForm.values.email}
                        onChange={profileForm.handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  {/* Text input */}
                  <div className=" mb-4">
                    <label className="form-label" htmlFor="form7Example3">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={profileForm.values.password}
                      onChange={profileForm.handleChange}
                      className="form-control"
                    />
                  </div>

                  <button className="btn btn-primary">
                    {" "}
                    <i class="fa-solid fa-arrows-rotate"></i> Update Profile
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;