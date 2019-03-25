let item = {
  _id: '',
  userId: '',
  name: '',
  time: '',
  date: '',
  comment: '',
  tags: [],
  location: 'required',
  lnglat: ['required'],
  image: '',
  type: ''
};

let user = {
  _id: 'required',
  name: 'required',
  email: 'required',
  password: 'required',
  country: 'required',
  city: 'required',
  zip: 'required'
};

let message = {
  _id: 'required',
  fromUserId: 'required',
  toUserId: 'required',
  message: 'required',
  date: 'required'
};