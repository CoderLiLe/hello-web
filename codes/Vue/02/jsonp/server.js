const express = require("express");
const path = require("path");
const app = express();
// 将指定的目录设置为静态资源
app.use(express.static(path.resolve(__dirname,"./js")));
app.get("/info",(req,res)=>{
	res.json({
		ok:1,
		msg:"get->info"
	})
})
app.get("/info2",(req,res)=>{
	const {callback="fn"} = req.query;
	res.send(callback+"({ok:1,msg:'get->info'});")
})

app.listen(80,()=>{
	console.log("success");
})