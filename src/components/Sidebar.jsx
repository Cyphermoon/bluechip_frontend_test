import { StyledNav, StyledSideBar, StyledSideBarIcon } from "../styles/StyledSideBar.style"
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
        <div className="nav-inner-wrapper">
          <div className="nav-header">
            <ul>
              <SideBarIcon icon={<BiHomeAlt />} />
              <SideBarIcon icon={<FiBarChart2 />} />
              <SideBarIcon icon={<BiLayer />} />
              <SideBarIcon icon={<FiCheckSquare />} />
              <SideBarIcon icon={<BsFlag />} />
              <SideBarIcon icon={<FiUsers />} />
            </ul>

          </div>
          <div className="nav-footer">
            <ul>
              <SideBarIcon icon={<FiLifeBuoy />} />
              <SideBarIcon icon={<CiSettings />} />
            </ul>

            <img src="/assets/girl-avatar.png" alt="Profile" />

          </div>
        </div>

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