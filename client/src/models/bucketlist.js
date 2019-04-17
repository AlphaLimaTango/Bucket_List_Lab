const PubSub = require('../helpers/pubsub.js');
const RequestHelper = require('../helpers/request_helper.js');

const BucketList = function(url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
}

BucketList.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:New-item', (event) => {
    this.createItem(event.detail)
  })
};

BucketList.prototype.createItem = function (data) {
  this.request.post(data)
  .then( (listItem) => {
    PubSub.publish('BucketList:dataloaded', listItem)
  } )
};

BucketList.prototype.getData = function () {
  this.request.get()
    .then( (listItem) => {
      PubSub.publish('BucketList:dataloaded', listItem)
    } )
};

module.exports = BucketList;
