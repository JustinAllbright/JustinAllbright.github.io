import App from "./App.js"

// TO GET THIS FILE TO WORK YOU MUST CONVERT THIS FILE USING BABEL
// npx babel --watch src --out-dir . --presets react-app/prod
// This will work for all js file in /src

const root = ReactDOM.createRoot(document.getElementById('ReactProjects'));
root.render(
<React.Fragment>
<App/>
</React.Fragment>

);

