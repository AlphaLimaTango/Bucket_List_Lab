const PubSub = require('../helpers/pubsub.js');

const BucketFormView = function(form) {
  this.form = form
};

BucketFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (event) => {
    this.handleSubmit(event);
  });
};

BucketFormView.prototype.handleSubmit = function (event) {
  event.preventDefault()
  const bucketListItem = this.createBucketListItem(event.target);
  PubSub.publish('FormView:New-item', bucketListItem)
  event.target.reset();
};

BucketFormView.prototype.createBucketListItem = function (form) {
  const newItem = {
    bucketlist: form.bucketlist.value,
    status: form.status.value
  }
  return newItem
};

module.exports = BucketFormView;
