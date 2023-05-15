const mongoose = require('mongoose')
const appointmentSchema = mongoose.Schema(
  {
    patient_name: {
      type: String,
      required: [true, 'please enter a Patient Name'],
    },
    doctor_name: {
      type: String,
      required: [true, 'please enter a Doctor Name'],
    },

    appointment_time: {
      type: String,
      required: [true, 'please enter a Time'],
    },

    appointment_date: {
      type: String,
      required: [true, 'please enter the Date'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Appointment', appointmentSchema)
