import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { Articles } from "./components/Articles";
import { TopHeadlines } from "./components/TopHeadlines";
import "../app/styles/Articles.css";
import { SubModules } from "./components/SubModules";
import { ScoreHead } from "./components/ScoreHead";
export default function Home() {
  return (
    <div className = "home">
      <ScoreHead/>
      <Navbar />
      <div className="article-list">
        <SubModules />
        <div className="articles-grid">
          <Articles />
        </div>
        <TopHeadlines />
      </div>
    </div>
  );
}
