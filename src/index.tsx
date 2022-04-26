import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Transaction Fake",
          amount: 500,
          type: "deposit",
          categoy: "Food",
          created_at: new Date()
        }
      ];
    })
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);