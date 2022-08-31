import { NextApiRequest, NextApiResponse } from "next";
import { readFile } from "fs/promises";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const file = await readFile(`${process.cwd()}/public/uploads/${req.query.file}`);
  if(file.toString() === "undefined") {
    res.status(404).json({ error: "File not found" });
  }
  if(!file) {
    res.status(404).json({ error: "File not found" });
  }
  const csvFilePath = `${process.cwd()}/public/uploads/${req.query.file}`;
  const csv = await readFile(csvFilePath, "utf8");
  const csvLines = csv.split("\n");
  const csvHeaders = csvLines[0].split(",");
  const csvRows = csvLines.slice(1);
  const csvData = csvRows.map((row) => {
    const rowData = row.split(",");
    return rowData.reduce((acc, curr, index) => {
      if(csvHeaders[index] === "undefined") {
          return acc[csvHeaders[index]] = curr;
      }
      acc[csvHeaders[index]] = curr;
      return acc;
    });
  }).filter((row:any) => row.name !== "");
  res.status(200).json(csvData);
}
export default handler;