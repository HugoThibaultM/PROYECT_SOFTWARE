// components/MatchList.tsx
import { FunctionComponent } from "preact";
import MatchCard from "./MatchCard.tsx";

interface Match {
  id: number;
  date: string;
  status: string;
  home: string;
  away: string;
  home_score: number | null;
  away_score: number | null;
}

const MatchList: FunctionComponent<{ matches: Match[] }> = ({ matches }) => {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {matches.length > 0 ? (
        matches.map((match) => <MatchCard key={match.id} match={match} />)
      ) : (
        <p>No hay partidos disponibles.</p>
      )}
    </div>
  );
};

export default MatchList;
