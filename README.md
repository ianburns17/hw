Task Manager

Description

A simple server-side rendered (SSR) Task Manager web application built using Express.js and EJS. Users can add, toggle (mark as complete/incomplete), delete individual tasks, and clear all tasks. It also includes search functionality to find tasks by title or description.

Features

Add new tasks with a title and description.

Mark tasks as completed or incomplete.

Delete individual tasks or clear all tasks.

Search tasks by title or description.

Server-side rendering using EJS.

Technologies Used

Node.js

Express.js

EJS (Embedded JavaScript Templates)

HTML/CSS (for basic styling)

Installation

Clone the repository:

git clone https://github.com/your-username/hw.git

Navigate to the project directory:

cd hw

Install dependencies:

npm install

Usage

Start the server:

npm start

Open a browser and go to:

http://localhost:3000

File Structure

project-folder/
│── views/                 # EJS templates
│   ├── index.ejs          # Main template
│── hs/                    # Static files (CSS, images, etc.)
│── server.js              # Main server file
│── package.json           # Project dependencies and scripts
│── README.md              # Project documentation

Endpoints

Method

Endpoint

Description

GET

/

Renders the main task list page

POST

/add-task

Adds a new task

POST

/toggle-task/:id

Toggles task completion status

POST

/delete-task/:id

Deletes a specific task

POST

/delete-all

Deletes all tasks
