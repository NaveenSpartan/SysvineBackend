const express = require('express')
const mongoose = require('mongoose')
const Appointment = require('./models/userModal')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

//create request
app.post('/appointment', async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body)
    res.status(200).json(appointment)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
})

//Get request
app.get('/appointment', async (req, res) => {
  try {
    const appointment = await Appointment.find({})
    res.status(200).json(appointment)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//Get request by ID
app.get('/appointment/:id', async (req, res) => {
  try {
    const { id } = req.params
    const appointment = await Appointment.findById(id)
    res.status(200).json(appointment)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//update request
app.put('/appointment/:id', async (req, res) => {
  try {
    const { id } = req.params
    const appointment = await Appointment.findByIdAndUpdate(id, req.body)
    if (!appointment) {
      res
        .status(404)
        .json({ message: `cannot find the appointment with ID: ${id}` })
    }
    res.status(200).json(appointment)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//delete request
app.delete('/appointment/:id', async (req, res) => {
  try {
    const { id } = req.params
    const appointment = await Appointment.findByIdAndDelete(id)
    if (!appointment) {
      res
        .status(404)
        .json({ message: `cannot find the appointment with ID: ${id}` })
    }
    res.status(200).json(appointment)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

mongoose
  .connect(
    'mongodb+srv://naveenspartan:naveenspartan@naveenapi.ztndpuf.mongodb.net/BACKEND?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('connected to mongoDB')
    app.listen(8080, () => {
      console.log('Port is running on 8080')
    })
  })
  .catch((error) => {
    console.log(error.message)
  })
