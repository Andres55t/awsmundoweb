const passport =require('passport')
const AuthController={};


AuthController.auth=(req,res,next)=>{
    
passport.authenticate('auth',{
    successRedirect:'/admin',
    failureRedirect:'/login'
})(req,res,next);

}
AuthController.admin=(req,res)=>{
    res.render('admin/dashboard');
}
AuthController.logout=(req,res)=>{
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
}
module.exports=AuthController;