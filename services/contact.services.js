const Contact = require("../models/Contact");

// Get Contact Service
exports.getContactService = async (reqData) => {
  // Query Handle
  let filters = { ...reqData };
  const excludeFields = ["sort", "page", "limit", "fields"];
  excludeFields.forEach((filter) => delete filters[filter]);
  const { limit = 2, page = 1, sort, fields } = reqData;
  const queries = {};
  if (sort) {
    const result = sort.split(",").join(" ");
    queries.sortBy = result;
  }
  if (fields) {
    const result = fields.split(",").join(" ");
    queries.fields = result;
  }
  // Pagination
  const totalContact = await Contact.countDocuments(filters);
  const totalPage = Math.ceil(totalContact / limit);

  const result = await Contact.find(filters)
    .skip(+(page - 1) * limit)
    .limit(+limit)
    .select(queries.fields)
    .sort(queries.sortBy);
  return { totalContact, totalPage, result };
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

// Save Bulk Contact Service
exports.saveBulkContactService = async (reqData) => {
  const result = await Contact.create(reqData);
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
