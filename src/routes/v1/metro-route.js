const express=require('express');
const {metroController}=require('../../controllers');
const { authMiddleware,checkAdminMiddleware } = require('../../middlewares');
const router=express.Router();

router.post('/addInfo',authMiddleware,checkAdminMiddleware,metroController.addMetroInfo);
router.post('/info',authMiddleware,metroController.getMetrosInfo);
router.get('/',authMiddleware,metroController.getAllMetroInfo);
router.patch('/:id',authMiddleware,checkAdminMiddleware,metroController.updateMetroInfo);
router.delete('/:id',authMiddleware,checkAdminMiddleware,metroController.deleteMetroInfo);

module.exports=router;