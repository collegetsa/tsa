"use client";
import { createSlice } from "@reduxjs/toolkit";

  const UniversityList = [
    {
      id: 1,
      name: "Anna University",
      logo: "https://www.autmdu.in/assets/clg%20logo-CVxh3a7V.png",
      location: "Chennai",
    },
    {
      id: 2,
      name: "Vellore Institute of Technology",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8fctn2jq8guRd3Sfgxmv9p-ftsSu0YXulGQ&s",
      location: "Vellore",
    },
    {
      id: 3,
      name: "SRM Institute of Science and Technology",
      logo: "https://upload.wikimedia.org/wikipedia/en/f/fe/Srmseal.png",
      location: "Chennai",
    },
    {
      id: 4,
      name: "SASTRA Deemed University",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/Shanmugha_Arts%2C_Science%2C_Technology_%26_Research_Academy_logo.png/330px-Shanmugha_Arts%2C_Science%2C_Technology_%26_Research_Academy_logo.png",
      location: "Thanjavur",
    },
    {
      id: 5,
      name: "Satyabama Institute of Science and Technology Business Incubator",
      logo: "https://upload.wikimedia.org/wikipedia/en/1/13/Sathyabama_Institute_of_Science_and_Technology_logo.png",
      location: "Chennai",
    },
    {
      id: 6,
      name: "University of Madras",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Madras_University_Seal.svg/270px-Madras_University_Seal.svg.png",
      location: "Chennai",
    },
    {
      id: 7,
      name: "Annamalai University",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Annamalai_University_logo.png/240px-Annamalai_University_logo.png",
      location: "Annamalai Nagar",
    },
    {
      id: 8,
      name: "Kalasalingam Academy of Research and Education",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Kalasalingam_Academy_of_Research_and_Education_logo.png",
      location: "Krishnan Kovilr",
    },
    {
      id: 9,
      name: "Indian Institute Of Technology-Madras (IIT-Madras)",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/300px-IIT_Madras_Logo.svg.png",
      location: "Chennai",
    },
    {
      id: 10,
      name: "Karunya Institute of Technology and Sciences (Deemed University)",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Karunya_Institute_of_Technology_and_Sciences_logo.svg/330px-Karunya_Institute_of_Technology_and_Sciences_logo.svg.png",
      location: "Coimbatore",
    },
    {
      id: 11,
      name: "Hindustan Institute of Technology & Science",
      logo: "https://upload.wikimedia.org/wikipedia/en/a/ac/Hindustan_Institute_of_Technology_and_Science_logo.png",
      location: "Padur",
    },
    {
      id: 12,
      name: "B.S.Abdur Rahman Crescent Institute Of Science And Technology",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/B.S._Abdur_Rahman_Crescent_Institute_of_Science_and_Technology_logo.png/225px-B.S._Abdur_Rahman_Crescent_Institute_of_Science_and_Technology_logo.png",
      location: "Chennai",
    },
    {
      id: 13,
      name: "National Institute of Technology Tiruchirappalli",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/National_Institute_of_Technology_Trichy_Logo.png/300px-National_Institute_of_Technology_Trichy_Logo.png",
      location: "Tiruchirappalli",
    },
    {
      id: 14,
      name: "Sri Ramachandra Institute of Higher Education and Research",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/SRMC%26RI_Official_Logo.png/330px-SRMC%26RI_Official_Logo.png",
      location: "Chennai",
    },
    {
      id: 15,
      name: "Amrita Vishwa Vidyapeetham, Coimbatore campus",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Amrita_Vishwa_Vidyapeetham_-_Logo_Icon.svg/330px-Amrita_Vishwa_Vidyapeetham_-_Logo_Icon.svg.png",
      location: "Coimbatore",
    },
    {
      id: 16,
      name: "Alagappa University",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Alagappa_University_Logo.png/330px-Alagappa_University_Logo.png",
      location: "Karaikudi",
    },
    {
      id: 17,
      name: "Avinashilingam University",
      logo: "https://avinuty.ac.in/sites/avinuty.ac.in/files/logowhite.png",
      location: "Coimbatore",
    },
    {
      id: 18,
      name: "Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya (SCSVMV)",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Sri_Chandrasekharendra_Saraswathi_Viswa_Mahavidyalaya_logo.png/330px-Sri_Chandrasekharendra_Saraswathi_Viswa_Mahavidyalaya_logo.png",
      location: "Kanchipuram",
    },
    {
      id: 19,
      name: "Bharathiar University",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/51/Bharathiar_University_logo.png",
      location: "Coimbatore",
    },
    {
      id: 20,
      name: "Bharathidasan University",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/7c/Bharathidasan_University_logo.png",
      location: "Tiruchirappalli",
    },
    {
      id: 21,
      name: "Tamil Nadu Agricultural University",
      logo: "https://upload.wikimedia.org/wikipedia/en/9/94/Tamil_Nadu_Agricultural_University_Logo.gif",
      location: "Coimbatore",
    },
    {
      id: 22,
      name: "Vel Tech Rangarajan Dr.Sagunthala R&D Institute of Science and Technology",
      logo: "https://upload.wikimedia.org/wikipedia/en/e/e9/Veltech_Rangarajan_Dr._Sagunthala_R%26D_Institute_of_Science_and_Technology_logo.png",
      location: "Chennai",
    },
    {
      id: 23,
      name: "Dr. M.G.R. Educational And Research Institute university",
      logo: "https://www.drmgrdu.ac.in/images/logo/footer_logo.png",
      location: "Chennai",
    },
    {
      id: 24,
      name: "Central University of Tamil Nadu",
      logo: "https://upload.wikimedia.org/wikipedia/en/1/1e/Logo_Central_University_of_Tamil_Nadu.png",
      location: "Tiruvarur",
    },
    {
      id: 25,
      name: "The Gandhigram Rural Institute-Deemed to be University",
      logo: "https://www.ruraluniv.ac.in/images/gri/grilogotya.jpg",
      location: "Dindigul",
    },
    {
      id: 26,
      name: "Saveetha University",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/21/Saveetha_Institute_of_Medical_And_Technical_Sciences_Logo.png",
      location: "Chennai",
    },
    {
      id: 27,
      name: "Madurai Kamaraj University",
      logo: "https://www.mkucollegemdu2.org/wp-content/themes/mku-college/images/mku-college-logo.png",
      location: "Madurai",
    },
    {
      id: 28,
      name: "Periyar University",
      logo: "https://www.periyaruniversity.ac.in/Need/images/logo.JPG",
      location: "Selam",
    },
    {
      id: 29,
      name: "Bharath Institute of Higher Education and Research",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Bharath_University_Logo.png/300px-Bharath_University_Logo.png",
      location: "Chennai",
    },
    {
      id: 30,
      name: "Tamil Nadu Veterinary and Animal Sciences University (TANUVAS)",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Tamil_Nadu_Veterinary_and_Animal_Science_University_logo.png/220px-Tamil_Nadu_Veterinary_and_Animal_Science_University_logo.png",
      location: "Chennai",
    },
    {
      id: 31,
      name: "Manonmaniam Sundaranar University",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/0e/Manonmaniam_Sundaranar_University_logo.jpeg",
      location: "Tirunelveli",
    },
    {
      id: 32,
      name: "Tamil Nadu Dr. Ambedkar Law University",
      logo: "https://upload.wikimedia.org/wikipedia/en/f/f5/Tamil_Nadu_Dr._Ambedkar_Law_University_logo.png",
      location: "Chennai",
    },
    {
      id: 33,
      name: "Karpagam Academy of Higher Education",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfpYjgrdcYcFOLMdJBhLYyOhv__yitpgJYAg&s",
      location: "Coimbatore",
    },
    {
      id: 34,
      name: "Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram",
      logo: "https://www.iiitdm.ac.in/_app/immutable/assets/logo.589b5376.webp",
      location: "Chennai",
    },
    {
      id: 35,
      name: "Vinayaka Missions Research Foundation",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/2b/Vinayaka_Mission%27s_Research_Foundation_logo.png",
      location: "Salem",
    },
    {
      id: 36,
      name: "PRIST Deemed to be University",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQFxfoEFVtzhVg/company-logo_200_200/company-logo_200_200/0/1667045911265/prist_university_logo?e=2147483647&v=beta&t=v2RiGMihRtOXgLrF4XbK-aEl2Jm3JNWSku0k3VdqzrE",
      location: "Coimbatore",
    },
    {
      id: 37,
      name: "PSG College Of Technology",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/PSG_College_of_Technology_logo.png/220px-PSG_College_of_Technology_logo.png",
      location: "Coimbatore",
    },
    {
      id: 38,
      name: "Amet University",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/78/AMET_University_logo.jpg",
      location: "Chennai",
    },
    {
      id: 39,
      name: "Tamil University",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Logo_of_Tamil_University.png/330px-Logo_of_Tamil_University.png",
      location: "Thanjavur",
    },
    {
      id: 40,
      name: "Tamil Nadu Teachers Education University",
      logo: "https://www.tnteu.ac.in/images/logo.png",
      location: "Chennai",
    },
    {
      id: 41,
      name: "Chennai Mathematical Institute",
      logo: "data:image/png;base64,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",
      location: "Chennai",
    },
    {
      id: 42,
      name: "Rajiv Gandhi National Institute of Youth Development",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQG6SYc_OmYLqg/company-logo_200_200/company-logo_200_200/0/1630621376738/rgniyd_logo?e=1735171200&v=beta&t=LLGoDliSmOFFH4Z1yOMKfQh9lllL3u3PDw8KQyzxMww",
      location: "Chennai",
    },
    {
      id: 43,
      name: "Mother Teresa Women's University",
      logo: "https://motherteresawomenuniv.ac.in/assets/mwu/images/mtwu_logo_colour.png",
      location: "Kodaikanal",
    },
    {
      id: 44,
      name: "Meenakshi Academy of Higher Education & Research (MAHER)",
      logo: "https://cdn.prod.website-files.com/63a98d7ca37497b26e5ba22c/66a33a52687c1037ecfb2374_66a32f56b18fd6920433c5d4_MEENAKSHI%2520%2520(1).png",
      location: "Kanchipuram",
    },
    {
      id: 45,
      name: "Thiruvalluvar University",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/TUemblem.png",
      location: "Vellore",
    },
    {
      id: 46,
      name: "Tamil Nadu Physical Education and Sports University",
      logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/Tamil_Nadu_Physical_Education_%26_Sports_University_logo.jpg",
      location: "Chennai",
    },
    {
      id: 47,
      name: "Sri Sivasubramaniya Nadar College of Engineering",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Sri_Sivasubramaniya_Nadar_College_of_Engineering.svg/800px-Sri_Sivasubramaniya_Nadar_College_of_Engineering.svg.png",
      location: "Chennai",
    },
  ];

  const AppSlice = createSlice({
    name: "app",
    initialState: {
      auth: null,
      form: {
        isForm: false,
        title: "",
        type: "",
        logo: "",
        course: "",
        interest: "",
      },
      confirmForm: {
        isForm: false,
        deleteId: "",
      },
      isPreview: false,
      courseField: "",
      UniversityList: UniversityList,
    },
    reducers: {
      setAuth: (state, action) => {
        state.auth = action.payload;
      },
      setForm: (state, action) => {
        state.form = action.payload;
      },
      setIsPreview: (state, action) => {
        state.isPreview = action.payload;
      },
      setCourseField: (state, action) => {
        state.courseField = action.payload;
      },
      setConfirmForm: (state, action) => {
        state.confirmForm = action.payload;
      },
    },
  });

export const {
  setAuth,
  setForm,
  setIsPreview,
  setCourseField,
  setConfirmForm,
} = AppSlice.actions;
export default AppSlice.reducer;
