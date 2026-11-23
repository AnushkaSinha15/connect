import express from 'express';
import 'dotenv/config';
import cors from 'cors';
const app = express();

const port= process.env.PORT;
app.use(cors());

app.get('/api/jokes',(req,res)=>{
    const jokes = [
    {
      id: 1,
      title: 'A joke',
      content: 'This is a joke',
    },
    {
      id: 2,
      title: 'Another joke',
      content: 'This is another joke',
    },
    {
      id: 3,
      title: 'Third joke',
      content: 'Why do programmers prefer dark mode? Because light attracts bugs.',
    },
    {
      id: 4,
      title: 'Fourth joke',
      content: 'Why did the developer go broke? Because they used up all their cache.',
    },
    {
      id: 5,
      title: 'Fifth joke',
      content: 'Why was JavaScript sad? Because it did not know how to null its feelings.',
    },
  ];

  res.send(jokes)
})


app.listen(port,()=>{
    console.log(`server is listening at ${port} babyyyyy `);
    
})

