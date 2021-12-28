const updateProfileImage = async (userInfo, blobSignedId) => {
  try {
    return await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/users/${userInfo.user_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          profile_image: blobSignedId,
        },
      }),
      credentials: 'include',
    });
  } catch (e) {
    return e;
  }
};

export default updateProfileImage;
