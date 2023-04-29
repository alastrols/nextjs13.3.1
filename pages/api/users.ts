import type { NextApiRequest, NextApiResponse } from "next";
import { corsMiddleware } from "@/pages/api/middleware";
import connection from "@/mysql";

async function users(req: NextApiRequest, res: NextApiResponse) {
  await corsMiddleware(req, res);
  try {
    const [response] = await connection.query("SELECT * FROM user");
    res.json({ status: "success", data: response });
  } catch {
    res.json({ status: "error" });
  }
}

export default users;
