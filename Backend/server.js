const express = require("express");
const cors = require("cors");
require("./models/connection")
const homeRouter = require("./router/homeRouter.js");
const userRouter = require("./router/userRouter.js");

const app = express();
app.use(express.json());

app.use(
    cors({
      origin: "*",
    })
  );

app.use("/user", userRouter);
app.use("/homes", homeRouter);


const PORT = 3636;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});
