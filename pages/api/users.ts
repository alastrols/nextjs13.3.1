import type { NextApiRequest, NextApiResponse } from "next";
import { corsMiddleware } from "@/pages/api/middleware";
import connection from "@/mysql";
import formidable from "formidable";
export const config = {
  api: {
    bodyParser: false,
  },
};

interface User {
  username?: string;
  password?: string;
}
function handler(req: NextApiRequest, res: NextApiResponse) {
  const action = req.query["users"] ?? [];
  console.log(action);
  if (req.method === "GET") {
  } else if (req.method === "POST" && action[0] === "users") {
    users(req, res);
  }
}

async function users(req: NextApiRequest, res: NextApiResponse) {
  await corsMiddleware(req, res);
  try {
    const form = formidable();
    form.parse(req, async (err, fields, files) => {
      // const [response] = await connection.query("SELECT * FROM user");
      const { username, password } = fields;
      res.json({ status: "success", username: username, password: password });
    });
  } catch {
    res.json({ status: "error" });
  }
}

export default handler;
