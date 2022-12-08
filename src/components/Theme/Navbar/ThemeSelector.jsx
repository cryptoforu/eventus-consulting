import React, { useEffect } from "react";
import { useThemeStore } from "../../../store/main";
import { MoonIcon, SunIcon } from "./Index";
import { Button } from "../../Elements/Index";
const ThemeSelector = () => {
  const { theme, dispatch } = useThemeStore();
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      dispatch({
        type: "initialMode",
        payload: document.documentElement.getAttribute("data-theme"),
      });
    }
  }, [dispatch, theme]);

  return (
    <Button
      onPress={() => dispatch({ type: "toggle_dark" })}
      aria-label="dark mode switch"
      className="focus:outline-none"
      isPressed="animate"
      variant='icon'
    >
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

export default ThemeSelector;
