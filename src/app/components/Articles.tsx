import "../styles/Articles.css";
import scores from "../data/scores.json";
import headlines from "../data/headlines.json";

export const Articles = () => {
  console.log("S", scores);
  const photos = [
    "https://picsum.photos/200/200",
    "https://picsum.photos/200/200",
    "https://picsum.photos/200/200",
    "https://picsum.photos/200/200",
    "https://picsum.photos/200/200",
    "https://picsum.photos/200/200",
    "https://picsum.photos/200/200",
  ];
  return photos.map((photo, index) => (
    <div className = "pb-5">
      <div className="article">
      {/* <div className = "font-bold text-sm">NFL Playoffs</div> */}
        <img src={photo} />
        <p className="font-bold">{headlines.News[index]}</p>
      </div>
    </div>
  ));
};
