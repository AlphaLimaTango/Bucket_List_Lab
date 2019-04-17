const PubSub = require('../helpers/pubsub.js');

const BucketDisplayView = function(container) {
  this.container = container
}

BucketDisplayView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketList:dataloaded', (event) => {
    this.clearInput();
    console.dir(event)
    this.render(event.detail);
  })
};

BucketDisplayView.prototype.clearInput = function () {
  this.container.innerHTML = " ";
};

BucketDisplayView.prototype.render = function (listItem) {
  for (item of listItem){
    const bucketListItem = document.createElement('li');
    bucketListItem.textContent = item.bucketlist
    this.container.appendChild(bucketListItem);
  }
  // const bucketListItem = document.createElement('li');
  // console.dir(listItem);
  // bucketListItem.textContent = listItem
  // this.container.appendChild(bucketListItem);
};

module.exports = BucketDisplayView;
