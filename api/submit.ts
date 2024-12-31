// import { NextApiRequest, NextApiResponse } from "next";
// import { MongoClient } from "mongodb";

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === "POST") {
//     const { email, message } = req.body;

//     const client = await MongoClient.connect(process.env.MONGO_URI!);
//     const db = client.db("painting-services");

//     await db.collection("quotations").insertOne({ email, message });
//     client.close();

//     res.status(200).json({ message: "Success" });
//   } else {
//     res.status(405).json({ message: "Method Not Allowed" });
//   }
// };

// export default handler;