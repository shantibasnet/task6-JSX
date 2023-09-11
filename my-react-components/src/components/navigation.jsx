import styles from "./navigation.module.css";

function Nav() {
  return (
    <nav>
      <ul class={styles.menu}>
        <li>
          <a href="https://flexboxfroggy.com/">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
