import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SideBar() {
  const router = useRouter();

  const isActive = (pathname) => {
    return router.pathname.includes(pathname) ? true : false;
  };
  return (
    <>
      <Box pos={"relative"}>
        <Box width={"250px"}></Box>
        <Box
          position={"fixed"}
          width={"250px"}
          height={"100vh"}
          bg={"white"}
          boxShadow={"md"}
        >
          <Flex flexDir={"column"} justify={"space-between"} height={"100%"}>
            <Box>
              <Flex justify={"center"} p={12}>
                <Link href={"/authors"}>
                  <img src={"/images/logo.svg"} alt="logo" />
                </Link>
              </Flex>
              <Box my={5}>
                <Flex
                  borderLeft={isActive("/authors") ? "4px solid #FF6504" : ""}
                  align={"center"}
                  height={"50px"}
                >
                  <Flex ml={6} gap={5} align={"center"}>
                    <img
                      style={{ width: "24px", color: "black" }}
                      src={`/images/${
                        isActive("/authors") ? "activeUser" : "user"
                      }.svg`}
                      alt="logo"
                    />
                    <Link href={"/authors"}>
                      <Text
                        color={isActive("/authors") ? "#FF6504" : "#43465C"}
                        fontWeight={400}
                      >
                        Authors
                      </Text>
                    </Link>
                  </Flex>
                </Flex>
              </Box>

              <Box my={5}>
                <Flex
                  borderLeft={
                    isActive("/repository") ? "4px solid #FF6504" : ""
                  }
                  align={"center"}
                  height={"50px"}
                >
                  <Flex ml={6} gap={5}>
                    <img
                      style={{ width: "24px", color: "black" }}
                      src={`/images/${
                        isActive("/repository")
                          ? "activeRepository"
                          : "repository"
                      }.svg`}
                      alt="logo"
                    />
                    <Link href={"/repository"}>
                      <Text
                        color={isActive("/repository") ? "#FF6504" : "#43465C"}
                        fontWeight={400}
                      >
                        Repository
                      </Text>
                    </Link>
                  </Flex>
                </Flex>
              </Box>
            </Box>

            <Box my={5}>
              <Flex align={"center"} height={"50px"}>
                <Flex ml={6} gap={5}>
                  <img
                    style={{ width: "24px", color: "black" }}
                    src={"/images/logout.svg"}
                    alt="logo"
                  />
                  <Text>Log Out</Text>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
