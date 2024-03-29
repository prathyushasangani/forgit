
const express = require('express')
const bodyparser = require('body-parser');
const app=express();
const path = require('path')
const adminrouter = require('./routes/admin')
const shoproute = require('./routes/shop');
const statusc = require('./controllers/404c');

app.use(bodyparser.urlencoded({extended:false})); //it will register all the middleware
app.use(express.static(path.join(__dirname,'public')))


app.set('view engine','ejs')
app.set('views','views')

app.use(adminrouter);
app.use(shoproute);
app.use(statusc.use404);


app.listen(3000);


// // const server = http.createServer(app);
// // server.listen(3000);



// // console.log(a);
// // const fs=require('fs');
// // fs.writeFileSync('txtfile.txt','content in the text file');
// // const i=987;
// // i=96
// // console.log(i);
// // const names=["gvhj","tygu","fghj"]
// // const n2=names.slice()
// // const n=[...names]
// // console.log(n2)
// // console.log(n)
// // for(let name of names){
// //     console.log(name)
// // }
// // names[6]="jhgf";
// // console.log(names[1]);
// // console.log(names.map(hobby=>'hobby: '+hobby));




// // var a=7;
// // const fun= a =>a+a;

// // console.log(fun(a));

// //asynchronus 
// // setTimeout(()=>{
// //     console.log("in time");

// // },2000);

// //synchronus



// // const fun2 = callback =>{
// //     setTimeout(()=>{
// //         callback("aypoyidni motham")
// //     },1500);
// // };

// // setTimeout(()=>{
// //     console.log("still .....")
// //     fun2(text=>{
// //         console.log(text)
// //     })
// // },1500)

// // console.log("1");
// // console.log("2");

// // const fun2 =()=>{
// //     const promise = new Promise((resolve,reject)=>{
// //         setTimeout(()=>{
// //             resolve("aypoyidni motham")
// //         },1000)
        
// //     });
// //     return promise;
// // }
// // setTimeout(()=>{
// //     console.log("stillll")
// //     fun2()
// //         .then(text => {
// //             console.log(text);
// //             return fun2()
            
// //         })
// //         .then(text2 => {
// //             console.log(text2);
// //         });
// // },1000)


// // const fetchData = () => {
// //     const promise = new Promise((resolve, reject) => {
// //       setTimeout(() => {
// //         resolve('Done!');
// //       }, 1500);
// //     });
// //     return promise;
// //   };
   
// //   setTimeout(() => {
// //     console.log('Timer is done!');
// //     fetchData()
// //       .then(text => {
// //         console.log(text);
// //         return fetchData();
// //       })
// //       .then(text2 => {
// //         console.log(text2);
// //       });
// //   }, 2000);
// // const http = require('http')

// // const server = http.createServer((req,res)=>{
// //     console.log(req)
// //     res.setHeader('Content-Type','text/html')
// //     re
    

// // })
// // server.listen(3000);




