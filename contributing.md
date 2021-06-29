# Contributing
You are free to contribute into this repo. The Code of Conduct still appiles here, so make sure to read that first. 

## Styleguides

### Git Commit Messages

- Describe what is the change (branch change, clean up code, etc)
- If it's updating the other files (that dont have to go through the CI), add a [ci skip] label in the front of the commit message (not sure if buddy ci will catch that or not...)

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
<link rel="shortcut icon" type="image/jpg" href="Dcey SMP Logo V4 Release.webp"/>
<title>Maps for Dcey SMP</title>
</head>

``` 

(proper example) This is a proper way to do it. But for example, 

```

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" type="image/jpg" href="Dcey SMP Logo V4 Release.webp"/>
    <title>Maps for Dcey SMP</title>

```
this one is too messy and it's kinda hard to read

**Long story short**: Just make it easy to read
