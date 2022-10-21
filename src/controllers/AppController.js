const AppController={};


AppController.index=(req,res)=>{
    res.render('welcome');
}
AppController.comments=(req,res)=>{
    res.render('comments');
}
AppController.login=(req,res)=>{
    res.render('login');
}
AppController.factura=(req,res)=>{
    res.render('factura');
}
AppController.productos=(req,res)=>{
    res.render('productos');
}
AppController.productos=(req,res)=>{
    res.render('productos');
}
// AppController.buscador=(req,res)=>{
//     res.render('partials/search.hbs');
// }
module.exports=AppController;