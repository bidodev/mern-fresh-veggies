/*
* This router is restricted to admin and farmers
* The user is already in the request
*/
exports.createProduct = (req, res, next) => {
   
    //at this point the user is saved inside req.user
    res.send('createProduct');
}