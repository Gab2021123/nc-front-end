export async function menu(
  element: HTMLElement | null,
  elementToChange: HTMLElement
): Promise<void> {
  element?.classList.add("appendNavi");
  element?.classList.remove("removerNavi");

  return new Promise((resolve) => {
    setTimeout(() => {
      if (
        element?.parentElement &&
        element.parentElement.nextElementSibling &&
        element.parentElement.nextElementSibling.nextElementSibling
      ) {
        element.parentElement.style.display = "flex";
        element.parentElement.nextElementSibling.setAttribute("class", "none");
        element.parentElement.nextElementSibling.nextElementSibling.setAttribute(
          "class",
          "none"
        );
      }
      elementToChange.innerText = "close";
      console.log(element);
      resolve();
    }, 400);
  });
}
export async function close(
  element: HTMLElement | null,
  elementToChange: HTMLElement
): Promise<void> {
  element?.classList.add("removerNavi");
  element?.classList.remove("appendNavi");

  return new Promise((resolve) => {
    setTimeout(() => {
      if (
        element?.parentElement &&
        element.parentElement.nextElementSibling &&
        element.parentElement.nextElementSibling.nextElementSibling
      ) {
        element.parentElement.removeAttribute("style");
        element.parentElement.nextElementSibling.removeAttribute("style");
        element.parentElement.nextElementSibling.nextElementSibling.removeAttribute(
          "style"
        );
      }

      elementToChange.innerText = "menu";
      resolve();
    }, 400);
  });
}
