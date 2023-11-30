import React, { useState, useEffect } from "react";
import { Box, Flex, Text } from "@chakra-ui/layout";
import DropdownMenu from "@/components/dropdown/dropdown";
import ScatterPlot from "@/components/pointChart/pointChart";
import Link from "next/link";
import Chart from "@/components/chart/Chart";
import moment from "moment/moment";
import axios from "axios";
import timeToFloat from "@/utils/timeToFloat";

const AuthorDetail = ({ data, author, chart }) => {
  const [authorName, setAuthorName] = useState(""); 

  useEffect(() => {
    // Fazer a chamada à API para obter a lista de autores
    const fetchAuthors = async () => {
      try {
        const response = await axios.get("https://xtvt-0cf34a19b55e.herokuapp.com/authors");
        const authorData = response.data.data.find((a) => a.author_id === author);

    if (!authorData) {
      const emailFormat = author.includes('@') ? author : `${author}`;
      setAuthorName(emailFormat);
    } else {    
        // Definir o nome do autor no estado
        setAuthorName(authorData?.author || "");
    }    
      } catch (error) {
        console.error("Erro ao obter a lista de autores:", error);
      }
    };

    fetchAuthors();
  }, [author]); // Executar sempre que o autor mudar

  function get_hours() {
    return data?.data?.map((value) => ({
      value: timeToFloat(value.created_at),
      label1: "Time: " + moment(value.created_at).format("HH:mm"),
      label2: "Commit ID: " + value.id,
    })) || [];
  }

  function get_days() {
    const value = {};
    chart?.data?.commit_count?.forEach((x) => {
      value[moment(x.date).days()] = value[moment(x.date).days()]
        ? value[moment(x.date).days()] + x.commit_count
        : x.commit_count;
    });

    return Object.keys(value).map((keys) => ({
      value: keys,
      label1: "Commit count: " + value[keys],
    }));
  }

  return !data ? (
    <>Server Error</>
  ) : (
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
            {authorName || "Author not found"}
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
              <Chart
                rows={["00", "03", "06", "09", "12", "15", "18", "21", "24"]}
                data={get_hours()}
                gap={3}
              />
            </Box>
            <Box>
              <Text fontSize={"18px"} color={"#141833"}>
                Weekly Activity
              </Text>
              <Chart
                rows={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
                data={get_days()}
                author={author}
                is_commit_count
                gap={1}
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

export const getServerSideProps = async (ctx) => {
  try {
    const author = ctx.query.slug;

    const fetched_data = await Promise.all([
      axios.get(
        `https://xtvt-0cf34a19b55e.herokuapp.com/authors/${author}/commits`
      ),
      axios.get(
        `https://xtvt-0cf34a19b55e.herokuapp.com/authors/${author}/commit_count`
      ),
    ]);
    return {
      props: {
        data: fetched_data[0].data,
        author,
        chart: fetched_data[1].data,
      },
    };
  } catch (error) {
    console.log(error);
    return { props: { data: null, author: null } };
  }
};

export default AuthorDetail;