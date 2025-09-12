import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db'
import userRoutes from './routes/userRoutes'
import { errorHandler, notFound } from './middlewares/errorMiddleware'


dotenv.config();
const app = express();
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT;
connectDB();
app.get('/', (req, res) => {
    res.send("Conversa Started")
})

app.use('/api/user', userRoutes)


app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Conversa Backend Running at ${PORT}`);
})
