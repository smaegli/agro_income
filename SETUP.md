# Download basic tools
* Download [nodejs](https://nodejs.org/de/download/).  
  -> It is necessary to use [npm](https://docs.npmjs.com/about-npm). Note that npm is inlucded in the nodejs installation.
* Install typescript from the command line (using npm)  
  `npm install -g typescript`

# Checkout a specific branch
Example for branch 'daniel'.

In your project folder, save your current state of work (i.e. `git add .`, `git commit -m "your commit message"`), then execute the follwing commands:
```sh
git fetch
git checkout daniel
```

# Initialize the project and download all dependncies.
In your project folder, open the command line and execute:
```sh
npm install
```

# Build your app
After you have changed your code and you want to build you app...  
In the project folder, open the command line and execute...

a) If you want to build the develpment version (with [source map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)):
```sh
npm run pipeline-dev
```

b) If you want to build the production version for final deployment:
```sh
npm run pipeline-prod
```

# Setup of the project
**Do not do this. It has already been done!**
* Start command line in your project directory and execute `npm init`
* Add some packages like bootstrap  
  `npm install --save jquery @types/jquery bootstrap @types/bootstrap`
* Add development dependencies using  
  `npm install --save-dev rimraf @babel/cli @babel/core @babel/preset-env webpack webpack-cli copyfiles`
* Create some basic bootstrap structure. Examples can be found [here](https://getbootstrap.com/docs/3.4/getting-started/#examples).

