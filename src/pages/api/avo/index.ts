import Database from "@src/database/db";
import { IncomingMessage, ServerResponse } from "http";

export default async function AllAvos(
  req: IncomingMessage,
  res: ServerResponse
) {
  const service = new Database();
  const data = await service.getAll();
  const lenght = data.length;
  res.statusCode = 200;
  res.end(JSON.stringify({ length: lenght, data }));
}
