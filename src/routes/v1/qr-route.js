const express=require('express');
const {qrController}=require('../../controllers');

const router=express.Router();

router.get('/:token',qrController.ScanQR);

module.exports=router;