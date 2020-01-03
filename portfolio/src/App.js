import React from "react";
import { Trail } from "react-spring/renderprops";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import "./App.css";

const items = ["H", "e", "l", "l", "o", "!"];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Parallax pages={3} ref={ref => (this.parallax = ref)}>
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
        </Parallax>

        {/* <Trail
          items={items}
          keys={item => item.key}
          from={{ transform: "translate3d(0,-1000px,0)" }}
          to={{ transform: "translate3d(0,0px,0)" }}
        >
          {item => props => <span style={props}>{item}</span>}
        </Trail> */}
      </div>
    );
  }
}

export default App;
