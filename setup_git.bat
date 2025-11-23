@echo off
git init
git remote remove origin
git remote add origin https://github.com/CodeWithBakar/cosmic-portfolio.git
git add .
git commit -m "Initial commit: Cosmic Portfolio"
git branch -M main
git push -u origin main
