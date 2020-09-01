import React from "react"
import SkewedBackground from "./skewedBackground"
import styles from "./covidLetter.module.css"

const CovidLetter = () => {
  return (
    <section className={styles.wrap}>
      <h4>
        We are pleased to announce that our in-person worship services begin on:
      </h4>
      <SkewedBackground className={styles.header} color="#FF8C1B">
        <h1>Sunday, September 13, 2020</h1>
      </SkewedBackground>
      <div className={styles.letter}>
        <h2>If you wish to attend in person:</h2>
        <p>
          Registration is required <strong>every week</strong> by{" "}
          <strong>Friday at 5:00pm.</strong>
        </p>
        <p>You can register by:</p>
        <ul>
          <li>
            Email: <a href="mailto:qbc950@gmail.com">qbc950@gmail.com</a>
          </li>
          <li>
            Phone: <a href="tel:14162516121">(416) 251-6121</a> (Leave a
            voicemail!)
          </li>
        </ul>
        <p>
          Please provide the following information in your email or voicemail
          message:
        </p>
        <ul>
          <li>Your name</li>
          <li>
            Total number attending, including yourself (for COVID-19 tracing)
          </li>
          <li>Your phone number</li>
          <li>Please let us know if you need to use the elevator</li>
        </ul>
        <p>
          If you haven't already filled out our{" "}
          <a href="/healthform.pdf">Attestation of Health</a> form, you will be
          screened for COVID-19 symptoms when you arrive at the church. To save
          time, you may want to print and sign the Attestation of Health form
          below and bring it with you when you come. Forms will also be
          available at the church entrance.
        </p>
        <div className={styles.buttonWrap}>
          <a className="button primary small" href="/healthform.pdf">
            Download Form
          </a>
        </div>
      </div>
    </section>
  )
}

export default CovidLetter
