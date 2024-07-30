# AuraMind

AuraMind is a web application that consists of both frontend and backend components. This README file provides instructions on how to set up and run the application.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.x or later)
- npm (v6.x or later)
- Python (v3.7 or later)

## Installation

### Frontend

1. Navigate to the `frontend` directory:
    ```sh
    cd AuraMind/frontend
    ```

2. Install the required npm packages:
    ```sh
    npm install
    ```

### Backend

1. Navigate to the `backend` directory:
    ```sh
    cd AuraMind/backend
    ```

2. Install the required Python packages:
    ```sh
    pip install -r requirements.txt
    ```

## Usage

### Running the Frontend

1. Navigate to the `frontend` directory if you are not already there:
    ```sh
    cd AuraMind/frontend
    ```

2. Start the frontend server:
    ```sh
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000` to see the application running.

### Running the Backend

1. Navigate to the `backend` directory if you are not already there:
    ```sh
    cd AuraMind/backend
    ```

2. Start the backend server:
    ```sh
    python server.py
    ```

## Folder Structure

The project structure is as follows:
AuraMind/
├── frontend/
│ ├── public/
│ │ ├── favicon.ico
│ │ ├── index.html
│ │ ├── logo512.png
│ │ ├── manifest.json
│ │ ├── Aura.png
│ │ ├── robots.txt
│ │ └── logo192.png
│ ├── src/
│ │ ├── components/
│ │ │ ├── Login.js
│ │ │ └── Chat.js
│ │ ├── styles/
│ │ │ ├── Login.css
│ │ │ └── Chat.css
│ │ ├── App.js
│ │ ├── App.css
│ │ ├── App.test.js
│ │ ├── index.js
│ │ ├── index.css
│ │ ├── logo.svg
│ │ ├── reportWebVitals.js
│ │ └── setupTests.js
│ ├── .gitignore
│ ├── package.json
│ ├── package-lock.json
│ └── README.md
└── backend/
├── server.py
└── requirements.txt
