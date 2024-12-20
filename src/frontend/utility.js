const capitalizeWords = (str) => {
  return str
    ?.split(" ")
    ?.map((word) => word?.charAt(0)?.toUpperCase() + word?.slice(1))
    ?.join(" ");
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const stopWords = [
  "a",
  "about",
  "above",
  "after",
  "again",
  "against",
  "all",
  "am",
  "an",
  "and",
  "any",
  "are",
  "aren't",
  "as",
  "at",
  "be",
  "because",
  "been",
  "before",
  "being",
  "below",
  "between",
  "both",
  "but",
  "by",
  "can't",
  "cannot",
  "could",
  "couldn't",
  "did",
  "didn't",
  "do",
  "does",
  "doesn't",
  "doing",
  "don't",
  "down",
  "during",
  "each",
  "few",
  "for",
  "from",
  "further",
  "had",
  "hadn't",
  "has",
  "hasn't",
  "have",
  "haven't",
  "having",
  "he",
  "he'd",
  "he'll",
  "he's",
  "her",
  "here",
  "here's",
  "hers",
  "herself",
  "him",
  "himself",
  "his",
  "how",
  "how's",
  "i",
  "i'd",
  "i'll",
  "i'm",
  "i've",
  "if",
  "in",
  "into",
  "is",
  "isn't",
  "it",
  "it's",
  "its",
  "itself",
  "let's",
  "me",
  "more",
  "most",
  "mustn't",
  "my",
  "myself",
  "no",
  "nor",
  "not",
  "of",
  "off",
  "on",
  "once",
  "only",
  "or",
  "other",
  "ought",
  "our",
  "ours",
  "ourselves",
  "out",
  "over",
  "own",
  "same",
  "shan't",
  "she",
  "she'd",
  "she'll",
  "she's",
  "should",
  "shouldn't",
  "so",
  "some",
  "such",
  "than",
  "that",
  "that's",
  "the",
  "their",
  "theirs",
  "them",
  "themselves",
  "then",
  "there",
  "there's",
  "these",
  "they",
  "they'd",
  "they'll",
  "they're",
  "they've",
  "this",
  "those",
  "through",
  "to",
  "too",
  "under",
  "until",
  "up",
  "very",
  "was",
  "wasn't",
  "we",
  "we'd",
  "we'll",
  "we're",
  "we've",
  "were",
  "weren't",
  "what",
  "what's",
  "when",
  "when's",
  "where",
  "where's",
  "which",
  "while",
  "who",
  "who's",
  "whom",
  "why",
  "why's",
  "with",
  "won't",
  "would",
  "wouldn't",
  "you",
  "you'd",
  "you'll",
  "you're",
  "you've",
  "your",
  "yours",
  "yourself",
  "yourselves",
];

const transporterOptions = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "collegetsainfo@gmail.com",
    pass: "qpeezjnqkpflpdzh",
  },
  tls: {
    rejectUnauthorized: false,
  },
};

const mailOptions = (to, type, postData) => {
  let subject;
  let html;
  if (type === "free-counseling") {
    subject = "Thank you for Applied Free Counseling - CollegeTSA";
    html = `<h4>Congratulations! 🎉 ${postData?.studentName}</h4>
            <p>You have successfully applied for Free Counseling with <b>CollegeTSA!</b></p>
            <p>Our team of experts will soon reach out to guide you in choosing the best courses and colleges based on your marks, interests, and goals. We are committed to helping students like you achieve academic and career success.</p>
            <h4>📞 What's Next?</h4>
            <ul>
              <li>One of our experienced counselors will reach out to you shortly.</li>
              <li>We will guide you through tailored advice, course suggestions, and college recommendations.</li>
            </ul>
            <h4>💡 Why Choose CollegeTSA?</h4>
            <ul>
            <li>Expert career guidance from professionals.</li>
            <li>Personalized course and college recommendations.</li>
            <li>A seamless counseling experience to help you make the right choice for your future.</li>
            </ul>
            <p>Stay tuned! We're here to make your educational journey effortless and successful.</p>`;
  } else if (type === "new-post") {
    subject = "Check Out Our Latest Post on FindbestOne! 🌟";
    html = `<h1><a href=${postData?.pageUrl}>${postData?.blogData?.title}</a></h1>
    <p>${postData?.blogData?.description}</p>
    <p><a href=${postData?.pageUrl}>View More...</a></p>
    <a href=${postData?.pageUrl}><img src=${postData?.blogData?.titleImage}/></a>
    <p>Thank you for being part of our community. We can't wait to hear what you think!</p>
    <p>Warm regards,</p>
    <b>The FindbestOne Team</b>`;
  } else if (type === "admin-alert") {
    subject = "New Student Alert! Applied for Free Counseling";
    html = `<h4>Hi Admin</h4>
    <p>${postData?.studentName} applied for free counseling. Please find below for student detail.</p>
    <p><b>Name:</b> ${postData?.studentName}</p>
    <p><b>Phone:</b> <a href='tel:${postData?.phone}'>${postData?.phone}</a></p>
    <p><b>Email:</b> ${postData?.email}</p>
    <p><b>Interest:</b> ${postData?.interest}</p>`;
  }

  const options = {
    from: "collegetsainfo@gmail.com",
    to: to,
    subject: subject,
    html: html,
  };
  return options;
};

export {
  capitalizeWords,
  customStyles,
  stopWords,
  transporterOptions,
  mailOptions,
};