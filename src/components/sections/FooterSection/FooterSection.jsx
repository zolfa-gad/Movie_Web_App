import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import styles from "./FooterSection.module.css";
import { Form } from "react-bootstrap";
import ButtonItem from "../../reusable/ButtonItem/ButtonItem";
const FooterSection = () => {
  return (
    <footer
      className={`${styles.footerSection} w-100 bg-black text-light p-4 gap-3 bottom-0`}
    >
      <div className="d-flex gap-2">
        <span className="d-flex">COPYRIGHT&#169;</span>
        <span className="fw-bold">{new Date().getFullYear()}</span>
        <span className="fst-italic">Movie</span>
      </div>

      <Form
        className={styles.formSection}
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Form.Control
          size="lg"
          type="text"
          placeholder="Enter"
          className="rounded-2 "
        />

        <ButtonItem text={"Subscribe"} className={"btn-outline-warning"} />
      </Form>

      <div className="d-flex gap-3">
        <FaFacebookF size={30} />
        <FaInstagram size={30} />
        <FaTwitter size={30} />
      </div>
    </footer>
  );
};

export default FooterSection;
