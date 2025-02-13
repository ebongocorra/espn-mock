import "../styles/Articles.css";
import data from "../data/submod.json";

export const SubModules = () => {
  console.log("Sub", data);
  //order: ESPN+, QuickLinks, Fantasy, ESPNSites, ESPNApps,\

  return (
    <div className="sub-modules-grid">
      <div className="modules_block">
        <img src = {"https://a.espncdn.com/redesign/assets/img/logos/espnplus/ESPN+.svg"} className = "plus-logo"/>
        <hr />
        <div className="pt-2.5 pl-2.5">
          <button className="subscribe">Subscribe Now</button>
        </div>
        {data.data.ESPNPlus.map((app) => (
          <div>
            <div className = "icon-image">
              <img
                src={
                  "https://a1.espncdn.com/combiner/i?img=%2Fredesign%2Fassets%2Fimg%2Ficons%2FESPN%2Dicon%2Dbasketball.png&w=80&h=80&scale=crop&cquality=40&location=origin"
                }
                className = "icon-inner"
              />
            </div>
            <div className="pb-2.5 pt-2.5 pl-2.5 inline-block">{app}</div>
            <hr />
          </div>
        ))}
      </div>
      <div className="modules_block mt-2">
        <h1 className="inline-block font-bold pt-2.5 pb-2.5 pl-2.5">
          Quick Links
        </h1>
        <hr />
        {data.data.QuickLinks.map((app) => (
          <div>
            <div className = "icon-image">
              <img
                src={
                  "https://a1.espncdn.com/combiner/i?img=%2Fredesign%2Fassets%2Fimg%2Ficons%2FESPN%2Dicon%2Dbasketball.png&w=80&h=80&scale=crop&cquality=40&location=origin"
                }
                className = "icon-inner"
              />
            </div>
            <div className="pb-2.5 pt-2.5 pl-2.5 inline-block">{app}</div>
            <hr />
          </div>
        ))}
      </div>
      <div className="modules_block mt-2">
        <h1 className="inline-block font-bold pt-2.5 pb-2.5 pl-2.5">Fantasy</h1>
        <hr />
        {data.data.Fantasy.map((app) => (
          <div className = "block">
            <div className = "icon-image">
              <img
                src={
                  "https://a1.espncdn.com/combiner/i?img=%2Fredesign%2Fassets%2Fimg%2Ficons%2FESPN%2Dicon%2Dbasketball.png&w=80&h=80&scale=crop&cquality=40&location=origin"
                }
                className = "icon-inner"
              />
            </div>
            <div className="pb-2.5 pt-2.5 pl-2.5 inline-block">{app}</div>
            <hr />
          </div>
        ))}
      </div>
      <div className="modules_block mt-2">
        <h1 className="inline-block font-bold pt-2.5 pb-2.5 pl-2.5">
          ESPN Sites
        </h1>
        <hr />
        {data.data.ESPNSites.map((app) => (
          <div>
            <div className = "icon-image">
              <img
                src={
                  "https://a1.espncdn.com/combiner/i?img=%2Fredesign%2Fassets%2Fimg%2Ficons%2FESPN%2Dicon%2Dbasketball.png&w=80&h=80&scale=crop&cquality=40&location=origin"
                }
                className = "icon-inner"
              />
            </div>
            <div className="pb-2.5 pt-2.5 pl-2.5 inline-block">{app}</div>
            <hr />
          </div>
        ))}
      </div>
      <div className="modules_block mt-2">
        <h1 className="inline-block font-bold pt-2.5 pb-2.5 pl-2.5">
          ESPN App
        </h1>
        <hr />
        {data.data.ESPNApps.map((app) => (
          <div>
            <div className = "icon-image">
              <img
                src={
                  "https://a1.espncdn.com/combiner/i?img=%2Fredesign%2Fassets%2Fimg%2Ficons%2FESPN%2Dicon%2Dbasketball.png&w=80&h=80&scale=crop&cquality=40&location=origin"
                }
                className = "icon-inner"
              />
            </div>
            <div className="pb-2.5 pt-2.5 ml-2.5 pl-2.5 inline-block">
              {app}
            </div>
            <hr />
          </div>
        ))}
      </div>
      <div className="modules_block mt-2">
        <h1 className="inline-block font-bold pt-2.5 pb-2.5 pl-2.5">
          Follow ESPN
        </h1>
        <hr />
        {data.data.Follow.map((app) => (
          <div>
            <div className = "icon-image">
              <img
                src={
                  "https://a1.espncdn.com/combiner/i?img=%2Fredesign%2Fassets%2Fimg%2Ficons%2FESPN%2Dicon%2Dbasketball.png&w=80&h=80&scale=crop&cquality=40&location=origin"
                }
                className = "icon-inner"
              />
            </div>
            <div className="pb-2.5 pt-2.5 pl-2.5 inline-block">{app}</div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};
