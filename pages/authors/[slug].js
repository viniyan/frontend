import React from "react";
import { Box, Flex, Text } from "@chakra-ui/layout";
import DropdownMenu from "@/components/dropdown/dropdown";
import ScatterPlot from "@/components/pointChart/pointChart";
import Link from "next/link";

const AuthorDetail = () => {
  return (
    <Box bg={"white"} border={"1px solid #F4F6FF"} borderRadius={16} p={5}>
      <Flex gap={10} justify={"space-between"} flexWrap={"wrap"}>
        <Link href={"/authors"}>
          <Box display={"flex"} alignItems={"center"} gap={4} py={3} px={5}>
            <img src="/images/chevronLeft.svg" />
            <Text color={"#43465C"} fontWeight={400}>
              Back
            </Text>
          </Box>{" "}
        </Link>

        <Box>
          <Text fontSize={36} color={"#2C2F47"} fontWeight={500}>
            Vini Y
          </Text>
        </Box>
        <Box w={200}>
          <DropdownMenu options={["Last week", "Last Month"]} />
        </Box>
      </Flex>

      <Flex gap={10} mt={10} flexWrap={"wrap"}>
        <Box
          minWidth={"300px"}
          flex={1}
          bg={"#FCFDFF"}
          boxShadow={"#1A34F91A"}
          p={5}
        >
          <Text
            fontSize={20}
            fontWeight={600}
            color={"#141833"}
            textAlign={"center"}
            mb={5}
          >
            Code
          </Text>
          <Box>
            <Flex flexDirection={"column"} gap={5}>
              <Flex
                bg={"#F4F6FF"}
                w={"100%"}
                justify={"space-between"}
                py={3}
                px={5}
                borderRadius={10}
              >
                <Text fontSize={18} color={"#141833"} fontWeight={400}>
                  Opened PRS
                </Text>
                <Text fontSize={18} color={"#FF6504"} fontWeight={400}>
                  1
                </Text>
              </Flex>
              <Flex
                bg={"#F4F6FF"}
                w={"100%"}
                justify={"space-between"}
                py={3}
                px={5}
                borderRadius={10}
              >
                <Text fontSize={18} color={"#141833"} fontWeight={400}>
                  Last PR
                </Text>
                <Text fontSize={18} color={"#FF6504"} fontWeight={400}>
                  14/11/2023
                </Text>
              </Flex>
              <Flex
                bg={"#F4F6FF"}
                w={"100%"}
                justify={"space-between"}
                py={3}
                px={5}
                borderRadius={10}
              >
                <Text fontSize={18} color={"#141833"} fontWeight={400}>
                  Shared Branches
                </Text>
                <Text fontSize={18} color={"#FF6504"} fontWeight={400}>
                  3
                </Text>
              </Flex>
              <Flex
                bg={"#F4F6FF"}
                w={"100%"}
                justify={"space-between"}
                py={3}
                px={5}
                borderRadius={10}
              >
                <Text fontSize={18} color={"#141833"} fontWeight={400}>
                  Files/Repos
                </Text>
                <Text fontSize={18} color={"#FF6504"} fontWeight={400}></Text>
              </Flex>
            </Flex>
          </Box>
        </Box>
        <Box
          minWidth={"300px"}
          flex={1}
          bg={"#FCFDFF"}
          boxShadow={"#1A34F91A"}
          p={5}
        >
          <Box>
            <Text
              fontSize={20}
              fontWeight={600}
              color={"#141833"}
              textAlign={"center"}
              mb={5}
            >
              Hours
            </Text>
            <Box>
              <Box mb={7}>
                <Flex justify={"space-between"}>
                  <Box>
                    <Text fontSize={18} color={"#141833"}>
                      Mean Time to Repair
                    </Text>
                  </Box>
                  <Box display={"flex"} alignItems={"center"} gap={5}>
                    <img src="/images/clock.svg" />
                    <Text fontSize={18} color={"#FF6504"}>
                      1:30:00
                    </Text>
                  </Box>
                </Flex>
              </Box>
              <Text fontSize={"18px"} color={"#141833"}>
                Daily Activity
              </Text>
              <ScatterPlot
                xAxisTitles={[
                  "00",
                  "03",
                  "06",
                  "09",
                  "12",
                  "15",
                  "18",
                  "21",
                  "24",
                ]}
                xAxisValue={[2, 0, 2, 0, 2, 2, 0, 2, 2]}
              />
            </Box>
            <Box>
              <Text fontSize={"18px"} color={"#141833"}>
                Weekly Activity
              </Text>
              <ScatterPlot
                xAxisTitles={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
                xAxisValue={[2, 0, 2, 2, 0, 2, 2]}
              />

              <Box mt={6}>
                <Flex justify={"space-between"} mb={4}>
                  <Box>
                    <Text fontSize={"18px"} color={"#141833"}>
                      Task in Progress
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize={"18px"} color={"#FF6504"}>
                      45
                    </Text>
                  </Box>
                </Flex>
                <Flex justify={"space-between"}>
                  <Box>
                    <Text fontSize={"18px"} color={"#141833"}>
                      Task Finished
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize={"18px"} color={"#FF6504"}>
                      10
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthorDetail;
