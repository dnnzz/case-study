import React from "react";
import logo from "../../Assets/sociality-logo.jpg";
import clientLogo from "../../Assets/SidebarLogo1.png";
import clientLogo1 from "../../Assets/SidebarLogo2.png";
import clientLogo2 from "../../Assets/SidebarLogo3.png";
import clientLogo3 from "../../Assets/SidebarLogo4.png";
import clientLogo4 from "../../Assets/SidebarLogo5.png";
import clientLogo5 from "../../Assets/SidebarLogo6.png";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { ReactComponent as NotificationIcon } from "../../Assets/Icon1.svg";
import { ReactComponent as SummaryIcon } from "../../Assets/Icon2.svg";
import { ReactComponent as PublishIcon } from "../../Assets/Icon3.svg";
import { ReactComponent as EngageIcon } from "../../Assets/Icon4.svg";
import { ReactComponent as ListenIcon } from "../../Assets/Icon5.svg";

import "react-pro-sidebar/dist/css/styles.css";
function Sidebar(props) {
  return (
    <div className="sticky left-0  bottom-0 w-72 bg-sidebar-bg-secondary">
      <div className="flex p-1 justify-center bg-gray-500 bg-opacity-10">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="flex h-full">
        <div className="flex flex-col align-between bg-sidebar-bg-primary">
          <img src={clientLogo} className="m-2" alt="client logo-1"></img>
          <img
            src={clientLogo1}
            className="m-2  rounded-sm"
            alt="client logo-2"
          ></img>
          <img
            src={clientLogo2}
            className="m-2  rounded-sm"
            alt="client logo-3"
          ></img>
          <img
            src={clientLogo3}
            className="m-2  rounded-sm"
            alt="client logo-4"
          ></img>
          <img
            src={clientLogo4}
            className="m-2  rounded-sm"
            alt="client logo-5"
          ></img>
          <img
            src={clientLogo5}
            className="m-2 rounded-sm"
            alt="client logo-6"
          ></img>
        </div>
        <div className="bg-sidebar-bg-secondary h-full flex-grow">
          <div className="h-50">
            <ProSidebar width="auto">
              <Menu>
                <MenuItem
                  icon={<NotificationIcon />}
                  suffix={
                    <span
                      className="badge left-10"
                      style={{
                        border: "1px solid #5a968e",
                        borderRadius: "3px",
                        fontSize: "15px",
                        position: "absolute",
                        left: "180px",
                        top: "12px",
                        right: "12px",
                        textAlign: "center",
                        marginLeft: "12px",
                      }}
                    >
                      {29}
                    </span>
                  }
                >
                  NOTIFICATIONS
                </MenuItem>
                <SubMenu icon={<SummaryIcon />} title="SUMMARY">
                  <MenuItem>Item</MenuItem>
                </SubMenu>
                <SubMenu
                  defaultOpen={true}
                  icon={<PublishIcon />}
                  title="PUBLISH"
                >
                  <MenuItem>Compose</MenuItem>
                  <MenuItem active={true}>Feed</MenuItem>
                </SubMenu>
                <SubMenu icon={<EngageIcon />} title="ENGAGE">
                  <MenuItem>Item</MenuItem>
                </SubMenu>
                <SubMenu icon={<ListenIcon />} title="LISTEN">
                  <MenuItem>Item</MenuItem>
                </SubMenu>
                <SubMenu icon={<SummaryIcon />} title="REPORT">
                  <MenuItem>Item</MenuItem>
                </SubMenu>
              </Menu>
            </ProSidebar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
