import "./App.css";
import Letters from "./data/letter";
// import { useEffect, useState } from "react";
import { RandomReveal } from "react-random-reveal";
import MarqueePanel from "./components/marqueePanem";
import MarqueeView from "./components/marqueeView";
// import { TextChange, colorChange } from "./components/textChange";
import "bootstrap/dist/css/bootstrap.min.css";
import { Time, Frame } from "./components/time";
import { BigLetter } from "./components/bigLetter";

function App() {
  // const [refresh, setRefresh] = useState(0);
  // useEffect(() => {
  //   setInterval(() => {
  //     setRefresh(refresh + 1);
  //   }, 26000);
  // });
  return (
    <div className="App">
      <MarqueeView>
        <MarqueePanel>
          <p>OxF115...35C2</p>
          <table className="table table-dark">
            <thead>
              <tr>
                <td className="right">5403134646487664646464</td>
              </tr>
            </thead>
            <tbody>
              {Letters.map((Letter, i) => (
                <tr key={i}>
                  <td>
                    {Array.from(Letter.FLIGHT).map((item, index) => {
                      let x = Math.floor(
                        (Math.random() * Letter.FLIGHT.length) / 3
                      );
                      let y = Math.floor(index / 8);
                      return x === y ? (
                        <span
                          className="dis"
                          style={{
                            display: "inline-block",
                            width: "30px",
                            letterSpacing: "1.2rem",
                          }}
                        >
                          <RandomReveal
                            isPlaying={true}
                            duration={(i + 1) * Frame}
                            revealDuration={0}
                            characters={item}
                            characterSet={BigLetter}
                            onComplete={() => ({
                              shouldRepeat: true,
                              delay: Time - i * Frame,
                            })}
                          />
                        </span>
                      ) : (
                        <span
                          key={"flight" + index}
                          style={{
                            display: "inline-block",
                            width: "30px",
                            letterSpacing: "1.2rem",
                          }}
                        >
                          <RandomReveal
                            isPlaying={true}
                            duration={(i + 1) * Frame}
                            revealDuration={0}
                            characters={item}
                            characterSet={BigLetter}
                            onComplete={() => ({
                              shouldRepeat: true,
                              delay: Time - i * Frame,
                            })}
                          />
                        </span>
                      );
                    })}
                  </td>
                  {/* </TextChange> */}
                </tr>
              ))}
            </tbody>
          </table>
        </MarqueePanel>
      </MarqueeView>
    </div>
  );
}

export default App;
