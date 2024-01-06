let express =require("express");
const path=require("path")
const port= 3000;


let app = express();


app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/",function(req,res){
    const ruta= path.join(__dirname,("/views/home.html"));
    res.sendFile(ruta)
})

app.listen(port,function(){
    console.log("server Prendido")
}
);