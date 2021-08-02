const PRESIGNED_URL_API_ENDPOINT = 'https://anewman15-dev-point.herokuapp.com/presigned_url';

const getPresignedUrl = async (file, fileHash) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      file: {
        filename: file.name,
        byte_size: file.size,
        checksum: fileHash,
        content_type: file.type,
        metadata: {
          message: 'Profile image',
        },
      },
    }),
  };

  try {
    return await fetch(PRESIGNED_URL_API_ENDPOINT, options);
  } catch (e) {
    return e;
  }
};

export default getPresignedUrl;
