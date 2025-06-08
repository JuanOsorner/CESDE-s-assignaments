# Git & GitHub — Quick Reference 🚀

## 1. 📥 Download and Prepare the Project

Visit GitHub and download the repository as a .zip.

Extract it to a location of your choice.

or in your folder open it with git bash and run: 

    git clone <HTTPS-URL-HERE>

Open the project folder using Git Bash and run:

    git init

## 2. 🛠️ Initial Configuration

Set your global identity:

    git config --global user.name "YourName"
    git config --global user.email "youremail@example.com"

Configure line endings based on your OS:

Windows:

    git config --global core.autocrlf true

macOS/Linux:

    git config --global core.autocrlf input

### 💡 Pro tip


To have git fetch always remove stale remote references, set:

    git config --global fetch.prune true

## 3. 🌐 Connect to the Remote Repository

Copy the HTTPS URL of the remote repo.

Add it as the origin:

    git remote add origin <HTTPS-URL-HERE>
    git remote -v  # Verify the remote settings

## 4. 🧠 Working with Branches

### 4.1 View and Switch Branches

    git branch           # List local branches
    git checkout <branch> # Switch to an existing branch

If git checkout fails, try: (☢️This is the branch dosent exist☢️)

    git fetch origin NAME OF BRANCH

### 4.2 Create a Branch and Push It

    git checkout -b <new-branch>
    git push origin <new-branch>

### 4.3 Merge a Branch into main

From the main branch:

    git merge origin/<your-branch>
    git push origin main

### 4.4 Delete a Remote Branch

    git push origin --delete <branch>

5. 🔄 Keep Your Repo in Sync

Working alone 🚹:

    git pull origin main

If you see 👀:

    fatal: refusing to merge unrelated histories

run ◀️:

    git pull origin main --allow-unrelated-histories

Then resolve any conflicts, and check status:

    git status  # or git status -s

Working with a team 🤼‍♂️:

Check current branch:

    git status

Stage changes:

    git add .

    # or add specific files:

    git add <file>

Commit your changes:

    git commit -m "Descriptive message"

Push your branch:

    git push origin <your-branch>

To get updates from others into main:

    git checkout main
    git fetch origin/main
    git merge origin/main


## 6. 🔒 Optional: SSH Setup for Secure Access (☢️This is your working in your own PC☢️)
Generate your SSH key:

    ssh-keygen -t ed25519 -C "youremail@example.com"

Start the SSH agent and add your key:

    eval "$(ssh-agent -s)"
    ssh-add ~/.ssh/id_ed25519

Copy your public key:

    cat ~/.ssh/id_ed25519.pub

In GitHub: go to Settings → SSH and GPG keys → New SSH key, and paste your public key.

Test the connection:

    ssh -T git@github.com

# Extra 😎

## 1. ⏪⏩git revert and git reset

🔁 git reset

What it does:

Moves the current branch pointer (HEAD) back to a chosen commit.

Ideal for rewriting local history on branches that haven't been shared.

Modes:
--soft: keep changes staged, HEAD moves only.

--mixed (default): unstages changes; working directory remains intact.

--hard: discards all changes up to that commit, including your working directory

Use cases:

Undo local commits: e.g. remove your last two commits:

    git reset --mixed HEAD~2

Unstage files:

    git reset HEAD <file>

Start over from history (dangerous!):

    git reset --hard HEAD~1

Warning: --hard can permanently delete work — avoid if unsure

## 2. 🔄 git revert

What it does:

Does not change history or remove commits.

Creates a new commit that undoes a previous one 

Use cases:
Safely undo changes on public/shared branches:

    git revert <commit-hash>

Revert without editing message:

    git revert --no-edit <commit-hash>

This adds a reverse commit to preserve the history while removing the effects of a past commit.

## 🧽 Deleting Remote and Local Branches in Git

When you delete a branch on GitHub (remote), it doesn't remove the branch from your local repository. Here's how to clean up both remote-tracking references and your own local branch safely:

🔹 Step 1: Switch to a safe branch
First, make sure you're not on the branch you want to delete. Switch to a stable branch like main or develop:

    git checkout main

🔹 Step 2: Remove the local branch

To delete your local branch only if it’s already merged:

    git branch -d branch-name

If the branch has unmerged commits and you still want to delete, you can force it (use with caution):

    git branch -D branch-name

🔹 Step 3: Prune remote-tracking references

Deleting the branch remotely (on GitHub) doesn't update your local metadata—you’ll still see something like origin/branch-name. To clean up those stale references:

    git fetch --prune

Or use this equivalent command:

    git remote prune origin

This removes any local references to remote branches that no longer exist 

# 🛡️ Common Error & Fix
Error:

    fatal: refusing to merge unrelated histories

Fix:

    git pull origin main --allow-unrelated-histories

Then save and close the editor (e.g., in Vim: press i, write your message, then Esc, followed by :wq).

# github's tricks 😈

## Projects

### 🚀 Step 1: Create a New Project

- Go to your profile or organization page and click the Projects tab.

- Click New project.

- Choose a template (Board, Table, Roadmap) or start blank.

- Name your project and click Create

### 📋 Step 2: Add a Description and README

- Click the Settings (⋯) icon.

- Add a short description to describe your project’s purpose.

- Write a README with usage instructions, links, or team notes 

### ✅ Step 3: Add Issues or Draft Items

- Paste an existing issue or PR URL into the “Add item” field.

- Or create draft issues directly by typing and pressing Enter

### 🗂️ Step 4: Customize with Fields & Views

- Click Add field to create custom properties like:

- Iteration field for sprints

- Priority field (e.g., High/Medium/Low 

### 🔁 Step 5: Automate Workflows

Enable automation rules such as:

- Auto-moving closed issues to “Done”

- Archiving items after completion

- Automatically adding new items based on filters

### 📈 Step 6: Use Insights & Tracking

Explore built-in analytics like charts and project insights to track your progress and performance .

### 🛠️ Step 7: Maintain & Collaborate

- Use the README to document project usage.

- Communicate with updates, mentions, and assign collaborators

- Break large tasks into smaller issues and track each one

# 🍕🍕TOKENKS🍕🍕 

If you want work with in a private repositorie check this: 

How to Use GitHub Tokens for Secure Access to Private Repositories

✅ Can we share access to a private repository with someone else?
Yes.

🔐 What tool does GitHub provide to grant someone access to a private repository?
Personal Access Tokens (PATs).

Step-by-Step Guide: How to Create a Personal Access Token (Classic) on GitHub
Go to your GitHub profile photo (top right) and click on it.
A dropdown menu will appear.

Select “Settings” from the menu.

Scroll down the left sidebar and click on “Developer settings.”

You’ll see three sections:

GitHub Apps: Apps with permissions on your account.

OAuth Apps: External apps that can authenticate with your GitHub account.

Personal access tokens: The section we’re interested in. Click it.

Click on “Tokens (classic)” under the “Personal access tokens” section.

Next, click the dropdown button labeled “Generate new token” and choose “Generate new token (classic).”

You’ll be taken to a form to configure your new token:

Give your token a descriptive name (e.g., “Sofia-repo-access”).

Set the token’s expiration period.

Choose the permissions (scopes) you want to grant the token.

Once configured, click the “Generate token” button.

⚠️ Important Reminder After Creating the Token
Copy the token immediately and store it somewhere safe. GitHub will not show it again after this point.

🔄 Types of Tokens on GitHub
Fine-grained Tokens

Classic Tokens

🔍 Differences Between Fine-grained and Classic Tokens
Fine-grained tokens offer more granular permission control.

Fine-grained tokens must have an expiration date; you can't disable it.

They let you limit access to specific repositories or restrict to a subset of actions.

You can also use them to configure access to your GitHub account.

The content (string) of fine-grained tokens is longer and more complex.

🧠 Best Practices for Naming Tokens
Include the GitHub username of the person receiving the token or the repository name associated with the token.
Example: john-smith-projectX-token

⏳ Expiration Options for Classic Tokens
7 days

30 days

60 days

90 days

Custom expiration

No expiration (Not recommended)

❌ Which Expiration Option Should You Avoid and Why?
Avoid selecting “No expiration”, because if someone gains unauthorized access to the token, they could use it indefinitely. Always set an expiration date for better security.

🔑 Access Options with Fine-grained Tokens
Read-only access to all your public repositories

Full access to all repositories

Access to one or more specific repositories

💬 What if You Forget to Copy the Token After Creation?
You’ll need to delete the token and generate a new one, making sure to copy and save it this time.

🧽 What Should You Do After the Person You Shared the Token With Has Finished Their Work?
Delete the token to prevent any future unintended access.

🗑️ How to Delete a Token in GitHub
In the “Personal access tokens” section, you’ll see a list of your tokens. Click the “Delete” button next to the one you want to remove.

👥 Does a Token Grant Access as a Collaborator?
No. A user accessing a repository via token does not need to be added as a collaborator. They simply use the token as a key for access.

🔒 Does a Token Grant Access to All Repositories or Just One?
Only the repositories and permissions that you explicitly configure in the token will be accessible.

💻 What Must a User Provide to Clone a Private Repository with a Token?
The user must enter their GitHub username and paste the token as the password when prompted for credentials during the cloning process.

🛠️ Common Use Cases for GitHub Tokens
Secure access to your repositories from different devices

Automating tasks using GitHub Actions

Creating custom workflows

Running personalized scripts

### )(❗) run in git bash if you are not a collaborator

    git clone <HTTPS-URL-HERE>

git ask you about your username and your password in you password paste the token.
