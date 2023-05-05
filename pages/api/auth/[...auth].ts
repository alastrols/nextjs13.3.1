import type { NextApiRequest, NextApiResponse } from "next";
import { corsMiddleware } from "@/pages/api/middleware";
import connection from "@/mysql";
import formidable from "formidable";
const bcrypt = require("bcrypt");
const { getToken, verifyToken } = require("@/jwtHandler");
import { setCookie, getCookies } from "cookies-next";
export const config = {
  api: {
    bodyParser: false,
  },
};

function handler(req: NextApiRequest, res: NextApiResponse) {
  const action = req.query["auth"] ?? [];
  if (req.method === "POST" && action[0] === "login") {
    auth(req, res);
  } else if (req.method === "GET" && action[0] === "profile") {
    profile(req, res);
  }
}

async function auth(req: NextApiRequest, res: NextApiResponse) {
  await corsMiddleware(req, res);
  try {
    const form = formidable();
    form.parse(req, async (err, fields, files) => {
      const { username, password } = fields;
      const [user] = await connection.query(
        `SELECT user_id, username, password, fullname, email, level 
        FROM user 
        WHERE username = '${username}' AND status = 'active' AND level = 'Administrator' `
      );
      var passwordIsValid = bcrypt.compareSync(password, user[0].password);
      if (passwordIsValid) {
        var token = getToken({
          user_id: user[0].user_id,
          fullname: user[0].fullname,
          email: user[0].email,
        });
        setCookie(`${process.env.ACCESS_TOKEN_KEY}`, `Bearer ${token}`, {
          req,
          res,
          maxAge: 60 * 60 * 4,
        });
        res.json({
          status: "success",
          data: {
            token: token,
            user_id: user[0].user_id,
            fullname: user[0].fullname,
            email: user[0].email,
          },
        });
      } else {
        res.json({
          status: "error",
        });
      }
    });
  } catch {
    res.json({ status: "error" });
  }
}

async function profile(req: NextApiRequest, res: NextApiResponse) {
  try {
    const accessToken = getCookies({ req, res })[
      `${process.env.ACCESS_TOKEN_KEY}`
    ];
    const decoded = await verifyToken(accessToken);
    if (decoded == "error") {
      res.json({ status: "error" });
    } else {
      res.json({ status: "success", data: decoded });
    }
  } catch {
    res.json({ status: "error" });
  }
}
export default handler;
