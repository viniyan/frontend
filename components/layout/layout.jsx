import { Box, Flex } from "@chakra-ui/react";
import SideBar from "./sidebar";
import NavBar from "./navBar";
export default function Layout({ children }) {
  return (
    <>
      <Flex>
        <SideBar />

        <Box width={"100%"} bg={"#F6F8FB"}>
          <Box mx={5} minH={"100vh"}>
            <NavBar />
            <hr />
            <Box px={4} py={8}>
              <main>{children}</main>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
