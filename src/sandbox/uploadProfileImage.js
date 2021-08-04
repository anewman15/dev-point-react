/* eslint-disable consistent-return */
import fileHash from '../utils/fileHash';
import getPresignedUrl from './getPresignedUrl';
import storeToS3Bucket from './storeToS3Bucket';
import updateProfileImage from './updateProfileImage';

const uploadProfileImage = async userInfo => {
  // const { fileBinary } = userInfo;
  // try {
  //   const fileMD5 = await fileHash(fileBinary);

  //   let presignedUrlParams;
  //   const presignedUrlResponse = getPresignedUrl(fileBinary, fileMD5);

  //   presignedUrlResponse.then(response => {
  //     if (response.status === 200) {
  //       return response.json();
  //     }
  //   })
  //     .then(data => {
  //       presignedUrlParams = data;
  //     });

  //   const s3Response = await storeToS3Bucket(presignedUrlParams, fileBinary);

  //   if (s3Response.status !== 200) throw (new Error('Error while uploading to storage service.'));

  //   return await updateProfileImage(userInfo, presignedUrlParams.blob_signed_id);
  // } catch (e) {
  //   return e;
  // }
};

export default uploadProfileImage;
