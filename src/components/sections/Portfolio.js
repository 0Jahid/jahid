import { jahidSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio = () => {
  return (
    <section
      className="portfolio main-section flex-column-mobile"
      id="portfolio"
    >
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              My Portfolio
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      <Swiper
        {...jahidSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/brewcart.jpg"
              alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Brew Cart</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Mobile App(Flutter)</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Tech Stack :
                  </span>
                  <span>Flutter ,</span>
                  <span>Dart ,</span>
                  <span>Firebase ,<br /></span>
                  <span>Stripe ,</span>
                  <span>BLoC ,</span>
                  <span>Git ,</span>
                  <span>GoRouter</span>
            
                </li>
              </ul>
            </div>
            <a href="https://github.com/0Jahid/brew_cart" target="_blank" className="custom-btn">
              <span>
                Preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <div className="videocontainer">
              <iframe
                className="youtube-video"
                src="https://www.youtube.com/embed/zY1nC9CC_rE?si=1sR2A-qhev-iglGS"
                allowFullScreen="false"
                
              />
            </div>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Brew Cart & RizeZO </h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>App Demos</span>
                </li>
              </ul>
            </div>
            <a href="https://youtu.be/zY1nC9CC_rE" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <Swiper
              {...jahidSlider.portfolioItems}
              className="swiper swiper-portfolio-item"
            >
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/rz1.jpg" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/rz2.jpg" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/rz3.jpg" title="img" />
              </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/rz4.jpg" title="img" />
              </SwiperSlide>
              <div className="swiper-pagination" />
            </Swiper>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>RideZO</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Mobile App(Flutter)</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Tech Stack :
                  </span>
                  <span>Flutter ,</span>
                  <span>Dart ,</span>
                  <span>Firebase ,</span>
                  <span>Provider ,<br /></span>
                  <span>MVVM Pattern ,</span>
                  <span>Git</span>

                </li>
              </ul>
            </div>
            <a href="https://github.com/0Jahid/RideZO_App-main" target="_blank" className="custom-btn">
              <span>
                Preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <a
              href="https://themeforest.net"
              target="_blank"
              className="external"
            >
              <img
                className="img-fluid"
                src="assets/portfolio/project-3.jpg"
                alt="External Project"
              />
            </a>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Shopping App</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Mobile App(Java)</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Tech Stack :
                  </span>
                  <span>Kotlin ,</span>
                  <span>Jetpack Compose ,</span>
                  <span>Firebase ,<br /></span>
                  <span>Dagger Hilt ,</span>
                  <span>MVVM Pattern ,</span>
                  <span>Coroutines ,</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default Portfolio;
