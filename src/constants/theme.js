export const theme = {
  color: {
    black: "#222222",
    activeBlack: "#840",
    body: "#444444",
    screen: "#aaccaa",
    button: "#555555",
    shadow: {
      light: "#666666",
      lighter: "#888888",
      dark: "#333333",
      darker: "#222222",
    },
    activeShadow: {
      light: "#d62",
      lighter: "#f84",
      dark: "#b51",
      darker: "#a40",
    },
  },
  shadows: {
    case: "inset -4px -4px 15px 0 #888888, inset 0 0 25px 4px #222222",
    screen: "inset 0 -15px 35px 0 #88aa88, inset 0 15px 35px 0 #bbddbb",
    direction:
      "-4px 0 2px 0 #333333, 4px 0 2px 0 #666666, 0 4px 2px 0 #888888,  0 -4px 2px 0 #222222, inset 0 0 35px 5px #333333",
    button: "inset -2px -2px 10px 0 #888888, inset 4px 4px 25px 0 #222222",
    activeButton:
      "inset -2px -2px 10px 0 #a40, inset 4px 4px 25px 0 #f84, 0 0 5px 2px #f84",
    hoverButton: "0 0 5px 2px #f84",
    hoverActionButton:
      "inset -2px -2px 10px 0 #888888, inset 4px 4px 25px 0 #222222, 0 0 5px 2px #f84",
  },
  transition: "transition-duration: 150ms; transition-timing-function: linear",
};
