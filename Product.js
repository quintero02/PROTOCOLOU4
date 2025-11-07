import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sku: { type: String, unique: true },
  price: { type: Number, default: 0 },
  stock: { type: Number, default: 0 },
  description: String
}, { timestamps: true });

ProductSchema.pre('save', function(next) {
  if (!this.sku) {
    this.sku = 'SKU-' + Date.now();
  }
  next();
});

export default mongoose.model('Product', ProductSchema);
