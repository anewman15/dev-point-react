const storeToS3Bucket = async (url, presignedUrlParams, fileBinary) => {
  try {
    return await fetch(url, {
      method: 'PUT',
      headers: presignedUrlParams.direct_upload.headers,
      body: fileBinary,
    });
  } catch (e) {
    return e;
  }
};

export default storeToS3Bucket;
