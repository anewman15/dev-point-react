import NavItemAppointments from './NavItemAppointments';
import NavItemDevelopers from './NavItemDevelopers';
import NavItemUsername from './NavItemUsername';
import SignOutButton from './SignOutButton';

function NavItemsLoggedIn() {
  return (
    <>
      <NavItemDevelopers />
      <NavItemAppointments />
      <NavItemUsername />
      <SignOutButton />
    </>
  );
}

export default NavItemsLoggedIn;
