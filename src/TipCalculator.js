import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import Output from "./Output";
import Reset from "./Reset";
import Header from "./Header";
import { useState } from "react";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentageOne, setPercentageOne] = useState(0);
  const [percentageTwo, setPercentageTwo] = useState(0);

  const tip = bill * ((percentageOne + percentageTwo) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentageOne(0);
    setPercentageTwo(0);
  }

  return (
    <div style={{ margin: "10px" }}>
      <Header> Tip Calculator </Header>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentageOne} onSelect={setPercentageOne}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentageTwo} onSelect={setPercentageTwo}>
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
