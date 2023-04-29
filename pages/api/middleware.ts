import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
export function corsMiddleware(req: NextApiRequest, res: NextApiResponse) {
  return new Promise(async (resolve, reject) => {
    await NextCors(req, res, {
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      origin: "*",
      optionsSuccessStatus: 200,
    });
    resolve("success");
  });
}
