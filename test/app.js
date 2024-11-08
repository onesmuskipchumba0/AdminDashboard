const { Schema, connect, model }  = require("mongoose")
const uri = "mongodb+srv://onesmuskipchumba5:InNsjjJAqTZgbXCY@cluster0.xj96h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&ssl=false";
main().catch(err => console.log(err));

async function main() {
  await connect(uri);
  const kittySchema = new Schema({
    name: String
  });
  const Kitten = model('Kitten', kittySchema);
  const fluffy = new Kitten({ name: 'Fluffy' });
  await fluffy.save();
  console.log(fluffy);
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
