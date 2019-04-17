use bucketlist;
db.dropDatabase();

db.bucketlistitem.insertOne(
  {
    bucketlist: "Skydiving"
  }
);
