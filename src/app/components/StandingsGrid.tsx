import teams from "../data/teams.json";
import records from "../data/records.json";
import "../styles/Standings.css";

export const StandingsGrid = () => {
  const calcWinningPercentage = (wins: number, losses: number) => {
    return (wins / (wins + losses)).toFixed(3);
  };
  return (
    <div className = "outer-table">
      <h1>NFL Standings</h1>
      <table className="standings">
        <thead>
          <tr>
            <th className = "team-1">{"Division"}</th>
            <th className = "pl-10  underline hover:text-blue-700">{"W"}</th>
            <th className = "underline hover:text-blue-700">{"L"}</th>
            <th className = "underline hover:text-blue-700">{"PCT"}</th>
          </tr>
        </thead>
        <tbody>
          {teams.NFL.map((team: any) => (
            <tr className="team">
              <th className = "team-1">{team.name}</th> <th className="record-wins">{team.wins}</th>
              <th className="record">{team.losses}</th>
              <th>{calcWinningPercentage(team.wins, team.losses)}</th>
            </tr>
          ))}
          <hr/>
        </tbody>
      </table>
    </div>
  );
};
