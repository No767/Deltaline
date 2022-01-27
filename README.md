# Deltaline

<div align=center>
<img type="image/x-icon" src="assets/Deltaline Logo Release V3 (512 Resize).svg">

![GitHub Pipenv locked Python version (branch)](https://img.shields.io/github/pipenv/locked/python-version/No767/Deltaline/dev?label=Python&logo=python&logoColor=white)  [![Format (Python)](https://github.com/No767/Deltaline/actions/workflows/format-python.yml/badge.svg)](https://github.com/No767/Deltaline/actions/workflows/format-python.yml) [![Netlify Status](https://api.netlify.com/api/v1/badges/e8232711-1bd5-4e73-b5a9-92af059e2486/deploy-status)](https://app.netlify.com/sites/deltaline/deploys) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/dafe967dfb4a43d7ba1239a26b439721)](https://www.codacy.com/gh/No767/Deltaline/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=No767/Deltaline&amp;utm_campaign=Badge_Grade) ![GitHub](https://img.shields.io/github/license/No767/Deltaline?label=License&logo=github)

Source Code for the Deltaline Website

<div align=left>

# License
This repo is licensed under the [GPL-3.0](https://github.com/No767/Deltaline/blob/master/LICENSE.txt) License. Logo is licensed under the the CC-BY-NC-ND 4.0 License, and all other works are all rights reserved. For futher information on the usage of the Logo, please refer to the [docs](https://no767.github.io/-Deltaline-Docs/). And if you are more confused about the licensing, refer to [this](https://no767.github.io/Deltaline-Docs/Licensing/) from the docs

# Contributing
See [Contributing](https://github.com/No767/Deltaline/blob/master/Community/contributing.md)

# Getting Started (For Developers)

Under the hood, Deltaline uses the [Sanic](https://github.com/sanic-org/sanic) framework, and [React](https://reactjs.org/).

## React (Frontend)

1. Install [Node.js](https://nodejs.org/en/) and npm. On Linux or MacOS, it is recommended to use [node-version-manager](https://github.com/nvm-sh/nvm) (nvm) in order to handle multiple versions of Node.js.
2. Change directories to the project directory and install all React dependencies:

```sh
cd Deltaline-Sanic/Deltaline-React && npm install
```

3. Start up the Vite/React dev server:

```sh
npm run dev
```
## Sanic (Backend)
### Windows

1. Install [WSL2](https://docs.microsoft.com/en-us/windows/wsl/). Uvloop does not have Windows support nor does the owner want to add it.

2. Compile Python 3.10 from source (or install it with your package manager). If you need a guide, [here's](https://realpython.com/installing-python/#how-to-build-python-from-source-code) one. Note that this guide is for Ubuntu 20.04, so depending on your distro, it may be different.
3. Install [Pipenv](https://pipenv.readthedocs.io/en/latest/). To do so, run this command:

```sh
sudo python3.10 -m pip install --upgrade pipenv
```

4. Clone this repo.
5. Create the Pipenv. To do so, run this command: 

```sh
pipenv --python 3.10
```

6. `cd` into the cloned repo and install all the dependencies by running this command:

```sh
pipenv install
```
7. (Optional) If you are using PyCharm, make sure to set the Python Interpreter to WSL and specify the Python interpreter to use. For this, the file path will be usually here:

```sh
$HOME/.local/share/virtualenvs/[Project Name]/bin/python3.10
```

Or if you using VS Code, install the [WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) Extension for VS Code, and follow steps 1-6. Then connect to WSL. 

### Linux

1. Compile Python 3.10 from source (or install it with your package manager). If you need a guide, [here's](https://realpython.com/installing-python/#how-to-build-python-from-source-code) one. Note that this guide is for Ubuntu 20.04, so depending on your distro, it may be different.
2. Install [Pipenv](https://pipenv.readthedocs.io/en/latest/). To do so, run this command:

```sh
sudo python3.10 -m pip install --upgrade pipenv
```

3. Clone this repo.
4. Create the Pipenv. To do so, run this command: 

```sh
pipenv --python 3.10
```

5. `cd` into the cloned repo and install all the dependencies by running this command:

```sh
pipenv install
```

### MacOS

**Note that I have not tested MacOS yet. If you find any errors, please let me know by submitting a GitHub Issue Report.**

1. Install Python 3.10. This can be installed with the installer or compiled from source (Or use Homebrew). Either way it doesn't matter. 
2. Install [Pipenv](https://pipenv.readthedocs.io/en/latest/). To do so, run this command:

```sh
python -m pip install --upgrade pipenv
```

3. Clone this repo. 
4. Create the Pipenv. To do so, run this command: 

```sh
pipenv --python 3.10
```

5. `cd` into the cloned repo and install all the dependencies by running this command:

```sh
pipenv install
```


# Building

Via [Pipenv](https://pipenv.pypa.io/en/latest/)

`pipenv install`

If you haven't gotten the environment set up, run this in the root directory of the repo:

`pipenv --python 3.10`

There are 2 versions: One made with Django, and the other made with Flask. 

For running the Django dev server: 

```
cd DeltalineDjango 
pipenv run python manage.py runserver
```

For running the Flask dev server: 

Windows:

```
cd Deltaline-Flask 
set FLASK_APP=index 
pipenv run flask run
```

Linux/MacOS:

```
cd Deltaline-Flask
export FLASK_APP=index
pipenv run flask run
```

