import "../styles/Articles.css";
import data from "../data/submod.json";

export const SubModules = () => {
  console.log("Sub", data);
  //order: ESPN+, QuickLinks, Fantasy, ESPNSites, ESPNApps,\

  return (
    <div className="sub-modules-grid">
      <div className="modules_block">
        <h1 className="inline-block font-bold pt-2.5 pb-2.5 pl-2.5">ESPN+</h1>
        <hr />
        <div className="pt-2.5 pl-2.5">
          <button className="subscribe">Subscribe Now</button>
        </div>
        {data.data.ESPNPlus.map((app) => (
          <>
            <div className="pb-2.5 pt-2.5 pl-2.5">{app}</div>
            <hr />
          </>
        ))}
      </div>
      <div className="modules_block mt-2">
        <h1 className="inline-block font-bold pt-2.5 pb-2.5 pl-2.5">Quick Links</h1>
        <hr />
        {data.data.QuickLinks.map((app) => (
          <>
            <div className="pb-2.5 pt-2.5 pl-2.5">{app}</div>
            <hr />
          </>
        ))}
      </div>
      <div className="modules_block mt-2">
        <h1 className="inline-block font-bold pt-2.5 pb-2.5 pl-2.5">Fantasy</h1>
        <hr />
        {data.data.Fantasy.map((app) => (
          <>
            <div className="pb-2.5 pt-2.5 pl-2.5">{app}</div>
            <hr />
          </>
        ))}
      </div>
      <div className="modules_block mt-2">
        <h1 className="inline-block font-bold pt-2.5 pb-2.5 pl-2.5">ESPN Sites</h1>
        <hr />
        {data.data.ESPNSites.map((app) => (
          <>
            <div className="pb-2.5 pt-2.5 pl-2.5">{app}</div>
            <hr />
          </>
        ))}
      </div>
      <div className="modules_block mt-2">
        <h1 className="inline-block font-bold pt-2.5 pb-2.5 pl-2.5">ESPN App</h1>
        <hr />
        {data.data.ESPNApps.map((app) => (
          <>
            <div className="pb-2.5 pt-2.5 ml-2.5 pl-2.5">{app}</div>
            <hr />
          </>
        ))}
      </div>
      <div className="modules_block mt-2">
        <h1 className="inline-block font-bold pt-2.5 pb-2.5 pl-2.5">Follow ESPN</h1>
        <hr />
        {data.data.Follow.map((app) => (
          <>
            <div className="pb-2.5 pt-2.5 pl-2.5">{app}</div>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
};
