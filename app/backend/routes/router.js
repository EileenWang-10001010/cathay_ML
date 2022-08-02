import express from 'express'

const router = express.Router()

router.post('/upload',(req,res)=>{
    console.log(req.query)
    // res.json({msg: 'The game has started.'})
})

router.get('/homepage',(req,res)=>{
        res.send({msg:'homepage'})
        // res.status(406).send({msg:'Not a legal number.'})
})

export default router
