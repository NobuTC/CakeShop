/**
 * post request
 * create an order to db and fill all data and get orderId
 * get product id and quantity.
 * For example,
 * productId = 1, quantity = 2
 * productId = 2, quantity = 3
 * Create orderproduct
 * @param {*} request
 * @returns
 */

import prisma from "../../../../../lib/prisma";

export async function POST(request) {
  const {
    pick_up_date,
    optional_text,
    buyer_first_name,
    buyer_last_name,
    email,
    address,
    postal_code,
    city,
    buyer_phonenumber,
    OrderProducts,
  } = await request.json();

  const orderData = {
    order_completion: false,
    order_date: new Date(),
    pick_up_date: new Date(pick_up_date),
    optional_text,
    buyer_first_name,
    buyer_last_name,
    email,
    address,
    postal_code,
    city,
    buyer_phonenumber,
    OrderProduct: {
      create: OrderProducts.map((item) => ({
        quantity: item.quantity,
        optional_text: item.optional_text,
        product: {
          connect: { id: item.productId },
        },
      })),
    },
  };

  try {
    const newOrderData = await prisma.order.create({
      data: orderData,
    });
    console.log("created new orderdata!", newOrderData);
    return Response.json({ newOrderData });
  } catch (error) {
    console.error("Error creating new orderdata", error);
    return new Response("Cannot create order", { status: 404 });
  }
}
