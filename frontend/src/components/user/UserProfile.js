import React from 'react'

const UserProfile = () => {
  return (

    <div className="vh-100" style={{backgroundColor:'black'}}>
      <div className="container emp-profile">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img className='img-fluid' src="https://st3.depositphotos.com/7486768/17949/v/450/depositphotos_179490486-stock-illustration-profile-anonymous-face-icon-gray.jpg" alt=""/>
              </div>

            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>User</h5>
                <h6>FootballPlayer</h6>
                <p className="profile-rating mt-3 mb-5">RANKINGS:<span>1/10</span></p>
                <ul class="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <img src="" alt="" />
            </div>
            <div className="col-md-2">
              <input type="text" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
            </div>

          </div>
          <div className="row">
            {/* left side url */}
            <div className="col-md-4">
              <div className="profile-work">
                <p> Work Link</p>
                <a href=""></a>
              </div>
            </div>

            {/* right side data toggle */}
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabcontent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>12132</p>
                    </div>

                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>User</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}

export default UserProfile