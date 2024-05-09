export default function Output({ bill, tip }) {
  return (
    <h3 className="output-text">
      $ You pay {bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}
