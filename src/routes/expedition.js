import { Router } from "express";

import * as tweetController from "@/controllers/tweet";
import * as tweetValidations from "@/routes/validations/tweet";
import { isAuthenticated } from "@/middleware";
// import { cache, isAuthenticated, validate } from "@/middleware";

const router = Router();

router.get('/',(req,res)=>{
    res.json({message:"This is the expedition page"})
})
router.post('/new',isAuthenticated,(req,res)=>{
    res.json({message:"New Expedition"})
})
router.put('/:id',isAuthenticated,(req,res)=>{
    res.json({message:"Update Expedition"})
})
router.delete('/:id',isAuthenticated,(req,res)=>{
    res.json({message:"Delete Expedition"})
})

export default router;
