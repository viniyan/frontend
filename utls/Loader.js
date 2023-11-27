import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <Head>
        <title>Loading...</title>
      </Head>
      <Box
        height={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <div>
          <InfinitySpin width="200" color="#FF6504" />
        </div>
      </Box>
    </>
  );
};

export default Loader;
