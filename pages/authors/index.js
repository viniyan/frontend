import React, { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/layout";
import DropdownMenu from "@/components/dropdown/dropdown";
import AuthorCard from "@/components/authorCard/authorCard";
import Link from "next/link";
import Head from "next/head";
import Loader from "@/utls/Loader";
import { Alert } from "@chakra-ui/react";
import { AlertIcon } from "@chakra-ui/react";
import { AlertTitle } from "@chakra-ui/react";
import { AlertDescription } from "@chakra-ui/react";
import slug from "slug";

const Authors = () => {
  const [authors, setAuthors] = useState({
    data: [],
    isLoading: true,
    isError: false,
    error: "",
  });

  // Define the color pairs
  const colorPairs = [
    { bg: "#EDE9FE", text: "#A700FF" },
    { bg: "#CFFAFE", text: "#0891B2" },
    { bg: "#E4E7FF", text: "#485CFA" },
    { bg: "#FCE7F3", text: "#DB2777" },
  ];

  // Fetching authors data from API
  useEffect(() => {
    setAuthors({ data: [], isLoading: true, isError: false });
    fetch("https://xtvt-0cf34a19b55e.herokuapp.com/authors")
      .then((response) => response.json())
      .then((json) => {
        // Assign a color pair to each author
        const data = json.data.map((item, index) => ({
          ...item,
          colors: colorPairs[index % colorPairs.length],
        }));
        setAuthors({ data, isLoading: false });
      })
      .catch((error) => {
        console.log({ error });
        setAuthors({
          data: [],
          isLoading: false,
          isError: true,
          error: error.message,
        });
      });
  }, []);

  if (authors.isLoading) return <Loader />;

  if (authors.isError)
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Error :</AlertTitle>
        <AlertDescription>
          {authors.error || "Something went wrong!"}!
        </AlertDescription>
      </Alert>
    );

  return (
    <Box>
      <Head>
        <title>Authors</title>
      </Head>

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
          {authors?.data?.map((item, index) => {
            console.log(item);
            return (
              <Link
                key={index}
                href={
                  "/authors/" +
                  item.author.split("@").join("-").split(".").join("_")
                }
              >
                <AuthorCard
                  HeaderBorder={100}
                  headerText={item.author.slice(0, 1)}
                  boxData={["A", "B", "C", "+1"]}
                  headerBg={item.colors.bg}
                  headerTextColor={item.colors.text}
                  boxDataBorderRadius={4}
                  authorName={item.author.slice(0, 20)}
                />
              </Link>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Authors;
