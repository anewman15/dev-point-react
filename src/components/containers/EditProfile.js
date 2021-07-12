/* eslint-disable jsx-a11y/label-has-associated-control */

import EditProfileImageSection from './EditProfileImageSection';
import EditProfileEmploymentSection from './EditProfileEmploymentSection';
import EditProfileNameSection from './EditProfileNameSection';
import EditProfileLinksSection from './EditProfileLinksSection';
import EditProfileContactSection from './EditProfileContactSection';

const EditProfile = () => (
  <div className="my-1 p-3">
    <h1 className="mb-4 px-2 is-size-1 has-text-centered has-text-weight-bold">Edit Profile</h1>
    <EditProfileImageSection />
    <EditProfileNameSection />
    <EditProfileEmploymentSection />
    <EditProfileLinksSection />
    <EditProfileContactSection />
  </div>
);

export default EditProfile;
