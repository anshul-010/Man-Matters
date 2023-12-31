import React, { useState, useEffect } from "react";
import { ProgressBar } from "react-loader-spinner";
import {
  ChakraProvider,
  Box,
  Input,
  Button,
  VStack,
  Text,
  useColorModeValue,
  Center,
  FormControl,
} from "@chakra-ui/react";
import axios from "axios";

function Test() {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const botTextColor = useColorModeValue("white", "black");
  const botBgColor = useColorModeValue("blue.500", "blue.300");
  const userTextColor = useColorModeValue("white", "black");
  const userBgColor = useColorModeValue("green.500", "green.300");

  const [loading, setloading] = useState(true);
  const [intro, setintro] = useState(true);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (userInput.trim() === "") return;
    try {
      setloading(false);
      setintro(false);
      const response = await axios.post(
        "https://gen-chat-app.onrender.com/chat",
        {
          userInput,
          chatHistory,
        }
      );

      const { botResponse, chatHistory: newChatHistory } = response.data;

      setChatHistory(newChatHistory);
      setUserInput("");
      scrollToBottom();
      setloading(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const scrollToBottom = () => {
    const chatContainer = document.getElementById("chat-container");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  };

  return (
    <ChakraProvider>
      <VStack
        p={4}
        height="100vh"
        bg={useColorModeValue("gray.100", "gray.800")}
        spacing={4}
        alignItems="flex-start"
      >
        <Box
          id="chat-container"
          width="100%"
          height="calc(100vh - 200px)"
          overflowY="auto"
          borderRadius="md"
          boxShadow="md"
          bg={useColorModeValue("white", "gray.700")}
          p={4}
        >
          {loading ? (
            intro ? (
              <Box
                bg={botBgColor}
                color={botTextColor}
                borderRadius="md"
                margin="auto"
                p={2}
                mb={2}
                maxWidth="80%"
                wordBreak="break-word"
              >
                <Text>
                  Bot 🤖 : Welcome to the AI SelfCare, How can I Help You
                  Today!!!
                </Text>
              </Box>
            ) : (
              chatHistory.map(([role, content], index) => (
                <Box
                  key={index}
                  alignSelf={role === "user" ? "flex-end" : "flex-start"}
                  bg={role === "user" ? userBgColor : botBgColor}
                  color={role === "user" ? userTextColor : botTextColor}
                  borderRadius="md"
                  margin="auto"
                  p={2}
                  mb={2}
                  maxWidth="80%"
                  wordBreak="break-word"
                >
                  <Text>{`${
                    role === "user" ? "You: " : "Bot 🤖: "
                  }${content}`}</Text>
                </Box>
              ))
            )
          ) : (
            <Box margin="auto" textAlign="center">
              <ProgressBar color="#2D3748" height={40} width={40} />
            </Box>
          )}
        </Box>
        <form onSubmit={sendMessage} >
          <FormControl  width="95vw">
            <Input
              autoFocus
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type a message..."
              maxWidth="90%"
            />
            <Box mt={4} width="100%">
              <Button
                type="submit"
                color="white"
                backgroundColor="#22548A"
                variant="solid"
                p="5px 100px"
                _hover={{
                  backgroundColor: "#22548A",
                  WebkitBoxReflect:"below 1px linear-gradient(transparent )",
                  boxShadow: "0 0 5px #ffffff,0 0 8px #22548A,0 0 5px #22548A,0 0 5px #22548A"
                }}
              >
                Send
              </Button>
            </Box>
          </FormControl>
        </form>
      </VStack>
    </ChakraProvider>
  );
}

export default Test;
