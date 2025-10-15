const About = () => {
  return (
    <section className="about main-section flex-column-mobile" id="about">
      {/* INFO HOLDER STARTS */}
      <div className="info flex-column-mobile">
        {/* IMAGE STARTS */}
        <div
          className="img-container animated-layer image-animation my-photo-container fadeInUp wow"
          data-wow-offset={200}
          id="my-photo"
        >
          <div>
            <div>
              <img className="my-photo" src="assets/pph.jpg" alt="" />
            </div>
          </div>
        </div>
        {/* IMAGE ENDS */}
        {/* INFO STARTS */}
        <div>
          <h2>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                Md. Jahid
              </span>
            </span>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                Hasan
              </span>
            </span>
          </h2>
          <div className="infos">
            <p className="animated-layer fade-in-up-animation fadeInUp wow">

              I am a passionate Mobile App Developer with expertise in building intuitive and<br/> 
              efficient applications for both native Android (Kotlin/Java) and cross-platform<br/> 
              (Flutter/Dart). My journey in tech began in my hometown of Bogura, where I<br/> 
              completed my schooling before pursuing a Bachelor of Science in Computer Science<br/> 
              and Enge from North South University. I have hands-on experience developing full<br/> 
              -stackprojects using Firebase, implementing robust state management, and RESTful<br/> 
              APIs across both platforms. I am always seeking challenging opportunities to<br/>  
              create high-quality mobile solutions that make a difference.
            </p>
          </div>
        </div>
        {/* INFO ENDS */}
      </div>
      {/* INFO HOLDER ENDS */}
      {/* SKILLS STARTS */}
      <div className="skills flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation fadeInUp wow">
                My Skills
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
                {/* TITLE ENDS */}
        <div className="skills-content">
            {/* Mobile App Developer Skills - concise and grouped */}
            <div>
              <div className="animated-layer fade-in-down-animation fadeInLeft wow">
                <span><i className="devicon-flutter-plain" /></span>
                <h4>Cross-Platform Flutter & Dart</h4>
              </div>
              <div className="animated-layer fade-in-up-animation fadeInRight wow">
                <span><i className="devicon-android-plain" /></span>
                <h4>Native Android Java & Kotlin</h4>
              </div>
            </div>
            <div>
              <div className="animated-layer fade-in-down-animation fadeInLeft wow">
                <span>
            <i class="fa-solid fa-database"></i>
          </span>
                <h4>Backend Remote & Local</h4>
              </div>
              <div className="animated-layer fade-in-up-animation fadeInRight wow">
                <span><i className="devicon-git-plain" /></span>
                <h4>Git & GitHub</h4>
              </div>
            </div>
            <div>
              <div className="animated-layer fade-in-down-animation fadeInLeft wow">
                <span><i class="fa-solid fa-bars-progress"></i></span>
                <h4>State Management</h4>
              </div>
              <div className="animated-layer fade-in-up-animation fadeInRight wow">
                <span><i class="fa-solid fa-sitemap"></i></span>
                <h4>Clean Architecture</h4>
              </div>
            </div>
            <div>
              <div className="animated-layer fade-in-down-animation fadeInLeft wow">
                <span>
            <i class="fa-solid fa-s"></i>
          </span>
                <h4>SOLID Principles</h4>
              </div>
              <div className="animated-layer fade-in-up-animation fadeInRight wow">
                <span><i class="fa-solid fa-syringe"></i></span>
                <h4>Dependency Injection</h4>
              </div>
            </div>
            <div>
              <div className="animated-layer fade-in-down-animation fadeInLeft wow">
                <span><i className="devicon-javascript-plain" /></span>
                <h4>RESTful API</h4>
              </div>
              <div className="animated-layer fade-in-up-animation fadeInRight wow">
                <span><i class="fa-solid fa-bars-staggered"></i></span>
                <h4>MVVM</h4>
              </div>
            </div>
        </div>
      </div>
      {/* SKILLS ENDS */}
      {/* RESUME STARTS */}
      <div className="resume flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title fadeInUp wow">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation">
                Education
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        {/* TIMELINE STARTS */}
        <div className="timeline">
          <ol className="animated-layer fade-in-animation">
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="education">
                  <h4>APBn School & College</h4>
                  <p>
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                    <span>SSC</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2016</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="education">
                  <h4>Azizul Haque College</h4>
                  <p>
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                    <span>HSC</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2018</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="education">
                  <h4>North South University</h4>
                  <p>
                   <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                    <span>BSc in CSE</span>
                  </p>
                  <p>
                   <i className="fa-regular fa-clock" />
                    <span>2025</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="education">
                  <h4>Udemy         <a
          href="https://udemy-certificate.s3.amazonaws.com/image/UC-b9fec707-9d8b-4d77-bca9-d0a923a23742.jpg"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "hsla(211, 95%, 31%, 1.00)",
            fontSize: "0.85rem",
          }}
        >
          (cirtificate)
        </a></h4>
                  
                  <p>
                    <i class="fa fa-globe" aria-hidden="true"></i>
                    <span>Android & Kotlin</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>26 April 2025</span>
                  </p>
                  
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="education">
                  <h4>Udemy
                    <a
          href="https://udemy-certificate.s3.amazonaws.com/image/UC-7641d292-a931-4832-a18a-01fbf72d280f.jpg"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "hsla(211, 95%, 31%, 1.00)",
            fontSize: "0.85rem",
          }}
        >
          (cirtificate)
        </a>
                  </h4>
                  <p>
                   <i class="fa fa-globe" aria-hidden="true"></i>
                    <span>Flutter & Dart</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>12 June 2025</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            <li />
          </ol>
        </div>
        {/* TIMELINE ENDS */}
      </div>
      {/* RESUME ENDS */}
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default About;

