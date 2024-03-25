import expressApp from "./expressApp"

export const StartServer = async()=>{
    
    const PORT = process.env.PORT || 8000;

    expressApp.listen(PORT,()=>{
        console.log("server listening on 8000");
    })
    
    process.on("uncaughtExcetion",async(err)=>{
        console.log(err);
        process.exit(1)
    })



}

StartServer().then(()=>{
    console.log("server up")
})

