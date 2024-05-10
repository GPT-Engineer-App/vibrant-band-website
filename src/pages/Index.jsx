import { Box, Button, Container, Flex, Heading, IconButton, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaSpotify, FaTwitter, FaYoutube } from "react-icons/fa";

const Index = () => {
  const accentColor = "#FF6347"; // Vibrant Tomato Red for accents

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh" bg="white">
        {/* Navigation Bar */}
        <Flex as="nav" align="center" justify="space-between" wrap="wrap" p={4} borderBottom="1px" borderColor="gray.200">
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            The Band
          </Heading>
          <Stack direction="row" spacing={4}>
            <Link href="#home" p={2}>
              Home
            </Link>
            <Link href="#about" p={2}>
              About
            </Link>
            <Link href="#tour" p={2}>
              Tour
            </Link>
            <Link href="#music" p={2}>
              Music
            </Link>
            <Link href="#contact" p={2}>
              Contact
            </Link>
          </Stack>
        </Flex>

        {/* Hero Section */}
        <Flex align="center" justify="center" bg="gray.50" py={10}>
          <VStack spacing={4}>
            <Heading as="h2" size="2xl" color={accentColor}>
              Welcome to Our Beat
            </Heading>
            <Text fontSize="xl" color="gray.600">
              Dive into the sound of music
            </Text>
            <Button colorScheme="red" bg={accentColor} _hover={{ bg: "red.600" }}>
              Discover More
            </Button>
          </VStack>
        </Flex>

        {/* About Section */}
        <Box as="section" p={10} id="about">
          <VStack spacing={5}>
            <Heading as="h3" size="xl">
              About The Band
            </Heading>
            <Text fontSize="md" color="gray.600">
              Formed in 2010, we are a group of passionate musicians from around the world. Our music blends rock, indie, and jazz.
            </Text>
            <Image src="https://images.unsplash.com/photo-1488779382325-da88fd3175e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5kJTIwcGVyZm9ybWluZyUyMGxpdmV8ZW58MHx8fHwxNzE1MzI1MzkxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Band Performing" />
          </VStack>
        </Box>

        {/* Tour Section */}
        <Box as="section" bg="gray.100" p={10} id="tour">
          <VStack spacing={5}>
            <Heading as="h3" size="xl">
              Tour Dates
            </Heading>
            <Text fontSize="md" color="gray.600">
              Catch us live at these locations!
            </Text>
            {/* Example Tour Dates */}
            <Stack spacing={3} align="start">
              <Text>
                <strong>July 20, 2023:</strong> New York, NY
              </Text>
              <Text>
                <strong>August 15, 2023:</strong> London, UK
              </Text>
              <Text>
                <strong>September 5, 2023:</strong> Tokyo, JP
              </Text>
            </Stack>
          </VStack>
        </Box>

        {/* Social Media Links */}
        <Flex as="footer" align="center" justify="center" p={4} borderTop="1px" borderColor="gray.200">
          <Stack direction="row" spacing={4}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" isRound={true} />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" isRound={true} />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" isRound={true} />
            <IconButton aria-label="YouTube" icon={<FaYoutube />} size="lg" isRound={true} />
            <IconButton aria-label="Spotify" icon={<FaSpotify />} size="lg" isRound={true} />
          </Stack>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;
