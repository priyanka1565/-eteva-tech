import { Box, Image, Text } from "@chakra-ui/react";

export default function Card(Props) {
  console.log("prop", Props);
  const { id, productImg, category, description, Price } = Props.Props;
  return (
    <Box
      className="pod"
      textAlign={"left"}
      padding={"10px"}
      key={{ id }}
      border={"2px solid lightgray"}
      borderColor={"teal"}
      box-shadow={"rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset"}
    >
      <Image h={"380px"} src={productImg} borderRadius={"10px"} />
      <br />
      <Text maxWidth={"280px"} fontWeight={"500"}>
        {description}
      </Text>
      <Text fontWeight={"500"}>Price : ₹ {Price}</Text>
      <Box
        borderRadius={"5px"}
        margin={"left"}
        maxWidth={"180px"}
        fontWeight={"700"}
        bgColor={"tomato"}
        color={"white"}
        textAlign={"center"}
      >
        {category}
      </Box>
    </Box>
  );
}
