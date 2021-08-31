/* eslint-disable jsx-a11y/label-has-associated-control */

import EditProfileImageSection from './EditProfileImageSection';
import EditProfileNewslettersSection from './EditProfileNewslettersSection';
// import EditProfileEmploymentSection from './EditProfileEmploymentSection';
// import EditProfileNameSection from './EditProfileNameSection';
// import EditProfileLinksSection from './EditProfileLinksSection';
// import EditProfileContactSection from './EditProfileContactSection';

const EditProfile = () => (
  <div className="my-1 p-3">
    <h1 className="mb-4 px-2 is-size-1 has-text-centered has-text-weight-bold">Edit Profile</h1>
    <div className="mb-4 p-5 notification is-danger is-light">
      <p className="my-2">
        This page will soon allow you to add your name, employment and contact information.
        For now though, go ahead and upload your profile image.
      </p>
    </div>
    <EditProfileImageSection />
    {/* <EditProfileNameSection />
    <EditProfileEmploymentSection />
    <EditProfileLinksSection />
    <EditProfileContactSection /> */}
    <EditProfileNewslettersSection />
  </div>
);

export default EditProfile;
