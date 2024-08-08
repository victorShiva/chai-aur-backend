import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const app = express();

const port = process.env.PORT || 3030;

let jokes = [
    { id: 1, title: "Why don't scientists trust atoms?", content: "Because they make up everything!" },
    { id: 2, title: "What do you call a lazy kangaroo?", content: "A pouch potato!" },
    { id: 3, title: "Why did the scarecrow win an award?", content: "Because he was outstanding in his field!" },
    { id: 4, title: "What do you call a fish with no eyes?", content: "Fsh!" },
    { id: 5, title: "Why don't they play poker in the jungle?", content: "Too many cheetahs!" }
];

app.use(express.static('./dist'));

app.get('/api/jokes', (req, res) => {
    res.send(jokes)
})

app.listen(port, () => {
    console.log(`Server At http://localhost:${port}`);
})