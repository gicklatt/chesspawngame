/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button, Heading, Text } from "theme-ui";
import Sticky from "react-stickynode";
import Logo from "components/logo";
import { NavLink } from "components/link";
import { DrawerProvider } from "contexts/drawer/drawer-provider";
import NavbarDrawer from "./navbar-drawer";
import menuItems from "./header.data";
import { FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";

export default function Header() {
  const newTab = (event) => {
    event.preventDefault();

    const url = "https://github.com/cigulatte";
    window.open(url);
  };
  return (
    <DrawerProvider>
      <Box sx={styles.headerWrapper}>
        <Sticky enabled={true} top={0} activeClass="is-sticky" innerZ={100}>
          <Box as="header" sx={styles.header}>
            <Container>
              <Box sx={styles.headerInner}>
                <Heading as="h2" sx={styles.wrapper.title}>
                  Gicklatt
                </Heading>

                <Box as="nav" sx={styles.navbar} className="navbar">
                  <Box as="ul" sx={styles.navList}>
                    {menuItems.map(({ path, label }, i) => (
                      <li key={i}>
                        <NavLink path={path} label={label} />
                      </li>
                    ))}
                  </Box>
                  <Button
                    variant="text"
                    sx={styles.getStartedDesktop}
                    onClick={newTab}
                  >
                    <FaGithub size="18px" color="#161614" />
                  </Button>
                </Box>
                <Button
                  variant="text"
                  sx={styles.getStartedMobile}
                  onClick={newTab}
                >
                  <FaGithub size="18px" color="#161614" />
                </Button>
                <NavbarDrawer />
              </Box>
            </Container>
          </Box>
        </Sticky>
      </Box>
    </DrawerProvider>
  );
}

const styles = {
  headerWrapper: {
    backgroundColor: "transparent",
    ".is-sticky": {
      header: {
        backgroundColor: "white",
        boxShadow: "0 6px 13px rgba(38,78,118,0.1)",
        paddingTop: "15px",
        paddingBottom: "15px",
      },
    },
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: -1,
    subTitle: {
      fontSize: [0, null, 1],
      color: "primary",
      textTransform: "uppercase",
      fontWeight: "700",
      mb: [2, 3],
      lineHeight: 1.5,
      letterSpacing: ["1.5px", null, "2px"],
    },
    title: {
      fontSize: ["24px", null, "28px", "30px", "36px", "42px", null, "48px"],
      color: "primary",

      lineHeight: [1, null, null, null, 1],
      fontWeight: "700",
      letterSpacing: "-.5px",

      mr: [null, null, null, null, 6, 12],
    },
  },
  header: {
    position: "fixed",
    left: 0,
    right: 0,
    py: 4,
    transition: "all 0.3s ease-in-out 0s",
    "&.is-mobile-menu": {
      backgroundColor: "white",
    },
  },
  headerInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    mr: [null, null, null, null, 6, 12],
  },
  navbar: {
    display: ["none", null, null, null, "flex"],
    alignItems: "center",
    flexGrow: 1,
    // justifyContent: 'center',
  },
  navList: {
    display: ["flex"],
    listStyle: "none",
    // marginLeft: 'auto',
    flexGrow: 1,
    p: 0,
    ".nav-item": {
      cursor: "pointer",
      fontWeight: 400,
      padding: 0,
      margin: [0, 0, 0, 0, "0 20px"],
    },
    ".active": {
      color: "primary",
    },
  },
  getStartedDesktop: {
    color: "heading_secondary",
    display: ["none", "none", "none", "none", "flex"],
  },
  getStartedMobile: {
    color: "heading_secondary",
    fontSize: [1],
    minHeight: 30,
    m: ["0 15px 0 auto"],
    padding: "0 11px",
    display: ["flex", null, null, null, "none"],
  },
  closeButton: {
    height: "32px",
    padding: "4px",
    minHeight: "auto",
    width: "32px",
    ml: "3px",
    path: {
      stroke: "text",
    },
  },
};
