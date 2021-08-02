const updateProfileImage = async (userInfo, blobSignedId) => {
  try {
    return await fetch(`https://anewman15-dev-point.herokuapp.com/users/${userInfo.user_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        profile_image: blobSignedId,
      }),
    });
  } catch (e) {
    return e;
  }
};

export default updateProfileImage;
