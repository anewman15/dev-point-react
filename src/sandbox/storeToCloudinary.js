/* eslint-disable camelcase */
const storeToCloudinary = async (presignedUrlParams, fileBinary) => {
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

export default storeToCloudinary;
