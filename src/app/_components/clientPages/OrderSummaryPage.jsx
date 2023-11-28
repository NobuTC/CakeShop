"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import moment from "moment";
import "moment/locale/fi";
import { useEffect, useState } from "react";

function OrderSummaryPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [realOrders, setRealOrder] = useState();
  async function getAllOrders() {
    setIsLoading(true);
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_URL + "/api/order/get");
      if (res.status === 200) {
        const { orders } = await res.json(); // parsin to json
        setRealOrder(orders); //set to realorders
      } else {
        setRealOrder([]); // else give empty array
      }
    } catch (error) {
      console.error("Error fecthing orders data : ");
    }
    setIsLoading(false); //stop loading
  }

  useEffect(() => {
    getAllOrders();
  }, []); //  useEffect is called only once when component is created (sivun latauksen yhteydessä)

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (!realOrders || realOrders.length === 0) {
    return null;
  }

  moment.locale("fi"); // Set language with moment.js libarary

  return (
    <Table aria-label="list of all orders">
      <TableHeader>
        <TableColumn>Etunimi</TableColumn>
        <TableColumn>Sukunimi</TableColumn>
        <TableColumn>Tilattu</TableColumn>
        <TableColumn>Nouto päivä</TableColumn>
        <TableColumn>Sähköposti</TableColumn>
        <TableColumn>Puhelinnumero</TableColumn>
        <TableColumn>Osoite</TableColumn>
        <TableColumn>Tehdyt tilaukset</TableColumn>
      </TableHeader>
      <TableBody>
        {realOrders.map((order, index) => (
          <TableRow key={index}>
            <TableCell>{order.buyer_first_name}</TableCell>
            <TableCell>{order.buyer_last_name}</TableCell>
            <TableCell>
              {moment(order.order_date).format("DD.MM.YYYY")}
            </TableCell>
            <TableCell>
              {moment(order.pick_up_date).format("DD.MM.YYYY")}
            </TableCell>
            <TableCell>{order.email}</TableCell>
            <TableCell>{order.buyer_phonenumber}</TableCell>
            <TableCell>{order.address}</TableCell>
            <TableCell>{order.order_completion ? "Kyllä" : "Ei"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default OrderSummaryPage;
