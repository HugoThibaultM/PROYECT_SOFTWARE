// islands/MatchFetcher.tsx
import { useState } from "preact/hooks";
import MatchList from "../components/MatchList.tsx";

interface Match {
  id: number;
  date: string;
  status: string;
  home: string;
  away: string;
  home_score: number | null;
  away_score: number | null;
}

export default function MatchFetcher({ initialMatches }: { initialMatches: Match[] }) {
  const [matches, setMatches] = useState(initialMatches);
  const [loading, setLoading] = useState(false);

  const fetchMatches = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/fixtures");
      if (!res.ok) throw new Error("Error al obtener los datos");
      const data: Match[] = await res.json();
      setMatches(data);
    } catch (error) {
      console.error("Error al obtener partidos:", error);
    }
    setLoading(false);
  };

  return (
    <div>
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={fetchMatches}
        disabled={loading}
      >
        {loading ? "Cargando..." : "🔄 Actualizar Partidos"}
      </button>
      <MatchList matches={matches} />
    </div>
  );
}
