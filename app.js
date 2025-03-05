import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;


let tasks = [];
let taskId = 1;

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("hs"));


app.get("/", (req, res) => {
    let filteredTasks = tasks;
    const { search, filter } = req.query;

    if (search) {
        filteredTasks = filteredTasks.filter(task => 
            task.title.toLowerCase().includes(search.toLowerCase()) || 
            task.description.toLowerCase().includes(search.toLowerCase())
        );
    }
    res.render("index", { tasks: filteredTasks, searchQuery: search });
});

app.post("/add-task", (req, res) => {
    const { title, description, priority } = req.body;
    if (!title) {
        return res.status(400).send("Task title is required");
    }
    tasks.push({ id: taskId++, title, description, completed: false});
    res.redirect("/");
});

app.post("/toggle-task/:id", (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    if (!task) {
        return res.status(404).send("Task not found");
    }
    task.completed = !task.completed;
    res.redirect("/");
});

app.post("/delete-task/:id", (req, res) => {
    tasks = tasks.filter(t => t.id != req.params.id);
    res.redirect("/");
});
app.post("/delete-all",(re,res)=>{
tasks = [];
taskId = 1;
res.redirect("/");
}
);
// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
