import {
  Box,
  Flex,
  Input,
  Heading,
  Spacer,
  Text,
  InputLeftElement,
  Icon,
  InputGroup,
} from "@chakra-ui/react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  const heading = router?.pathname?.split("/")?.[1];

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  return (
    <>
      <Box px={4} py={8}>
        <Flex alignItems="center">
          <Box flex={1}>
            <Heading color={"#141833"} size="md" mr={5}>
              {toTitleCase(heading)}
            </Heading>
          </Box>

          <Box minW={{ base: "100px", xl: "650px" }}>
            <InputGroup w={"100%"}>
              <Input
                variant="filled"
                placeholder="Search Files....."
                paddingLeft="3rem"
                height={"50px"}
                bg={"white"}
                border={"1px solid #D0D1D6"}
                borderRadius={"8px"}
                w={"100%"}
              />
              {/* Adjust paddingLeft to accommodate the icon */}
              <InputLeftElement
                pointerEvents="none"
                children={
                  <Icon as={HiMagnifyingGlass} fontSize={"25px"} mt={1} />
                }
              />
            </InputGroup>
          </Box>

          <Spacer />

          <Box ml={4}>
            <Flex gap={5} align={"center"}>
              <Box w={"34px"}>
                <img src="/images/notification.svg" />
              </Box>
              <Box w={"34px"}>
                <img src="/images/gear.svg" />
              </Box>
              <Flex gap={3} align={"center"}>
                <Box>
                  <Box
                    borderRadius={100}
                    overflow={"hidden"}
                    h={"45px"}
                    w={"45px"}
                  >
                    <img
                      style={{ width: "100%", objectFit: "contain" }}
                      src="/images/viniyaan.svg"
                    />
                  </Box>
                </Box>
                <Box mr={7}>
                  <Text color={"#141833"} fontWeight={500}>
                    Viniyaan
                  </Text>
                  <Text color={"#56556B"} fontWeight={400} fontSize={12}>
                    Accountant
                  </Text>
                </Box>
                <img src="/images/chevronDown.svg" />
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
