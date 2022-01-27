# Contributing
You are free to contribute into this repo. The Code of Conduct still appiles here, so make sure to read that first. 

## Requirements

- Python 3.10 
- Git
- Pipenv
- WSL2 (If working on Windows)
- Node.js + npm (If working on Frontend)
- Node Version Manager (NVM)

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

## Code Styleguides
Please make sure that the code is readable and clean. for example, 

```

  <head><meta name="viewport" content ="width=device-width, initial-scale=1, user-scalable=yes" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
<link rel="shortcut icon" type="image/x-icon" href="img/Deltaline Logo Release V3 (8144 Resize).svg"/>
<title>Deltaline</title>
</head>

``` 

(proper example) This is a proper way to do it. But for example, 

```

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" type="image/x-icon" href="img/Deltaline Logo Release V3 (8144 Resize).svg"/>
    <title>Deltaline</title>

```
this one is too messy and it's kinda hard to read

**Long story short**: Just make it easy to read

## Getting Started

### Front End (HTML + CSS)

You will need to know how to code in HTML + CSS, since the website is coded that way. Also make sure that you know how to use the [Bootstrap Lib](https://getbootstrap.com/) as well. If not, read the docs for Bootstrap. The first thing you would want to do is to clone this repo. This can be done with `git clone https://github.com/No767/Deltaline.git`. The main folder that contain the files which will be deployed (with Netilfy) is the /site directory. The /dockersite is meant for the docker version of this site. If you want to use docker instead, you can find the docker image on the [Docker Registry](https://hub.docker.com/repository/docker/no767/deltaline) or on the [GitHub Registry](https://github.com/No767/Deltaline/pkgs/container/deltaline). Use the GitHub Registry if you want it to be more up to date, since each commit will also get sent through a Docker CI in order to build + deploy it. Most of the dependcies are already installed using CDNs within the files themselves, but if you want, make sure that you have Yarn installed and run `yarn install` on the root directory. This will installed all of the libs as needed. 

Make the changes that you see fit (remember, the actual works are all rights reserved), and make a pr to the master branch. Once it is reviwed, it's probably going to get merged and the CI servers will start kicking in. 

### Back End (Python/Django)

The Django Framework was made in Python 3.9.6, but use versions 3.6 or higher. Make sure you also have pip installed, and Django as well. The older versions like 2.7 don't get support. Within the root directory, you will noticed that there is a folder named "Django". That's the Django root directory. If you want to start up the sever, cd to that folder and run `python manage.py runserver`. This is meant mostly for local testing. Now, as with any Django project, the settings are tucked away within the Deltaline folder, and the views and models are within the src folder. As of right now, I've still trying to figure out how to get it working. As of now, use SQLite3 for the db storage, but you can use MySQL or PostgreSQL if you would like.
