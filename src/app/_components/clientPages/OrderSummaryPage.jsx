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

function OrderSummaryPage({ orders }) {
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
        {orders.map((order, index) => (
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
