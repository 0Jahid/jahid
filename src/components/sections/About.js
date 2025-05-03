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
              <img className="my-photo" src="assets/jahid.jpg" alt="" />
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
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Age :</span>
                    <span>27 Years</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Nationality :</span>
                    <span>German</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Freelance :</span>
                    <span>Available</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Languages :</span>
                    <span>English</span>
                  </span>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Address :</span>
                    <span>London</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Phone :</span>
                    <span>21 184 010</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Email :</span>
                    <span>contact@steven.net</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Skype :</span>
                    <span>steven.walker</span>
                  </span>
                </span>
              </li>
            </ul>
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
          <div>
            {/* SKILL ITEM */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span><i className="devicon-kotlin-plain" /></span>
              <h4>Kotlin</h4>
            </div>
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span><i className="devicon-java-plain" /></span>
              <h4>Java</h4>
            </div>
          </div>

          <div>
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span><i className="devicon-android-plain" /></span>
              <h4>Android SDK</h4>
            </div>
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span><i className="fa-solid fa-mobile-screen" /></span>
              <h4>Jetpack Compose</h4>
            </div>
          </div>

          <div>
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span><i className="fa-solid fa-database" /></span>
              <h4>Room</h4>
            </div>
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span><i className="fa-solid fa-arrows-spin" /></span>
              <h4>Coroutine</h4>
            </div>
          </div>

          <div>
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span><i className="fa-solid fa-diagram-project" /></span>
              <h4>MVVM</h4>
            </div>
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span><i className="fa-solid fa-syringe" /></span>
              <h4>Dagger Hilt</h4>
            </div>
          </div>

          <div>
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span><i className="fa-solid fa-plug" /></span>
              <h4>Retrofit</h4>
            </div>
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-git-plain" style={{ marginRight: '8px' }} />
                <i className="devicon-github-original" />
              </span>
              <h4>Git & GitHub</h4>
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
                  <h4>SSC</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2016</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>APBn School & College</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}

            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>HSC</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2018</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>Azizul Haque College</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}

            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="education">
                  <h4>Bachelor of Science</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2025</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-building-columns" />
                    <span>North South University</span>
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

      <img alt="" className="separator hide-mobile" src="assets/separator.png" />
    </section>
  );
};

export default About;
