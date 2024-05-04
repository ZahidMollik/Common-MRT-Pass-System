const express=require('express');
const {metroController}=require('../../controllers');
const { authMiddleware } = require('../../middlewares');
const router=express.Router();

router.post('/addInfo',authMiddleware,metroController.addMetroInfo);
router.post('/info',authMiddleware,metroController.getMetrosInfo);
router.get('/',authMiddleware,metroController.getAllMetroInfo);
router.patch('/:id',authMiddleware,metroController.updateMetroInfo);
router.delete('/:id',authMiddleware,metroController.deleteMetroInfo);

module.exports=router;