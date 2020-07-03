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

    <section className={styles.covidContainer}>
      <h2>Covid Updates</h2>
      <p>Hi parents!</p>
      <p>
        For the past few months, Kingdom Kids has been doing very simple online
        check-ins with a craft/activity followed by a bedtime story for Busy
        Bees. This was meant as a temporary set-up as we waited for the doors of
        the church to re-open. However, since Kingdom Kids will still not be
        able to meet in-person even as QBC prepares to open its doors again,
        Kingdom Kids will be following an online-friendly curriculum to ensure
        your kids will be getting fed spiritually.
      </p>
      <p>
        <strong>How will Kingdom Kids online work?</strong>
        Our curriculum supports a "one-room" classroom of all ages. During each
        Zoom meeting, we'll read through different stories in the Bible
        supported by an object lesson, play a low-energy game (with
        minimal-to-no supplies), memorize a Bible verse together, have prayer
        and an read an occasional bedtime story to wrap up the night. Each
        lesson will be about 50 minutes long. We will continue to meet on
        Thursdays at 6pm.
      </p>
      <p>
        <strong>Why is it important for Kingdom Kids to meet online?</strong>
        Since QBC is taking one step at a time to ensure the process of opening
        is safe, it's unclear when programs will be able to run normally again.
        Although we had a few months of low-key Zoom meetings, it's important we
        start ensuring our kids are being fed spiritually as well. Kingdom Kids
        and Switch online helps your kids stay in touch with other kids at
        church, make the transition smoother when we once again meet in-person,
        and ultimately keeps your kids learning about God and the Bible through
        lessons catered for their age group. I would love to partner with you to
        help your kids adapt to this new normal.
      </p>
      <p>
        For more information, please contact Becky Thompson:{" "}
        <a href="mailto:beckyostil@gmail.com">beckyostil@gmail.com</a>
      </p>
    </section>
  </section>
)

export default KidsContent
