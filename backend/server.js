import app from "./src/app.js";

import { connectDB } from "./src/config/db.js";

await connectDB();

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
