//! git & github/gitlab/bitbucket
//? git => vcs

//* commands
//? git config --global --list  => list local git global config
//? git config --global user.email "abc@gmail.com"

//? git init   => initialize empty git repo. at folder

//! WD  => Staging Area => local repo commit  => remote repo (github)

//? git status
//? git add <file_path>  => wd -> SA
//? git add .  => all changes -> SA
//? git commit -m "<commit message>"  => SA  -> local branch/repo

//! branches

//? git branch  => list all local branches
//? git branch <branch_name>  => create new branch
//? git switch <branch_name>
//? git checkout <branch_name>
//? git checkout -b <branch_name>

//? git merge <branch_name>
// main => git merge feature/login

//* github
//? git remote add origin <github_repo_url>
//? git remote -v
//? git remote remove origin

//? git push origin <branch_name>
//? git pull origin <branch_name>

//! Delete branch
//? git branch -d <branch_name>

//? git clone <git_remote_repo_link> -> copy github repo to local
