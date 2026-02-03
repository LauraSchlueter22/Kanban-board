# Kanban Board

A fully functional Kanban board built from scratch with React and TypeScript.

## Features

- **Create Tasks** — Add new tasks with a title and description. New tasks automatically appear in the To Do column.
- **Delete Tasks** — Remove tasks from the board with the delete button on each card.
- **Drag and Drop** — Move tasks between columns by dragging and dropping cards.

## Columns

| Column      | Description                         |
| ----------- | ----------------------------------- |
| To Do       | Tasks that haven't been started yet |
| In Progress | Tasks currently being worked on     |
| Done        | Tasks that have been completed      |

## Tech Stack

- React
- TypeScript
- CSS

## Getting Started

Clone the repo:

```bash
git clone https://github.com/LauraSchlueter22/Kanban-board.git
```

Install dependencies:

```bash
npm install
```

Run the app:

```bash
npm start
```

## Project Structure

```
src/
  Task.tsx        — Type definitions and sample task data
  TaskCard.tsx    — Individual task card component with drag and delete
  Column.tsx      — Column container that holds task cards
  App.tsx         — Main app, owns state and all handlers
```

## Coming Soon

- Styling and UI polish
- Persistent storage
- Edit tasks
- Task due dates
