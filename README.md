# Anurag09-To-Do-List
The challenge is to build your own clone of a Trello board (Task Tracker Kanban). If you aren't familiar with Trello, this YouTube video gives a simple explanation:
https://www.youtube.com/watch?v=AyfupeWS0yY&ab_channel=Trello


#Features
- Auto sizing textareas
- Autosave and load from browser storage
- A user should be able to add and label columns.
- A user should be able to add and edit cards.
- A user should be able to move cards between columns (Drag and drop lists and cards)

#Implementation
App state is represented by single object boardData. Each state change to boardData will be emitted by rxjs Subject boardDataSubject. The Board react component uses hooks setState and useEffect to subscribe to boardData changes which it then passes to child react components through props. App state is persisted in browser storage using library localForage.

#Libraries
react, react-beautiful-dnd, styled-components, localforage, rxjs
