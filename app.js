// READABLESTREAM IS USED TO READ THE DATA
// var http=require('http')
// var fs=require('fs')
// var myreadstream=fs.createReadStream(__dirname + '/readme.txt','utf8');
// var mywritestream=fs.createWriteStream(__dirname + '/writeme.txt');
// myreadstream.pipe(mywritestream);


// on('data',function(chunk){
//     console.log('new chuck recieved:');
//     mywritestream.write(chunk);

 var http=require('http')
 var fs=require('fs')

 var server=http.createServer(function(req,res){
     res.writeHead(200,{'content-type':'text/plain'});
     var myreadstream=fs.createReadStream(__dirname + '/readme.txt','utf8');
     myreadstream.pipe(res)
 })
 server.listen(3000,console.log("server is running"))