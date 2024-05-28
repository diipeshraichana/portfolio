# Run Project
### 1. Clone the project

### 2. Run the project
```shell
npm i
npm start
```

### 3. Build
```shell
npm run build
```

### 4. To deploy your React app to GitHub Pages, you must push this directory to a particular branch called gh-pages. add following script into package.json file
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

### 5. Make sure you have the gh-pages package installed, which is a tool that simplifies the deployment process to GitHub Pages:
```shell
npm install --save-dev gh-pages
```

### 6. Deploy your React app to GitHub Pages
```shell
npm run deploy
```

### 7. Refer following page for more information:
https://www.dhiwise.com/post/simplify-deployment-how-to-deploy-react-app-to-github-page