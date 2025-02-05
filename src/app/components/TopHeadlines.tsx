import headlines from "../data/headlines.json";
import "../styles/Articles.css";
export const TopHeadlines = () => {
  return (
    <div className="headlines_block">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <div className="block pl-2.5">
        <i className="inline-block material-icons w-10">menu-hamburger</i>
        <h1 className="inline-block font-bold pb-5">Top Headlines</h1>
      </div>
      <hr />
      {headlines.News.map((headline) => (
        <div>
          <div className="headline pl-2.5">{headline}</div>
          <hr/>
        </div>
      ))}
    </div>
  );
};
