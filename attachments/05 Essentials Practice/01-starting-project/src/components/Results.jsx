import { calculateInvestmentResults, formatter } from "../util/investment";

const Results = ({ userInput }) => {
  const returns = calculateInvestmentResults(userInput);
  console.log(returns);
  const initialInvestment =
    returns[0].valueEndOfYear -
    returns[0].interest -
    returns[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {returns.map((yearData) => {
          const totalInterest =
            yearData.annualInvestment * yearData.year - initialInvestment;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>
                {formatter.format(yearData.valueEndOfYear - totalInterest)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Results;
