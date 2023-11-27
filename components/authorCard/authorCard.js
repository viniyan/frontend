import React from "react";
import { Box, Flex, Text } from "@chakra-ui/layout";

const AuthorCard = ({
  HeaderBorder,
  headerText,
  boxData,
  headerBg,
  headerTextColor,
  boxDataBorderRadius,
  authorName,
}) => {
  return (
    <Box>
      <Box w={255} h={250} bg={"white"} borderRadius={12} py={7} px={4}>
        <Text
          style={{ textAlign: "center" }}
          mb={1}
          color={"#141833"}
          fontSize={18}
          fontWeight={500}
          textTransform={"capitalize"}
        >
          {authorName}
        </Text>
        <Flex justify={"center"}>
          <Flex
            justify={"center"}
            align={"center"}
            h={100}
            w={100}
            bg={headerBg}
            borderRadius={HeaderBorder}
          >
            <Text
              textTransform={"uppercase"}
              fontSize={48}
              color={headerTextColor}
            >
              {headerText}
            </Text>
          </Flex>
        </Flex>

        <Box mt={6}>
          <Flex ml={6} position={"relative"} justify={"center"}>
            {boxData?.map((item, index) => (
              <Box
                key={index}
                w={"46px"}
                h={"46px"}
                bg={"#F4F6FF"}
                p={2}
                border={"1px solid #E4E7FF"}
                borderRadius={boxDataBorderRadius}
                position="relative"
                left={`-${(index + 1) * 5}px`}
                textAlign={"center"}
              >
                <Text color={"#141833"} fontSize={18} fontWeight={500}>
                  {item}
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default AuthorCard;
