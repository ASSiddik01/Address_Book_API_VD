const mongoose = require("mongoose");
const validator = require("validator");

// Schema Design
const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      trim: true,
      unique: [true, "This name {VALUE} is already use"],
      minLength: [3, "Name must be at least 3 charcters"],
      maxLength: [100, "Name can't be more than 100 charcters"],
    },
    phone: {
      type: String,
      trim: true,
      unique: [true, "This phone number {VALUE} is already use"],
      required: [true, "Provide a phone number"],
    },
    email: {
      type: String,
      validate: [validator.isEmail, "Provide a valid Email"],
      trim: true,
      lowercase: true,
      unique: [true, "This email {VALUE} is already use"],
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["active", "inactive"],
        message: "Status can't be {VALUE}. Only 'active' or 'inactive'",
      },
    },
  },
  {
    timestamps: true,
  }
);

// Middleware
contactSchema.pre("save", function (next) {
  if (this.email == "") {
    this.status = "inactive";
  }
  next();
});

// Instance Methods
contactSchema.methods.logger = function () {
  console.log(`Contact save for ${this.name}`);
};

// Model Create
const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;
