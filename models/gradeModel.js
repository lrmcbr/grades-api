import mongoose from 'mongoose';
const GradeSchema = mongoose.Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true },
  type: { type: String, required: true },
  value: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0) throw new Error('Valor negativo não permitido');
    },
  },
  lastModified: { type: Date, required: true },
});

const gradeModel = mongoose.model('desafio4', GradeSchema, 'desafio4');

export { gradeModel };
