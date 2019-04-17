const BucketFormView = require('./views/form_view.js')
const BucketDisplayView = require('./views/display_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript loaded')

  const bucketListForm = document.querySelector('#input-form')
  const bucketListFormView = new BucketFormView(bucketListForm);
  bucketListFormView.bindEvents();

  const bucketContainer = document.querySelector('#bucket-list-items')
  const bucketDisplayView = new BucketDisplayView(bucketContainer);
  bucketDisplayView.bindEvents();
});
