import * as React from "react"
import * as styles from "./section.module.css";

export default function Section({ children, className = "", ...rest }) {
  if (!children) {
    return null;
  }
  return (
    <section className={`${styles.root} ${className}`} {...rest}>
      <div>{children}</div>
    </section>
  );
}
