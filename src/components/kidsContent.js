import React from "react"
import styles from "./kidsContent.module.css"

const KidsContent = () => (
  <section className={styles.content}>
    <div className={styles.title}>
      What is Kingdom Kids and what do we do during church?
    </div>

    <div className={styles.point}>
      <div className={styles.text}>
        <span className={styles.cursive}>{`Christ-centered `}</span>
        program that teaches from the Bible and encourages kids to hold fast to
        God’s truths.
      </div>
      <div className={styles.scripture}>
        “All Scripture is breathed out by God and profitable for teaching, for
        reproof, for correction, and for training in righteousness” -2 Timothy
        3:16
      </div>
    </div>

    <div className={styles.point}>
      <div className={styles.text}>
        <span className={styles.cursive}>{`Honour God. `}</span>
        We seek to always honour God through our words and actions by applying
        the Truth to our lives because we understand we are a light in the
        world.
      </div>
      <div className={styles.scripture}>
        “Little children, let us not love in word or talk but in deed and in
        truth.” -1 John 3-18
      </div>
    </div>

    <div className={styles.point}>
      <div className={styles.text}>
        <span className={styles.cursive}>{`Understand. `}</span>
        We study God’s Word to understand Scripture, and to identify our
        individual purpose as God’s vessel.
      </div>
      <div className={styles.scripture}>
        “Trust in the Lord with all your heart, and do not lean on your own
        understanding. In all your ways acknowledge him, and he will make
        straight your paths.” -Proverbs 3:5-6
      </div>
    </div>

    <div className={styles.point}>
      <div className={styles.text}>
        <span className={styles.cursive}>{`Relationships. `}</span>
        We value relationships with one another and seek to build them to create
        a safe place to ask, learn and grow.
      </div>
      <div className={styles.scripture}>
        “Therefore encourage one another and build one another up, just as you
        are doing.” -1 Thessalonians 5:11
      </div>
    </div>

    <div className={styles.point}>
      <div className={styles.text}>
        <span className={styles.cursive}>{`Community. `}</span>
        We love our community and we encourage kids to share God’s truths to
        their scope of influence and volunteer at our outreach events. Our
        mission is to lead kids to become great leaders with servant hearts. We
        serve kids so they can know how to serve others.
      </div>
      <div className={styles.scripture}>
        “Love one another with brotherly affection. Outdo one another in showing
        honor. Do not be slothful in zeal, be fervent in spirit, serve the Lord”
        -Romans 12:10-11
      </div>
    </div>

    <div className={styles.point}>
      <div className={styles.text}>
        <span className={styles.cursive}>{`Humility. `}</span>
        We practice humility because we understand God is our Creator and we are
        His children. We seek to put others first above ourselves and lift up
        each other with love.
      </div>
      <div className={styles.scripture}>
        “For by the grace given to me I say to everyone among you not to think
        of himself more highly than he ought to think, but to think with sober
        judgment, each according to the measure of faith that God has assigned.”
        -Romans 12:3
      </div>
    </div>
  </section>
)

export default KidsContent
