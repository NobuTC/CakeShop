import OrderSummaryPage from "../_components/clientPages/OrderSummaryPage";

async function getOrderSummary() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_URL + "/api/order/get");
    if (res.status === 200) {
      return res.json();
    } else {
      return { orders: null };
    }
  } catch (error) {
    console.error("Error fecthing orders data : ");
  }
}

export default async function OrderSummary({ params: {} }) {
  const { orders } = await getOrderSummary();

  if (!orders) {
    return null;
  }
  return <OrderSummaryPage orders={orders} />;
}
