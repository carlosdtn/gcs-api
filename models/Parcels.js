import { Schema, model } from 'mongoose'

const parcelSchema = new Schema(
  {
    parcelId: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    country: {
      type: String,
      required: true,
      trim: true
    },
    city: {
      type: String,
      required: true,
      trim: true
    },
    image: { type: String, required: true }
  },
  { timestamps: true, versionKey: false }
)

export default model('Parcel', parcelSchema)
