import React from "react"
import SkewedBackground from "./skewedBackground"
import styles from "./contact.module.css"

const Contact = () => (
  <section className={styles.wrap}>
    <div className={styles.info}>
      <SkewedBackground color="#FF8C1B" offset={-25}>
        <h2>Get in</h2>
      </SkewedBackground>
      <SkewedBackground color="#FFAD5D" offset={25}>
        <h2>Touch</h2>
      </SkewedBackground>
      <em>Address:</em>
      <div>950 Islington Avenue</div>
      <div>Etobicoke, Ontario, Canada</div>
      <div>M8Z 4P6</div>
      <em>Phone Number:</em>
      <div>(416) 251-6121</div>
      <em>Regular Services:</em>
      <div>Sunday | 11:00am</div>
      <em>Follow Us:</em>
      <div>
        <a
          className={styles.socialLink}
          href="https://www.facebook.com/queenswaybaptist/"
        >
          <i className="fa fa-facebook" />
        </a>
        <a
          className={styles.socialLink}
          href="https://www.instagram.com/queenswaybaptist/"
        >
          <i className="fa fa-instagram" />
        </a>
      </div>
    </div>
    <div className={styles.mapWrap}>
      <iframe
        className={styles.map}
        width="100%"
        height="100%"
        title="map"
        src="https://maps.google.com/maps?q=950%20islington%20avenue%2C%20etobocoke&t=&z=15&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
      />
    </div>
  </section>
)

export default Contact
