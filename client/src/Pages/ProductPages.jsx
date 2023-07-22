import { Box, Text } from "@chakra-ui/react";
import ProductList from "../Components/ProductList";

export default function ProductPage() {
  return (
    <Box>
      <Text
        fontSize={{ base: "10px", md: "20px", lg: "30px" }}
        fontWeight={"600"}
        fontStyle={"revert-layer"}
        color={"RGBA(0, 0, 0, 0.64)"}
      >
        PRODUCT PAGE
      </Text>
      <br />
      <ProductList />
    </Box>
  );
}
