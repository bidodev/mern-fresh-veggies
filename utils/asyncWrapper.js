/**
 * @param(fn)
 * recive an async function name(req,res,next) {
     async functions return a promisse when can use .then and catch
     if(promise fulfilled).then(next) //promise fulfilled call next middleware
     if(promisse reject).catch(err)  //promise rejected catch the error and send to the errorController
 }
 */
const AppError = require("./appError.js");

module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next)
      //if promisse fullfilled return next middleware
      .then(next)
      //if promisse reject return err
      .catch((err) => next(new AppError(err)));
  };
};