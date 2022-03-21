const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('public'))

app.get("/", (req, res) => {
  res.set('Link', '</image.png>; rel=preload; as=image')
  res.type('html').send(html)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Test Server Push</title>
    <link rel="stylesheet" href="./styles.css">
  </head>
  <body>
    <section>
      <h1>Test Server Push</h1>
      <img src="./image.png" />
    </section>
  </body>
</html>
`