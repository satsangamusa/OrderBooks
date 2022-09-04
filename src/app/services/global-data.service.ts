import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {

  selectedLanguage:any;
  committeeName: any;
  presidentName: any;
  emailId1: any;
  emailId2:any;
  phoneNumber1:any;
  phoneNumber2: any;
  totalQty=0;
  totalAmount=0;
  urduBooks: any=[
    
      {
        name:'1) اللہ کا نشان',
        ename:'1) Devuni Chihnam',
        price:85
      },
      {
        name:'2) اللہ کی مہر',
        ename:'2)Devuni Mudra',
        price:105
      },
      {
        name:'3) دھرم چکر',
        ename:'3) Dharma Chakram',
        price: 125
      },
      {
        name: '4) فرقان',
        ename:'4) Geeturai',
        price: 120
      },
      {
        name: '5) آخری اللہ کی کتاب میں علمی جواہرات',
        ename:'5) Anthima Daiva Granthamulo Gnaana-Rathnaalu',
        price: 45
      },
      {
        name: '6) قبر',
        ename:'6) Samaadhi',
        price: 60
      }
  ];
  odiyaBooks: any=[];

  tamilBooks: any=[
    {
      name:'1) த்ரைதாகார ரகசியம்',
      ename:'1) Thraithaakaara Rahasyamu',
      price:0
    },
    {
      name:'2) திராவிடப் பிராமனா',
      ename:'2) Dravida Brahmana',
      price:0
    },
    {
      name:'3) தர்மசாஸ்திரம் எது',
      ename:'3) Dharma Shaastramu Edhi',
      price:0
    },
    {
      name:'4) பிரம்மா ராவணப் பிரம்ம பகவான் ராவணப் பிரம்மா',
      ename:'4) Bhagavan Ravana Brahma',
      price:0
    }
  ];
  hindiBooks: any=[
    {
      name:'1) प्रवक्ता कौन है ?',
      ename:'1) Pravaktha Kaun Hai',
      price:0
    },
    {
      name: '2) मरण का रहस्य',
      ename:'2) Maran Ka Rahasya',
      price: 0
    },
    {
      name: '3) कर्म पत्र',
      ename:'3) Karm Patr',
      price: 0
    },
    {
      name: '4) जन्म - मरण का सिद्धान्त',
      ename:'4) Janam Maran Ka Siddhanth',
      price:0
    },
    {
      name: '5) पुनर्जन्म का रहस्य',
      ename:'5) Punarjanam Ka Rahasya',
      price:0
    },
    {
      name: '6) समाधि',
      ename:'6) Samaadhi',
      price:0
    },
    {
      name: '7) फैसला (दि जड्जिमेंट ऑफ गाड)',
      ename:'7) Faisla',
      price:0
    },
    {
      name: '8) प्रबोधा',
      ename:'8) Prabodha',
      price:0
    },
    {
      name: '9) माता पिता',
      ename:'9) Mathaa Pithaa',
      price:0
    },
    {
      name: '10) इंदू सांप्रदाय',
      ename:'10) Indhu Saampradhay',
      price:0
    },
    {
      name: '11) देवालय के रहस्य',
      ename:'11) Devalay Ke Rahasya',
      price:0
    },
    {
      name: '12) हमारे त्योहार',
      ename:'12) Hamare Tyohar',
      price:0
    }
  ];
  englishBooks: any=[
    {
      name:'1) Thraitha Theorom Bhagavadgeetha',
      ename:'1) Thraitha Theorom Bhagavadgeetha',
      price:0
    },
    {
      name:'2) The Doctrine of Birth and Death',
      ename:'2) The Doctrine of Birth and Death',
      price:0
    },
    {
      name:'3) The Mystery of Death',
      ename:'3) The Mystery of Death',
      price:0
    },
    {
      name:'4) The Secret of Rebirth',
      ename:'4) The Secret of Rebirth',
      price:0
    },
    {
      name:'5) Mantra and its Miracle',
      ename:'5) Mantra and its Miracle',
      price:0
    },
    {
      name:'6) Dharma - Adharma',
      ename:'6) Dharma - Adharma',
      price:0
    },
    {
      name:'7) Atheists - Theists',
      ename:'7) Atheists - Theists',
      price:0
    },
    {
      name:'8) Thraitha Aaraadhana',
      ename:'8) Thraitha Aaraadhana',
      price:0
    },
    {
      name:'9) Kaliyugam (There is never an end)',
      ename:'9) Kaliyugam (There is never an end)',
      price:0
    },
    {
      name:'10) Yagnas',
      ename:'10) Yagnas',
      price:0
    },
    {
      name:'11) The Doctrine of Thraitha',
      ename:'11) The Doctrine of Thraitha',
      price:0
    },
    {
      name:'12) The Secret of Bermuda Triangle',
      ename:'12) The Secret of Bermuda Triangle',
      price:0
    },
    {
      name:'13) Dravida Brahmana',
      ename:'13) Dravida Brahmana',
      price:0
    },
    {
      name:'14) Ghosts - Bhutas (The Real Incidents)',
      ename:'14) Ghosts - Bhutas (The Real Incidents)',
      price:0
    },
    {
      name:'15) Indu Sampradayas (Indu Traditions)',
      ename:'15) Indu Sampradayas (Indu Traditions)',
      price:0
    },
    {
      name:'16) Hindu Matham - Indu Patham',
      ename:'16) Hindu Matham - Indu Patham',
      price:0
    },
    {
      name:'17) Which is Dharma Shastra?',
      ename:'17) Which is Dharma Shastra?',
      price:0
    },
    {
      name:'18) Mana Pandugalu (Our Festivals)',
      ename:'18) Mana Pandugalu (Our Festivals)',
      price:0
    },
    {
      name:'19) Gutta',
      ename:'19) Gutta',
      price:0
    },
    {
      name:'20) Prabodha (The Enlightened Teaching)',
      ename:'20) Prabodha (The Enlightened Teaching)',

      price:0
    },
    {
      name:'21) Temple Traditions (Hidden Truths)',
      ename:'21) Temple Traditions (Hidden Truths)',

      price:0
    },
    {
      name:'22) Prabodha Tarangalu',
      ename:'22) Prabodha Tarangalu',
      price:0
    },
    {
      name:'23) Subodha (The Good Teaching)',
      ename:'23) Subodha (The Good Teaching)',
      price:0
    }
  ];
  kannadaBooks: any=[
    {
      name:'1) ತ್ರೈತಸಿದ್ಧಾಂತ ಭಗವದ್ಗೀತೆ',
      ename:'1) Thraithasiddhantha Bhagavadgeete',
      price:440
    },
    {
      name:'2) ಆಧ್ಯಾತ್ಮಿಕ ಪ್ರಶ್ನೆಗಳು-ಉತ್ತರಗಳು',
      ename:'2) Adyathmika Prashnegalu Uttaragalu',
      price:380
    },
    {
      name:'3) ಧರ್ಮ-ಅಧರ್ಮ',
      ename:'3) Dharma Adharma',
      price:70
    },
    {
      name:'4) ಇಂದೂತ್ವವನ್ನು ಕಾಪಾಡೋಣ',
      ename:'4) Indutvavannu Kapadona',
      price:70
    },
    {
      name:'5) ಯಜ್ಞಗಳು (ಸತ್ಯವಾ-ಅಸತ್ಯವಾ?)',
      ename:'5) Yagnagalu',
      price:50
    },
    {
      name:'6) ದೆವ್ವಗಳಹಾಗೂ-ಭೂತಗಳ ಯಥಾರ್ಥ ಸಂಘಟನೆಗಳು',
      ename:'6) Devvagala Bhoothagala Yadartha Sangatanegalu',
      price:270
    },
    {
      name:'7) ಸತ್ಯಾನ್ವೇಷಿ ಕಥೆ',
      ename:'7) Satyanveshikathe',
      price:380
    },
    {
      name:'8) ಮಂತ್ರ-ಮಹಿಮೆ (ಸತ್ಯವಾ-ಅಸತ್ಯವಾ)',
      ename:'8) Mantra Mahime',
      price:45
    },
    {
      name:'9) ಶ್ರೀ ಕೃಷ್ಣನು ದೇವರಾ, ಭಗವಂತನಾ!',
      ename:'9) Sri Krishnanu Devara Bhagavantana',
      price:190
    },
    {
      name:'10) ಗೀತಾ ಪರಿಚಯ',
      ename:'10) Geetha Parichaya',
      price:50
    },
    {
      name:'11) ಕಲಿಯುಗ (ಎಂದಿಗೂ ಯುಗಾಂತವಲ್ಲ)',
      ename:'11) Kaliyuga',
      price:80
    },
    {
      name:'12) ಜನನ ಮರಣ ಸಿದ್ಧಾಂತ',
      ename:'12) Janana Marana Siddhantha',
      price:70
    },
    {
      name:'13) ಮರಣ ರಹಸ್ಯ',
      ename:'13) Marana Rahasya',
      price:60
    },
    {
      name:'14) ಪುನರ್ಜನ್ಮ ರಹಸ್ಯ',
      ename:'14) Punarjanma rahasya',
      price:80
    },
    {
      name:'15) ತ್ರೈತಾಕಾರ ರಹಸ್ಯ',
      ename:'15) Thraithakara Rahasya',
      price:90
    },
    {
      name:'16) ಕಥೆಗಳ ಜ್ಞಾನ',
      ename:'17) Kathegala Gnana',
      price:100
    },
    {
      name:'17) ಗಾದೆಗಳ ಜ್ಞಾನ',
      ename:'17) Gadegala Gnana',
      price:85
    },
    {
      name:'18) ಒಗಟುಗಳಲ್ಲಿನ ಜ್ಞಾನ',
      ename:'18) Ogatugalalli Gnana',
      price:90
    },
    {
      name:'19) ಬೈಗುಳಲ್ಲಿ ಜ್ಞಾನ-ಆಶೀರ್ವಾದಗಳಲ್ಲಿ ಅಜ್ಞಾನ',
      ename:'Baigulalli Gnana Ashirvadagalalli Agnana',
      price:45
    },
    {
      name:'20) ದೇವಾಲಯ ರಹಸ್ಯಗಳು',
      ename:'20) Devalaya Rahasyagalu',
      price:100
    },
    {
      name:'21) ಇಂದೂ ಸಂಪ್ರದಾಯಗಳು',
      ename:'21) Indhu Sampradayagalu',
      price:90
    },
    {
      name:'22) ನಮ್ಮ ಹಬ್ಬಗಳು (ಹೇಗೆ ಮಾಡಬೇಕೋ ತಿಳಿದಿದೆಯಾ?)',
      ename:'22) Namma Habbagalu',
      price:80
    },
    {
      name:'23) ತಾಯಿ ತಂದೆ',
      ename:'23) Tayi Tande',
      price:50
    },
    {
      name:'24) ಗುರು ಪ್ರಾರ್ಥನಾಮಂಜರಿ',
      ename:'24) Guru Prarthanamanjari',
      price:70
    },
    {
      name:'25) ತ್ರೈತಾರಾಧನೆ',
      ename:'25) Thraithaaradhane',
      price:50
    },
    {
      name:'26) ಸಮಾಧಿ',
      ename:'26) Samadhi ',
      price:70
    },
    {
      name:'27) ಪ್ರಬೋಧ',
      ename:'27) Prabodha',
      price:160
    },
    {
      name:'28) ಸುಬೋಧ',
      ename:'28) Subodha',
      price:180
    },
    {
      name:'29) ಶಿಲುಬೆ ದೇವರಾ?',
      ename:'29) Silube Devara?',
      price:45
    },
    {
      name:'30) ದೇವರಗುರುತು-963',
      ename:'30) Devara Guruthu-963',
      price:70
    },
    {
      name:'31) ಮತ-ಪಥ',
      ename:'32) Matha Patha',
      price:45
    },
    {
      name:'32) ಪ್ರಬೋಧಾನಂದ ನಾಟಕಗಳು',
      ename:'32) Prabodaananda Naatakagalu',
      price:80
    },
    {
      name:'33) ಇಂದೂ ಕ್ರೈಸ್ತವನಾ?',
      ename:'33) Indu Kraisthavana',
      price:100
    },
    {
      name:'34) ನಾಸ್ತಿಕರು-ಆಸ್ತಿಕರು',
      ename:'34) Naastikaru Aastikaru',
      price:45
    },
    {
      name:'35) ಹೇತುವಾದ-ಪ್ರತಿವಾದ',
      ename:'35) Hethuvada Prathivada',
      price:280
    },
    {
      name:'36) ಗುತ್ತಾ',
      ename:'37) Gutta',
      price:45
    },
    {
      name:'37) ಪ್ರಬೋಧ ತರಂಗಗಳು',
      ename:'37) Prabodha Tharangagalu',
      price:70
    },
    {
      name:'38) ತ್ರೈತಸಿದ್ಧಾಂತ',
      ename:'38) Thraitha Siddhantha',
      price:110
    },
    {
      name:'39) ಪ್ರಥಮ ದೈವಗ್ರಂಥ ಭಗವದ್ಗೀತೆ',
      ename:'39) Pratham Daivagrantha Bhagavadgeete',
      price:110
    },
    {
      name:'40) ದ್ರಾವಿಡ ಬ್ರಾಹ್ಮಣ',
      ename:'40) Dravida Brahmana',
      price:110
    },
    {
      name:'41) ತೀರ್ಪು',
      ename:'41) Theerpu',
      price:70
    },
    {
      name:'42) ಕರ್ಮಪತ್ರ',
      ename:'42) Karma Patra',
      price:50
    },
    {
      name:'43) ಪ್ರವಕ್ತರು ಯಾರು?',
      ename:'43) Pravaktaru Yaru',
      price:45
    },
    {
      name:'44) ಧರ್ಮಶಾಸ್ತ್ರ ಯಾವುದು?',
      ename:'44) Dharmashastra Yavudu',
      price:50
    },
    {
      name:'45) ಮತ ಮಾರ್ಪಾಟು ದೈವ ದ್ರೋಹ ಮಹಾ ಪಾಪ',
      ename:'45) Mata Marpatu Daiva Droha Maha Papa',
      price:70
    },
    {
      name:'46) ಜೀಹಾದ್ ಎಂದರೇ ಯುದ್ಧವಾ?',
      ename:'46) Jihad Endare Yuddhava',
      price:70
    },
    {
      name:'47) ಮೂರು ಗ್ರಂಥಗಳ ಇಬ್ಬರು ಗುರುಗಳ ಒಬ್ಬ ಬೋಧಕನು',
      ename:'47) Moorugranthagalu Ibbarugurugalu Obbabodhakanu',
      price:90
    },
    {
      name:'48) ದೇವರ ಜ್ಞಾನ ಕಬ್ಜಾ ಆಗಿದೆ',
      ename:'48) Devaragnana Kabja Aagide',
      price:60
    },
    {
      name:'49) ಅಜ್ಞಾನದಲ್ಲಿ ಉಗ್ರವಾದ ಬೀಜಗಳು',
      ename:'49) Agnanadalli Ugravada Beejagalu',
      price:110
    },
    {
      name:'50) ವಾರ್ತಕನು-ವರ್ತಕನು',
      ename:'50) Vaartakanu Vartakanu',
      price:45
    },
    {
      name:'51) ದೇವರ ಚಿಹ್ನೆ',
      ename:'51) Devara Chihne',
      price:80
    },
    {
      name:'52) ಯಾವುದು ನಿಜವಾದ ಜ್ಞಾನ?',
      ename:'52) Yavudu Nijavada Gnana?',
      price:85
    },
    {
      name:'53) ಪ್ರತಿಮೆ ✖ ವಿಗ್ರಹ ದೈವ ✖ ದೆವ್ವ',
      ename:'53) Prathime Vigraha Daiva Devva',
      price:100
    },
    {
      name:'54) ಮರಣದ ನಂತರ ಜೀವನ',
      ename:'54) Maranada Nantara Jeevana',
      price:50
    },
    {
      name:'55) ಯಾವ ಮತದಲ್ಲಿ ಎಷ್ಟು ಮತದ್ವೇಷ',
      ename:'55) Yaava Matadalli Yestu Matadvesha',
      price:80
    },
    {
      name:'56) ಸ್ವರ್ಗ ಇಂದ್ರಲೋಕವಾ! ನರಕ ಯಮರಾಜ್ಯವಾ!!',
      ename:'56) Swarga Indralokava Naraka Yamarajyava!!',
      price:110
    },
    {
      name:'57) ಹಿಂದೂ ಮತದಲ್ಲಿ ಸಿದ್ಧಾಂತ ಕರ್ತರು',
      ename:'57) Hindu Matadalli Siddhantakartaru',
      price:210
    },
    {
      name:'58) ಒಂದು ಮಾತು ಮೂರು ಗ್ರಂಥಗಳು',
      ename:'58) Ondu Maatu Mooru Grandhagalu',
      price:45
    },
    {
      name:'59) ಲು ಎಂದರೇಏನು? (ತೆಲುಗು)',
      ename:'59) Lu Endareenu?',
      price:45
    },
    {
      name:'60) ಆದಿತ್ಯ',
      ename:'60) Aditya',
      price:45
    },
    {
      name:'61) ಗಿಡ ಮೊದಲಾ! ಬೀಜ ಮೊದಲಾ?',
      ename:'61) Gida Modala Beeja Modala',
      price:45
    },
    {
      name:'62) ಒಬ್ಬನೇ ಇಬ್ಬರು',
      ename:'62) Obbane Ibbaru',
      price:90
    },
    {
      name:'63) ಸಾಯಿ ಬಾಬಾ ದೇವರಾ! ಅಲ್ಲವಾ!',
      ename:'63) Sai Baba Devara! Allava!',
      price:60
    },
    {
      name:'64) ಯೇಸು ಮರಣಿಸಿದ್ದಾನಾ? ಹತವಾಗಿದ್ದಾನಾ?',
      ename:'64) Yesu Maranisiddana Hatavaagiddana?',
      price:45
    },
    {
      name:'65) ದೇವರ ಆಗಮನಕ್ಕೆ ಇದು ಸಮಯವಲ್ಲವೇ?',
      ename:'65) Devara Aagamanakke Idu Samayavallave?',
      price:60
    },
    {
      name:'66) ವಿಶ್ವ ವಿದ್ಯಾಲಯ',
      ename:'66) Vishwa Vidyalaya',
      price:50
    },
    {
      name:'67) ಕೃಷ್ಣ ಮೂಸ (ಶ್ರೀ ಕೃಷ್ಣ ಮರಣದ ನಂತರ ಜೀವನ)',
      ename:'67) Krishna Moosa',
      price:65
    },
    {
      name:'68) ಒರೆ ಕಲ್ಲು',
      ename:'68) Ore Kallu',
      price:170
    },
    {
      name:'69) ಮೂರು ದೈವ ಗ್ರಂಥಗಳು ಮೂರು ಪ್ರಥಮ ವಾಕ್ಯಗಳು',
      ename:'69) Mooru Daiva Grandhagalu Mooru Prathama Vakyagalu',
      price:60
    },
    {
      name:'70) ಭಾವನೆ-ಭಾಷೆ',
      ename:'70) Bhavane Bhashe',
      price:70
    },
    {
      name:'71) ದೈವ ಗ್ರಂಥಗಳಲ್ಲಿ ಸತ್ಯಾಸತ್ಯ ವಿಚಕ್ಷಣೆ',
      ename:'71) Daiva Grandhagalalli Satyaasatya Vichakshane',
      price:50
    },
    {
      name:'72) ನಿನಗೆ ನನ್ನ ಲೇಖ',
      ename:'72) Ninage Nanna Lekha',
      price:60
    },
    {
      name:'73) ಹಿಂದೂ ಮತದಲ್ಲಿ ಕುಲವಿವಕ್ಷ',
      ename:'73) Hindu Matadalli Kulavivaksha',
      price:65
    },
    {
      name:'74) ದೇವರ ಮುದ್ರೆ',
      ename:'74) Devara Mudre',
      price:120
    },
    {
      name:'75) ಧರ್ಮಚಕ್ರ',
      ename:'75) Dharmachakra',
      price:125
    },
    {
      name:'76) ಪ್ರಾಥಮಿಕ ಜ್ಞಾನ',
      ename:'76) Prathamika Gnana',
      price:65
    },
    {
      name:'77) ದ್ಯಾನ ಪ್ರಾರ್ಥನೆ ನಮಾಜ್',
      ename:'77) Dhyana Prarthane Namaaz',
      price:55
    }
  ];
  teluguBooks: any=[
    {
      name:'1) త్రైత సిద్ధాంత భగవద్గీత',
      ename:'1) Thraitha Siddhantha Bhagavadgeetha',
      price:500
    },
    {
      name:'2) ఆధ్యాత్మిక ప్రశ్నలు-జవాబులు',
      ename:'2) Aadhyathmika Prashnalu Javaabulu',
      price:400
    },
    {
      name:'3) ధర్మము-అధర్మము',
      ename:'3) Dharmamu Adharmamu',
      price:90
    },
    {
      name:'4) ఇందుత్వమును కాపాడుదాం',
      ename:'Indhuthvamunu Kaapaadudhaam',
      price:50
    },
    {
      name:'5) యజ్ఞముల (నిజమా-అబద్ధమా?)',
      ename:'5) Yagnamulu',
      price:60
    },
    {
      name:'6) దయ్యాల-భూతాల యదార్థ సంఘటనలు',
      ename:'6) Dhayyala Bhoothaala Yadhaartha Sanghatanalu',
      price:300
    },
    {
      name:'7) సత్యాన్వేషి కథ',
      ename:'7) Sathyaanveshi Katha',
      price:300
    },
    {
      name:'8) మంత్రము-మహిమ (నిజమా-అబద్దమా?)',
      ename:'8) Manthramu Mahima',
      price:50
    },
    {
      name:'9) శ్రీ కృష్ణుడు దేవుడా! భగవంతుడా!!',
      ename:'9) Sri Krishnudu Devudaa! Bhagavanthudaa!!',
      price:250
    },
    {
      name:'10) గీతా పరిచయము',
      ename:'10) Geethaa Parichayamu',
      price:60
    },
    {
      name:'11) కలియుగము (ఎప్పటికీ యుగాంతం కాదు)',
      ename:'11) Kaliyugamu',
      price:50
    },
    {
      name:'12) జనన మరణ సిద్ధాంతము',
      ename:'12) Janana Marana Siddhanthamu',
      price:70
    },
    {
      name:'13) మరణ రహస్యము',
      ename:'13) Marana Rahasyamu',
      price:70
    },
    {
      name:'14) పునర్జన్మ రహస్యము',
      ename:'14) Punarjanma Rahasyamu',
      price:80
    },
    {
      name:'15) త్రైతాకార రహస్యము',
      ename:'15) Thraithaakaara Rahasyamu',
      price:100
    },
    {
      name:'16) కథల జ్ఞానము',
      ename:'16) Kathala Gnanamu',
      price:100
    },
    {
      name:'17) సామెతల జ్ఞానము',
      ename:'17) Saamethala Gnanamu',
      price:60
    },
    {
      name:'18) పొడుపు కథల జ్ఞానము',
      ename:'18) Podupu Kathala Gnanamu',
      price:60
    },
    {
      name:'19) తత్త్వముల వివరము',
      ename:'19) Thathvamula Vivaramu',
      price:80
    },
    {
      name:'20) తిట్ల జ్ఞానము - దీవెనల అజ్ఞానము',
      ename:'20) Thitla Gnaanamu - Deevenala Agnanamu',
      price:45
    },
    {
      name:'21) గీతం - గీత',
      ename:'21) Geetham Geetha',
      price:200
    },
    {
      name:'22) దేవాలయ రహస్యములు',
      ename:'22) Devalaya Rahasyamulu',
      price:140
    },
    {
      name:'23) ఇందూ సాంప్రదాయములు',
      ename:'23) Indhuu Saampradhaayamulu',
      price:110
    },
    {
      name:'24) మన పండుగలు (ఎలా చేయాలో తెలుసా?)',
      ename:'24) Mana Pandugalu',
      price:70
    },
    {
      name:'25) జ్యోతిష్య శాస్త్రము',
      ename:'25) Jyothishya Shasathramu',
      price:245
    },
    {
      name:'26) తల్లి తండ్రి',
      ename:'26) Thalli Thandri',
      price:60
    },
    {
      name:'27) గురు ప్రార్థనామంజరి',
      ename:'27) Guru Praarthanaamanjari',
      price:100
    },
    {
      name:'28) త్రైతారాధన',
      ename:'28) Thraithaaraadhana',
      price:65
    },
    {
      name:'29) సమాధి',
      ename:'29) Samaadhi',
      price:70
    },
    {
      name:'30) ప్రబోధ',
      ename:'30) Prabodha',
      price:180
    },
    {
      name:'31) సుబోధ',
      ename:'31) Subodha',
      price:175
    },
    {
      name:'32) సిలువ దేవుడా?',
      ename:'32) Siluva Devudaa?',
      price:45
    },
    {
      name:'33) మతాతీత దేవుని మార్గము',
      ename:'33) Mathaatheetha Devuni Maargamu',
      price:40
    },
    {
      name:'34) దేవుని గుర్తు - 963 మాయ గుర్తు - 666',
      ename:'34) Devuni Gurthu-963 Maaya Gurthu-666',
      price:70
    },
    {
      name:'35) మతము - పథము',
      ename:'35) Mathamu Pathamu',
      price:45
    },
    {
      name:'36) ప్రబోధానందం నాటికలు',
      ename:'36) Prabodhaanandam Naatikalu',
      price:70
    },
    {
      name:'37) ఇందువు క్రైస్తవుడా?',
      ename:'37) Indhuvu Kraistavudaa?',
      price:70
    },
    {
      name:'38) నిగూఢ తత్వార్థ బోధిని',
      ename:'38) Nigooda thathvaartha bodhini',
      price:100
    },
    {
      name:'39) ఆత్మలింగార్థము',
      ename:'39) Aathmalingaarthamu',
      price:110
    },
    {
      name:'40) నాస్తికులు-ఆస్తికులు',
      ename:'40) Naasthikulu Aasthikulu',
      price:50
    },
    {
      name:'41) హేతువాదము-ప్రతివాదము',
      ename:'41) Hethuvaadhamu - Prathivaadhamu',
      price:200
    },
    {
      name:'42) గుత్తా',
      ename:'42) Gutta',
      price:50
    },
    {
      name:'43) ప్రబోధ తరంగాలు',
      ename:'Prabodha Tharangaalu',
      price:80
    },
    {
      name:'44) త్రైత సిద్ధాంతము',
      ename:'44) Thraitha Siddhanthamu',
      price:70
    },
    {
      name:'45) ప్రథమ దైవగ్రంథము భగవద్గీత',
      ename:'45) Prathama Daivagranthamu Bhagavadgeetha',
      price:70
    },
    {
      name:'46) అంతిమ దైవగ్రంథములో జ్ఞాన వాక్యములు',
      ename:'46) Anthima Daivagranthamulo Gnaana Vaakyamulu',
      price:360
    },
    {
      name:'47) ద్రావిడ బ్రాహ్మణ',
      ename:'47) Dravida Brahmana',
      price:100
    },
    {
      name:'48) తీర్పు',
      ename:'48) Theerpu',
      price:70
    },
    {
      name:'49) కర్మ పత్రము',
      ename:'49) Karma Pathramu',
      price:60
    },
    {
      name:'50) ప్రవక్తలు ఎవరు?',
      ename:'50) Pravakthalu Yevaru?',
      price:50
    },
    {
      name:'51) ధర్మశాస్త్రము ఏది?',
      ename:'51) Dharmashaasthramu Yedhi?',
      price:50
    },
    {
      name:'52) మత మార్పిడి దైవద్రోహము మహా పాపము',
      ename:'52) Matha Maarpidi Daiva Drohamu Mahaa Paapamu',
      price:60
    },
    {
      name:'53) స్వర్గము ఇంద్రలోకమా! నరకము యమరాజ్యమా!!',
      ename:'53) Swargamu Indralokamaa! Narakamu Yamaraajyamaa!!',
      price:80
    },
    {
      name:'54) జీహాద్ అంటే యుద్ధమా?',
      ename:'54) Jihaadh Ante Yuddhamaa?',
      price:55
    },
    {
      name:'55) మూడు గ్రంథముల ఇద్దరు గురువుల ఒక బోధకుడు',
      ename:'55) Moodu Granthamulu Iddharu Guruvulu Oka Bodhakudu',
      price:65
    },
    {
      name:'56) దేవుని జ్ఞానము కబ్జా అయ్యింది',
      ename:'56) Devuni Gnaanamu Kabjaa Ayyindhi',
      price:50
    },
    {
      name:'57) అజ్ఞానములో ఉగ్రవాద బీజాలు',
      ename:'57) Agnaanamulo Ugravaadha Beejaalu',
      price:80
    },
    {
      name:'58) వార్తకుడు-వర్తకుడు',
      ename:'58) Vaarthakudu - Varthakudu',
      price:50
    },
    {
      name:'59) దేవుని చిహ్నము',
      ename:'59) Devuni Chihnamu',
      price:70
    },
    {
      name:'60) ఏది నిజమైన జ్ఞానము?',
      ename:'60) Yedhi Nijamaina Gnaanamu?',
      price:70
    },
    {
      name:'61) ప్రతిమ ✖ విగ్రహ దైవము ✖ దయ్యము',
      ename:'61) Prathima X Vigraha Daivamu X Dayyamu',
      price:120
    },
    {
      name:'62) మరణము తర్వాత జీవితము',
      ename:'62) Maranamu Tharvaatha Jeevithamu',
      price:60
    },
    {
      name:'63) ఏ మతములో ఎంత మతద్వేషము?',
      ename:'63) Ye Mathamulo Yentha Mathadveshamu',
      price:65
    },
    {
      name:'64) హిందూ మతములో సిద్ధాంత కర్తలు',
      ename:'64) Hindu Mathamulo Siddhantha Karthalu',
      price:210
    },
    {
      name:'65) నీకు నా లేఖ',
      ename:'65) Neeku Naa Lekha',
      price:60
    },
    {
      name:'66) ఒక మాట మూడు గ్రంథములు',
      ename:'66) Oka Maata Moodu Granthamulu',
      price:45
    },
    {
      name:'67) లు అంటే ఏమిటి ?',
      ename:'67) Luu Ante Yemiti?',
      price:45
    },
    {
      name:'68) ఆదిత్య',
      ename:'68) Aditya',
      price:50
    },
    {
      name:'69) చెట్టు ముందా! విత్తు ముందా?',
      ename:'69) Chettu Mundhaa Vitthu Mundhaa?',
      price:45
    },
    {
      name:'70) త్రైత సిద్ధాంత ఆధ్యాత్మిక ఘంటు',
      ename:'70) Thraitha Siddhantha Aadhyaathmika Ghantu',
      price:60
    },
    {
      name:'71) ఒక్కడే ఇద్దరు',
      ename:'71) Okkade Iddaru',
      price:90
    },
    {
      name:'72) ఏసు చనిపోయాడా? చంపబడ్డాడా?',
      ename:'72) Yesu Chanipoyaadaa? Champabaddaadaa?',
      price:50
    },
    {
      name:'73) సాయిబాబ దేవుడా! కాదా?',
      ename:'73) Saibaba Devudaa! Kaadhaa!',
      price:70
    },
    {
      name:'74) దేవుని రాకకు ఇది సమయము కాదా?',
      ename:'74) Devuni Raakaku Idhi Samayamu Kaadhaa?',
      price:60
    },
    {
      name:'75) విశ్వ విద్యాలయము',
      ename:'75) Vishwa Vidyalayamu',
      price:65
    },
    {
      name:'76) కృష్ణ మూస (శ్రీకృష్ణ మరణము తర్వాత జీవితము)',
      ename:'76) Krishna Moosa',
      price:60
    },
    {
      name:'77) గీటు రాయి',
      ename:'77) Geetu Raayi',
      price:140
    },
    {
      name:'78) మూడు దైవ గ్రంథములు మూడు ప్రథమ వాక్యములు',
      ename:'78) Moodu Daiva Granthamulu Moodu Prathama Vaakyamulu',
      price:60
    },
    {
      name:'79) హేతువాద ప్రశ్నలు సత్యవాద జవాబులు',
      ename:'79) Hethuvaadha Prashnalu Sathyavaadha Javaabulu',
      price:115
    },
    {
      name:'80) భావము-భాష',
      ename:'80) Bhaavamu Bhaasha',
      price:70
    },
    {
      name:'81) దైవ గ్రంథములో సత్యాసత్య విచక్షణ',
      ename:'81) Daiva Granthamulo Sathyaasathya Vichakshana',
      price:50
    },
    {
      name:'82) ప్రసిద్ధి బోధ',
      ename:'82) Prasiddhi Bodha',
      price:500
    },
    {
      name:'83) నాది లోచన నీది ఆలోచన',
      ename:'83) Naadhi Lochana Needhi Aalochana',
      price:40
    },
    {
      name:'84) దేవుని ముద్ర',
      ename:'84) Devuni Mudra',
      price:110
    },
    {
      name:'85) ధర్మచక్రము',
      ename:'85) Dharmachakramu',
      price:120
    },
    {
      name:'86) హిందూ మతములో కుల వివక్ష',
      ename:'86) Hinduu Mathamulo Kula Vivaksha',
      price:65
    },
    {
      name:'87) ద్యానము ప్రార్థన నమాజ్',
      ename:'87) Dhyaanamu Praarthana Namaaz',
      price:50
    },
    {
      name:'88) ప్రాథమిక జ్ఞానము',
      ename:'88) Praathamika Gnaanamu',
      price:65
    },
    {
      name:'89) ఏది సత్యము ఏది అసత్యము',
      ename:'89) Edi Sathyamu Edi Asathyamu',
      price:70
    },
    {
      name:'90) ఒక వ్యక్తి రెండు కోణములు',
      ename:'90) Oka Vyakthi Rendu Konamulu',
      price:70
    },
    {
      name:'91) అంతిమ దైవగ్రంథములో వజ్ర వాక్యములు',
      ename:'91) Anthima Daivagranthamulo Vajra Vaakyamulu',
      price:515
    },
    {
      name:'92) బ్రహ్మ రావణ బ్రహ్మ భగవాన్ రావణ బ్రహ్మ',
      ename:'92) Bhagavaan Ravana Brahma',
      price:80
    },
    {
      name:'93) ద్వితీయ దైవగ్రంథములో రత్న వాక్యములు',
      ename:'93) Dvithiya Daiva Granthamulo Ratna Vaakyamulu',
      price:250
    },
    {
      name:'94) హిందూ ధర్మమునకు రక్షణ అవసరమా?',
      ename:'94) Hindu Dharmamunaku Rakshana Avasarama',
      price:75
    },
    {
      name:'95) వేదములు మనిషికి అవసరమా?',
      ename:'95) Vedamulu Manishiki Avasarama?',
      price:80
    },
    {
      name:'96) ఉపనిషత్తులలో లోపాలు',
      ename:'96) Upanishathulalo Lopaplu',
      price:80
    },
    {
      name:'97) ఖుర్ఆన్-హదీసులల ఏది ముఖ్యము?',
      ename:'97) Khuran Hadeesulalo Edhi Mukhyamu',
      price:70
    },
    {
      name:'98) సుప్రసిద్ధి బోధ',
      ename:'98) Suprasiddhi Bodha',
      price:650
    },
    {
      name:'99) భక్తిలో మీరు సంసారులా? వ్యభిచారులా?',
      ename:'99) Bhakthilo Meeru Samsaarula Vyabichaarula',
      price:90
    },
    {
      name:'100) శతము ౧౦౦',
      ename:'100) Shatamu',
      price:80
    }
  ];


  constructor() { }
}
