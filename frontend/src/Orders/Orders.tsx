import orders from "./data";

export default function Orders() {
  return (
    <div>
      <h1>Orders</h1>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Order ID</th>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Customer</th>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Total</th>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Status</th>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: "8px" }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td style={{ padding: "8px" }}>{order.id}</td>
              <td style={{ padding: "8px" }}>{order.customer}</td>
              <td style={{ padding: "8px" }}>${order.totalPrice.toFixed(2)}</td>
              <td style={{ padding: "8px" }}>{order.status}</td>
              <td style={{ padding: "8px" }}>{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
