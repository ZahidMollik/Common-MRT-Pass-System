const {ServerConfig}=require('./config');
const express=require('express');
const cors=require('cors')
const apiRoutes=require('./routes')

const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT,()=>{
  console.log(`Successfully started the server on Port: ${ServerConfig.PORT}`);
})