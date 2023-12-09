# TaskBud - Your Friendly Task Manager.

TaskBud is a modern and efficient task manager built on the Next.js with TypeScript, utilizing Tailwind CSS for styling and Supabase as the backend database. This Readme document provides essential information to help you get started with TaskBud, install dependencies, run the application and perharps, contribute to its development.

## Table of Contents

-   Features
-   Technologies
-   Getting Started
-   Prerequisites
-   Installation
-   Configuration
-   Usage
-   Contributing
-   License

## Features

-   User Authentication: Secure user registration and authentication with Supabase.
-   Task Management: Create, update, delete tasks and mark them as complete or incomplete.
-   Filtered by status: Easily filter tasks based on status (completed or incomplete) and sort them by due date or priority.
-   Responsive Design: TaskBud is designed to be responsive and work seamlessly across various devices.
-   Collaboration: Share tasks with other users and collaborate on shared projects.
-   Offline Support: Basic offline support using service workers for uninterrupted task management.

## Technologies

-   Next.js: React framework for building server-side rendered and statically generated web applications.
-   TypeScript: Typed superset of JavaScript that adds static types to your code.
-   Tailwind CSS: A utility-first CSS framework for rapid UI development.
-   Supabase: An open-source alternative to Firebase that provides a backend-as-a-service (BaaS) platform.

## Getting Started

#### Prerequisites

Make sure you have the following installed on your machine:

    Node.js (v14 or later)
    npm (v6 or later)
    Git

#### Installation

1. Clone the repository:

`git clone https://github.com/your-username/TaskBud.git`

2. Change into the project directory:

`cd TaskBud`

3. Install dependencies:

`npm install`

### Configuration

#### Supabase Configuration

1. Create an account on Supabase.

2. Create a new project in the Supabase dashboard.

3. Navigate to the "Settings" tab and find the API URL and Public Key.

4. Create a .env.local file in the project root and add your Supabase configuration:

`NEXT_PUBLIC_SUPABASE_URL=your-supabase-api-url`
`NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-public-key`

### Usage

1. Run the development server:

`npm run dev`

2. Open your browser and navigate to http://localhost:3000.

3. Sign up for a new account or log in if you already have one.

4. Start managing your those forgettable tasks efficiently with TaskBud!

<!-- ## Contributing

We welcome contributions! Please follow the contribution guidelines to contribute to TaskBud.
 -->

## License

TaskBud is open-source software licensed under the MIT License. Feel free to use, modify, and distribute it according to the terms of the license.
