import express from 'express'
import ParcelService from '../services/parcel.service.js'

const router = express.Router()
const service = new ParcelService()

router.get('/', async (req, res) => {
  const parcels = await service.getAll()
  res.send(parcels)
})

router.get('/:id', async (req, res) => {
  const parcel = await service.findOne(req.params.id)
  res.send(parcel)
})

router.post('/', async (req, res) => {
  const newParcel = req.body
  const parcelSaved = await service.create(newParcel)
  res.json({
    message: 'Parcel created',
    createdParcel: { ...parcelSaved._doc }
  })
})

router.patch('/:id', async (req, res) => {
  const parcelUpdated = await service.update(req.params.id, req.body)
  res.json({
    message: 'Parcel updated',
    updatedParcel: { ...parcelUpdated._doc }
  })
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const parcelDeleted = await service.delete(id)
  res.json({
    message: 'Parcel deleted',
    deletedParcel: { ...parcelDeleted._doc }
  })
})

export default router
