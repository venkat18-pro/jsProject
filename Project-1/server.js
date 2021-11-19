const http=require('http');
http.creatServer(function(req,res){
  res.write('hello world');
  res.end();
}).listen(3000);
