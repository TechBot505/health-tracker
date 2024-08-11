# Health Tracker

Health Tracker is a modern, single-page application (SPA) built using Angular 17. This application allows users to log their workouts, manage workout data, and visualize their progress through an intuitive and responsive user interface.

**Deployed Url:** [Health Tracker](https://health-tracker505.netlify.app/)

## Overview

Health Challenge Tracker is designed to help users efficiently track their workout routines. With features like workout logging, search and filter options, and a visual representation of workout progress, this application serves as a comprehensive tool for fitness enthusiasts.

## Key Features
* **Workout Form:** Users can log their workout details by providing their name, selecting a workout type, and specifying the duration.
* **Workout Dashboard:** Displays a comprehensive list of all workouts with options to search, filter, and paginate through entries.
* **Progress Visualization:** Awesome charts allow users to see their workout progress over time.
* **Responsive UI:** The application is optimized for both desktop and mobile devices, ensuring a seamless experience across all platforms.
* **Local Data Storage:** User workout data is saved in the browser's local storage, preserving data across sessions.

## Tech Stacks
* **Angular 17:** A powerful front-end framework used for building dynamic, responsive SPAs.
* **Tailwind CSS:** A utility-first CSS framework that speeds up UI development.
* **ngx-pagination:** A pagination library for Angular, enabling easy navigation through large datasets.
* **ng2-charts:** A wrapper for Chart.js, allowing seamless integration of charts within Angular applications.

## Get Started
### Prerequisites
To set up the project locally, ensure you have the following installed:

* **Visual Studio Code:** A code editor for development.
* **Git Bash:** A command line interface for Git.
* **Node.js and npm:** JavaScript runtime and package manager for managing dependencies.

### Installation Procedure
1. Clone the repository:
```bash
git clone https://github.com/TechBot505/health-tracker
cd health-tracker
```
2. Install Dependencies:
```bash
npm install
```

### Running the Application
To launch the application in a local development environment:
```bash
ng serve
```
Open your browser and navigate to `http://localhost:4200/`. The application will reload automatically as you modify the source files.

### Building for Production
To create a production-ready build of the application:
```bash
ng build --prod
```

### Testing
Health Challenge Tracker includes unit tests for its components. These tests are written using Angular's testing utilities and Jasmine.

#### Running Unit Tests
To execute unit tests via Karma:
```bash
ng test
```

#### Running End-to-End Tests
To perform end-to-end testing:
```bash
ng e2e
```
**Note: To use ng e2e, ensure that a package supporting end-to-end testing is installed.**

### Deployment
The application is deployed and accessible via the following link:
[Health Tracker on Netlify](https://health-tracker505.netlify.app/)

### How to Use
1. **Add a Workout:** Navigate to the Add Workout page and fill out the form with the required details.
2. **View Workouts:** Go to the Dashboard page to see all logged workouts.
3. **Search and Filter:** Use the search bar to find workouts by user name, or apply filters to view specific workout types.
4. **Navigate Entries:** Use pagination to browse through the list of workouts if more than five entries are available.
5. **View Graph Analysis:** Go to workout charts to check and analyze your workout progress.

### Contribution Guidelines

Contributions are welcome! If you wish to contribute, please fork the repository and submit a pull request with your proposed changes.



