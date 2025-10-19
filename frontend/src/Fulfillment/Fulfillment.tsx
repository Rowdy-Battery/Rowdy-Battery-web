const fulfillmentData = [
  {
    id: 101,
    customer: "Alice Johnson",
    product: "Rowdy Battery 1000mAh",
    status: "Shipped",
    tracking: "1Z12345",
  },
  {
    id: 102,
    customer: "Brian Smith",
    product: "Rowdy Battery 5000mAh",
    status: "Pending",
    tracking: "—",
  },
  {
    id: 103,
    customer: "Claire Lee",
    product: "Rowdy Battery 10000mAh",
    status: "Shipped",
    tracking: "1Z54321",
  },
];

export default function Fulfillment() {
  return (
    <div>
      <h1>Fulfillment Status</h1>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>Order ID</th>
            <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>Customer</th>
            <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>Product</th>
            <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>Status</th>
            <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>Tracking</th>
          </tr>
        </thead>
        <tbody>
          {fulfillmentData.map(order => (
            <tr key={order.id}>
              <td style={{ padding: "8px" }}>{order.id}</td>
              <td style={{ padding: "8px" }}>{order.customer}</td>
              <td style={{ padding: "8px" }}>{order.product}</td>
              <td
                style={{
                  padding: "8px",
                  color: order.status === "Shipped" ? "green" : "orange",
                  fontWeight: "bold",
                }}
              >
                {order.status}
              </td>
              <td style={{ padding: "8px" }}>{order.tracking}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
