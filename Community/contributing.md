# Contributing
You are free to contribute into this repo. The Code of Conduct still appiles here, so make sure to read that first. 

## Requirements

- Git
- Node.js
- Node Version Manager (NVM)

## Getting the environment set up
### Windows

1. Install Node, and Git. Make sure to also check if you have npm installed. You may find it helpful to use nvm for windows instead

2. Fork this repo, and then clone the forked repo

3. Install all dependencies


    ```sh
    cd Deltaline/nextjs-deltaline && npm install
    ```

4. (Optional) Run the dev server to get started:

    ```sh
    npm run dev
    ```

### MacOS

1. Install Node, and Git. Make sure to also check if you have npm installed. You may find it helpful to use nvm instead

2. Fork this repo, and then clone the forked repo

3. Install all dependencies


    ```sh
    cd Deltaline/nextjs-deltaline && npm install
    ```

4. (Optional) Run the dev server to get started:

    ```sh
    npm run dev
    ```

### Linux

1. Install Node and Git. Make sure to also have npm installed. It may be helpful to use nvm to manage your node versions

2. Fork this repo, and then clone the forked repo

3. Install all dependencies


    ```sh
    cd Deltaline/nextjs-deltaline && npm install
    ```

4. (Optional) Run the dev server to get started:

    ```sh
    npm run dev
    ```

## Styleguides

### Git Commit Messages

- Describe what is the change (branch change, clean up code, etc)
- If it's updating the other files (that dont have to go through the CI), add a [ci skip] label in the front of the commit message (not sure if buddy ci will catch that or not...)
- Add a [skip ci] or [skip netlify] when working on other files that are not releated with the main files (so it doesn't trigger a build on Netlify)

### Issues

- Add a label
- Use one of the templates that is available

### Pull Requests

- Describe the change (issue fix, clean up code, etc)
- When doing a pull request, make sure the pull request goes into the dev branch
- And dont delete the dev branch
- List the branch, and the commit number starting from the most recent commit

## Code Formatting

There is a git commit hook that formats your code every single time you commit. It's there to format and keep things clean. When adding a new component, make sure to make it into a separate file. 