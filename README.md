# TaskMaster - Modern Todo App

TaskMaster is a powerful, responsive, and feature-rich Todo application built with React and TypeScript. It provides a clean and intuitive interface for managing your daily tasks with features like task filtering, local storage persistence, and a modern UI.

![TaskMaster Screenshot](./screenshots/taskmaster-screenshot.png)

## 🌟 Features

- **Modern React with TypeScript**: Built with React 18 and TypeScript for type safety
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Task Management**: Add, edit, delete, and mark tasks as completed
- **Task Filtering**: Filter tasks by All, Active, or Completed status
- **Local Storage**: Your tasks persist between browser sessions
- **Clean UI/UX**: Modern, minimalist design with smooth animations
- **Keyboard Shortcuts**: Improve productivity with keyboard navigation

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/taskmaster.git
   cd taskmaster
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack

- **React**: UI library for building user interfaces
- **TypeScript**: For type safety and better developer experience
- **React Context API**: For state management
- **CSS3**: For styling with modern CSS features
- **LocalStorage API**: For data persistence
- **React Icons**: For beautiful and consistent icons

## 📂 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── TodoForm.tsx      # Form for adding new todos
│   ├── TodoItem.tsx      # Individual todo item component
│   └── TodoList.tsx      # List of todo items with filtering
├── context/              # Application state management
│   └── TodoContext.tsx   # Context for todo operations
├── types/                # TypeScript type definitions
│   └── index.ts          # Todo and context types
├── App.tsx               # Main application component
├── App.css               # Application styles
├── index.tsx             # Application entry point
└── index.css             # Global styles
```

## 🔄 Workflow

1. **Adding a Task**: Enter task text in the input field and press Enter or click the Add button
2. **Completing a Task**: Click the checkbox next to a task to mark it as completed
3. **Editing a Task**: Click the edit icon to modify a task's text
4. **Deleting a Task**: Click the delete icon to remove a task
5. **Filtering Tasks**: Use the filter buttons to view All, Active, or Completed tasks

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


