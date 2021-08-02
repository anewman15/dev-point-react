const updateProfileImage = async userInfo => {
  try {
    return await fetch(`https://anewman15-dev-point.herokuapp.com/users/${userInfo.user_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        profile_image: userInfo.blobSignedId,
      }),
    });
  } catch (e) {
    return e;
  }
};

export default updateProfileImage;
