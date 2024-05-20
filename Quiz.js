var countQues = 0;
var lang;
var score = 0;

var PERHITUNGANquestions = [
  {
    question: "Hitunglah Soal Berikut!",
    Image: "assets/pg1.png",
    choices: ["14/3", "2/3", "14/23", "31/4"],
    answer: 1,
  },

  {
    question: "Hitunglah Soal Berikut! ",
    Image: "assets/pg2.png",
    choices: ["ln 25/23", "ln 25/24", "ln 25/22", "ln 25/21"],
    answer: 2,
  },
  {
    question: "Hitunglah Soal Berikut! ",
    Image: "assets/pg3.png",
    choices: ["1", "0", "1/2", "2/3"],
    answer: 3,
  },
  {
    question: "Hitunglah Soal Berikut! ",
    Image: "assets/pg4.png",
    choices: ["196/9", "89/6", "96/6", "69/6"],
    answer: 2,
  },
  {
    question: "Hitunglah Soal Berikut! ",
    Image: "assets/pg5.png",
    choices: ["4/3", "1/3", "1/12", "2/3"],
    answer: 1,
  },
  {
    question: "Hitunglah Soal Berikut! ",
    Image: "assets/pg6.png",
    choices: ["0", "1", "1/2", "1/3"],
    answer: 4,
  },
  {
    question: "Hitunglah Soal Berikut! ",
    Image: "assets/pg7.png",
    choices: ["20/3", "0", "22/3", "2/3"],
    answer: 1,
  },
  {
    question: "Hitunglah Soal Berikut! ",
    Image: "assets/pg8.png",
    choices: [
      "6 Satuan Luas",
      "10 Satuan Luas",
      "2 Satuan Luas",
      "30 Satuan Luas",
    ],
    answer: 1,
  },

  {
    question: "Hitunglah Soal Berikut! ",
    Image: "assets/pg9.png",
    choices: ["721/3", "609/4", "545/5", "214/3"],
    answer: 2,
  },
  {
    question: "Hitunglah Soal Berikut! ",
    Image: "assets/pg10.png",
    choices: ["10", "12", "41", "54"],
    answer: 1,
  },
];

var PEMAHAMANquestions = [
  {
    question:
      "Dalam integral lipat dua, elemen diferensialnya sering kali dinyatakan sebagai?",
    Image: "assets/putih.png",
    choices: ["dxdy", "dA", "drdθ", "dV"],
    answer: 4,
  },
  {
    question: "Integral lipat dua digunakan untuk menghitung?",
    Image: "assets/putih.png",
    choices: ["Volume", "Luas permukaan", "Massa", "Panjang lengkung"],
    answer: 1,
  },
  {
    question: "Dalam integral lipat dua, iterasi integral dimulai dari?",
    Image: "assets/putih.png",
    choices: [
      "Dalam ke luar",
      "Kiri ke kanan",
      "Bawah ke atas",
      "Atas ke bawah",
    ],
    answer: 3,
  },
  {
    /*4*/
    question:
      "Dalam integral lipat dua, teorema Green adalah pernyataan tentang hubungan antara integral dari dua jenis operasi?",
    Image: "assets/putih.png",
    choices: [
      "Integral dan derivatif",
      "Integral dan diferensial",
      "Integral ganda dan integral tunggal",
      "Integral dan transformasi",
    ],
    answer: 1,
  },
  {
    question:
      "Dalam integral lipat dua, daerah integrasi direpresentasikan oleh?",
    Image: "assets/putih.png",
    choices: [
      "Kurva parametrik",
      "Persamaan diferensial",
      "Fungsi eksponensial",
      "Batas-batas dalam koordinat x dan y",
    ],
    answer: 4,
  },
  {
    /*6*/
    question:
      "Dalam integral lipat dua, batas integrasi dapat dinyatakan dalam bentuk?",
    Image: "assets/putih.png",
    choices: ["Garis", "Kurva", "Daerah", "Titik"],
    answer: 3,
  },
  {
    question: "Dalam integral lipat dua, notasi R biasanya merepresentasikan?",
    Image: "assets/putih.png",
    choices: [
      "Rentang integral",
      "Fungsi yang diintegralkan",
      "Hasil integral",
      "Variabel integral",
    ],
    answer: 1,
  },
  {
    /*8*/
    question:
      "Apa yang dimaksud dengan teorema Green dalam konteks integral lipat dua?",
    Image: "assets/putih.png",
    choices: [
      "Teorema yang menghubungkan integral dari sebuah fungsi dengan turunan dari fungsi tersebut",
      "Teorema yang menghubungkan integral ganda dengan integral tunggal",
      "Teorema yang menyatakan bahwa integral ganda dari lapangan vektor melalui suatu daerah dapat dihitung dengan integral melalui tepi daerah tersebut",
      "Teorema yang menyatakan bahwa hasil integral dari dua fungsi yang berbeda adalah sama",
    ],
    answer: 3,
  },
  {
    question:
      "Dalam integral lipat dua, apa yang dimaksud dengan daerah integrasi?",
    Image: "assets/putih.png",
    choices: [
      "Daerah dimana fungsi yang diintegralkan tidak terdefinisi",
      "Daerah dimana fungsi yang diintegralkan bernilai negatif",
      "Daerah dimana fungsi yang diintegralkan berada",
      "Daerah dimana hasil integral ditemukan",
    ],
    answer: 3,
  },
  {
    question:
      "Mengapa penting untuk memahami integral lipat dua dalam konteks aplikasi ilmu pengetahuan dan teknik?",
    Image: "assets/putih.png",
    choices: [
      "Karena integral lipat dua hanya digunakan dalam matematika murni",
      "Karena integral lipat dua dapat digunakan untuk menghitung berbagai properti fisik seperti massa, pusat massa, dan momentum",
      "Karena integral lipat dua hanya berguna dalam konteks aljabar linier",
      "Karena integral lipat dua hanya digunakan untuk menghitung fungsi kompleks",
    ],
    answer: 2,
  },
];

//alert(questions.length);
document.getElementById("score").textContent = "Score : " + 0;
document.querySelector(".view-results").style.display = "none";
document.querySelector(".quiz").style.display = "none";
document.querySelector(".final-result").style.display = "none";

document.querySelector(".choose-lang").addEventListener("click", function () {
  lang = document.getElementById("language").value + "questions";
  document.getElementById("ques-left").textContent =
    "Question : " + (countQues + 1) + "/" + window[lang].length;
  document.querySelector(".quiz").style.display = "block";

  // Menampilkan pertanyaan dan gambar
  var currentQuestion = window[lang][countQues];
  document.querySelector(".question h1").textContent = currentQuestion.question;
  document.getElementById("questionImage").src = currentQuestion.Image;

  // Menampilkan pilihan jawaban
  for (var i = 0; i <= 3; i++) {
    document.getElementById("opt" + i).value = currentQuestion.choices[i];
    document.getElementById("lb" + i).innerHTML = currentQuestion.choices[i];
  }
});

document.querySelector(".submit-answer").addEventListener("click", function () {
  //     alert(window[lang][countQues].choices[window[lang][countQues].answer-1]);
  //     alert(document.querySelector('input[name="options"]:checked').value);

  if (
    document.querySelector('input[name="options"]:checked').value ===
    window[lang][countQues].choices[window[lang][countQues].answer - 1]
  ) {
    score += 10;
    document.getElementById("score").textContent = "Score : " + score;
    document.getElementById("ques-view").innerHTML +=
      "<div class='ques-circle correct'>" + (countQues + 1) + "</div>";
  } else {
    score -= 0;
    document.getElementById("score").textContent = "Score : " + score;
    document.getElementById("ques-view").innerHTML +=
      "<div class='ques-circle incorrect'>" + (countQues + 1) + "</div>";
  }

  if (countQues < window[lang].length - 1) {
    countQues++;
  } else {
    document.querySelector(".submit-answer").style.display = "none";
    document.querySelector(".view-results").style.display = "unset";
  }

  /*Tampilin Image*/

  document.getElementById("ques-left").textContent =
    "Question : " + (countQues + 1) + "/" + window[lang].length;
  document.querySelector(".question h1").textContent =
    window[lang][countQues].question;
  document.getElementById("questionImage").src = window[lang][countQues].Image;
  for (i = 0; i <= 3; i++) {
    document.getElementById("opt" + i).value =
      window[lang][countQues].choices[i];
    document.getElementById("lb" + i).innerHTML =
      window[lang][countQues].choices[i];
  } /*For loop Closed*/
});

/*Result Final*/
document.querySelector(".view-results").addEventListener("click", function () {
  document.querySelector(".final-result").style.display = "block";

  document.querySelector(".solved-ques-no").innerHTML =
    "Kamu Berhasil Menjawab " +
    (countQues + 1) +
    " Pertanyaan Tentang  " +
    document.getElementById("language").value;

  var correct = document
    .getElementById("ques-view")
    .getElementsByClassName("correct").length;

  document.querySelector(".right-wrong").innerHTML =
    correct +
    " Jawaban Benar dan " +
    (countQues + 1 - correct) +
    " Jawaban Salah";

  document.getElementById("display-final-score").innerHTML =
    "Nilai Quiz Integral Lipat Dua :  " + score;

  if (correct / (countQues + 1) > 70) {
    document.querySelector(".remark").innerHTML =
      "Catatan: Keren! Pertahankan!";
  } else if (correct / (countQues + 1) < 70) {
    document.querySelector(".remark").innerHTML =
      "Catatan: Kurang Baik, Belajar Lagi!";
  }

  //    window.location.href="#display-final-score";
});

document.getElementById("restart").addEventListener("click", function () {
  location.reload();
});

/*Smooth Scroll*/

$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    500
  );
});
