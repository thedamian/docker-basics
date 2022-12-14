import express, { Request, Response } from "express"
import cors from "cors"

const app = express();
app.use(express.json())
app.use(cors())
const port = 8000;

app.get("/",(req: Request, res: Response) => {
    res.status(200).send("Express in docker is working...And now with logs")
})

app.listen(port,()=> {
    console.log("Started on localhost:",port)
})