## GITHUB COMMANDS 😎🤙

### STEPS TO USE GITBASH AND GITHUB 

🔵​​ Go to github web and download the .zip (Where you can see CODE)

🔵​​ Extract the .zip whatever you want, after that open the folder whit gitbash 

➡️ Write: git init ​

🔵​​ (⚠️CONFIGURATIONS⚠️​) You need config the local repository, please follow the next steps

​➡️​ Write: git config --global user.name "YourName"
   
➡️​ Write: git config --global user.email "YourEmail"

​➡️​ Write: git config --global core.autocrlf true (If you're working on windowns) or input (If you're workin on mac or linux)

🔵​ (⚠️​CONNECTION⚠️​) Go to git hub web and copy the HTTPS CODE

​➡️ (*ADD ORIGIN*) Write: git remote add origin (⚠️​HERE COPY THE HTTPS CODE⚠️​) (*To see if it is working good*) write: git remote -v🔴​

➡️ (*BRANCH*) Write: git branch, if you are working on master branch, please write: git swtich RAMA 🔴​

➡️ (*PULL*) Write: git pull origin main 🟡

➡️ (*FETCH*) Write: git fecth origin RAMA (ITS BETTER USE THIS CAUSE FETCH DONT MERGE)🟡

      git fetch compañero
      git diff nombre-de-tu-rama compañero/rama-compañero   # Revisar cambios
      git merge compañero/rama-compañero                      # Integrar si quieres

➡️ (*STATUS*) Write: git status (*Checkout that everything is good*) also you can write: git status -s 🟡​

➡️ (*ADD*) (*If you have a lot things that you need add*) Write: git add . (*Otherwise*) Write git add (HERE THE ARCHIVE) 🟡​ 

➡️ (*PUSH*) (*If you want to push to github all things that you made*) Write: git push -u origin main 🟢​

----> you need to login to github afther write this

----> After keep pushing writing: git push origin main

(⚠️​WARNING⚠️​) If you dont pull before you should delete everything that you partners did 

​🟣​​ (⚠️​DIFERENTS BRANCHES⚠️​​) If you want to work in another branch you can create it

(⚠️​THIS IS ONLY WHEN YOU ARE WORKING ALONE⚠️)

➡️ Write: git branch (*To see in which branch you are working*)

➡️ (*To move from main to others branches*) Write: git checkout (NAME OF THE BRANCH) (⚠️​IF CHECKOUT DOSENT WORK GOOD TRY⚠️) write: git branch -M (NAME OF BRANCH)

➡️ Write: git checkout -b (HERE WRITE THE NAME OF THE NEW BRANCH) after that write again git branch (⚠️​​YOU CAN UPDATE THE GITHUB WITH THIS NEW BRANCH⚠️​​)

​➡️ (*If you want to merge the new branch with main branch from main*) Write: git merge origin/(HERE THE NAME THAT YOU MADE TO NEW BRANCH) 

​➡️ (*To delete the branch*) Write git push origin --delete (NAME OF THE BRANCH)

​➡️ (*PULL*)

​➡️ (*STATUS*)

​➡️ (*ADD*)

​➡️ (*PUSH*)

(⚠️​THIS IS WHEN YOU ARE WORKING WITH THE TEAM⚠️)

➡️ Write: git branch (*To see in which branch you are working*)

➡️ (*To move from main to others branches*) Write: git checkout (NAME OF THE BRANCH) (⚠️​IF CHECKOUT DOSENT WORK GOOD TRY⚠️) write: git branch -M (NAME OF BRANCH)

➡️ Write: git checkout -b (HERE WRITE THE NAME OF THE NEW BRANCH) after that write again git branch (⚠️​​YOU CAN UPDATE THE GITHUB WITH THIS NEW BRANCH⚠️​​)

➡️ Write: git push origin (HERE WRITE THE NAME OF THE NEW BRANCH) (⚠️​​TO MAKE UPDATES TO YOUR NEW BRANCH⚠️​​)

➡️ (⚠️​​TO DOWNLOAD ALL THING THAT YOUR PATNERS MADE IN DIFFERENTS BRANCHES⚠️) Write git checkout main, then Write git fetch origin/main 

➡️ (⚠️IF YOU ARE READY TO UPDATE THE MAIN⚠️) Write git merge origin/main

(☢️STEPS TO USE SSH☢️)

To configure SSH on GitHub, follow these steps:

1️⃣ Generate an SSH key:

   ➡️ Open your terminal.

   ➡️ Run: ssh-keygen -t ed25519 -C "your_email@example.com" and follow the instructions to create the key.

🔴 -t is the level of incryption

☢️❗Copy the location of your private key: EXAMPLE .ssh/id_ed25519.pub

2️⃣ Start the SSH agent:

   ➡️ Run: eval "$(ssh-agent -s)".

🔴 THIS IS TO SEE IF YOU SSH AGENT IS ALIVE (EXAMPLE: agent pid 17218).

   ➡️ Then, add your private key: ssh-add ~/.ssh/id_ed25519.

3️⃣ Copy the public key:

   ➡️ Use cat ~/.ssh/id_ed25519.pub to display it and copy the output.

4️⃣ Add the key to GitHub:

   ➡️ Go to GitHub, under "Settings" > "SSH and GPG keys", and click "New SSH key". Paste your public key there.

5️⃣ Test the connection:

   ➡️ Run: ssh -T git@github.com. You should see a success message.

With this, you will have securely and efficiently configured SSH for GitHub.

☣️​ (🔺​☢️​ERRORS AND SOLUTIONS☢️​🔺​)

Suppose that you are trying to pull the global repository and you see this message: 

$ git pull origin main

From https://github.com/JuanOsorner/CESDE-s-assignaments

 * branch            main       -> FETCH_HEAD
 * 
fatal: refusing to merge unrelated histories

this happened since your local repository dosent have a comun ancestor with the global repository, so try this: 

➡️ Write: git pull origin main --allow-unrelated-histories 🔴

you will see this message 

Merge branch 'main' of https://github.com/JuanOsorner/CESDE-s-assignaments

.# Please enter a commit message to explain why this merge is necessary,

.# especially if it merges an updated upstream into a topic branch.

.#

.# Lines starting with '#' will be ignored, and an empty message aborts

.# the commit.

~

~

~

~

~

~

~

~

~

~

~

~

~

~

~

~

.git/MERGE_MSG [unix] (12:25 21/03/2025)                                 1,1 All

<CESDE/sm2/CESDE-s-assignaments-main/.git/MERGE_MSG" [unix] 6L, 301B 

now follow the next steps: 

➡️ Press: i, afther that you will see in the end of document this change: 🟡​

.git/MERGE_MSG[+] [unix] (12:25 21/03/2025)                              1,1 All
-- INSERT --

➡️ Write a message: 🟡​

example: Actualizando errores

➡️ Press: esc 

➡️ Write: :wq 🟢​
