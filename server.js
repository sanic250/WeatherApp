import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/api/weather", async (req, res) => {
  try {
    const { location } = req.query;
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${location}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
