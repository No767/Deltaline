# Deltaline

<div align=center>
<img type="image/x-icon" src="assets/Deltaline Logo Release V3 (512 Resize).svg">

![GitHub Pipenv locked Python version (branch)](https://img.shields.io/github/pipenv/locked/python-version/No767/Deltaline/dev?label=Python&logo=python&logoColor=white) [![Django CI](https://github.com/No767/Deltaline/actions/workflows/django.yml/badge.svg?branch=dev)](https://github.com/No767/Deltaline/actions/workflows/django.yml) [![Format (Python)](https://github.com/No767/Deltaline/actions/workflows/format-python.yml/badge.svg)](https://github.com/No767/Deltaline/actions/workflows/format-python.yml) [![Netlify Status](https://api.netlify.com/api/v1/badges/e8232711-1bd5-4e73-b5a9-92af059e2486/deploy-status)](https://app.netlify.com/sites/deltaline/deploys) [![CodeFactor](https://www.codefactor.io/repository/github/no767/deltaline/badge)](https://www.codefactor.io/repository/github/no767/deltaline) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/dafe967dfb4a43d7ba1239a26b439721)](https://www.codacy.com/gh/No767/Deltaline/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=No767/Deltaline&amp;utm_campaign=Badge_Grade) ![GitHub](https://img.shields.io/github/license/No767/Deltaline?label=License&logo=github)

Source Code for the Deltaline Website

<div align=left>

# License
This repo is licensed under the [GPL-3.0](https://github.com/No767/Deltaline/blob/master/LICENSE.txt) License. Logo is licensed under the the CC-BY-NC-ND 4.0 License, and all other works are all rights reserved. For futher information on the usage of the Logo, please refer to the [docs](https://no767.github.io/-Deltaline-Docs/). And if you are more confused about the licensing, refer to [this](https://no767.github.io/Deltaline-Docs/Licensing/) from the docs

# Contributing
See [Contributing](https://github.com/No767/Deltaline/blob/master/Community/contributing.md)
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

