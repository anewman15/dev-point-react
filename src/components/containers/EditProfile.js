/* eslint-disable jsx-a11y/label-has-associated-control */

import EditProfileImageSection from './EditProfileImageSection';
// import EditProfileNewslettersSection from './EditProfileNewslettersSection';
// import EditProfileEmploymentSection from './EditProfileEmploymentSection';
// import EditProfileNameSection from './EditProfileNameSection';
// import EditProfileLinksSection from './EditProfileLinksSection';
// import EditProfileContactSection from './EditProfileContactSection';

const EditProfile = () => (
  <div className="page-container bg-gray-50 page-border page-shadow">
    <div className="m-6 pt-8">
      <h1 className="page-title">Edit Profile</h1>
    </div>

    <hr className="mx-8 border-1 border-gray-200" />

    <div className="mb-4 p-5 notif notif-warning">
      This page will soon allow you to add your name, employment and contact information.
      For now though, go ahead and upload your profile image.
    </div>

    <EditProfileImageSection />
    {/* <EditProfileNameSection />
    <EditProfileEmploymentSection />
    <EditProfileLinksSection />
    <EditProfileContactSection /> */}
    {/* <EditProfileNewslettersSection /> */}
  </div>
);

export default EditProfile;
