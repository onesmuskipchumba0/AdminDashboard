const { Schema, connect, model }  = require("mongoose")
const uri = 'mongodb://localhost:27017/test'
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
