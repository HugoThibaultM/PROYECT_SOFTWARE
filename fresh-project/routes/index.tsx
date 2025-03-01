// routes/index.tsx
import { Handlers, PageProps } from "$fresh/server.ts";
import MatchFetcher from "../islands/MatchFetcher.tsx";

interface Match {
  id: number;
  date: string;
  status: string;
  home: string;
  away: string;
  home_score: number | null;
  away_score: number | null;
}

interface Data {
  matches: Match[];
}

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    try {
      const res = await fetch("http://localhost:8000/api/fixtures");
      if (!res.ok) throw new Error("Error al obtener los datos");

      const matches: Match[] = await res.json();
      return ctx.render({ matches });
    } catch (error) {
      console.error("Error fetching matches:", error);
      return ctx.render({ matches: [] });
    }
  },
};

export default function Home({ data }: PageProps<Data>) {
  return (
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">📅 Partidos de la Temporada</h1>
      <MatchFetcher initialMatches={data.matches} />
    </div>
  );
}
