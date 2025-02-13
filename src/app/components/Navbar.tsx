import "../styles/Navbar.css";
import scores from "../data/scores.json";
import teams from "../data/teams.json";

export const Navbar = () => {
  return (
    <div className="nav">
      <ul>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <div className="fixed-head">
          <div className="first-half">
            <li className="text-white bg-red-600">
              <a href="../">
                <img
                  src={
                    "https://a.espncdn.com/redesign/assets/img/logos/logo-espn-82x20@2x.png"
                  }
                  className = "espn-logo-1"
                />
              </a>
            </li>
            <li>
              <div className="subnav">
                <a href="default.asp">NFL</a>
                <div className="outer-triangle">
                  <div className="subnav-triangle"></div>
                </div>
                <div className="subnav-content1">
                  <div className="grid grid-cols-1 grid-gap-5">
                    <a>Home</a>
                    <a href={"/score/nfl"}>Scores</a>
                    <a>Schedule</a>
                    <a href={"/standings/nfl"}>Standings</a>
                    <a>Stats</a>
                    <a>Teams</a>
                    <a>Odds</a>
                  </div>
                  <div className="team-sub">
                    {teams.NFL.map((team) => (
                      <a className="text-black" key={"team"}>
                        {team.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="subnav">
                <a href="news.asp">MLB</a>
                <div className="outer-triangle">
                  <div className="subnav-triangle"></div>
                </div>
                <div className="subnav-content1">
                  <div className="grid grid-cols-1">
                    <a>Home</a>
                    <a>Scores</a>
                    <a>Schedule</a>
                    <a>Standings</a>
                    <a>Stats</a>
                    <a>Teams</a>
                    <a>Odds</a>
                  </div>
                  <div className="team-sub">
                    {teams.MLB.map((team) => (
                      <a className="text-black">{team}</a>
                    ))}
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="subnav">
                <a href="contact.asp">NBA</a>
                <div className="outer-triangle">
                  <div className="subnav-triangle"></div>
                </div>
                <div className="subnav-content">
                  <a>Home</a>
                  <a>Scores</a>
                  <a>Schedule</a>
                  <a>Standings</a>
                  <a>Stats</a>
                  <a>Teams</a>
                  <a>Odds</a>
                </div>
              </div>
            </li>
            <li>
              <div className="subnav">
                <a href="about.asp">NCAA</a>
                <div className="outer-triangle">
                  <div className="subnav-triangle"></div>
                </div>
                <div className="subnav-content">
                  <a>Home</a>
                  <a>Scores</a>
                  <a>Schedule</a>
                  <a>Standings</a>
                  <a>Stats</a>
                  <a>Teams</a>
                  <a>Odds</a>
                </div>
              </div>
            </li>
            <li>
              <div className="subnav">
                <a href="about.asp">More Sports</a>
                <div className="outer-triangle">
                  <div className="subnav-triangle"></div>
                </div>
                <div className="subnav-content">
                  <a>Soccer</a>
                  <a>Cricket</a>
                  <a>Horse Racing</a>
                  <a>NBA G League</a>
                  <a>NCAAW</a>
                  <a>PLL</a>
                  <a>Recruiting BB</a>
                  <a>Sports Betting</a>
                  <a>X Games</a>
                  <a>MLB</a>
                  <a>CFL</a>
                  <a>F1</a>
                  <a>Little League World Series</a>
                  <a>NBA Summer League</a>
                  <a>NWSL</a>
                  <a>Professional Wrestling</a>
                  <a>Recruiting FB</a>
                  <a>Tennis</a>
                  <a>UFL</a>
                  <a>MMA</a>
                  <a>College Sports</a>
                  <a>Golf</a>
                  <a>NASCAR</a>
                  <a>NCAAM</a>
                  <a>Olympics</a>
                  <a>Racing</a>
                  <a>Rugby</a>
                  <a>WNBA</a>
                </div>
              </div>
            </li>
          </div>
          <div className="second-half">
            <li>
              <div className="subnav">
                <a>ESPN+</a>
                <div className="outer-triangle">
                  <div className="subnav-triangle"></div>
                </div>
                <div className="subnav-content">
                  <h1>Best of ESPN+</h1>
                  <a>What is ESPN Bet?</a>
                </div>
              </div>
            </li>
            <li>
              <div className="subnav">
                <a>ESPN BET</a>
                <div className="outer-triangle">
                  <div className="subnav-triangle"></div>
                </div>
                <div className="subnav-content">
                  <a>ESPN Bet</a>
                  <a>What is ESPN Bet?</a>
                </div>
              </div>
            </li>
            <li>
              <div className="subnav">
                <a>Watch</a>
                <div className="outer-triangle">
                  <div className="subnav-triangle"></div>
                </div>
                <div className="subnav-content">
                  <a>ESPN Bet</a>
                  <a>What is ESPN Bet?</a>
                </div>
              </div>
            </li>
            <li>
              <div className="subnav">
                <a>Fantasy</a>
                <div className="outer-triangle">
                  <div className="subnav-triangle"></div>
                </div>
                <div className="subnav-content">
                  <a>ESPN Bet</a>
                  <a>What is ESPN Bet?</a>
                </div>
              </div>
            </li>
            <li>
              <div className="subnav">
                <a>
                  <i className="material-icons w-10 text-white">search</i>
                </a>
              </div>
            </li>
          </div>
        </div>
      </ul>
    </div>
  );
};
