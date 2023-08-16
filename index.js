import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;
const arr=[];
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render('index.ejs');
});

app.post("/add",(req,res)=>{
    const newst =req.body.data;
    arr.push(newst);
    console.log(arr);
    // const newarr = JSON.stringify(arr);
    res.render('index.ejs',{datas:arr});
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
  