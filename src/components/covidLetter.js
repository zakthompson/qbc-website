import React from "react"
import styles from "./covidLetter.module.css"

const CovidLetter = () => {
  return (
    <section className={styles.wrap}>
      <div className={styles.letter}>
        <p>June 25, 2020</p>
        <p>Hi everybody,</p>
        <p>As government restrictions ease, we are hoping and praying to safely open up QBC for services once again. However, we know that for various reasons, some of you may be more comfortable than others with the idea of returning to church in person each week at this time. As we seek to prepare for this re-opening, we would like to know your thoughts as soon as possible.</p>
        <p>Please know that regardless of when we begin some in person church services, the online formats (live-stream, YouTube, Zoom links, and phone in) will remain available for those who choose to remain at home, so that you can remain a part of our fellowship and church family.</p>
        <p>We have prepared a questionnaire on the likelihood of you and your household being willing to return to QBC to worship in person, with the understanding that we will have in place the following safety precautions:</p>
        <ul>
          <li>All people entering the church will have to complete a health questionnaire,  and sign a health attestation one time, promising to self-assess and adhere to the health guidelines</li>
          <li>All people inside the church must wear a mask at all times</li>
          <li>All attendees will be registered and their contact info kept for 3 weeks, in case contact tracing becomes necessary</li>
          <li>Everyone will sanitize their hands prior to entering the church (sanitizers will be installed at the entrance)</li>
          <li>Seating will be pre-arranged in order to abide by the 2-meter physical distancing rule</li>
          <li>There will be no handshaking/physical greetings</li>
          <li>A one-way system of movement will be arranged such that you would enter in one door and leave through another to prevent crossing paths</li>
          <li>There would be no children’s church or nursery for the time being (though Becky will continue her on-line programs currently in place)</li>
          <li>There will be no collection of offering during the service – a collection box will be placed at the entrance for offerings to be deposited on your way in.  Any communion services would have self-contained prepackaging of the elements.</li>
          <li>There would be only limited access to washroom facilities</li>
          <li>There would be a weekly sanitization of high touch surfaces in the church by a competent person, in addition to regular cleaning</li>
        </ul>
        <p>There is space on the questionnaire for you to type in your questions, suggestions and comments and concerns. If you do intend to return to QBC during the pandemic, please also complete the Health Attestation at the end of the survey.</p>
        <p>Please click on the following link, complete the questionnaire and click on “Submit” before July 6th.  Thank you.</p>
        <a className="button primary small" href="https://docs.google.com/forms/d/e/1FAIpQLSfLPFwEOEw2kAP53LbNPtyZ7mLZUdD2dJB_rI5UmDHlSV4Xng/viewform">Click here to complete the questionnaire</a>
        <p>Please complete just ONE questionnaire for your whole household.</p>
        <p>Yours sincerely,</p>
        <p>Mark Skidmore,  Chairman of the Deacons Board</p>
      </div>
    </section>
  );
}

export default CovidLetter;
