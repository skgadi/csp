rmdir /s/q ..\dev\dependencies
xcopy .\node_modules\katex\dist ..\dev\dependencies\katex /y/s/q/i
xcopy .\node_modules\noty\lib ..\dev\dependencies\noty /y/s/q/i
xcopy .\node_modules\@fortawesome\fontawesome-free\webfonts ..\dev\dependencies\fa\webfonts /y/s/q/i
md ..\dev\dependencies\vue
copy .\node_modules\vue\dist\vue.global.prod.js ..\dev\dependencies\vue\vue.global.prod.js
md ..\dev\dependencies\fa\css
copy .\node_modules\@fortawesome\fontawesome-free\css\all.min.css ..\dev\dependencies\fa\css\all.min.css
rem xcopy .\node_modules\dexie\dist ..\docs-dev\dependencies\dexie /y/s/q/i
md ..\dev\dependencies\plotly.js
copy .\node_modules\plotly.js\dist\plotly.min.js ..\dev\dependencies\plotly.js\plotly.min.js



xcopy .\special ..\dev\dependencies /y/s/q/i


pause



















