import scores from "../data/scores.json";
import teams from "../data/teams.json";
import "../styles/Score.css";
export const Scores = () => {
  
  return (
    <div>
      <ul className="score-display">
        {scores.NFL.map((score: number, index: number) => {
          const team = teams.NFL[index];
          console.log("I", index, "s", score);
          return score > scores.NFL[index + 1] ? (
            <li key={score} className="grid grid-rows-2 m-5 bg-white rounded">
              <div className="font-bold">
                {team.name} {score}
              </div>
              {teams.NFL[index + 1].name} {scores.NFL[index + 1]}
            </li>
          ) : (
            <li key={"score"} className="grid grid-rows-2 m-5 bg-white rounded">
              <div className="font-bold">
                {teams.NFL[index + 1].name} {scores.NFL[index + 1]}
              </div>
              {team.name} {score}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
