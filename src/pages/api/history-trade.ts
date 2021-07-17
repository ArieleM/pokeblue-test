import { NextApiRequest, NextApiResponse } from "next";
import { query as q } from "faunadb";
import { fauna } from "../../service/fauna";

type Trade = {
  ref: {
    id: string;
  };
  ts: string;
  data: {
    status: string;
    bags: [
      {
        sum_experience: number;
        pokemon: [{ name: string; base_experience: number }];
      }
    ];
  };
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const trades = await fauna.query<Trade>(
      q.Map(
        q.Paginate(q.Match(q.Index("all_trades"))),
        q.Lambda("X", q.Get(q.Var("X")))
      )
    );

    res.status(200).json(trades);
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method not allowed");
  }
};
