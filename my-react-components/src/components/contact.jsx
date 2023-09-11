import styles from "./contact.module.css";

function Contact() {
  return (
    <div className={styles.contact}>
      <p>Contact us:</p>
      <p>
        Email: <a href="mailto:contact@example.com">contact@example.com</a>
      </p>
    </div>
  );
}

export default Contact;
