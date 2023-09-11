import styles from "./about.module.css";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.column}>
        <h2>Column 1</h2>
        <p>This is the content of column 1.</p>
        <img
          src="https://m.media-amazon.com/images/I/71EXvFqF6iL.jpg"
          alt="My Image"
        />
      </div>
      <div className={styles.column}>
        <h2>Column 2</h2>
        <p>This is the content of column 2.</p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4cqE_Q6OFWPg075lamyCw7lmxwOu6aCr-g&usqp=CAU"
          alt="My Image"
        />
      </div>
    </div>
  );
}

export default About;
