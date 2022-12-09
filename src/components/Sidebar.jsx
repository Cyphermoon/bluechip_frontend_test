// icons
import { BiHomeAlt, BiLayer, BiLineChart } from "react-icons/bi"
import { BsFlag } from "react-icons/bs"
import { FiBarChart2, FiCheckSquare, FiLifeBuoy, FiLogOut, FiUser, FiUsers } from "react-icons/fi"
import { CiSettings } from "react-icons/ci"

//styles
import { StyledInnerWrapper, StyledNav, StyledSideBar, StyledSideBarIcon } from "../styles/sidebar.style"
import { StyledSubMenu, StyledSubMenuFooter, StyledSubMenuHeader } from "../styles/StyledSubMenu"

import Logo from "./Logo"
import { Flex } from "../styles/util.style"
import MobileNavBar from "./MobileNavBar"

const Sidebar = ({ navOpened, setNavOpened }) => {

  const toggleNavOpened = () => {
    setNavOpened(!navOpened)
  }

  return (
    <>
      <MobileNavBar
        navOpened={navOpened}
        toggleNavOpened={toggleNavOpened} />

      <StyledSideBar className={` ${navOpened ? "mobile-opened" : ""}`}>
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

          <StyledSubMenuFooter>
            <Flex align="flex-start">
              <p>Tofunmi Sojimi</p>
              <FiLogOut />
            </Flex>

            <small>tofunmisojimi@untitledui.com</small>
          </StyledSubMenuFooter>
        </StyledSubMenu>
      </StyledSideBar>
    </>

  )
}

const SideBarIcon = ({ icon, text, active }) => {
  return (
    <StyledSideBarIcon className={`${text ? "text-present" : ""} ${active ? "active" : ""}`} >
      {icon}
      {text && <span>{text}</span>}
    </StyledSideBarIcon>
  )
}

export default Sidebar