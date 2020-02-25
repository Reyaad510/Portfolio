import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import myImage from "./imageMe.JPG";
import myVideo from "./Photoeffects_GIF.mov";

import { Spring, Trail, animated } from "react-spring/renderprops";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
// import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

library.add(fab, faEnvelopeOpen);

const items = ["H", "e", "l", "l", "o", "!"];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="imgBox">
          <div>
            <Trail
              items={items}
              keys={item => item.key}
              from={{ opacity: 0, scale: 0 }}
              to={{ opacity: 1, scale: 10 }}
            >
              {item => props => (
                <span className="fontP" style={props}>
                  {item}
                </span>
              )}
            </Trail>
            {/* <p className="fontP"> Hello! I'm Nicholas</p>
            <p className="fontP2"> Full Stack Web Developer</p> */}
          </div>
        </div>
        {/* <div className="container"> */}
        <div className="aboutMe">
          <div className="aboutMeContainer" id="about">
            <h2> About Me</h2>
            <img className="myImage" src={myImage} />
            <p>
              Hello! I'm Reyaad and i am full stack web developer. Devoted and
              passionate about programming I learned everything I know from
              Lambda School for one year. Thanks to Lambda I learned HTML, CSS,
              Flexbox, React, Redux, Node.js, Postgres, etc. Not only that I
              learned agile methodology and had build weeks that emulated a real
              world work environment. Programming is essential, but this is a
              team sport and knowing how to use Github, being adaptive to any
              situation that may come about, learning to use your resources
              effectively, and commuicating with your team is just as important.
              That's what I bring to the table. Hope to hear from you soon!{" "}
            </p>
          </div>
        </div>
        <div className="projects">
          <div className="projectsContainer" id="projects">
            <h2>Projects</h2>
            <div>
              <h3>Smith And Jones Architect</h3>
              
              <button>
                {" "}
                <a
                  href="https://reyaad510.github.io/User-Interface-Project-Week/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View S&J App
                </a>
              </button>
            </div>
            <div>
              <h3>Blackhole</h3>
              <button>
                {" "}
                <a
                  href="https://blackhole-reactapp.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View BlackHole App
                </a>
              </button>
            </div>
            <div>
              <h3>BucketList</h3>
              <button>
                {" "}
                <a
                  href="https://bucketlist-builds.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View BucketList App
                </a>
              </button>
            </div>
            <div>
              <h3>PhotoEffects</h3>
              <iframe
                className="video"
                src="https://www.youtube.com/embed/qbuMLcZ5Ofw"
                display="initial"
              />
              <p>
                The Photo Effects App was created so you could build beautiful
                and meaningful messages over photos with ease without the
                complexity of Photoshop and Canva.
              </p>
              <button>
                {" "}
                <a
                  href="https://www.photoeffectsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View PhotoEffects App
                </a>
              </button>
            </div>
          </div>
        </div>
        <Contact />
      </div>
      // </div>
    );
  }
}

export default App;

/*
colors: sandy: #faefe8, green: #8ce5b0, green2: #a4eebb, blue: #7cdbe1, blue2:#8bdbeb
*/

// const items = ["H", "e", "l", "l", "o", "!"];

/* <Parallax pages={3} ref={ref => (this.parallax = ref)}>
          <ParallaxLayer
            offset={1}
            speed={1}
            style={{ backgroundColor: "#805E73" }}
          />
          <ParallaxLayer
            offset={2}
            speed={1}
            style={{ backgroundColor: "#87BCDE" }}
          />

          <ParallaxLayer offset={0} speed={0} factor={3} className="back" />
        </Parallax> */

/* <Trail
          items={items}
          keys={item => item.key}
          from={{ transform: "translate3d(0,-1000px,0)" }}
          to={{ transform: "translate3d(0,0px,0)" }}
        >
          {item => props => <span style={props}>{item}</span>}
        </Trail> */