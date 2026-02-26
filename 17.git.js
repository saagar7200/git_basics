//! git
// distributed vcs

// repository / repo
//* config
//  git config --global --list   //? list git global config
// git config --global user.name "user_name" //? set global user name
// git config --global user.email "user_email" //? set global user email
// git config --global init.defaultbranch "main" //? set global user email

// wd => staging area  => local repo

//* initialize git repo
// git init  //? initialize an empty  local repo
// git status
// git add <file_path>
// git commit -m "commit_message"

//* branch
// git branch  //? list all available branches
// git branch <branch_name> //? create new local branch
// git switch <branch_name>
// git merge <branch_name>
// git checkout <branch_name> //? switch between branch
// git checkout -b <branch_name>

//! github
// git remote add origin <origin_repo_url>
// git remote -v
// git remote remove origin

// git push origin <branch_name>
// git fetch origin  // origin/main
// git pull origin <branch_name> => fetch + merge

// git diff <branch_a> <branch_b>

// git log
// git log <branch_a>..<branch_b>

// PR => pull request
// MR ->
