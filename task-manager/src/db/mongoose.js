const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if(validator.contains(value, 'password')) {
        throw new Error('Password should not contain the word "password"');
      }
    },
    minlength: 7,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if(!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    },

  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number');
      }
    }
  },
});

const me = new User({
  name: '    Misha   ',
  password: '4343password ',
  email: 'ZIHAREVmihail@gmail.com   '
});

const Task = mongoose.model('Task', {
  description: {
    type: String,
    trim: true,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

me.save().then(()=> console.log(me)).catch(er => console.log(er));

const goToPool = new Task({
  description: '   please check in the pool',
  completed: false,
});

goToPool.save().then(()=> {
  console.log(goToPool);
}).catch((error) => {
  console.log('error!', error);
})