import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logoImg from "../../assets/Logo sin fondo 2 JM.png";
import profileImg from "../../assets/profile-2.400kb.png";
import { useUserAuth } from "../../store/user";

const Header = () => {
  const { user, logout } = useUserAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Navbar
      fluid
      className="bg-transparent w-full absolute z-30 outline outline-white outline-1"
    >
      <Navbar.Brand href="/">
        <img src={logoImg} className="mr-3 h-10 sm:h-10" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          Genios Project AI
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img={profileImg} rounded />}
        >
          <Dropdown.Header>
            <span className="block text-sm">{user?.displayName}</span>
            <span className="block truncate text-sm font-medium">
              {user?.email}
            </span>
          </Dropdown.Header>
          <Dropdown.Item onClick={handleLogout}>Cerrar Sesión</Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
  );
};

export { Header };
