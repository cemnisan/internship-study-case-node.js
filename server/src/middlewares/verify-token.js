import jwt from 'jsonwebtoken';

// Create token middleware
module.exports = (req,res,next) =>{
    try{
        const token = req.headers['x-access-token'] || req.query.token || req.body.token;
        const decoded = jwt.verify(token,process.env.API_SECRET_KEY);
        req.decode = decoded;
        next();
    }catch(err){
        res.status(401).json({ message: "You can't view page 'cause you aren't logged in." })
    }
}