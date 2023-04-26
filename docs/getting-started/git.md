# Git

* [Documentation](https://git-scm.com/docs)

Git is an open-source version control system for software development. Git allows developers to track changes to their codebase over time, collaborate with others on software projects, and manage multiple versions of a codebase simultaneously. It works by creating a "repository" that stores all of the code and version history for a project, and allowing users to "commit" changes to the repository, along with a message describing the changes.

Git also provides tools for collaborating with other developers on a project, such as "pull requests" and "branches" that allow developers to propose changes and collaborate on new features without disrupting the main codebase.

One of the key benefits of using Git is that it allows developers to easily manage and merge multiple versions of a codebase, even if those versions have diverged significantly over time. It also provides powerful tools for undoing changes, reverting to earlier versions of a codebase, and managing conflicts that can arise when multiple developers are working on the same code.

* [Book](https://git-scm.com/book/en/v2)

## Basic Usage

### Configure Git

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


## Commonly Used commands

* `git init`: Initializes a new Git repository in the current directory.
* `git clone`: Makes a copy of a remote Git repository to your local machine.
* `git add`: Adds changes to the staging area, preparing them to be committed.
* `git commit`: Commits changes to the local repository, creating a new version of the code with a message describing the changes.
* `git push`: Sends committed changes to a remote repository, typically on a server like GitHub.
* `git pull`: Updates the local repository with changes from the remote repository.
* `git branch`: Lists all local branches in the repository.
* `git checkout`: Switches between different branches in the repository.
* `git merge`: Combines changes from one branch into another branch.
* `git stash`: Temporarily saves changes that are not yet ready to be committed.
* `git log`: Displays a log of all the commits made to the repository.
* `git status`: Shows the current status of the repository, including which files have been modified, added, or deleted.
* `git remote`: Lists the remote repositories that are currently connected to the local repository.
* `git fetch`: Downloads changes from the remote repository, but does not merge them into the local repository.
