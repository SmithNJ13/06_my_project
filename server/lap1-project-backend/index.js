const app = require("./app.js");
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log("app is listening on port: " + PORT);
})
