const fs = require("fs");
const folderName = process.argv[2] || "Project";

try {

  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`);
  fs.writeFileSync(`${folderName}/projects.html`);
  fs.writeFileSync(`${folderName}/project-item.html`);
  fs.mkdirSync(`${folderName}/css`);
  fs.writeFileSync(`${folderName}/css/style.css`);
  fs.mkdirSync(`${folderName}/img`);
  fs.mkdirSync(`${folderName}/js`);
  fs.writeFileSync(`${folderName}/js/index.js`);
  fs.writeFileSync(`${folderName}/js/app.js`);

} catch (e) {

  console.log("error");
  console.log(e);
  
}
