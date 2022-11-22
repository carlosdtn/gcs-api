import { Schema, model } from 'mongoose'

const parcelSchema = new Schema(
  {
    region: {
      type: String,
      required: true,
      trim: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    code: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    orchardName: {
      type: String,
      required: true,
      trim: true
    },
    image: { type: String, trim: true }
  },
  { timestamps: true, versionKey: false }
)

export default model('Parcel', parcelSchema)
