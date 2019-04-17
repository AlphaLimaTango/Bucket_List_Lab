const PubSub = require('../helpers/pubsub.js');

const BucketDisplayView = function(container) {
  this.container = container
}

BucketDisplayView.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:New-item', (event) => {
    this.clearInput();
    this.render(event.detail);
  })
};

BucketDisplayView.prototype.clearInput = function () {
  this.container.innerHTML = " ";
};

BucketDisplayView.prototype.render = function (listItem) {
  const bucketListItem = document.createElement('li');
  bucketListItem.textContent = listItem.bucketlist
  this.container.appendChild(bucketListItem);
};

module.exports = BucketDisplayView;
