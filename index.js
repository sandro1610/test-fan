import express from 'express';
import cors from 'cors';
import db from './config/Database.js';
import UserRoute from "./routes/UserRoute.js";
import EspresenceRoute from "./routes/EspresenceRoute.js";

const app = express();

// await db.sync({ force: true });

app.use(cors({
    credentials: true,
    origin: '*',
}));

app.use(express.static('public'))
app.use(express.json());
app.use(UserRoute);
app.use(EspresenceRoute);
app.use((req, res, next) => {
  console.log(req.method, req.path, res.statusCode)
  next()
})

app.listen(5000, () => {
    console.log("Server running on port 5000")
});
db.authenticate().then(() => {
    console.log('Database authenticated');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  });