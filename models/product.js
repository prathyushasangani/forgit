const path = require('path');
const fs = require('fs')

module.exports = class Product{
    constructor(t) {
        this.title = t;
    }
    
    save() {
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'product.json'
        );
        fs.readFile(p,(error,filecontent)=>{
            let products=[];
            if(!error){
                products =JSON.parse(filecontent);
            }
            products.push(this);
            console.log("list pro")
            console.log(products)
            fs.writeFile(p,JSON.stringify(products),(error)=>{
                console.log(error);
            });
        })
        
    }

    static fetchall(cb){
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'product.json'
        );
        fs.readFile(p,(error,filecontent)=>{
            if(error){
                cb([]);
            }
            cb(JSON.parse(filecontent));
        
        })
    }

}