
# Deployment to Production on Heroku

git push heroku master

```

➜  server git:(master) git push heroku master
Counting objects: 6, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (6/6), done.
Writing objects: 100% (6/6), 1.83 KiB | 1.83 MiB/s, done.
Total 6 (delta 3), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Building source:
remote:
remote: -----> Node.js app detected
remote:
remote: -----> Creating runtime environment
remote:
remote:        NPM_CONFIG_LOGLEVEL=error
remote:        NODE_ENV=production
remote:        NODE_MODULES_CACHE=true
remote:        NODE_VERBOSE=false
remote:
remote: -----> Installing binaries
remote:        engines.node (package.json):  8.1.1
remote:        engines.npm (package.json):   5.0.3
remote:
remote:        Resolving node version 8.1.1...
remote:        Downloading and installing node 8.1.1...
remote:        npm 5.0.3 already installed with node
remote:
remote: -----> Restoring cache
remote:        - node_modules
remote:
remote: -----> Building dependencies
remote:        Installing node modules (package.json + package-lock)
remote:        up to date in 2.873s
remote:        Running heroku-postbuild
remote:
remote:        > server@1.0.0 heroku-postbuild /tmp/build_486ce56144c959cea040353f8db8c728
remote:        > NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client
remote:
remote:
remote:        > fsevents@1.2.4 install /tmp/build_486ce56144c959cea040353f8db8c728/client/node_modules/fsevents
remote:        > node install
remote:
remote:        added 2048 packages in 52.896s
remote:
remote:        > client@0.1.0 build /tmp/build_486ce56144c959cea040353f8db8c728/client
remote:        > react-scripts build
remote:
remote:        Creating an optimized production build...
remote:        Compiled with warnings.
remote:
remote:        ./src/components/surveys/SurveyList.js
remote:          Line 24:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
remote:          Line 25:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
remote:
remote:        Search for the keywords to learn more about each warning.
remote:        To ignore, add // eslint-disable-next-line to the line before.
remote:
remote:        File sizes after gzip:
remote:
remote:          99.85 KB  build/static/js/1.55072a2c.chunk.js
remote:          20.38 KB  build/static/css/1.5e3d6386.chunk.css
remote:          2.65 KB   build/static/js/main.845e6d2d.chunk.js
remote:          763 B     build/static/js/runtime~main.229c360f.js
remote:
remote:        The project was built assuming it is hosted at the server root.
remote:        You can control this with the homepage field in your package.json.
remote:        For example, add this to build it for GitHub Pages:
remote:
remote:          "homepage" : "http://myname.github.io/myapp",
remote:
remote:        The build folder is ready to be deployed.
remote:        You may serve it with a static server:
remote:
remote:          npm install -g serve
remote:          serve -s build
remote:
remote:        Find out more about deployment here:
remote:
remote:          http://bit.ly/CRA-deploy
remote:
remote:
remote: -----> Caching build
remote:        - node_modules
remote:
remote: -----> Pruning devDependencies
remote:        removed 129 packages in 4.305s
remote:
remote: -----> Build succeeded!
remote: -----> Discovering process types
remote:        Procfile declares types     -> (none)
remote:        Default types for buildpack -> web
remote:
remote: -----> Compressing...
remote:        Done: 78.3M
remote: -----> Launching...
remote:        Released v23
remote:        https://sheltered-oasis-11786.herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy... done.
To https://git.heroku.com/sheltered-oasis-11786.git
   e78fe41..f2e7daa  master -> master


```