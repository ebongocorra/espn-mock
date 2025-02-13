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
        <img src={photo} className = "article-image" />
        <p className="font-bold">{headlines.News[index]}</p>
      </div>
    </div>
  ));
};
