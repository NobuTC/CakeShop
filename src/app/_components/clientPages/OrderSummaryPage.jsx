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
  const [realOrders, setRealOrder] = useState([]);

  useEffect(() => {
    async function getOrderSummary() {
      try {
        setIsLoading(true);
        const res = await fetch(
          process.env.NEXT_PUBLIC_URL + "/api/order/get",
          {
            cache: "no-store",
            next: { revalidate: 1 }, // Recheck every second
          }
        );
        if (res.status === 200) {
          const { orders } = await res.json();
          setRealOrder(orders);
        } else {
          setRealOrder([]);
        }
      } catch (error) {
        console.error("Error fecthing orders data : ");
      } finally {
        setIsLoading(false);
      }
    }
    getOrderSummary();
  }, []);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (!realOrders || realOrders.length === 0) {
    return null;
  }

  moment.locale("fi");

  return (
    <Table aria-label="Example static collection table">
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
