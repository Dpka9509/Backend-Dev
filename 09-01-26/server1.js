//
//get-fetch
//post-create
//delete-remove
//patch-partial update

const http=require('http')
const server=http.createServer((req,res)=>{
    console.log(req.url);
    console.log(req.method)
    res.writeHead(200,{'content.type': 'text/html'})
    res.write("<h1>Welcome users</h1>")
    res.write("<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae quas consequuntur placeat quod illum suscipit omnis esse ab at ad doloribus accusamus, ipsa dignissimos similique culpa non voluptatum quam enim?</p>")
    res.end()
    // res.end("hello from hp")
})

server.listen(3000,()=>{
    console.log("server is running on port ",3000)
});