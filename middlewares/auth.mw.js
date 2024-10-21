/**
 * Create a miidleware which checks if request body is proper and correct
 */

const verifySignUpBody=(req, res, next)=>{
    try{
        //check for name
        if(!req.body.name){
            return res.status(400)
        }

        //check for email

        //check for userId
    }catch(err){
        console.log("Error while validating the request object",err)
        res.status(500).send({
            message:"Error while validating the request body"
        })
    }
}