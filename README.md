# CESDE-s-assignaments

Here you can find all information about our CESDE'S assignaments. 

## Steps to use GitBash 
  ### Steps to connect 
  1. Download de .ZIP
  2. Open the archive with GitBash
  3. Write: git init
  4. Write: git config --global user.name "YourName"
  5. Write: git confg --global user.email "YourEmail"
  6. Go to GitHub web and copy the link of our repository (Where you can see CODE)
  7. Write: git remote add origin "HERE COPY THE CODE"
  8. Write git remote -v (To see if you are connected to the repository)
  9. Write: git branch (you need to be in main).
  10. if you are in master, PLEASE Write: git branch -M main.
  11. Write: git pull origin main (This updates your local repository whit all commits your partners made)
  12. Write: git add .
  13. Write: git commit -m "Mensaje"
  14. If you want to update the general repository WRITE: git push origin main (Warning: First checkout if you did a git pull)
  ### Steps to merge branches (Warning: to change branch write: git branch -M master or main)
  1. In master:
     
     (!!) Write: git checkout master (To see if you are working in master)
     
     (!!) Write: git pull origin master (To updates all commits in master branch)
     
  3. In main:
     
     (!!) Write: git checkout main (too see if you are workin in main)
     
     (!!) Write: git pull origin master (To updates all commits in main branch)
     
  5. Merge branches
     
     (!!) You need to be in main branch. Write: git checkout main
     
     (!!) Write: git fetch origin
     
     (!!) Write: git merge origin/master
     
  7. If you have problems try:
     
     (!!) Write: git add .
     
     (!!) Write: git commit -m "message"
     
  ### Create and Delete master branch
  1. Create:

     (!!) Write: git branch master
     
     (!!) Keep working in master branch

  3. Delete:
     
     (!!) git branch -d master (To delete master branch in your local repository)
     
     (!!) git push origin --delete master (To delete master branch in our global repository)
