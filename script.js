const express = require("express");
const app = express();
const path=require("path");
app.use(express.urlencoded({extended:true}));
app.use(express.json())
let todo = require("./todo/js/script");
app.use(express.static(path.join(__dirname,"static")))

app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"index.html"));
})
app.get("/gettodo",async (req,res)=>{
  let data  = await todo.gettodo();
  res.send(data);
})
app.post("/addtodo",async(req,res)=>{
  let {taskitem} = req.body;
  console.log(taskitem);
  let mssg=await todo.addtodo(taskitem);
  res.redirect("/");
})
app.post("/deletetodo", async (req, res) => {
  try {
    const { index } = req.body;

    if (index === undefined || isNaN(index)) {
      return res.status(400).json({ error: "Invalid index parameter" });
    }

    const result = await todo.deleteTodo(index);

    res.json({ message: result });
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.put("/edittodo", async (req, res) => {
  try {
    const { index, newValue } = req.body;

    if (index === undefined || isNaN(index) || newValue === undefined) {
      return res.status(400).json({ error: "Invalid index or new value parameter" });
    }

    const result = await todo.editTodo(index, newValue);

    res.json({ message: result });
  } catch (error) {
    console.error("Error editing todo:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.listen(3333,()=>{
    console.log("server started");
})
