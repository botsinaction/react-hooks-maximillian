import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  const [inputState, setInputState] = useState({ title: "", amount: "" }); //array destructuring to capture current state and updateing function
  const submitHandler = (event) => {
    event.preventDefault();
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={
                /**inputState[0] is 1st element of return array of useState. this forst element contsins current state */
                inputState.title
              } /**inputState[1] is 2nd element of useState return array which is a function and updates the current state. here we are passing value to be updated for title state*/
              onChange={(event) => {
                const newTitle = event.target.value; //lec 428 - to put event out og closure
                setInputState((prevInputState) => ({
                  title: newTitle,
                  amount: prevInputState.amount, //here we are not using event.target.value, because er want to be sure we are getting last set value only, instead of not fully committed value in the react cycle
                }));
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={inputState.amount}
              onChange={(event) => {
                const newAmount = event.target.value;
                setInputState((prevInputState) => ({
                  title: prevInputState.title,
                  amount: newAmount,
                }));
              }}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
