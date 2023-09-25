# Resume Renderer

## Introduction

This is a React-based application designed to generate resumes from YAML files. Features include a built-in real-time editor for both YAML content and individual resume fields.

## Prerequisites

- Node.js
- Yarn package manager

## Quick Installation

Run the following commands to clone the repository and install dependencies:

```bash
git clone https://github.com/stakater/resume-renderer.git
cd resume-renderer
yarn install
```

## How to Use

1. **Edit a Resume**: Use the real-time editor to edit YAML content and individual fields.
1. **Export a Resume**: To export a resume as a PDF, simply use the Ctrl+P print prompt to select "Print to PDF."
1. **Download the YAML**: Download your resume in YAML format.
1. **Uploading to GitHub**: Upload the YAML to [this GitHub repo](https://github.com/stakater/resumes).
1. **Editing an Existing Resume**: To edit, download the YAML from GitHub and import it into the application.

### Page Breaks in Projects

Page breaks do not happen automatically in the Projects section. Use the fields `startPageBreak` or `middlePageBreak` to insert a page break either before the project or in the middle (between description and responsibilities).

## Available Scripts

### `yarn start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it. The page reloads if you make edits.

### `yarn test`

Runs the test runner in interactive watch mode. More info [here](https://facebook.github.io/create-react-app/docs/running-tests).

### `yarn build`

Builds the app for production to the `build` folder. The build is minified and ready for deployment.
