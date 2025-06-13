class ApiError extends Error{
  constructor(
    statusCode,
    message="Someting went wrong",
    errors=[],
    statck=""
    ){
      super(message)
      this.statusCode = statusCode
      this.errors =errors
      this.success=false;
      this.data=null
      this.message=message
      if (statck){
        this.stack=statck
      }
      else{
        Error.captureStackTrace(this,this.constructor)
      }
    }

}
export{ApiError}