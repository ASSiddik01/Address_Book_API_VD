const Contact = require("../models/Contact");

// Get Contact Service
exports.getContactService = async () => {
  const result = await Contact.find({});
  return result;
};

// Save Contact Service
exports.saveContactService = async (reqData) => {
  const data = new Contact(reqData);
  const result = await data.save();
  return result;
};

// Update Contact Service
exports.updateContactService = async (id, reqData) => {
  const result = await Contact.updateOne(
    { _id: id },
    { $set: reqData },
    { runValidators: true }
  );
  return result;
};

// Update Multiple Contact Service
exports.updateMultipleContactService = async (reqData) => {
  // const result = await Product.updateMany(
  //   { _id: reqData.ids },
  //   reqData.data,
  //   { runValidators: true }
  // );

  console.log(reqData);
  const products = [];

  reqData.forEach((product) => {
    products.push(Contact.updateOne({ _id: product.id }, product.data));
  });

  const result = await Promise.all(products);

  return result;
};

// Delete Contact Service
exports.deleteContactService = async (id) => {
  const result = await Contact.deleteOne({ _id: id });
  return result;
};

//Delete Multiple Contact Service
exports.deleteMultipleContactService = async (reqData) => {
  const result = await Contact.deleteMany({ _id: reqData.ids });
  return result;
};
