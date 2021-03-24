const fs = require("fs");
const folderName = process.argv[2] || "Project";

const htmlBoiler = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Document</title>
  </head>
  <body>
    <header>
      <nav class="nav"></nav>
    </header>
    <main>
    </main>
    <footer></footer>
    <script type="text/javascript" src="js/app.js"></script>
  </body>
  </html>
 `;

const serverBoiler = `
  const express = require("express")
  const app = express();



  const port = 5000;
  app.listen(port, () => console.log('listening on port ' + port));
  `;

const styleBoiler = `
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {}

  html {
    scroll-behavior: smooth;
  }

  body {}
  `;

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, htmlBoiler);
  fs.writeFileSync(`${folderName}/projects.html`, htmlBoiler);
  fs.writeFileSync(`${folderName}/project-item.html`, htmlBoiler);
  fs.mkdirSync(`${folderName}/css`);
  fs.writeFileSync(`${folderName}/css/style.css`, styleBoiler);
  fs.mkdirSync(`${folderName}/img`);
  fs.mkdirSync(`${folderName}/js`);
  fs.writeFileSync(`${folderName}/js/app.js`, serverBoiler);
} catch (e) {
  console.log("error");
  console.log(e);
}
