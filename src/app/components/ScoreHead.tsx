import "../styles/Navbar.css";
import scores from "../data/scores.json";
import teams from "../data/teams.json";
import { Events } from "./Events";

export const ScoreHead = () => {
  return (
    <div className="score-head">
      <Events/>
      {scores.NFL.map((score, index) => (
        <div className="scores">
          <div className = "pb-1">Final</div>
          {score > scores.NFL[index + 1] ? (
            <div className="score">
              <div className="font-bold grid grid-cols-3 gap-y-12 gap-x-5 pb-1 place-items-end">
                <div>{teams.NFL[index + 1] && teams.NFL[index].abbrev}</div>{" "}
                <div>{teams.NFL[index + 1] && score}</div>
                <div className = "winner-triangle"></div>
              </div>
              <div className="grid grid-cols-3 gap-x-5 gap-y-12 place-items-end">
                <div>{teams.NFL[index + 1] && teams.NFL[index + 1].abbrev}</div>
                <div>{teams.NFL[index + 1] && scores.NFL[index + 1]}</div>
              </div>
            </div>
          ) : (
            <div className="score">
              <div className="grid grid-cols-3 gap-x-5 gap-y-12 pb-1 place-items-end">
                <div>{teams.NFL[index].abbrev}</div> <div>{score}</div>
              </div>
              <div className="font-bold grid grid-cols-3 gap-x-5 gap-y-12 place-items-end">
                <div>{teams.NFL[index + 1] && teams.NFL[index + 1].abbrev}</div>
                <div>{teams.NFL[index + 1] && scores.NFL[index + 1]}</div>
                <div className = "winner-triangle"></div>
              </div>
            </div>
          )}
          {/* <div className="over-score">
            <div>Gamecast</div> <div>Buy Tickets</div>
          </div> */}
        </div>
      ))}
      </div>
  );
};
