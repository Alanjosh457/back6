const express=require ("express")
const app=express()
const PORT=process.env.PORT || 5000
const env=require("dotenv")
env.config()

app.get( "/" , (req,res)=>{
res.send("Running")
})

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
}
)