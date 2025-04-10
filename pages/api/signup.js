import path from "path";
import Database from "better-sqlite3";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const dbPath = path.join(process.cwd(), "database", "users.db");
  const db = new Database(dbPath);

  try {
    const check = db.prepare("SELECT * FROM users WHERE email = ?").get(email);
    if (check) {
      return res.status(409).json({ message: "User already exists" });
    }

    db.prepare("INSERT INTO users (email, password) VALUES (?, ?)").run(email, password);

    return res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
