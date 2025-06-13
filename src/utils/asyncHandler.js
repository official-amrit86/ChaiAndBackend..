// const asyncHandler = (requestHandler) => {
//   (req, res, next) => {
//     Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
//   }
// }
export { asyncHandler }; //heigh order function : aise function jo function ko as a pairamater except kar sakte hai ya us function ko return bhi kar sakte hai
// as variable trit karte hai
 
const asyncHandler =(fn) =>async (req,res,next)=>{
  try{
    await fn(req,res,next)
    }
  catch(err){
    res.status(err.code || 500).json({
      success:false,
      message:err.message
    })
    
  }

}
