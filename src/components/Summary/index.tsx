import { Container } from "./styles";
import ImgIncome from "../../assets/income.svg";
import ImgOutcome from "../../assets/outcome.svg";
import ImgTotal from "../../assets/total.svg";
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
  const transactions = useContext(TransactionsContext);

  console.log(transactions);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={ImgIncome} alt="Entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={ImgOutcome} alt="Saídas" />
        </header>
        <strong>- R$ 500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={ImgTotal} alt="Total" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  );
}