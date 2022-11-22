import Parcel from '../models/Parcels.js'
class ParcelService {
  constructor() {}

  async getAll() {
    const parcels = await Parcel.find({})
    return parcels
  }

  async findOne(id) {
    const parcel = await Parcel.findById(id)
    return parcel
  }

  async create(data) {
    const newParcel = new Parcel({
      ...data
    })
    const parcelSaved = await newParcel.save()
    return parcelSaved
  }

  async update(id, data) {
    await Parcel.findByIdAndUpdate(id, data)
    const parcelUpdated = await Parcel.findById(id)
    return parcelUpdated
  }

  async delete(id) {
    const parcelDeleted = await Parcel.findByIdAndDelete(id)
    return parcelDeleted
  }
}

export default ParcelService
