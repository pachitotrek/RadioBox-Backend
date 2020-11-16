var Mysql = require('mysql');



const BaseDatosController={  


    EjecutarQuery:function(query,res,item){       

        var cnn = Mysql.createConnection({
            host     : 'sv50.byethost50.org',    
            user     : 'homedeko_box',
            password : 'jhxdp6a_vqfD',
            database : 'homedeko_radiobox'
        });

        if(item===true){
            cnn.query(query, function (error, results, fields) {
                if (error){
                    res.status(401).json({
                        ok:false,
                        error:error.code
                    })                                     
                }else{
                    return res.status(200).json({
                        ok:true,
                        results          
                    });
                }                
            });    
            cnn.end((err)=>{
                if(err){
                    console.log(err);
                }        
            });    

        }else{
            cnn.query(query, function (error, results, fields) {
                if (error) throw error;
                return res.status(200).json({
                    ok:true,
                    results:results.insertId          
                })
            });
    
            cnn.end((err)=>{
                if(err){
                    console.log(err);
                }       
            });    
        }
        

       
        
      
    }
}








module.exports.BaseDatosController = BaseDatosController;