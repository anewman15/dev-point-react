import fileHash from '../utils/fileHash';
import getPresignedUrl from './getPresignedUrl';
import storeToS3Bucket from './storeToS3Bucket';
import updateProfileImage from './updateProfileImage';

const uploadProfileImage = async userInfo => {
  const { fileBinary } = userInfo;
  try {
    const fileMD5 = await fileHash(fileBinary);
    const presignedUrlResponse = await getPresignedUrl(fileBinary, fileMD5);

    const presignedUrlParams = await presignedUrlResponse.json();

    const s3Response = await storeToS3Bucket(presignedUrlParams, fileBinary);

    if (s3Response.status !== 200) throw (new Error('Error while uploading to storage service.'));

    return await updateProfileImage(userInfo, presignedUrlParams.blob_signed_id);
  } catch (e) {
    return e;
  }
};

export default uploadProfileImage;
