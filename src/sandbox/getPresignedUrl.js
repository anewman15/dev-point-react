const PRESIGNED_URL_API_ENDPOINT = `${process.env.REACT_APP_BACKEND_API_URL}/presigned_url`;

const getPresignedUrl = async (file, fileHash) => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
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
    credentials: 'include',
  };

  try {
    return await fetch(PRESIGNED_URL_API_ENDPOINT, options);
  } catch (e) {
    return e;
  }
};

export default getPresignedUrl;
