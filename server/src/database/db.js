import mongoose from "mongoose";

module.exports = () => {
  mongoose.connect(
    `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_CLUSTER_NAME}.7yqtv.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  );
  mongoose.connection.on('open',() =>{
      console.log('MongoDB: Connection successfull');
  });
  mongoose.connection.on('error',() =>{
      console.log('MongoDB: Connection failed.')
  })
};
