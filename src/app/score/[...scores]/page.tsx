"use client";
import { useParams, useRouter } from "next/navigation";
import scores from "../../data/scores.json";
import teams from "../../data/teams.json";
import { Navbar } from "@/app/components/Navbar";
import { Articles } from "@/app/components/Articles";
import { Scores } from "@/app/components/Scores";

export default function ScorePage() {
  const router = useRouter();
  const path = useParams();
  if (path.scores === undefined) {
    return;
  }
  const sport = path.scores[0]?.toUpperCase();

  return (
    <div>
      <div >
        <Navbar />
      </div>
      <Scores />
    </div>
  );
}
