/**
 * @param(fn)
 * recive an async function name(req,res,next) {
     async functions return a promisse when can use .then and catch
     if(promisse reject).catch(err)  //promise rejected catch the error and send to the errorController
 }
 */
const AppError = require("./AppError.js");

module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
  };
};