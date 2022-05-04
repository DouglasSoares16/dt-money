import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";
import ImgIncome from "../../assets/income.svg";
import ImgOutcome from "../../assets/outcome.svg";
import ImgTotal from "../../assets/total.svg";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === "deposit") {
      acc.deposits += transaction.value;
      acc.total += transaction.value;
    }
    else {
      acc.withdraws -= transaction.value;
      acc.total -= transaction.value;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  });

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={ImgIncome} alt="Entradas" />
        </header>
        <strong>
          {
            new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL"
            }).format(summary.deposits)
          }
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={ImgOutcome} alt="Saídas" />
        </header>
        <strong>
          {
            new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL"
            }).format(summary.withdraws)
          }
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={ImgTotal} alt="Total" />
        </header>
        <strong>
          {
            new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL"
            }).format(summary.total)
          }
        </strong>
      </div>
    </Container>
  );
}