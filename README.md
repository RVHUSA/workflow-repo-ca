# Workflow Repo for the CA

This repository contains the code for the Workflow CA project. It includes development tools setup, unit tests with Vitest, and end-to-end tests with Playwright.

## Project Setup

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run start
```

Starts a local server at [http://localhost:5500](http://localhost:5500).

### Run Unit Tests (Vitest)

```bash
npm run test:unit
```

Tests include:

- **isActivePath function**
  - Returns true when the current path matches the href exactly
  - Returns true for root path ("/") when path is "/" or "/index.html"
  - Returns true when current path includes the href
  - Returns false when paths don't match

- **getUsername function**
  - Returns the user's name from localStorage if a user exists
  - Returns null when no user exists in storage

Vitest uses jsdom to simulate a browser environment, which makes localStorage available during unit tests.

### Run Playwright End-to-End Tests

```bash
npm run test:e2e
```

Tests include:

- **Login**
  - User can successfully log in with valid credentials from `.env`
  - User sees an error message for invalid credentials

- **Navigation**
  - Navigate to home page
  - Wait for the venue list to load
  - Click the first venue
  - Verify that the heading contains "Venue details"

### Scripts

```json
{
  "scripts": {
    "dev": "npx tailwindcss -i ./css/input.css -o ./css/style.css --watch",
    "test:unit": "vitest",
    "test:e2e": "npx playwright test --ui",
    "prepare": "husky install",
    "start": "live-server --port=5500"
  }
}
```

- `npm run start` → Start local server
- `npm run test:unit` → Run Vitest unit tests
- `npm run test:e2e` → Run Playwright end-to-end tests
- `npm install` → Installs dependencies and sets up Husky pre-commit hooks

Husky runs automatically before each commit to lint and format staged files.

### Environment Variables

Create a `.env` file in the project root.
Use `.env.example` as a template:

```
TEST_USER_EMAIL=test-username@stud.noroff.no
TEST_USER_PASSWORD=test-password
```

### Tools Used

- [ESLint](https://eslint.org/) – Linting and code quality
- [Prettier](https://prettier.io/) – Code formatting
- [Vitest](https://vitest.dev/) – Unit testing
- [Playwright](https://playwright.dev/) – End-to-end testing
- [Husky](https://typicode.github.io/husky/#/) – Pre-commit hooks
- [Live-server](https://www.npmjs.com/package/live-server) – Local development server

### Notes

- Work in the `workflow` branch for all changes
- Open a Pull Request (PR) from `workflow` branch into the default branch for review
- `.env` is ignored in `.gitignore`
- `.env.example` is included as a template
