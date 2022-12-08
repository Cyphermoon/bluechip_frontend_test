import { StyledInnerWrapper, StyledNav, StyledSideBar, StyledSideBarIcon } from "../styles/StyledSideBar.style"
import { BiHomeAlt, BiLayer, BiLineChart } from "react-icons/bi"
import { BsFlag } from "react-icons/bs"
import { FiBarChart2, FiCheckSquare, FiCrosshair, FiLifeBuoy, FiUser, FiUsers } from "react-icons/fi"
import { CiSettings } from "react-icons/ci"

import Logo from "./Logo"
import { StyledSubMenu, StyledSubMenuHeader } from "../styles/StyledSubMenu"

const Sidebar = () => {
  return (
    <StyledSideBar>

      <StyledNav>
        <Logo />

        <StyledInnerWrapper>
          <ul className="nav-header">
            <SideBarIcon icon={<BiHomeAlt />} active />
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

      <StyledSubMenu>
        <StyledSubMenuHeader>
          <p>Dashboard</p>
          <ul>
            <SideBarIcon icon={<BiLineChart />} text="overview" active />
            <SideBarIcon icon={<FiUser />} text="My details" />
          </ul>
        </StyledSubMenuHeader>

      </StyledSubMenu>
    </StyledSideBar>
  )
}

const SideBarIcon = ({ icon, text, active }) => {
  return (
    <StyledSideBarIcon className={`${text && "text-present"} ${active && "active"}`} >
      {icon}
      {text && <span>{text}</span>}
    </StyledSideBarIcon>
  )
}

export default Sidebar