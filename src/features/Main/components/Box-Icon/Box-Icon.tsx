import "boxicons";
import "./Box-icon.css";
import { BaseSyntheticEvent, MouseEventHandler, useState } from "react";
import { close, menu } from "./function";

export default function BoxIcon() {
  const [viewMain, setViewMain] = useState(true);

  async function translateBox(): Promise<void> {
    return new Promise<void>((res, rej) => {
      try {
        setTimeout(() => {
          res();
        }, 500);
      } catch (error) {
        rej(error);
      }
    });
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = (
    e: BaseSyntheticEvent
  ) => {
    const navigation: HTMLElement | null =
      document.getElementById("navigation");

    if (navigation) {
      if (viewMain) {
        menu(navigation, e.target);
      } else {
        close(navigation, e.target);
      }

      console.log((e.target as HTMLElement).innerText);
      setViewMain(!viewMain);
      translateBox();
    } else {
      console.error("Navigation element not found");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="show bg-slate-800 material-symbols-outlined"
    >
      menu
    </button>
  );
}
