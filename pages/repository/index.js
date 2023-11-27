import React from "react";
import { Box, Flex } from "@chakra-ui/layout";
import DropdownMenu from "@/components/dropdown/dropdown";
import AuthorCard from "@/components/authorCard/authorCard";
import Link from "next/link";

const Repository = () => {
  let data = [
    {
      header: { bg: "#EDE9FE", textColor: "#A700FF", text: "V" },
      bodyData: ["A", "B", "C", "+1"],
    },
    {
      header: { bg: "#CFFAFE", textColor: "#0891B2", text: "B" },
      bodyData: ["A", "B", "C", "+1"],
    },
    {
      header: { bg: "#E4E7FF", textColor: "#485CFA", text: "X" },
      bodyData: ["A", "B", "C", "+1"],
    },
    {
      header: { bg: "#FCE7F3", textColor: "#DB2777", text: "M" },
      bodyData: ["A", "B", "C", "+1"],
    },
    {
      header: { bg: "#FCE7F3", textColor: "#DB2777", text: "J" },
      bodyData: ["A", "B", "C", "+1"],
    },
    {
      header: { bg: "#E4E7FF", textColor: "#485CFA", text: "C" },
      bodyData: ["A", "B", "C", "+1"],
    },
    {
      header: { bg: "#EDE9FE", textColor: "#A700FF", text: "T" },
      bodyData: ["A", "B", "C", "+1"],
    },
    {
      header: { bg: "#CFFAFE", textColor: "#0891B2", text: "M" },
      bodyData: ["A", "B", "C", "+1"],
    },
  ];
  return (
    <Box>
      <Flex gap={10}>
        <Box w={200}>
          <DropdownMenu options={["Last week", "Last Month"]} />
        </Box>
        <Box>
          <Flex gap={2} alignItems={"center"}>
            <Box>
              <p style={{ width: "80px" }}>Order By:</p>
            </Box>
            <Box w={200}>
              <DropdownMenu options={["Most Productive", "Last Month"]} />
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Box mt={12}>
        <Box display={"flex"} flexWrap={"wrap"} gap={{ base: 2, lg: 8 }}>
          {data?.map((item, index) => (
            <Link key={index} href={"/repository/1"}>
              <AuthorCard
                HeaderBorder={4}
                headerText={item.header.text}
                boxData={item.bodyData}
                headerBg={item.header.bg}
                headerTextColor={item.header.textColor}
                boxDataBorderRadius={100}
              />
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Repository;
