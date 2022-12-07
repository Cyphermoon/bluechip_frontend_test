import { StyledInnerWrapper, StyledNav, StyledSideBar, StyledSideBarIcon } from "../styles/StyledSideBar.style"
import { BiHomeAlt, BiLayer } from "react-icons/bi"
import { BsFlag } from "react-icons/bs"
import { FiBarChart2, FiCheckSquare, FiLifeBuoy, FiUsers } from "react-icons/fi"
import { CiSettings } from "react-icons/ci"

import Logo from "./Logo"

const Sidebar = () => {
  return (
    <StyledSideBar>

      <StyledNav>
        <Logo />

        <StyledInnerWrapper>
          <ul className="nav-header">
            <SideBarIcon icon={<BiHomeAlt />} />
            <SideBarIcon icon={<FiBarChart2 />} />
            <SideBarIcon icon={<BiLayer />} />
            <SideBarIcon icon={<FiCheckSquare />} />
            <SideBarIcon icon={<BsFlag />} />
            <SideBarIcon icon={<FiUsers />} />
          </ul>

          <div className="nav-footer">
            <ul>
              <SideBarIcon icon={<FiLifeBuoy />} />
              <SideBarIcon icon={<CiSettings />} />
            </ul>

            <img src="/assets/girl-avatar.png" alt="Profile" />
          </div>
        </StyledInnerWrapper>
      </StyledNav>

      <div>

      </div>
    </StyledSideBar>
  )
}

const SideBarIcon = ({ icon }) => {
  return (
    <StyledSideBarIcon>
      {icon}
    </StyledSideBarIcon>
  )
}

export default Sidebar