# Real App Project

The Real App Project is a mobile application designed for managing business cards. It provides different features and functionalities for both regular users and business users. This README file provides an overview of the project, including information about the app, server setup, and important details for developers and contributors.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [Frontend/UI](#frontendui)
  - [Backend/Server](#backendserver)
  - [Database](#database)
  - [User Authentication](#user-authentication)
  - [Business Card Management](#business-card-management)
  - [User Roles and Permissions](#user-roles-and-permissions)

## Features

The Real App Project offers the following features:

- **Regular User Features**

  - Register an account
  - Log in to the application

- **Business User Features**
  - Create, edit, and delete business cards
  - View business cards created by themselves

## Installation

To install and run the Real App Project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Gils1986/REAL_APP_PROJECT.git
```

2. Navigate to the project directory:

```bash
cd REAL_APP_PROJECT
```

3. Install dependencies:

```bash
npm install
```

# Usage

Once you have installed the project, you can start using the Real App by following these steps:

1. Build the project:

```bash
npm run build
```

2. Run the app:

```bash
npm start
```

3. Access the app through your preferred web browser:

```arduino
http://localhost:3000
```

# Components

The Real App Project consists of the following components:

## Frontend/UI

This component represents the user interface of the mobile application, built using HTML, CSS, and JavaScript frameworks such as React Native or React.js. It includes various screens, views, and components responsible for rendering the app's user interface. The frontend handles user interactions, displays business cards, and allows users to perform actions such as registration, login, card creation, editing, and deletion.

## Backend/Server

The backend component consists of server-side code responsible for handling requests from the frontend, processing business logic, and managing data storage. It is built using Node.js, a JavaScript runtime, and employs frameworks such as Express.js to handle HTTP requests and define API endpoints. The server communicates with the database to store and retrieve business card data. It includes user authentication and authorization mechanisms to control access to different features based on user roles.

## Database

The database component stores the application's data, including user accounts and business card information. The Real App Project uses MongoDB, a NoSQL document database, for data storage. MongoDB allows for flexible schema design and efficient querying of data.

## User Authentication

This component handles the authentication and authorization of users. It enables user registration, login, and session management. User authentication ensures that only registered and authorized users can access the application's features. It may utilize technologies like JSON Web Tokens (JWT) for secure authentication and authorization.

## Business Card Management

This component provides functionalities related to managing business cards. It includes features like creating new business cards, editing existing cards, and deleting cards. The component may also support features such as sharing cards via email, text messages, or social media

## User Roles and Permissions

User roles and permissions control the access and actions that different types of users can perform within the application. In the Real App Project, there are two types of users: regular users and business users. Regular users have limited access to the app, while business users have more features and control over their business cards.
