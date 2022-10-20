const Contact = require("../models/Contact");

// Get Contact Service
exports.getContactService = async () => {
  const result = await Contact.find({});
  return result;
};

// Get Contact by ID Service
exports.getContactByIdService = async (id) => {
  const result = await Contact.find({ _id: id });
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

// Delete Contact Service
exports.deleteContactService = async (id) => {
  const result = await Contact.deleteOne({ _id: id });
  return result;
};
