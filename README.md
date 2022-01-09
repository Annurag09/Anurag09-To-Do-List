# Anurag09-To-Do-List
The challenge is to build your own clone of a Trello board (Task Tracker Kanban). If you aren't familiar with Trello, this YouTube video gives a simple explanation:
https://www.youtube.com/watch?v=AyfupeWS0yY&ab_channel=Trello

# Installation

You can run the app locally by running the following commands:

    npm install (to install dependencies)
    npm run start (to start a devserver at http://localhost:3000/)

# GitHub Pages
https://annurag09.github.io/Anurag09-To-Do-List/

# Preview
![image](https://user-images.githubusercontent.com/46589691/148697085-bfc98b43-621a-49d1-b0a4-af8260ffa990.png)


# Demo
Lived demo available here: 

# Features
- Auto sizing textareas.
- Autosave and load from browser storage.
- A user should be able to add and label columns.
- A user should be able to add and edit cards.
- A user should be able to move cards between columns (Drag and drop lists and cards).

# To Do (Improvements)
- Add Login/Logout.
- Add Search for tasks in board.
- CRUD operations on Multiple Boards & tasks within them. 
- Add Activity Log Functionality for tasks/boards operations.
- Functionality to assign tags to tasks like Important, Completed, In progess, Closed, Open, Planned etc.
- Personalize cards with background images.

# Implementation

App state is represented by single object boardData. Each state change to boardData will be emitted by rxjs Subject boardDataSubject. The Board react component uses hooks setState and useEffect to subscribe to boardData changes which it then passes to child react components through props. App state is persisted in browser storage using library localForage.

# Libraries
react, react-beautiful-dnd, styled-components, localforage, rxjs
