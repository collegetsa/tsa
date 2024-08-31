"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setForm } from "../redux/AppSlice";
import Course from "./Course";
import Table from "./Table";
import Footer from "./Footer";
import Image from "next/image";
import { useRouter } from "next/navigation";
const UniversityList = [
  {
    id: 1,
    name: "Anna University",
    logo: "/images/university/anna-university.png",
    location: "Chennai",
  },
  {
    id: 2,
    name: "Vellore Institute of Technology",
    logo: "/images/university/vit.png",
    location: "Vellore",
  },
  {
    id: 3,
    name: "SRM Institute of Science and Technology",
    logo: "/images/university/srm.png",
    location: "Chennai",
  },
  {
    id: 4,
    name: "SASTRA Deemed University",
    logo: "/images/university/shanmuga.png",
    location: "Thanjavur",
  },
  {
    id: 5,
    name: "Satyabama Institute of Science and Technology Business Incubator",
    logo: "/images/university/sathyabama.png",
    location: "Chennai",
  },
  {
    id: 6,
    name: "University of Madras",
    logo: "/images/university/madras.png",
    location: "Chennai",
  },
  {
    id: 7,
    name: "Annamalai University",
    logo: "/images/university/annamalai.png",
    location: "Annamalai Nagar",
  },
  {
    id: 8,
    name: "Kalasalingam Academy of Research and Education",
    logo: "/images/university/kalasalingam.png",
    location: "Krishnan Kovilr",
  },
  {
    id: 9,
    name: "Indian Institute Of Technology-Madras (IIT-Madras)",
    logo: "/images/university/iit-madras.png",
    location: "Chennai",
  },
  {
    id: 10,
    name: "Karunya Institute of Technology and Sciences (Deemed University)",
    logo: "/images/university/karunya.png",
    location: "Coimbatore",
  },
  {
    id: 11,
    name: "Hindustan Institute of Technology & Science",
    logo: "/images/university/hindustan.png",
    location: "Padur",
  },
  {
    id: 12,
    name: "B.S.Abdur Rahman Crescent Institute Of Science And Technology",
    logo: "/images/university/abdur.png",
    location: "Chennai",
  },
  {
    id: 13,
    name: "National Institute of Technology Tiruchirappalli",
    logo: "/images/university/nit.png",
    location: "Tiruchirappalli",
  },
  {
    id: 14,
    name: "Sri Ramachandra Institute of Higher Education and Research",
    logo: "/images/university/ramachandra.png",
    location: "Chennai",
  },
  {
    id: 15,
    name: "Amrita Vishwa Vidyapeetham, Coimbatore campus",
    logo: "/images/university/amirta.png",
    location: "Coimbatore",
  },
  {
    id: 16,
    name: "Alagappa University",
    logo: "/images/university/alagappa.png",
    location: "Karaikudi",
  },
  {
    id: 17,
    name: "Avinashilingam University",
    logo: "/images/university/avinashilingam.png",
    location: "Coimbatore",
  },
  {
    id: 18,
    name: "Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya (SCSVMV)",
    logo: "/images/university/chandrasekara.png",
    location: "Kanchipuram",
  },
  {
    id: 19,
    name: "Bharathiar University",
    logo: "/images/university/bharathiyar.png",
    location: "Coimbatore",
  },
  {
    id: 20,
    name: "Bharathidasan University",
    logo: "/images/university/bharathithasan.png",
    location: "Tiruchirappalli",
  },
  {
    id: 21,
    name: "Tamil Nadu Agricultural University",
    logo: "/images/university/tn-agriculture.png",
    location: "Coimbatore",
  },
  {
    id: 22,
    name: "Vel Tech Rangarajan Dr.Sagunthala R&D Institute of Science and Technology",
    logo: "/images/university/veltech.png",
    location: "Chennai",
  },
  {
    id: 23,
    name: "Dr. M.G.R. Educational And Research Institute university",
    logo: "/images/university/mgr.png",
    location: "Chennai",
  },
  {
    id: 24,
    name: "Central University of Tamil Nadu",
    logo: "/images/university/central.png",
    location: "Tiruvarur",
  },
  {
    id: 25,
    name: "The Gandhigram Rural Institute-Deemed to be University",
    logo: "/images/university/gandhigram.png",
    location: "Dindigul",
  },
  {
    id: 26,
    name: "Saveetha University",
    logo: "/images/university/saveetha.png",
    location: "Chennai",
  },
  {
    id: 27,
    name: "Madurai Kamaraj University",
    logo: "/images/university/kamarajar.png",
    location: "Madurai",
  },
  {
    id: 28,
    name: "Periyar University",
    logo: "/images/university/periyar.png",
    location: "Selam",
  },
  {
    id: 29,
    name: "Bharath Institute of Higher Education and Research",
    logo: "/images/university/bharath.png",
    location: "Chennai",
  },
  {
    id: 30,
    name: "Tamil Nadu Veterinary and Animal Sciences University (TANUVAS)",
    logo: "/images/university/tn-veterinary.png",
    location: "Chennai",
  },
  {
    id: 31,
    name: "Manonmaniam Sundaranar University",
    logo: "/images/university/manonmaniam.png",
    location: "Tirunelveli",
  },
  {
    id: 32,
    name: "Tamil Nadu Dr. Ambedkar Law University",
    logo: "/images/university/ambedkar.png",
    location: "Chennai",
  },
  {
    id: 33,
    name: "Karpagam Academy of Higher Education",
    logo: "/images/university/karpagam.png",
    location: "Coimbatore",
  },
  {
    id: 34,
    name: "Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram",
    logo: "/images/university/iit.png",
    location: "Chennai",
  },
  {
    id: 35,
    name: "Vinayaka Missions Research Foundation",
    logo: "/images/university/vinayaka.png",
    location: "Salem",
  },
  {
    id: 36,
    name: "PRIST Deemed to be University",
    logo: "/images/university/prist.png",
    location: "Coimbatore",
  },
  {
    id: 37,
    name: "PSG College Of Technology",
    logo: "/images/university/psg.png",
    location: "Coimbatore",
  },
  {
    id: 38,
    name: "Amet University",
    logo: "/images/university/amet.png",
    location: "Chennai",
  },
  {
    id: 39,
    name: "Tamil University",
    logo: "/images/university/tamilnadu.png",
    location: "Thanjavur",
  },
  {
    id: 40,
    name: "Tamil Nadu Teachers Education University",
    logo: "/images/university/tnteu.png",
    location: "Chennai",
  },
  {
    id: 41,
    name: "Chennai Mathematical Institute",
    logo: "/images/university/cmi.png",
    location: "Chennai",
  },
  {
    id: 42,
    name: "Rajiv Gandhi National Institute of Youth Development",
    logo: "/images/university/rajiv.png",
    location: "Chennai",
  },
  {
    id: 43,
    name: "Mother Teresa Women's University",
    logo: "/images/university/terasa.png",
    location: "Kodaikanal",
  },
  {
    id: 44,
    name: "Meenakshi Academy of Higher Education & Research (MAHER)",
    logo: "/images/university/meenakshi.png",
    location: "Kanchipuram",
  },
  {
    id: 45,
    name: "Thiruvalluvar University",
    logo: "/images/university/thiruvalluvar.png",
    location: "Vellore",
  },
  {
    id: 46,
    name: "Tamil Nadu Physical Education and Sports University",
    logo: "/images/university/physical.png",
    location: "Chennai",
  },
  {
    id: 47,
    name: "Sri Sivasubramaniya Nadar College of Engineering",
    logo: "/images/university/ssn.png",
    location: "Chennai",
  },
];

export default function Home() {
  const router = useRouter();
  const disPatch = useDispatch();
  const [search, setSearch] = useState("");

  const filterdSearchList = UniversityList?.filter((item) => {
    let text = item.name.toLowerCase();
    let text2 = search.toLowerCase();
    return text?.includes(text2);
  });

  return (
    <React.Fragment>
      <div className="home-bg">
        <main className="container-txt">
          <section className="animation">
            <div>
              <div>Admission Open in 2024</div>
            </div>
            <div>
              <div>Best Colleges & Courses</div>
            </div>
            <div>
              <div>Start Your Best Career</div>
            </div>
            <div>
              <div>Best Exams in 2024</div>
            </div>
          </section>
        </main>
        <div className="input-search-select">
          <input
            className="input input-search"
            type="search"
            placeholder="Search your course, college and exams"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="select-search">
            {filterdSearchList?.map((item, index) => (
              <p key={index} onClick={(e) => {
                setSearch(item?.name);
              }}>
                {item?.name}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-20">
          <button
            className="btn home-btn"
            onClick={() => {
              disPatch(
                setForm({
                  isForm: true,
                  title: "Free Counsling 2024",
                  type: "counsling",
                  logo: "/images/logo.png",
                })
              );
            }}>
            Free Counsling
          </button>
          <button
            className="btn home-btn ml-20"
            onClick={() => {
              disPatch(
                setForm({
                  isForm: true,
                  title: "Admission Form 2024",
                  type: "admission",
                  logo: "/images/logo.png",
                })
              );
            }}>
            Application 2024
          </button>
        </div>
      </div>
      <Course />
      <div className="text-image-group">
        <div>
          <h2>
            Why it is important to choose the Right College for your
            professional carrier?
          </h2>
          <p>
            Choosing a quality college is one of the significant decisions that
            every student will make in life. It's true where we attend our
            college will have a lasting impact on our professional and personal
            lifestyles. On that note, most students should go to good colleges;
            instead of choosing random ones for their further education. A good
            and reputable college will offer impressive employment opportunities
            that matches your skills and expertise. Moreover, the combination of
            student's skills and the college's best opportunity will become a
            successful career for the student.
          </p>
        </div>
        <Image src="/images/step-by-step.png" width={200} height={200} alt="" />
      </div>
      <Table />
    </React.Fragment>
  );
}
