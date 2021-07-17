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
  if (req.method === "POST") {
    const trade = await fauna.query<Trade>(
      q.Create(q.Collection("trades"), {
        data: {
          status: "Troca Justa",
          bags: [
            {
              sum_experience: 246,
              pokemon: [
                { name: "Caterpie", base_experience: 39 },
                { name: "Caterpie", base_experience: 39 },
                { name: "Caterpie", base_experience: 39 },
              ],
            },
            {
              sum_experience: 246,
              pokemon: [
                { name: "Caterpie", base_experience: 39 },
                { name: "Caterpie", base_experience: 39 },
                { name: "Caterpie", base_experience: 39 },
              ],
            },
          ],
        },
      })
    );

    return res.status(200).json({ troca: trade.data });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
};
