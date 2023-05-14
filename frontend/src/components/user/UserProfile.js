import React, { useState } from 'react'

const Profile = () => {

	const [mycolor, setMycolor] = useState('#eee');
	const [mycardcolor, setMycardcolor] = useState('#eee');
	const [fontsize, setFontsize] = useState(12);

	return (
		<div  style={{backgroundColor: mycolor}}>
			<div className='row '>
				<div className='col-md-5  mx-auto'>
					<div className='card border shadow-0 ' style={{ borderRadius: "0", backgroundColor:mycardcolor }} >
						<div className='card-body ps-5 pe-5 pt-4 '>
							<div className='d-flex justify-content-end'>
								<button className='ps-2 pe-2'>EDIT PROFILE</button>
							</div>
							<div className='d-flex justify-content-center'>
								<img height={200} width={200} src="/PIC.JPG" alt="" style={{ borderRadius: "100%" }} />
							</div>
							<div className='heightlen mt-2'>

							<div className='d-flex justify-content-center mb-2'>
								<h3 style={{fontSize:fontsize}}>Deepjyoti</h3>
							</div>
							<div className='d-flex justify-content-center'>
								<p>FULL STACK DEVELOPER</p>
							</div>
							<div className='d-flex justify-content-center '>
								<p>abdullahafzalpoi@gmail.com</p>
							</div>
							<div className='d-flex justify-content-center '>
								<p>MALE</p>
							</div>
							</div>
							<div className="row mt-4">
								<div className='col-md-4 text-center'>
									<h6>Age</h6>
									<p>20 years</p>
								</div>
								<div className='col-md-4 text-center'>
									<h6>Weight</h6>
									<p>86 Kgs</p>
								</div>
								<div className='col-md-4 text-center'>
									<h6>Height</h6>
									<p>5'8''</p>
								</div>

							</div>
							<div className='col-md-7 mx-auto text-center'>
								<h6>Emergency Contact</h6>
								<button className='btn btn-primary form-control fs-' style={{fontSize:'15px'}}>9580477026</button>
							</div>
							<div className='mt-5'>
								<div className='row'>
								<div className='col'>

								<h6>DISEASE/SYMPTOMS</h6>
								</div>
								<div className=' col d-flex justify-content-end'>
									<button className='ps-3 pe-3'>EDIT</button>
								</div>
								</div>

								<span><p>Hypertension, Blood Pressure, Anemia, Diabetics, Headache.</p></span>
								</div>
								<div className='mt-5 mb-5'>
								<div className='row'>
								<div className='col'>

								<h6>ADDRESS</h6>
								</div>
								<div className=' col d-flex justify-content-end'>
									<button className='ps-3 pe-3'>EDIT</button>
								</div>
								</div>
								<div className='heightlen'>
									<p>290/43/16 Bulaki Adda</p>
									<p>Chanda Market</p>
									<p>Lucknow 226004</p>
								</div>
							</div>
							<div>
								<h6>Add Customization to your Profile</h6>
							</div>
							<div className='d-flex mt-3'>
								<h6 className='me-5'>Background Colour</h6>
								<div>
									<input type="color"  onChange={(e) => {setMycolor(e.target.value)}} />
								</div>
							</div>
							<div className='d-flex mt-3'>
								<h6 className='me-5'>Card Colour</h6>
								<div>
									<input type="color"  onChange={(e) => {setMycardcolor(e.target.value)}} />
								</div>
							</div>
							<div className='mt-3'>
								<h6>Font-Size</h6>
								<input type="range" className='form-range' id='customRange1' onChange={(e) => {setFontsize(parseInt(e.target.value));}} />
							</div>
							</div>
						</div>
					</div>

				</div>
			</div>
	)
}

export default Profile