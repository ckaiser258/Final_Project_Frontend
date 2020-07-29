import React, { Fragment } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper"
import { Link } from "react-router-dom";

const SidebarItem = ({ label, items, depthStep = 10, depth = 0, ...rest }) => {
  return (
    <Fragment>
      <ListItem button dense {...rest}>
        <ListItemText style={{ paddingLeft: depth * depthStep }}>
          <span style={{ fontWeight: "bold" }}>{label}</span>
        </ListItemText>
      </ListItem>
      {Array.isArray(items) ? (
        <List disablePadding dense>
          {items.map((subItem) => (
            <SidebarItem
              key={subItem.name}
              depth={depth + 1}
              depthStep={depthStep}
              {...subItem}
            />
          ))}
        </List>
      ) : null}
    </Fragment>
  );
};

const Sidebar = ({ items, depthStep, depth, user }) => {
  return (
    <div className="sidebar" style={{ paddingLeft: 25}}>
       <Paper style={{backgroundColor: "#F5F4E5"}}>
      <List disablePadding dense>
        <div
          style={{ marginBottom: 10 }}
          style={{ color: "#F5B922", fontWeight: "bold", paddingLeft: 8 }}
        >
          {user.first_name} {user.last_name}
        </div>
        {items.map((sidebarItem, index) => (
          <Link to={`/${sidebarItem.name}`} style={{ color: "black" }}>
            <SidebarItem
              key={`${sidebarItem.name}${index}`}
              depthStep={depthStep}
              depth={depth}
              {...sidebarItem}
            />
          </Link>
        ))}
      </List>
      </Paper>
    </div>
  );
};

export default Sidebar;
