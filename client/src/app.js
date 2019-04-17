const BucketFormView = require('./views/form_view.js')
const BucketDisplayView = require('./views/display_view.js')
const BucketList = require('./models/bucketlist.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript loaded')

  const bucketListForm = document.querySelector('#input-form')
  const bucketListFormView = new BucketFormView(bucketListForm);
  bucketListFormView.bindEvents();

  const bucketContainer = document.querySelector('#bucket-list-items')
  const bucketDisplayView = new BucketDisplayView(bucketContainer);
  bucketDisplayView.bindEvents();

  const url = 'http://localhost:3000/api/bucketlistitem'
  const bucketlist = new BucketList(url)
  bucketlist.bindEvents()
  bucketlist.getData()
});
