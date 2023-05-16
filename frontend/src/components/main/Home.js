import React from 'react'
// import './carousel.css';
// import './carousel.rtl.css';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

import './home.css';
import { Navigation, Pagination } from "swiper";

const Home = () => {
  return (
    <>
      <main>
        <Swiper
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          // slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className='slideContent w-100 border border-0' style={{backgroundImage:"url('https://wallpaper.dog/large/20465764.jpg')",backgroundSize:"cover"}}>
              <p className='display-4 fw-bold mt-auto'style={{color:'#8B0000'}}>Cricket</p>
              <p>“Enjoy the game & Chase your dreams. Dreams do come true.” – Sachin Tendulkar</p>
              {/* <button className='btn btn-primary btn-lg mt-4'>Action</button> */}
            </div>
            </SwiperSlide>
          <SwiperSlide>
            <div className='slideContent w-100 border border-0 ' style={{backgroundImage:"url('https://wallpapers.com/images/hd/intense-game-volleyball-4k-0c5y2vg6bn9zsh17.jpg')",backgroundSize:"cover"}}>
              <p className='display-4 fw-bold mt-auto' style={{color:'#DAA520'}}>Volleyball</p>
              <p style={{color:'white'}}>"You're either getting better or getting worse. I don't think you stay the same in sports. If we want to achieve something special in the game, then those players have to recognize that they're responsible every day for getting better." -- Russ Rose</p>
              {/* <button className='btn btn-primary btn-lg mt-4'>Action</button> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slideContent w-100 border border-0' style={{backgroundImage:"url('https://media.istockphoto.com/id/1294703794/photo/woman-playing-chess.jpg?s=612x612&w=0&k=20&c=RojxlhxCmbllty1AQTGd4nAX7Odv63vMBrnVYJJ6dlQ=')",backgroundSize:"cover"}}>
              <p className='display-4 fw-bold mt-auto' style={{color:'#9400D3'}}>Chess</p>
              <p>Chess began in India in the 6th century with the name of ‘Chaturanga’. It has come through lots of changes and editions in the rules and system of the game. Modern chess has come in front by the European.</p>
              {/* <button className='btn btn-primary btn-lg mt-4'>Action</button> */}
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className='slideContent w-100 border border-0'style={{ backgroundImage: "url('https://www.sportsnet.ca/wp-content/uploads/2019/08/CanBall1.jpg')", backgroundSize: "cover",backgroundRepeat:"no-repeat"}}>
              <p className='display-4 fw-bold mt-auto' style={{color:'red'}}>Basketball</p>
              { <p className='' style={{color:'white'}}>"When we are saying this cannot be accomplished, this cannot be done, then we are short-changing ourselves. My brain, it cannot process failure. It will not process failure. Because if I have to sit there and face myself and tell myself, 'You are a failure,' I think that is almost worse than dying.-Kobe Bryant"</p>}
              {/* <button className='btn btn-primary btn-lg mt-4'>Action</button> */}
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className='slideContent w-100 border border-0' style={{backgroundImage:"url('https://wallpaperaccess.com/full/6802503.jpg')",backgroundSize:"cover",backgroundRepeat:"no-repeat", backgroundPosition:"center" }}>
              <p className='display-4 fw-bold mt-auto'>Badminton</p>
              <p style={{color:'white'}}>Fitness is the key. You need to have strokes and stamina and agility; you need to exercise really well. On-court and off-court are equally important.-P.V.Sindhu</p>
              {/* <button className='btn btn-primary btn-lg mt-4'>Action</button> */}
            </div>
            </SwiperSlide>
          {/* ... */}

        </Swiper>

        {/* Marketing messaging and featurettes
  ================================================== */}
        {/* Wrap the rest of the page in another container to center all the content. */}
        <div className="container marketing">
          {/* Three columns of text below the carousel */}
          <div className="row">
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width={140}
                height={140}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
              </svg>
              <h2 className="fw-normal">CRICKET</h2>
              <p>
                Some representative placeholder content for the three columns of
                text below the carousel. This is the first column.
              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View details »
                </a>
              </p>
            </div>
            {/* /.col-lg-4 */}
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width={140}
                height={140}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
              </svg>
              <h2 className="fw-normal">Heading</h2>
              <p>
                Another exciting bit of representative placeholder content. This
                time, we've moved on to the second column.
              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View details »
                </a>
              </p>
            </div>
            {/* /.col-lg-4 */}
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width={140}
                height={140}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
              </svg>
              <h2 className="fw-normal">Heading</h2>
              <p>
                And lastly this, the third column of representative placeholder
                content.
              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View details »
                </a>
              </p>
            </div>
            {/* /.col-lg-4 */}
          </div>
          {/* /.row */}
          {/* START THE FEATURETTES */}
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                First featurette heading.{" "}
                <span className="text-body-secondary">It’ll blow your mind.</span>
              </h2>
              <p className="lead">
                Some great placeholder content for the first featurette here.
                Imagine some exciting prose here.
              </p>
            </div>
            <div className="col-md-5">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width={500}
                height={500}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
                <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
                  500x500
                </text>
              </svg>
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                Oh yeah, it’s that good.{" "}
                <span className="text-body-secondary">See for yourself.</span>
              </h2>
              <p className="lead">
                Another featurette? Of course. More placeholder content here to give
                you an idea of how this layout would work with some actual
                real-world content in place.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width={500}
                height={500}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
                <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
                  500x500
                </text>
              </svg>
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                And lastly, this one.{" "}
                <span className="text-body-secondary">Checkmate.</span>
              </h2>
              <p className="lead">
                And yes, this is the last block of representative placeholder
                content. Again, not really intended to be actually read, simply here
                to give you a better view of what this would look like with some
                actual content. Your content.
              </p>
            </div>
            <div className="col-md-5">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width={500}
                height={500}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
                <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
                  500x500
                </text>
              </svg>
            </div>
          </div>
          <hr className="featurette-divider" />
          {/* /END THE FEATURETTES */}
        </div>
        {/* /.container */}
        {/* FOOTER */}
        <footer className="container">
          <p className="float-end">
            <a href="#">Back to top</a>
          </p>
          <p>
            © 2017–2023 Company, Inc. · <a href="#">Privacy</a> ·{" "}
            <a href="#">Terms</a>
          </p>
        </footer>
      </main>
    </>

  )
}

export default Home