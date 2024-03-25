import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="d-flex justify-content-center mt-25 mb-25">
      <div className="center-page">
        <h3 className="fw-600 mb-20">Why Study MBBS Abroad?</h3>
        <h6 className="mb-30">
          <span className="700">TSA Services</span> gives you several reasons to
          Study MBBS Abroad
        </h6>
        <div className="why-aboard-group">
          <div className="why-aboard">
            <h6 className="fw-600 mb-15">Low Tuition Fees</h6>
            <Image
              src="/image/aboard/low-price.png"
              alt="low-price"
              width={100}
              height={100}
              className="mb-15"
            />
            <p className="text-center">
              Studying MBBS abroad doesn't require paying a huge amount of fees.
              When you apply via <b>COLLEGETSA SERVICES</b>, you can experience
              a low tuition fee structure and minimal living cost
            </p>
          </div>
          <div className="why-aboard">
            <h6 className="fw-600 mb-15">Top Medical Universities</h6>
            <Image
              src="/image/aboard/university.png"
              alt="university"
              width={100}
              height={100}
              className="mb-15"
            />
            <p className="text-center">
              Our mentors get you seats in the high-ranked international
              universities for higher studies. Just connect with our expert
              faculty, and we will help you chase your dreams.
            </p>
          </div>
          <div className="why-aboard">
            <h6 className="fw-600 mb-15">NMC/WHO Approved</h6>
            <Image
              src="/image/aboard/world.png"
              alt="WHO"
              width={100}
              height={100}
              className="mb-15"
            />
            <p className="text-center">
              When you opt for higher studies abroad, try to get admitted to
              universities approved by WHO or NMC. You need to complete your
              course from any authorized university.
            </p>
          </div>
          <div className="why-aboard">
            <h6 className="fw-600 mb-15">No Entrance Exam</h6>
            <Image
              src="/image/aboard/exam.png"
              alt="exam"
              width={100}
              height={100}
              className="mb-15"
            />
            <p className="text-center">
              You don't have to worry about entrance examinations while applying
              for further studies abroad. If you meet the eligibility criteria,
              you can apply for the course.
            </p>
          </div>
          <div className="why-aboard">
            <h6 className="fw-600 mb-15">No Donation</h6>
            <Image
              src="/image/aboard/cash.png"
              alt="cash"
              width={100}
              height={100}
              className="mb-15"
            />
            <p className="text-center">
              There will be no donation or hidden charges except for the fee
              structure when you apply for MBBS courses abroad
            </p>
          </div>
          <div className="why-aboard">
            <h6 className="fw-600 mb-15">Study in English medium</h6>
            <Image
              src="/image/aboard/eng.png"
              alt="english medium"
              width={100}
              height={100}
              className="mb-15"
            />
            <p className="text-center">
              Studying MBBS abroad doesn't require paying a huge amount of fees.
              When you apply via <b>TSA SERVICES</b> , you can experience a low
              tuition fee structure and minimal living cost
            </p>
          </div>
        </div>
        <h6 className="fw-600 mb-15">Why should you contact us?</h6>
        <p>
          When you come to <b>TSA SERVICES</b>, we'll give you multiple reasons
          to consult our counsellors for MBBS abroad. Without expert guidance
          you may get puzzled. Therefore, consult our faculties and pave the way
          for your future.
        </p>
        <h6 className="fw-600 mb-15">Book your University</h6>
        <p>
          We are connected to several <b>NMC-approved</b> universities and guide
          our candidates to get admission. Our team prepares a list of available
          universities with experienced teaching staff and years of reputation.
        </p>
        <h6 className="fw-600 mb-15">Career Planning</h6>
        <p>
          As you finish your MBBS course, we guide you ahead for further
          studies. You can consult our experienced mentors regarding
          post-graduation courses, and they will help you with apt solutions.
        </p>
        <h6 className="fw-600 mb-15">Financial Advice</h6>
        <p>
          Studying abroad sounds nice until parents face a financial crisis. So
          we are here to help you manage all the tuition fees, from food
          expenses to air tickets. So contact <b>TSA SERVICES</b> and do not
          compromise your dreams.
        </p>
        <h6 className="fw-600 mb-15">Customised Solutions</h6>
        <p>
          We offer customised solutions for each student. When you come to us,
          our faculty will check your past educational details and scorecard and
          find out the right universities. From documentation to accommodation,
          we will guide you thoroughly.
        </p>
        <h6 className="fw-600 mb-15">Visa and Admission</h6>
        <p>
          Studying abroad requires you to get a visa. At <b>TSA SERVICES</b> we
          assist you with the course details and guide you to apply for a visa
          and prepare the related documents.
        </p>
        <h6 className="fw-600 mb-15">Accommodations</h6>
        <p>
          Not surprisingly, travel and accommodations are two significant
          concerns when studying abroad. If you contact us, we will help you
          book flight tickets, find suitable accommodations near the university.
        </p>
        <h3 className="fw-600">#1 MBBS Education Consultants</h3>
        <span>
          Contact us unhesitant as we are perhaps the best MBBS educational
          counselors that you can ever meet. Our honest efforts, valuable advice
          and fair guidelines will make your dreams come true!
        </span>
        <ol className="mt-10">
          <li>Most trusted abroad consultancy firm in India.</li>
          <li>
            With over 10 years of experience we provide the best educational
            solutions.
          </li>
          <li>We offer an affordable MBBS education and stay.</li>
          <li>Read our testimonials and clear your doubts, if any.</li>
          <li>
            Our active associates will guide you thoroughly to study MBBS
            abroad.
          </li>
        </ol>
      </div>
    </div>
  );
}
