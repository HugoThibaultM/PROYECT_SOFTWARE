// components/MatchCard.tsx
import { FunctionComponent } from "preact";

interface MatchProps {
  id: number;
  date: string;
  status: string;
  home: string;
  away: string;
  home_score: number | null;
  away_score: number | null;
}

const MatchCard: FunctionComponent<{ match: MatchProps }> = ({ match }) => {
  return (
    <div class="border rounded-lg p-4 shadow-md bg-white">
      <h3 class="text-lg font-bold">{match.home} vs {match.away}</h3>
      <p class="text-gray-600">{new Date(match.date).toLocaleDateString()}</p>
      <p class="text-sm text-gray-500">{match.status}</p>
      <p class="text-xl font-semibold">
        {match.home_score ?? "?"} - {match.away_score ?? "?"}
      </p>
    </div>
  );
};

export default MatchCard;
