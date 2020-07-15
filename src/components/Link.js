import React from "react";

const Link = (props) => {
  const onClick = (event) => {
    if (event.ctrlKey || event.metaKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, "", props.href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a href={props.href} className={props.className} onClick={onClick}>
      {props.children}
    </a>
  );
};

export default Link;
