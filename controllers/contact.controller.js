const {
  getContactService,
  getContactByIdService,
  saveContactService,
  updateContactService,
  deleteContactService,
} = require("../services/contact.services");

// Get API
exports.getData = async (req, res, next) => {
  try {
    const result = await getContactService(req.query);

    res.status(200).json({
      success: true,
      message: `Data get successfully`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Data can't get`,
      error: error.message,
    });
  }
};

// Get Conatct by ID API
exports.getDataById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getContactByIdService(id);
    res.status(200).json({
      success: true,
      message: `Data get successfully`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Data get failed`,
      error: error.message,
    });
  }
};

// Save API
exports.saveData = async (req, res, next) => {
  try {
    // Save
    const reqData = req.body;
    const result = await saveContactService(reqData);
    result.logger();

    res.status(200).json({
      success: true,
      message: `Data inserted successfully`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Data inserted failed`,
      error: error.message,
    });
  }
};

// Update API
exports.updateData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const reqData = req.body;
    const result = await updateContactService(id, reqData);
    res.status(200).json({
      success: true,
      message: `Data update successfully`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Data update failed`,
      error: error.message,
    });
  }
};

// Delete API
exports.deleteData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteContactService(id);
    res.status(200).json({
      success: true,
      message: `Data delete successfully`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Data delete failed`,
      error: error.message,
    });
  }
};
