"use client";
import Image from "next/image";
import React from "react";

export default function HomeContent() {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center mt-50 mb-50">
        <div className="home-content-group-field">
          <div>
            <h6 className="fw-600 mb-15">
              Why it is important to choose the Right College for your
              professional carrier?
            </h6>
            <p>
              Choosing a quality college is one of the significant decisions
              that every student will make in life. It's true where we attend
              our college will have a lasting impact on our professional and
              personal lifestyles. On that note, most students should go to good
              colleges; instead of choosing random ones for their further
              education. A good and reputable college will offer impressive
              employment opportunities that matches your skills and expertise.
              Moreover, the combination of student's skills and the college's
              best opportunity will become a successful career for the student.
            </p>
          </div>
          <Image
            src="/image/step-by-step.png"
            alt="step-by-step"
            width={250}
            height={250}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center mb-50">
        <div className="home-content-group-field">
          <div>
            <h6 className="fw-600 mb-15">How to Select the Right Course?</h6>
            <p className="mb-15">
              It can often be the case that parents force their children to
              select particular courses as they may find those courses to have
              lucrative career prospects. Even though this is important and
              parents want the best for their kids, it is not the only basis on
              which a course selection should be made. These are one of those
              decisions you need to make for yourself.
            </p>
            <p>
              Right course selection can help students fit into their interests
              and learn more about a field they’re genuinely interested in
              studying, hence, it is very important to know how to choose a
              course that fits you. It is extremely crucial for students to
              understand their passion and have clarity about the course they
              are willing to pursue.
            </p>
          </div>
          <Image src="/image/think.png" alt="think" width={300} height={200} />
        </div>
      </div>
    </React.Fragment>
  );
}
