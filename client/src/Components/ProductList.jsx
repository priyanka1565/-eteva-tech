import { SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import Data from "../Data/Products";
import Card from "./Card";
import { useNavigate } from "react-router-dom";


export default function ProductList() {
  const Mydata = Data;
  const navigate = useNavigate();
  // console.log(Mydat.pa)
  const [AppendData, setAppendData] = useState(Mydata);

  
  const getsinglement = (elem) => {
    let arr = JSON.parse(localStorage.getItem("products")) || [];
     arr.push(elem);
    console.log(arr);
    localStorage.setItem("products", JSON.stringify(arr));
   
    navigate("/productdetail")
  }


  return (
    <>
    <SimpleGrid
        padding={"20px"}
        columns={[1, 3, 3, 4]}
        justifyContent={"space-evenly"}
        spacing={"40px"}
      >
        {AppendData.map((elem) => {
          return (
            <div>
              <Card Props={elem} />
              <button onClick={() => getsinglement(elem)}>View ProductDetail</button>
            </div>
          );
        })}
      </SimpleGrid>
    </>
  );
}
