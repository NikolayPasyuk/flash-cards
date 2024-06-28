import { Link, useNavigate } from "react-router-dom";

import { Logo } from "../../../assets/icons/logo/logo.tsx";
import { Logout } from "../../../assets/icons/logout";
import { Person } from "../../../assets/icons/person";
import { Nullable } from "../../../types/common.types.ts";
import { Avatar } from "../avatar";
import { Button } from "../button";
import { Container } from "../container";
import { DropdownItem } from "../dropdown/dropdown-items/dropdow-item.tsx";
import { Dropdown } from "../dropdown/dropdown.tsx";
import { Typography } from "../typography";

import s from "./header.module.scss";

type HeaderPropsType = {
  isLoggedIn: boolean;
  name?: string;
  avatarSrc?: Nullable<string>;
  email?: string;
  logout: () => void;
};

export const Header = ({
  isLoggedIn = true,
  name,
  avatarSrc,
  email = "",
  logout,
}: HeaderPropsType) => {
  const navigate = useNavigate();

  const toProfile = () => {
    navigate("profile");
  };
  const dropdownHeader = (
    name?: string,
    email?: string,
    avatarSrc?: Nullable<string>,
  ) => {
    return (
      <div className={s.dropDownHeader}>
        <Avatar userName={name ?? ""} image={avatarSrc ?? ""} />
        <div>
          <Typography variant={"subtitle2"}>{name}</Typography>
          <Typography variant={"caption"} className={s.email}>
            {email}
          </Typography>
        </div>
      </div>
    );
  };

  const loginOrAvatarContent = !isLoggedIn ? (
    <Button as={Link} to={"login"}>
      Sign In
    </Button>
  ) : (
    <Dropdown
      trigger={
        <div className={s.avatarContainer}>
          <Typography className={s.name} variant={"subtitle1"}>
            {name}
          </Typography>
          <Avatar userName={name ?? ""} image={avatarSrc ?? ""} />
        </div>
      }
    >
      <DropdownItem>{dropdownHeader(name, email, avatarSrc)}</DropdownItem>
      <DropdownItem onSelect={toProfile}>
        <Person />
        <Typography>Profile</Typography>
      </DropdownItem>
      <DropdownItem>
        <div onClick={logout} className={s.dropDownElement}>
          <Logout />
          <Typography>Logout</Typography>
        </div>
      </DropdownItem>
    </Dropdown>
  );

  return (
    <header className={s.header}>
      <Container className={s.headerContainer}>
        <Link to={"/"} className={s.logoLink}>
          <Logo />
        </Link>
        {loginOrAvatarContent}
      </Container>
    </header>
  );
};
