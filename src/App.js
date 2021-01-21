import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Chinese: [
    { name: "Hotpot", rating: "4/5" },
    { name: "Braised Pork Balls In Gravy", rating: "3.5/5" },
    { name: "Shrimp With Vermicelli And Garlic", rating: "3/5" }
  ],

  Continental: [
    {
      name: "Peppered Pasta Salad",
      rating: "4.5/5"
    },
    {
      name: "Baked Potato And Aubergines",
      rating: "4/5"
    },
    {
      name: "Paneer Steak",
      rating: "3.5/5"
    }
  ],
  Italian: [
    {
      name: "Fiorentina Steak",
      rating: "3.5/5"
    },
    {
      name: "Pizza",
      rating: "4.5/5"
    },
    {
      name: "Polenta",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Italian");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🍔 Foodlicious </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite dishes. Select a cuisine to get started...
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div class="center">
        <div className="content" style={{ textAlign: "left" }}>
          <ul>
            {bookDB[selectedGenre].map((book) => (
              <li key={book.name}>
                <div style={{ fontSize: "larger" }}> {book.name} </div>
                <div style={{ fontSize: "smaller" }}> {book.rating} </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
