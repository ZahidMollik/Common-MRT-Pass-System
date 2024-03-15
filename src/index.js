const {ServerConfig}=require('./config');
const express=require('express');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const apiRoutes=require('./routes');

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
  credentials:true,
  origin:['http://localhost:5173','https://common-mrt-pass-system-production.up.railway.app/','http://localhost:8000']
}));
app.use(cookieParser());
app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT,()=>{
  console.log(`Successfully started the server on Port: ${ServerConfig.PORT}`);
})