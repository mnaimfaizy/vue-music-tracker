# Music Tracker 🎵

A modern, full-featured music streaming and management platform built with Vue 3, Firebase, and Vite. Users can upload, manage, share, and stream music tracks with an integrated audio player, commenting system, and user authentication.

## 🎯 Overview

Music Tracker is a Progressive Web Application (PWA) that enables users to:

- **Browse & Stream**: Discover and listen to music tracks with an integrated audio player
- **Upload & Manage**: Authenticated users can upload their own music files and manage their library
- **Comment & Engage**: Leave comments on songs and interact with the community
- **Offline Support**: PWA capabilities enable offline access to previously loaded content

## ✨ Key Features

### 🎼 Music Player

- Integrated audio player powered by Howler.js
- Play/pause controls with seek functionality
- Real-time progress tracking
- Persistent player across navigation

### 👤 User Authentication

- User registration and login via Firebase Authentication
- Protected routes for authorized content
- User profile management
- Secure session handling

### 📤 File Upload & Management

- Drag-and-drop file upload interface
- Real-time upload progress tracking
- Firebase Storage integration
- Organized music library management
- Edit song metadata (title, genre)

### 💬 Community Features

- Comment system for each song
- Sortable comments (latest/oldest)
- Comment count tracking
- User-specific comments

### 🌍 Internationalization (i18n)

- Multi-language support (English, French)
- Localized number formatting (currency)
- Easy language switching

### 📱 Progressive Web App (PWA)

- Offline functionality
- Installable on mobile and desktop
- Service worker caching
- Optimized for performance

## 🛠️ Tech Stack

### Frontend Framework

- **Vue 3** - Composition and Options API
- **Vue Router** - Client-side routing with guards
- **Pinia** - State management

### Backend & Services

- **Firebase Authentication** - User management
- **Cloud Firestore** - NoSQL database with offline persistence
- **Firebase Storage** - Media file storage

### UI & Styling

- **Tailwind CSS** - Utility-first CSS framework
- **Font Awesome** - Icons
- **Custom directives** - Icon management

### Audio

- **Howler.js** - Cross-browser audio library with HTML5 Audio API

### Development Tools

- **Vite** - Next-generation frontend tooling
- **Vitest** - Unit testing framework
- **Cypress** - E2E testing
- **ESLint + Prettier** - Code quality and formatting
- **VeeValidate** - Form validation

### Additional Features

- **NProgress** - Page loading progress bar
- **Vue I18n** - Internationalization
- **PWA Plugin** - Service worker & manifest generation

## 📁 Project Structure

```
src/
├── components/       # Reusable Vue components
│   ├── Auth.vue     # Authentication modal
│   ├── Player.vue   # Audio player component
│   ├── Upload.vue   # File upload interface
│   └── ...
├── views/           # Page components
│   ├── Home.vue     # Browse songs with infinite scroll
│   ├── Manage.vue   # User's music library management
│   ├── Song.vue     # Individual song page with comments
│   └── About.vue    # About page
├── stores/          # Pinia state management
│   ├── user.js      # Authentication state
│   ├── player.js    # Audio player state
│   └── modal.js     # Modal state
├── router/          # Vue Router configuration
├── includes/        # Utility modules
│   ├── firebase.js  # Firebase initialization
│   ├── validation.js # VeeValidate setup
│   ├── i18n.js      # Internationalization
│   └── ...
├── directives/      # Custom Vue directives
├── locales/         # Translation files
└── assets/          # Static assets (CSS, images)
```

## 🚀 Core Functionality

### Authentication Flow

1. Users can register with email, password, name, age, and country
2. Login persists across sessions using Firebase Auth
3. Protected routes redirect unauthenticated users
4. User data stored in Firestore

### Music Upload & Storage

1. Authenticated users access the Manage page
2. Drag-and-drop or select MP3 files
3. Files upload to Firebase Storage with progress tracking
4. Metadata saved to Firestore (user ID, file URL, genre, etc.)
5. Uploaded songs appear in user's library

### Music Playback

1. Browse songs on the homepage (infinite scroll pagination)
2. Click any song to view details and play
3. Player persists across page navigation
4. Seek/scrub through timeline
5. Real-time progress display

### Comments System

1. Authenticated users can comment on songs
2. Comments stored in Firestore with timestamps
3. Sortable by latest or oldest
4. Real-time comment count

## 🎨 Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## 📦 Configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
