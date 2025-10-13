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
              Steven Walker is a passionate developer based in London,<br/> 
              fluent in English, and open to new opportunities. With a strong <br/> 
              foundation in modern web technologies and a collaborative mindset, <br/> 
              he is eager to contribute to innovative projects and grow as a professional.
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
                My Resume
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
                <div className="experience">
                  <h4>Project Manager</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2019 - Now</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>Adobe Company</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="experience">
                  <h4>Team Leader</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2015 - 2019</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>Twitter Inc</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>Web Developer</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2010 - 2015</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>Facebook</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="education">
                  <h4>Master Degree</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2003</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-building-columns" />
                    <span>London University</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="education">
                  <h4>Bachelor Degree</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>1999</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-building-columns" />
                    <span>Berlin High School</span>
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
