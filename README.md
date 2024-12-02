# React + Vite

# YouTube Clone (Frontend)

A fully responsive YouTube clone application built with the MERN stack. This frontend focuses on providing users with the ability to view videos, interact with them, manage their channels, and more. It includes features like authentication, authorization, search, video creation, and more. The frontend is designed to be fully responsive and provides an optimal experience across devices.

---

## Features

- **Authentication & Authorization**:

  - Sign up, login, and secure JWT-based authentication.
  - User-specific content access, including videos, channel management, etc.
  - Users can only manage their own videos, channels, and comments.

- **Video Management**:

  - Upload videos, manage video metadata (title, description, thumbnail, etc.).
  - Edit, delete, and update video information.
  - Fully integrated with the backend to handle video CRUD operations.

- **Search & Filter**:
  - Search functionality to find videos by title, description, or tags.
  - Filter videos by category (e.g., Entertainment, Music, Sports, etc.).
- **Channel Management**:

  - Create, update, and manage personal channels.
  - Upload and manage videos associated with your channel.

- **Comment Management**:

  - Authorized users can create, update, and delete their comments on videos.
  - Comments are tied to user accounts for proper management and moderation.

- **Fully Responsive Design**:

  - Optimized for desktop, tablet, and mobile devices.
  - Uses Tailwind CSS and Material UI for a modern, user-friendly interface.
  - Sidebar and navigation system adjusts based on device size.

- **Interactive Features**:
  - Like, comment, and share videos.
  - Watch videos in fullscreen mode.
- **Video Playback**:
  - A video player with basic controls (play, pause, forward, backward, fullscreen).
  - Custom video progress bar and volume controls.

---

## Tech Stack

- **Frontend**:

  - React.js (with hooks and functional components)
  - Tailwind CSS for styling
  - Material UI for UI components
  - React Router for routing
  - Redux (for modal and global state management)

- **Authentication**:

  - JWT Authentication for secure user login and access control

- **State Management**:

  - Redux for managing application state (e.g., user login, modal visibility, video data)

- **Other Libraries/Tools**:
  - Axios for making API requests
  - React Icons for using icons
  - react-router-scroll-top for scroll restoration
  - react-dropzone for drag-and-drop file upload
  - react-toastify for displaying notifications

---

## Installation

To get started with this project on your local machine, follow these steps:

## 1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/youtube-clone-frontend.git
   ```

## 2. Navigate to the project directory:

cd youtube-clone-frontend

## 3. Install the necessary dependencies:

npm install

## 4. Run the development server:

    npm run dev

The app will be available at http://localhost:5173.

## Project Structure

src/
- assets/ # Static assets like images, fonts, etc.
- components/ # Reusable components (Header, Sidebar, etc.)
- hooks/ # Custom hooks (e.g., authentication, video management, etc.)
- pages/ # Page components (Home, Watch, Profile, etc.)
- redux/ # Redux store setup, actions, reducers, and state management
- services/ # API service functions for interacting with the backend
- styles/ # Global styles (TailwindCSS setup, theme, etc.)
- utils/ # Utility functions (helpers, constants, common logic)
- validations/ # Form and input validation functions and schemas

## Key Components

## Authentication
Login: Allows users to log in with email and password.
Signup: Users can create a new account.
Protected Routes: Certain routes like video management and channel creation are protected and accessible only to authenticated users.

## Video
VideoList: Displays a list of videos with basic information like title, description, and thumbnail.
VideoPlayer: A custom video player that provides basic controls (play, pause, volume, etc.).
VideoUploadModal: Modal for uploading videos with fields for metadata like title, description, tags, and thumbnail.
EditVideoData: A page to edit video details.

## Search & Filter
SearchBar: Allows users to search for videos by title or tags.
FilterSidebar: Provides options to filter videos by categories like Music, Sports, etc.

## Channel
CreateChannelPopover: Popover for creating a new channel.
ChannelManagement: Users can view and manage their uploaded videos and other channel details.

## Comment Management
CommentSection: Allows users to view, create, update, and delete comments on videos.
CommentForm: Provides a form to submit new comments.
EditComment: Authorized users can edit their existing comments.
DeleteComment: Authorized users can delete their comments.

## Usage
**Sign Up**: Create a new account by providing your name, email, and password.
**Login**: After signing up, log in with your credentials.
**Search for Videos**: Use the search bar to find videos by title.
**Upload Videos**: Upload videos to your channel with metadata.
**Manage Channel**: Edit your channel details and manage your videos.
**Comment**: Interact with videos by commenting.
**Create, Update, or Delete Comments**: Users can create new comments, edit their own, or delete them.
**Responsive Design**: View the app on different devices for an optimized experience.

## Contributing
If you would like to contribute to this project, feel free to fork the repository, create a new branch, and submit a pull request. Please make sure your changes are well-tested and that they don't break existing functionality.

## Acknowledgements
React.js
Tailwind CSS
Material UI
Redux
Axios
React Router
