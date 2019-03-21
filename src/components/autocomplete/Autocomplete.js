import React, { useState, Fragment } from "react";
import styles from "./autocomplete.module.css";

export default function Autocomplete({ suggestions, setShow }) {
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggesions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState("");

  const onChange = e => {
    const userInput = e.currentTarget.value;
    // filter out suggestions that dont contain the user's input
    const nextFilteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setUserInput(userInput);
    setShowSuggestions(true);
    setFilteredSuggesions(nextFilteredSuggestions);
    setActiveSuggestion(0);
    setShow(false);
  };
  // event fired when the use clicks on a suggestion
  const onClick = e => {
    setUserInput(e.currentTarget.innerText);
    setShowSuggestions(false);
    setFilteredSuggesions([]);
    setActiveSuggestion(0);
  };
  const onKeyDown = e => {
    switch (e.keyCode) {
      case 13: // Enter
        setActiveSuggestion(0);
        setShowSuggestions(false);
        setUserInput(filteredSuggestions[activeSuggestion]);
        setShow(true);
      case 38: // Up Arrow
        if (activeSuggestion === 0) {
          return;
        }
        setActiveSuggestion(activeSuggestion - 1);
      case 40: // Down Arrow
        if (activeSuggestion - 1 === filteredSuggestions.length) {
          return;
        }

        setActiveSuggestion(activeSuggestion + 1);
    }
  };

  let SuggestionsListComponent;

  if (showSuggestions && userInput) {
    if (filteredSuggestions.length) {
      SuggestionsListComponent = (
        <ul className={styles.suggestions}>
          {filteredSuggestions.map((suggestion, index) => {
            let className;

            // Flag the active suggestion with a class
            if (index === activeSuggestion) {
              className = styles.suggestionActive;
            }

            return (
              <li className={className} key={suggestion} onClick={onClick}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    } else {
      SuggestionsListComponent = (
        <div className={styles.suggestionActive}>
          <em>No suggestions, you're on your own!</em>
        </div>
      );
    }
  }

  return (
    <Fragment>
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={userInput}
        placeholder={"Add Exercise"}
      />
      {SuggestionsListComponent}
    </Fragment>
  );
}
