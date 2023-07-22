import React, { useEffect, useState } from 'react'
import { SimpleGrid, Heading, Button, Image } from "@chakra-ui/react";
import Card from "../Components/Card";
import { useNavigate } from "react-router-dom";
import Template from '../Components/Template';


const ProductDetailsPage = () => {

  let data = JSON.parse(localStorage.getItem("products")) || [];
  let empty_url = "https://img.freepik.com/free-vector/removing-goods-from-basket-refusing-purchase-changing-decision-item-deletion-emptying-trash-online-shopping-app-laptop-user-cartoon-character_335657-1172.jpg?size=626&ext=jpg";
  const [product, SetProduct] = useState([]);
  const [reload, Set_reload] = useState(false)
  const navigate = useNavigate();

  const getsinglement = (id) => {
    const idToRemove = id;
    let filter_data = data.filter((item) => item.id !== idToRemove);
    localStorage.setItem("products", JSON.stringify(filter_data));
    Set_reload(true);
    window.location.reload(reload);
  }

  const goToShopping = () => {
    navigate("/")
  }

  useEffect(() => {
    if (data && data?.length > 0) {
      SetProduct(data)
    }
  }, [])
  return (
    <div>
      <div>
       <Template/>
      </div>
      <div>
        {product && product.length > 0 ? <SimpleGrid
          padding={"20px"}
          columns={[1, 3, 3, 4]}
          justifyContent={"space-evenly"}
          spacing={"40px"}
        >
          {product.map((elem) => {
            return (
              <div>
                <Card Props={elem} />
                <Button marginTop={"-90px"}
                  marginLeft={"20px"}
                  border={"2px solid teal"}
                  onClick={() => getsinglement(elem.id)}
                >
                  remove to cart
                </Button>
              </div>
            );
          })}
        </SimpleGrid> :
          <div>
            <Image
              boxSize='600px'
              objectFit='cover'
              margin="auto"
              src={empty_url}
              alt='Dan Abramov'
            />
            <Button
              marginLeft="640px"
              border={"2px solid teal"}
              onClick={() => goToShopping()}
            >
              Go To Shopping
            </Button>
          </div>
        }
      </div>
    </div>
  )
}

export default ProductDetailsPage