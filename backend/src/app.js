require("./db/conss");
const expres = require("express");
const app = expres();
const port = process.env.PORT || 3001;

// This is to recieves the able Jsons   
app.use(expres.json());

// Available Route   


app.use("/api/auth", require("./route/auth"));
app.use("/api/notes", require("./route/notes"));




app.listen(port, () => {

    console.log(`Connections is Setup at the port numbers ${port} `);
});