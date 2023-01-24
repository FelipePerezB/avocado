import Database from "@src/database/db";
import { NextApiRequest, NextApiResponse } from "next";
import { TProductId } from "../../../models/products.model";

export default async function OneAvo(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const service = new Database();
  const id = req.query.id as TProductId;
  const data = await service.getById(id);
  if (data) {
    res.statusCode = 200;
    res.status(200).json({...data});
  }
}
