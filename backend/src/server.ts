import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import foodRouter from './router/food.router';
import user_router from './router/user.router';
import order_router from './router/order.router';
import { dbConnect } from './configs/database.config';

dbConnect();

const app = express();
app.use(express.json());

app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));


app.use("/api/foods", foodRouter);
app.use("/api/users", user_router);
app.use("/api/orders", order_router);




const port = 5000;

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
