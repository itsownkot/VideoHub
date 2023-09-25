import { useState } from "react";
import { Button, Heading, Stack, VStack, Text } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

const videos = [
  {
    credits: "https://videezy.com",
    site: "Videezy",
    src: "https://static.videezy.com/system/resources/previews/000/031/996/original/heart-backgroud.mp4",
  },
  {
    credits: "https://videvo.net",
    site: "Videvo",
    src: "https://joy1.videvo.net/videvo_files/video/free/2019-11/large_watermarked/190301_1_25_11_preview.mp4",
  },
  {
    credits: "https://videvo.net",
    site: "Videvo",
    src: "https://joy1.videvo.net/videvo_files/video/free/2015-06/large_watermarked/V2_Particle_Random_6_preview.mp4",
  },
  {
    credits: "https://videezy.com",
    site: "Videezy",
    src: "https://static.videezy.com/system/resources/previews/000/055/545/original/1357966_Slowmo-florist-background_HD_BG.mp4",
  },
  {
    credits: "https://vecteezy.com",
    site: "Vecteezy",
    src: "https://static.vecteezy.com/system/resources/previews/011/405/782/beautiful-lightning-strikes-from-skies-to-camera-realistic-thunderbolts-isolated-on-black-background-with-bright-blue-flashes-electrical-storm-looped-3d-animation-4k-uhd-3840x2160-free-video.webm",
  },
  {
    credits: "https://coverr.co",
    site: "Coverr",
    src: "https://cdn.coverr.co/videos/coverr-cross-on-a-mountain-1957/1080p.mp4",
  },
];

const Videos = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isFree = searchParams.get("category");
  const [videoSrc, setVideoSrc] = useState(videos[0]);
  const [clickedVideoIndex, setClickedVideoIndex] = useState(0);

  return (
    <Stack direction={["column", "row"]} w="full" h={"100vh"}>
      <VStack w="full">
        <video
          controls
          controlsList="nodownload"
          style={{ width: "100%" }}
          src={videoSrc.src}
        ></video>
        <VStack alignItems={"flex-start"} w="full" p="8">
          <Text>
            {isFree && <Heading>Everything is free BWAHAHA!!!</Heading>}
            This video provided by{" "}
            <Button colorScheme="red" variant="link">
              <a target="blank" href={videoSrc.credits}>
                {videoSrc.site}
              </a>
            </Button>
          </Text>
        </VStack>
      </VStack>
      <VStack w={["full", "xl"]} alignItems={"stretch"}>
        {videos.map((el, index) => (
          <Button
            colorScheme={clickedVideoIndex === index ? "red" : "gray"}
            onClick={() => {
              setVideoSrc(el);
              setClickedVideoIndex(index);
            }}
          >
            Video {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};
export default Videos;
