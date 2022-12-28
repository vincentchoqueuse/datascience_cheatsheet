# Git

Git is a distributed version control system: tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.

* [Documentation](https://git-scm.com/docs)
* [Book](https://git-scm.com/book/en/v2)

## Basic Usage

### Configure tooling

Sets the name you want attached to your commit transactions

``` bash
$ git config --global user.name "{{name}}"
```

Sets the email you want attached to your commit transactions

``` bash
$ git config --global user.email "{{email_address}}"
```


### Create repositories

A new repository can either be created locally, or an existing repository can be cloned. 

``` bash
$ git init
```

The git init command creates a new folder in your directory called `.git`.

### Git Ignore

In a git folder, it is important to add a `.gitignore` in your folder to specify which files should be excluded  from being tracked with Git.

* [Gitignore Files](https://github.com/github/gitignore)

