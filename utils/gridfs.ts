const mongoose = require('mongoose');

let bucket;

const getBucket = () => {
  if (!mongoose.connection || mongoose.connection.readyState !== 1) {
    throw new Error('MongoDB connection is not ready for GridFS operations.');
  }

  if (!bucket) {
    bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: 'uploads',
    });
  }

  return bucket;
};

const findFileByFilename = async (filename) => {
  const bucketInstance = getBucket();
  const files = await bucketInstance.find({ filename }).toArray();
  return files[0];
};

const deleteFileByFilename = async (filename) => {
  const bucketInstance = getBucket();
  const files = await bucketInstance.find({ filename }).toArray();

  await Promise.all(files.map((file) => bucketInstance.delete(file._id)));
};

const uploadBuffer = ({ filename, buffer, contentType, metadata }) => {
  const bucketInstance = getBucket();

  return new Promise((resolve, reject) => {
    const uploadStream = bucketInstance.openUploadStream(filename, {
      contentType,
      metadata,
    });

    uploadStream.on('finish', resolve);
    uploadStream.on('error', reject);

    uploadStream.end(buffer);
  });
};

const openDownloadStreamByFilename = (filename) => {
  const bucketInstance = getBucket();
  return bucketInstance.openDownloadStreamByName(filename);
};

module.exports = {
  findFileByFilename,
  deleteFileByFilename,
  uploadBuffer,
  openDownloadStreamByFilename,
};
