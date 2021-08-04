/* eslint-disable camelcase */
const storeToS3Bucket = async (presignedUrlParams, fileBinary) => {
  const { direct_upload } = presignedUrlParams;
  try {
    return await fetch(direct_upload.url, {
      method: 'PUT',
      headers: direct_upload.headers,
      body: fileBinary,
    });
  } catch (e) {
    return e;
  }
};

export default storeToS3Bucket;
