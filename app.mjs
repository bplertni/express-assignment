import express from "express"

const app = express();
const port = 4000;

app.get("/profiles/john", (req, res) => {
    return res.json({"data":{
        "name":"John",
        "age": 20
    }});
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});