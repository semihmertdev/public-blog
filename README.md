# Blog Platform

This is a React-based blog platform where users can read posts, register, log in, and leave comments. The admin panel for authors to manage posts and comments is available at a separate link. This project uses Tailwind CSS for styling and Axios for API interactions.

## Features

- **User Authentication:** Users can register, log in, and log out using a token-based authentication system.
- **Post Viewing:** View detailed blog posts with content, title, and author information.
- **Commenting System:** Authenticated users can post comments on individual blog posts.
- **Author/Admin Panel:** Authors can log in via a separate interface to manage posts and comments.

## Tech Stack

- **React:** Frontend framework for building the user interface.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **Axios:** Library for making HTTP requests to the backend API.
- **React Router:** Client-side routing for navigating between pages.

## Pages and Components

### `App.js`
This is the main file that sets up routing for the application. It uses React Router for routing between different pages:
- Home Page (`/`)
- Post Detail Page (`/post/:id`)
- Login Page (`/login`)
- Register Page (`/register`)

### `HomePage.js`
The homepage that lists the latest blog posts using the `PostList` component.

### `PostList.js`
This component fetches and displays a list of blog posts. Each post links to its detailed page.

### `PostDetail.js`
This component shows the detailed content of a blog post, including the title, author, and full content.

### `CommentSection.js`
This component allows users to view and post comments on a specific post. It handles form submission and integrates with the backend to store new comments.

### `LoginPage.js`
Users can log in by providing their email and password. The authentication token is stored in `localStorage` for subsequent authenticated requests.

### `RegisterPage.js`
Users can register by providing their username, email, and password. Upon successful registration, they are redirected to the login page.

### `Header.js`
The navigation bar at the top of the page that shows links to the home, login, and register pages. If a user is logged in, the "Logout" button is displayed.

## Setup Instructions

### Prerequisites

- Node.js installed
- NPM or Yarn installed

### Installation

1. **Clone the repository:**

        git clone https://github.com/yourusername/blog-platform.git

2. **Navigate to the project folder:**

        cd blog-platform

3. **Install dependencies:**

        npm install

4. **Start the development server:**

        npm run dev

5. **Open your browser and go to http://localhost:3000.**


## Author/Admin Interface

For authors to log in and manage posts, use the following link:
    
[Admin Panel](https://admin-panel-silk-beta.vercel.app/login)

## Backend API

The app interacts with a backend API hosted on Render. API endpoints include:

* **Posts:** `GET /api/posts` – Fetches all posts.
* **Post Detail:** `GET /api/posts/:id` – Fetches a specific post.
* **Comments:** `GET /api/comments/post/:postId` – Fetches comments for a specific post.
* **Post Comment:** `POST /api/comments` – Posts a new comment (requires authentication).
* **Login:** `POST /api/auth/login` – Authenticates a user.
* **Register:** `POST /api/auth/register` – Registers a new user.
