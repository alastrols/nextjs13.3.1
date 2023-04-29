import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Collapse, ListItem, Stack } from "@mui/material";
import Link from "next/link";
import { Layers, BarChart, Person } from "@mui/icons-material";
import ImageIcon from "@mui/icons-material/Image";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import { useRouter } from "next/router";
import PersonIcon from "@mui/icons-material/Person";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Image from "next/image";
import { useSelector } from "react-redux";
const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

type MenuProps = {
  open: boolean;
  onDrawerClose: () => void;
};

export default function Menu({ open, onDrawerClose }: MenuProps) {
  const theme = useTheme();
  const router = useRouter();
  const userSelector = useSelector((store: any) => store.admin);
  const [userOpen, setUserOpen] = React.useState<boolean>(false);
  const [newsOpen, setNewsOpen] = React.useState<boolean>(false);
  const [bannerOpen, setBannerOpen] = React.useState<boolean>(false);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <Stack direction="row" alignItems="center">
          <Image
            width={200}
            height={68}
            unoptimized={true}
            alt="logo"
            src={"/static/images/logo.png"}
          />
          <IconButton onClick={onDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </Stack>
      </DrawerHeader>
      <Divider />

      <List>
        <Link
          href="/admin/user"
          style={{ textDecoration: "none", color: "#000000DE" }}
          passHref
        >
          <ListItem
            button
            onClick={() => setUserOpen(!userOpen)}
            className={
              router.pathname === "/admin/user"
                ? "Mui-selected"
                : router.pathname === "/admin/user/edit"
                ? "Mui-selected"
                : router.pathname === "/admin/user/add"
                ? "Mui-selected"
                : ""
            }
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="User" />
          </ListItem>
        </Link>
      </List>

      <List>
        <Link
          href="#"
          style={{ textDecoration: "none", color: "#000000DE" }}
          passHref
        >
          <ListItem
            onClick={() => setBannerOpen(!bannerOpen)}
            className={
              router.pathname === "/admin/banner/jp"
                ? "Mui-selected"
                : router.pathname === "/admin/banner/jp/edit"
                ? "Mui-selected"
                : router.pathname === "/admin/banner/jp/add"
                ? "Mui-selected"
                : router.pathname === "/admin/banner/en"
                ? "Mui-selected"
                : router.pathname === "/admin/banner/en/edit"
                ? "Mui-selected"
                : router.pathname === "/admin/banner/en/add"
                ? "Mui-selected"
                : router.pathname === "/admin/banner/th"
                ? "Mui-selected"
                : router.pathname === "/admin/banner/th/edit"
                ? "Mui-selected"
                : router.pathname === "/admin/banner/th/add"
                ? "Mui-selected"
                : ""
            }
          >
            <ListItemIcon>
              <PhotoSizeSelectActualIcon />
            </ListItemIcon>
            <ListItemText primary="Banner" />
          </ListItem>

          <Collapse
            key={0}
            in={
              router.pathname === "/admin/banner/jp"
                ? true
                : router.pathname === "/admin/banner/jp/edit"
                ? true
                : router.pathname === "/admin/banner/jp/add"
                ? true
                : router.pathname === "/admin/banner/en"
                ? true
                : router.pathname === "/admin/banner/en/edit"
                ? true
                : router.pathname === "/admin/banner/en/add"
                ? true
                : router.pathname === "/admin/banner/th"
                ? true
                : router.pathname === "/admin/banner/th/edit"
                ? true
                : router.pathname === "/admin/banner/th/add"
                ? true
                : bannerOpen
            }
            timeout="auto"
            unmountOnExit
          >
            <List
              component="li"
              disablePadding
              key={0}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Link
                href="/admin/banner/jp"
                style={{
                  textDecoration:
                    router.pathname == "/admin/banner/jp"
                      ? ""
                      : router.pathname == "/admin/banner/jp/add"
                      ? ""
                      : router.pathname == "/admin/banner/jp/edit"
                      ? ""
                      : "none",
                  color: "#000000DE",
                }}
                passHref
              >
                <ListItem key={0}>
                  <ListItemIcon>
                    <PhotoSizeSelectActualIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    key={0}
                    primary="JP"
                    style={{
                      textDecoration:
                        router.pathname == "/admin/banner/jp"
                          ? "underline"
                          : router.pathname == "/admin/banner/jp/add"
                          ? "underline"
                          : router.pathname == "/admin/banner/jp/edit"
                          ? "underline"
                          : "none",
                    }}
                  />
                </ListItem>
              </Link>
            </List>

            <List
              component="li"
              disablePadding
              key={1}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Link
                href="/admin/banner/en"
                style={{
                  textDecoration:
                    router.pathname == "/admin/banner/en"
                      ? ""
                      : router.pathname == "/admin/banner/en/add"
                      ? ""
                      : router.pathname == "/admin/banner/en/edit"
                      ? ""
                      : "none",
                  color: "#000000DE",
                }}
                passHref
              >
                <ListItem key={1}>
                  <ListItemIcon>
                    <PhotoSizeSelectActualIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    key={1}
                    primary="EN"
                    style={{
                      textDecoration:
                        router.pathname == "/admin/banner/en"
                          ? "underline"
                          : router.pathname == "/admin/banner/en/add"
                          ? "underline"
                          : router.pathname == "/admin/banner/en/edit"
                          ? "underline"
                          : "none",
                    }}
                  />
                </ListItem>
              </Link>
            </List>

            <List
              component="li"
              disablePadding
              key={2}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Link
                href="/admin/banner/th"
                style={{
                  textDecoration:
                    router.pathname == "/admin/banner/th"
                      ? ""
                      : router.pathname == "/admin/banner/th/add"
                      ? ""
                      : router.pathname == "/admin/banner/th/edit"
                      ? ""
                      : "none",
                  color: "#000000DE",
                }}
                passHref
              >
                <ListItem key={2}>
                  <ListItemIcon>
                    <PhotoSizeSelectActualIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    key={2}
                    primary="TH"
                    style={{
                      textDecoration:
                        router.pathname == "/admin/banner/th"
                          ? "underline"
                          : router.pathname == "/admin/banner/th/add"
                          ? "underline"
                          : router.pathname == "/admin/banner/th/edit"
                          ? "underline"
                          : "none",
                    }}
                  />
                </ListItem>
              </Link>
            </List>
          </Collapse>
        </Link>
      </List>

      <List>
        <Link
          href="#"
          style={{ textDecoration: "none", color: "#000000DE" }}
          passHref
        >
          <ListItem
            onClick={() => setNewsOpen(!newsOpen)}
            className={
              router.pathname === "/admin/news/jp"
                ? "Mui-selected"
                : router.pathname === "/admin/news/jp/edit"
                ? "Mui-selected"
                : router.pathname === "/admin/news/jp/add"
                ? "Mui-selected"
                : router.pathname === "/admin/news/en"
                ? "Mui-selected"
                : router.pathname === "/admin/news/en/edit"
                ? "Mui-selected"
                : router.pathname === "/admin/news/en/add"
                ? "Mui-selected"
                : router.pathname === "/admin/news/th"
                ? "Mui-selected"
                : router.pathname === "/admin/news/th/edit"
                ? "Mui-selected"
                : router.pathname === "/admin/news/th/add"
                ? "Mui-selected"
                : ""
            }
          >
            <ListItemIcon>
              <NewspaperIcon />
            </ListItemIcon>
            <ListItemText primary="News" />
          </ListItem>

          <Collapse
            key={0}
            in={
              router.pathname === "/admin/news/jp"
                ? true
                : router.pathname === "/admin/news/jp/edit"
                ? true
                : router.pathname === "/admin/news/jp/add"
                ? true
                : router.pathname === "/admin/news/en"
                ? true
                : router.pathname === "/admin/news/en/edit"
                ? true
                : router.pathname === "/admin/news/en/add"
                ? true
                : router.pathname === "/admin/news/th"
                ? true
                : router.pathname === "/admin/news/th/edit"
                ? true
                : router.pathname === "/admin/news/th/add"
                ? true
                : newsOpen
            }
            timeout="auto"
            unmountOnExit
          >
            <List
              component="li"
              disablePadding
              key={0}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Link
                href="/admin/news/jp"
                style={{
                  textDecoration:
                    router.pathname == "/admin/news/jp"
                      ? ""
                      : router.pathname == "/admin/news/jp/add"
                      ? ""
                      : router.pathname == "/admin/news/jp/edit"
                      ? ""
                      : "none",
                  color: "#000000DE",
                }}
                passHref
              >
                <ListItem key={0}>
                  <ListItemIcon>
                    <NewspaperIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    key={0}
                    primary="JP"
                    style={{
                      textDecoration:
                        router.pathname == "/admin/news/jp"
                          ? "underline"
                          : router.pathname == "/admin/news/jp/add"
                          ? "underline"
                          : router.pathname == "/admin/news/jp/edit"
                          ? "underline"
                          : "none",
                    }}
                  />
                </ListItem>
              </Link>
            </List>

            <List
              component="li"
              disablePadding
              key={1}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Link
                href="/admin/news/en"
                style={{
                  textDecoration:
                    router.pathname == "/admin/news/en"
                      ? ""
                      : router.pathname == "/admin/news/en/add"
                      ? ""
                      : router.pathname == "/admin/news/en/edit"
                      ? ""
                      : "none",
                  color: "#000000DE",
                }}
                passHref
              >
                <ListItem key={1}>
                  <ListItemIcon>
                    <NewspaperIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    key={1}
                    primary="EN"
                    style={{
                      textDecoration:
                        router.pathname == "/admin/news/en"
                          ? "underline"
                          : router.pathname == "/admin/news/en/add"
                          ? "underline"
                          : router.pathname == "/admin/news/en/edit"
                          ? "underline"
                          : "none",
                    }}
                  />
                </ListItem>
              </Link>
            </List>

            <List
              component="li"
              disablePadding
              key={2}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Link
                href="/admin/news/th"
                style={{
                  textDecoration:
                    router.pathname == "/admin/news/th"
                      ? ""
                      : router.pathname == "/admin/news/th/add"
                      ? ""
                      : router.pathname == "/admin/news/th/edit"
                      ? ""
                      : "none",
                  color: "#000000DE",
                }}
                passHref
              >
                <ListItem key={2}>
                  <ListItemIcon>
                    <NewspaperIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    key={2}
                    primary="TH"
                    style={{
                      textDecoration:
                        router.pathname == "/admin/news/th"
                          ? "underline"
                          : router.pathname == "/admin/news/th/add"
                          ? "underline"
                          : router.pathname == "/admin/news/th/edit"
                          ? "underline"
                          : "none",
                    }}
                  />
                </ListItem>
              </Link>
            </List>
          </Collapse>
        </Link>
      </List>

      <List>
        <Link
          href="/admin/contact"
          style={{ textDecoration: "none", color: "#000000DE" }}
          passHref
        >
          <ListItem
            button
            onClick={() => setUserOpen(!userOpen)}
            className={
              router.pathname === "/admin/contact" ? "Mui-selected" : ""
            }
          >
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
}
