rmdir /s/q .\docs
mkdir .\docs\css
mkdir .\docs\css\fonts
xcopy .\static .\docs /y/s/q/i
xcopy .\dev\dependencies .\docs\dependencies /y/s/q/i
xcopy .\dev\css\fonts .\docs\css\fonts /y/s/q/i
copy /y .\dev\css\*.min.css .\docs\css\
copy /y .\dev\script.min.js .\docs\script.min.js
copy /y .\dev\index.min.html .\docs\index.html


git add .
git commit -am "Generating and pushing into server."
git push



pause