let fs = require("fs");
let path= require("path");
let filepath=path.join(__dirname,"..","data","todo.js")
class todo{
   static gettodo(){
    return new Promise((resolve,reject)=>{
       fs.readFile(
        filepath,
        {
            encoding:"utf-8"
        },
        (err,data)=>{
            if(err) return reject(err.message);
            const tasks = JSON.parse(data);

            const taskValues = tasks.map(task => task.value);
    
            resolve(taskValues);
        }
   
       ) 
    })
   }

   static addtodo(value) {
    return new Promise((resolve, reject) => {
      fs.readFile(
        filepath,
        {
          encoding: "utf-8",
        },
        (err, data) => {
          if (err) return reject(err.message);
          if (data.length == 0) {
            data = [];
          } else {
            data = JSON.parse(data);
          }

          const newIndex = data.length;
          const newItem = { index:newIndex,value }; 

          data.push(newItem);

          fs.writeFile(
            filepath,
            JSON.stringify(data),
            (err) => {
              if (err) return reject(err.message);
              resolve("Task added");
            }
          );
        }
      );
    });
  }
  static deleteTodo(index) {
    return new Promise((resolve, reject) => {
      fs.readFile(
        filepath,
        {
          encoding: "utf-8",
        },
        (err, data) => {
          if (err) return reject(err.message);
          if (data.length === 0) {
            return reject("No tasks to delete");
          }
  
          data = JSON.parse(data);
  
          if (index < 0 || index >= data.length) {
            return reject("Invalid index");
          }
  
          const deletedTask = data.splice(index, 1);
  
          data = data.map((task, i) => {
            return { index: i,value: task.value };
          });
  
          fs.writeFile(
            filepath,
            JSON.stringify(data),
            (err) => {
              if (err) return reject(err.message);
              resolve(`Task deleted: ${deletedTask}`);
            }
          );
        }
      );
    });
  }
  static editTodo(index, newValue) {
    return new Promise((resolve, reject) => {
      fs.readFile(
        filepath,
        {
          encoding: "utf-8",
        },
        (err, data) => {
          if (err) return reject(err.message);
          if (data.length === 0) {
            return reject("No tasks to edit");
          }
  
          data = JSON.parse(data);
  
          if (index < 0 || index >= data.length) {
            return reject("Invalid index");
          }
  
          data[index].value = newValue;
  
          fs.writeFile(
            filepath,
            JSON.stringify(data),
            (err) => {
              if (err) return reject(err.message);
              resolve(`Task edited: ${newValue}`);
            }
          );
        }
      );
    });
  }
}

module.exports=todo;
