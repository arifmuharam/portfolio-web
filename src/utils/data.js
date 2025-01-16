const data = [
  {
    id: 1,
    imageProject: "src/assets/images/menit-project.png",
    // imageProjectMobile: "src/assets/images/menit-mobile.png",
    imageLogo: "src/assets/images/menit-logo.svg",
    title: "Menit",
    label: [
      { id: 1, name: "HTML", className: "html" },
      { id: 2, name: "SCSS", className: "scss" },
      { id: 3, name: "Javascript", className: "javascript" },
    ],
    description:
      "Website portal berita modern, yang dibuat menggunakan CSS grid dan mobile layout responsif.",
    button: [
      {
        id: 1,
        text: "Github",
        link: "https://github.com/arifmuharam/news-web",
        color: "github",
      },
      {
        id: 2,
        text: "Website",
        link: "https://menit-web.netlify.app/",
        color: "website",
      },
    ],
  },
  {
    id: 2,
    imageProject: "src/assets/images/bookshelf-project.png",
    imageLogo: "src/assets/images/bookshelf-logo.svg",
    title: "Bookshelf",
    label: [
      { id: 1, name: "HTML", className: "html" },
      { id: 2, name: "CSS", className: "css" },
      { id: 3, name: "Javascript", className: "javascript" },
    ],
    description:
      "Aplikasi web sederhana untuk untuk membantu melacak buku-buku favorit dengan mudah.",
    button: [
      {
        id: 1,
        text: "Github",
        link: "https://github.com/arifmuharam/bookshelf-web",
        color: "github",
      },
      {
        id: 2,
        text: "Website",
        link: "https://bookshelf-webbapp.netlify.app/",
        color: "website",
      },
    ],
  },
  {
    id: 3,
    imageProject: "src/assets/images/ecocycle-project.png",
    imageLogo: "src/assets/images/ecocycle-logo.svg",
    title: "EcoCycle",
    label: [
      { id: 1, name: "Kotlin", className: "kotlin" },
      { id: 2, name: "Android Studio", className: "android__studio" },
      { id: 3, name: "Firebase", className: "firebase" },
    ],
    description:
      "Aplikasi yang bertujuan untuk menjaga lingkungan dari limbah dan menerapkan ekonomi yang berkelanjutan.",
    button: [
      {
        id: 1,
        text: "Github",
        link: "https://github.com/arifmuharam/EcoCycle",
        color: "github",
      },
    ],
  },
];

export default data;
