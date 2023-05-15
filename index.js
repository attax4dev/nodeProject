const express = require("express");
require("./db/connect");
const ordersRouter = require('./routers/orderRouter');
const users_router = require('./routers/users')
const itemRouter = require('./routers/itemRouter')
const auth = require('./middlewars/auth')
const app = express();
const port = 3000;
app.use(express.json());
//app.use(auth);
app.use("/api/v1/users", users_router);
app.use('/api/v1/items', itemRouter);
app.use('/api/v1/orders', ordersRouter )

//test authentication (if user logged in )
//app.use(auth)

app.listen(port, () => console.log(`E-commerce app listening on port ${port}!`));
