# Banzan Todo

## Overview

THIS WAS GENEREATED AS A TASK FOR SELECTION ROUND FOR BANZAN AND IS IN NO WAY RELATED TO BANZAN STUDIOS
Banzan Todo is a feature-rich task management application designed to help users efficiently manage their daily tasks. Built with React and TypeScript, this application provides a user-friendly interface for creating, categorizing, and managing todos. It includes a dynamic calendar component for date selection and supports various features to enhance user productivity.

## Features

- **Task Management**: Create, edit, and delete tasks with detailed information.
- **Category Filtering**: Filter tasks by categories with a collapsible sidebar.
- **Date Selection**: Use a custom date picker to set due dates for tasks.
- **Responsive Design**: Mobile-friendly and optimized for desktop use.
- **Emoji Support**: Add emojis to tasks for a personalized touch.

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS
- **Date Picker**: `react-date-picker`
- **Icons**: `react-icons`

## Installation

### Prerequisites

- Node.js (version 18.x or later)
- npm (version 10.x or later)

### Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/banzan-todo.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd banzan-todo
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Start the Development Server**:

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Usage

### Adding a New Todo

1. **Enter the Title**: Provide a descriptive title for the task.
2. **Add a Description**: Add details about the task.
3. **Set Due Date**: Choose a due date using the date picker.
4. **Select a Category**: Pick or enter a category for the task. Emojis can be selected for a personalized category.
5. **Add the Task**: Click the "Add Todo" button to save the task.

### Filtering Tasks

- Use the collapsible sidebar to select and filter tasks by categories.

### Responsive Design

- **Desktop**: Sidebar is always visible.
- **Mobile**: Sidebar is collapsible for better space utilization.

## Component Details

### `ThemedDatePicker`

- **Props**:
  - `selected`: `Date | undefined` – The currently selected date.
  - `onChange`: `(date: Date | null) => void` – Callback function when the date is changed.
  - `className`: `string` – Optional additional class names for styling.

### `SideBar`

- **Props**:
  - `todos`: `Todo[]` – Array of todos to be filtered.
  - `onCategoryChange`: `(categories: string[]) => void` – Callback function when the selected categories change.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch**: `git checkout -b feature/your-feature-name`
3. **Commit Your Changes**: `git commit -am 'Add new feature'`
4. **Push to the Branch**: `git push origin feature/your-feature-name`
5. **Create a Pull Request**.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or inquiries, please contact [your-email@example.com](mailto:your-email@example.com).
