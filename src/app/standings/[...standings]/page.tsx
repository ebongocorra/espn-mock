import { StandingsGrid } from "@/app/components/StandingsGrid"
import "../../styles/Standings.css"
import { Navbar } from "@/app/components/Navbar"

export default function StandingsPage () {
    return(<div className = "bg-slate-200">
        <Navbar/>
       <StandingsGrid/>
       </div>
    )
}