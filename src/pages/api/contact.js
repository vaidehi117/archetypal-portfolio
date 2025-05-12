// Next.js API route to save contact form data to MongoDB

import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Set this in your .env.local file
const dbName = process.env.MONGODB_DB || 'portfolio';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    await db.collection('contacts').insertOne({ name, email, message, createdAt: new Date() });
    client.close();
    res.status(200).json({ message: 'Message saved' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving message', error: error.message });
  }
}
