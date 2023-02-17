const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://root:root@cluster0.g6gzt8d.mongodb.net/i_notebook?retryWrites=true&w=majority",
    {
        // useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Databases Connections Successfulls");
    }).catch((error) => {
        console.log(error);
    });