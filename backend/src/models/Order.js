const mongoose = require("mongoose");
const { ListingSchema } = require("./Listing");

const OrderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "Auth", required: true },
    merchant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Auth",
      required: true,
    },
    listing: {
      type: ListingSchema,
      required: true,
    },
    purchaseQuantity: { type: Number, required: true },
    isCollected: { type: Boolean, default: false },
    totalPrice: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    collection: "orders",
  }
);

module.exports = mongoose.model("Order", OrderSchema);
