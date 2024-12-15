import mangoose from "mangoose";

const connectDB = async () => {

    mangoose.connection.on('connected',() => {
        console.log("DB Connected");
    })

    await mangoose.connect(`${process.env.MONGOODB_URI}/e-commerce`)

}

export default connectDB;