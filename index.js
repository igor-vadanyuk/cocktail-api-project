import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.post("/submit", async (req, res) => {

    try {
        const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        res.render("index.ejs", { recipe: response.data.drinks[0] });
      } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: error.message,
        });
      }

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})