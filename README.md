# Art Gallery - Degree Project

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Setup Instructions](#setup-instructions)
    - [Clone the Repository](#clone-the-repository)
    - [Local Development](#local-development)
4. [Environment Variables](#environment-variables)
5. [Demo](#demo)

## Project Overview
This project is a website developed to showcase an artist’s artwork professionally, making it accessible to a wider audience. The website serves as a digital gallery where visitors can explore various artworks, learn about the artist, and contact them for inquiries or commissions. The main aim of the website is to help the artist increase visibility, offer a platform for sales, and improve communication with potential customers or collaborators.

## Technology Stack
- **React with Vite:** React for building the frontend, and Vite for fast development and bundling.
- **Supabase:** For database management and storage (images).
- **Tailwind CSS:** For the design and responsiveness.
- **TypeScript:** For better code quality and easier maintenance.
- **EmailJS:** Used for handling email submissions from the contact form.
- **Ionicons:** For the icon library.

## Setup Instructions
### Clone the Repository
To clone the repository and set up the project locally, follow these steps:
1. **Clone the repository**:
```bash
git clone https://github.com/RozlinA/Art-Gallery-Degree-Project.git
```
2. **Navigate to the project directory**:
 ```bash
cd Art-Gallery-Degree-Project
```
3. **Install the dependencies**:
 ```bash
npm install
```

## Local Development
### Run the Project
To start the development server and view the website locally, run the following command:
```bash
npm run dev
```
After running the command, open your browser and navigate to http://localhost:5173 to view the site.

## Environment Variables
This project requires the following environment variables to be set in a .env file for local development. You can create the .env file in the root directory and add the following values:
### Supabase
To configure Supabase, create an account at Supabase and follow the documentation to create a new project and database. Afterward, you will need to add the Supabase URL and anon key to your .env file:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```
### EmailJS
To set up EmailJS for handling form submissions, create an account at EmailJS, create a service and template, and add the following credentials to your .env file:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Demo
To view the results of the project, you can visit the live website here:
[https://artbywolf.netlify.app/](https://artbywolf.netlify.app/)
