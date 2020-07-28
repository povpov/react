import React from "react";
import cx from "classnames";
import { ThemeConsumer, ThemeProvider } from "./ThemeConsumer";

function MyComponent() {
  const renderMyComponent = theme => {
    const myComponentClassName = cx("my-class", {
      "my-class-dark": theme === "dark",
      "my-class-light": theme === "light"
    });
    return (
      <div className={myComponentClassName}>
        <h1>Текст в цвете текущей темы</h1>
      </div>
    );
  };
  return <ThemeConsumer>{theme => renderMyComponent(theme)}</ThemeConsumer>;
};

export default MyComponent;