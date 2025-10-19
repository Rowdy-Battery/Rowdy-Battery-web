type CheckoutStepsProps = {
  step1?: boolean;
  step2?: boolean;
  step3?: boolean;
};

export default function CheckoutSteps({ step1, step2, step3 }: CheckoutStepsProps) {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
      <div style={{ margin: "0 15px", color: step1 ? "green" : "gray" }}>
        Cart
      </div>
      <div style={{ margin: "0 15px", color: step2 ? "green" : "gray" }}>
        Shipping
      </div>
      <div style={{ margin: "0 15px", color: step3 ? "green" : "gray" }}>
        Payment
      </div>
    </div>
  );
}
