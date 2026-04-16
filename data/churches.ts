import type { Church } from "@/lib/types";

export const churches: Church[] = [
  {
    id: "beza-intl",
    name: { am: "ቤዛ ዓለም አቀፍ ቤተክርስቲያን", en: "Beza International Church" },
    leader: { am: "ፓስተር ዘሪሁን ገብሬ", en: "Pastor Zerihun Gebre" },
    leaderContact: {
      phone: "+251 911 240 888",
      email: "pastor@bezachurch.example",
      whatsapp: "+251 911 240 888",
    },
    locationName: { am: "ቦሌ (ሳርቤት አካባቢ)", en: "Bole (near Sarbet)" },
    address: {
      am: "ሳርቤት ፣ አዳም ፓቪሊዮን ጀርባ ፣ አዲስ አበባ",
      en: "Sarbet, behind Adam's Pavilion, Addis Ababa",
    },
    coordinates: { lat: 8.995, lng: 38.745 },
    statementOfFaith: {
      am: "በአንድ አምላክ በአብ፣ በወልድ እና በመንፈስ ቅዱስ እናምናለን። የክርስቶስ መስቀል የመዳን መንገድ ነው።",
      en: "We believe in one God in Father, Son, and Holy Spirit. The cross of Christ is the way of salvation.",
    },
    weeklyPrograms: [
      { day: { am: "እሁድ", en: "Sunday" }, time: "9:00 AM & 11:30 AM", activity: { am: "የአምልኮ አገልግሎት", en: "Worship Service" } },
      { day: { am: "ረቡዕ", en: "Wednesday" }, time: "6:00 PM", activity: { am: "የመጽሐፍ ቅዱስ ጥናት", en: "Bible Study" } },
      { day: { am: "ዓርብ", en: "Friday" }, time: "7:00 PM", activity: { am: "የጸሎት ሌሊት", en: "Prayer Night" } },
    ],
    events: [
      {
        title: { am: "የወጣቶች ክርስቲያናዊ ኮንፈረንስ", en: "Youth Christian Conference" },
        description: { am: "የእምነት መታደስ፣ ምስጋና እና የምስክርነት ሌሊቶች።", en: "Faith renewal, worship, and testimony nights." },
        schedule: { am: "በየወሩ የመጀመሪያ ቅዳሜ", en: "First Saturday of every month" },
      },
    ],
    socials: {
      website: "https://bezachurch.org",
      facebook: "bezachurch",
      telegram: "BezaInternational",
      youtube: "BezaInternational",
    },
    donation: {
      method: { am: "የኢትዮጵያ ንግድ ባንክ", en: "Commercial Bank of Ethiopia" },
      accountNumber: "1000098765432",
      accountName: { am: "ቤዛ ዓለም አቀፍ ቤተክርስቲያን", en: "Beza International Church" },
    },
    image: "https://images.unsplash.com/photo-1504052434569-70ad94d5d8b5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mulu-wongel",
    name: { am: "የኢትዮጵያ ሙሉ ወንጌል አማኞች ቤተክርስቲያን", en: "Ethiopian Full Gospel Believers' Church" },
    leader: { am: "ፓስተር ፃዲቁ አብዶ", en: "Pastor Tsadiku Abdo" },
    leaderContact: {
      phone: "+251 913 552 112",
      email: "office@fullgospel.example",
      whatsapp: "+251 913 552 112",
    },
    locationName: { am: "መገናኛ", en: "Megenagna" },
    address: {
      am: "መገናኛ ፣ ዘፍመሽ ግራንድ ሞል ጀርባ ፣ አዲስ አበባ",
      en: "Megenagna, behind Zefmesh Grand Mall, Addis Ababa",
    },
    coordinates: { lat: 9.018, lng: 38.801 },
    statementOfFaith: {
      am: "መጽሐፍ ቅዱስ የማይሳሳት እና ለእምነት ብቸኛ መመሪያ የሆነ የእግዚአብሔር ቃል እንደሆነ እናምናለን።",
      en: "We believe the Bible is the inerrant Word of God and the only rule for faith and life.",
    },
    weeklyPrograms: [
      { day: { am: "እሁድ", en: "Sunday" }, time: "8:30 AM", activity: { am: "የማለዳ አምልኮ", en: "Morning Worship" } },
      { day: { am: "ረቡዕ", en: "Wednesday" }, time: "6:30 PM", activity: { am: "የቤት መፍለቂያ ጥናት", en: "House Fellowship" } },
      { day: { am: "አርብ", en: "Friday" }, time: "5:30 PM", activity: { am: "የጸሎት ፕሮግራም", en: "Prayer Night" } },
    ],
    events: [
      {
        title: { am: "የመንፈሳዊ እድገት ኮንፈረንስ", en: "Spiritual Growth Conference" },
        description: { am: "ቃል ትምህርት፣ አምልኮ እና የሰላም አገልግሎቶች።", en: "Word teaching, worship, and peace services." },
        schedule: { am: "በየሩብ ዓመቱ", en: "Quarterly" },
      },
    ],
    socials: {
      website: "https://etfullgospel.com",
      facebook: "FullGospelAddis",
      telegram: "FullGospelOfficial",
      youtube: "FullGospelAddis",
    },
    donation: {
      method: { am: "አቢሲንያ ባንክ", en: "Bank of Abyssinia" },
      accountNumber: "9988112233",
      accountName: { am: "የሙሉ ወንጌል ቤተክርስቲያን", en: "Full Gospel Church" },
    },
    image: "https://images.unsplash.com/photo-1523833082115-1e8f6a7b6d93?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "iec-addis",
    name: { am: "ዓለም አቀፍ ወንጌላዊት ቤተክርስቲያን (IEC)", en: "International Evangelical Church (IEC)" },
    leader: { am: "ፓስተር ዳንኤል መኮንን", en: "Pastor Daniel Mekonnen" },
    leaderContact: {
      phone: "+251 911 883 442",
      email: "hello@iecaddis.example",
      whatsapp: "+251 911 883 442",
    },
    locationName: { am: "ሳርቤት", en: "Sarbet" },
    address: {
      am: "ሳርቤት ፣ የአፍሪካ ህብረት አቅራቢያ ፣ አዲስ አበባ",
      en: "Sarbet, near African Union, Addis Ababa",
    },
    coordinates: { lat: 8.992, lng: 38.748 },
    statementOfFaith: {
      am: "ኢየሱስ ክርስቶስ የዓለም ሁሉ አዳኝ መሆኑን እና በእርሱ ብቻ ድኅነት እንደሚገኝ እናምናለን።",
      en: "We believe Jesus Christ is the Savior of the world and salvation is found in Him alone.",
    },
    weeklyPrograms: [
      { day: { am: "እሁድ", en: "Sunday" }, time: "10:30 AM", activity: { am: "የእንግሊዝኛ አምልኮ", en: "English Service" } },
      { day: { am: "ሐሙስ", en: "Thursday" }, time: "6:00 PM", activity: { am: "የተቀላቀለ ጸሎት እና አምልኮ", en: "Prayer and Praise Gathering" } },
    ],
    events: [
      {
        title: { am: "የተማሪዎች የእምነት ቀን", en: "Student Faith Day" },
        description: { am: "የተማሪዎች ጸሎት፣ ንግግር እና አንድነት ፕሮግራም።", en: "Prayer, talks, and fellowship for students." },
        schedule: { am: "የአካባቢ ቀን እየተለዋዋጠ", en: "Rotating local date" },
      },
    ],
    socials: {
      website: "https://iecaddis.org",
      facebook: "IECAddis",
      youtube: "IECAddis",
    },
    donation: {
      method: { am: "ቴሌብር", en: "Telebirr" },
      accountNumber: "0911223344",
      accountName: { am: "IEC ቤተክርስቲያን ቢሮ", en: "IEC Church Office" },
    },
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "kale-heywet",
    name: { am: "የኢትዮጵያ ቃለ ሕይወት ቤተክርስቲያን", en: "Ethiopian Kale Heywet Church" },
    leader: { am: "ፓስተር ዶ/ር እያሱ አቡሄ", en: "Dr. Eyasu Abuhe" },
    leaderContact: {
      phone: "+251 912 340 765",
      email: "info@kaleheywet.example",
      whatsapp: "+251 912 340 765",
    },
    locationName: { am: "ቂርቆስ", en: "Kirkos" },
    address: {
      am: "ቂርቆስ ክፍለ ከተማ ፣ ዋና መስሪያ ቤት አካባቢ ፣ አዲስ አበባ",
      en: "Kirkos Sub-city, Head Office Area, Addis Ababa",
    },
    coordinates: { lat: 9.01, lng: 38.761 },
    statementOfFaith: {
      am: "ወንጌልን ለፍጥረት ሁሉ ማድረስ፣ ቅዱስ ኑሮን ማበረታታት እና ደቀመዛሙርትን ማፍራት እናምናለን።",
      en: "We believe in taking the Gospel to all creation, encouraging holy living, and making disciples.",
    },
    weeklyPrograms: [
      { day: { am: "እሁድ", en: "Sunday" }, time: "9:00 AM", activity: { am: "መደበኛ አምልኮ", en: "General Worship" } },
      { day: { am: "ማክሰኞ", en: "Tuesday" }, time: "6:00 PM", activity: { am: "የመጽሐፍ ቅዱስ ጥናት", en: "Bible Study" } },
    ],
    events: [
      {
        title: { am: "የወጣቶች ትንታኔ እና ክርስቲያናዊ ኮንፈረንስ", en: "Youth Discipleship and Christian Conference" },
        description: { am: "በወጣቶች ላይ የተመረኮዘ ትምህርት እና አገልግሎት።", en: "Youth-focused teaching and ministry." },
        schedule: { am: "የእረፍት ጊዜ ወቅት", en: "Holiday season" },
      },
    ],
    socials: {
      website: "https://ekhc.net",
      telegram: "EKHCOfficial",
      youtube: "EKHCOfficial",
    },
    donation: {
      method: { am: "ደሽ ባንክ", en: "Dashen Bank" },
      accountNumber: "0011224455",
      accountName: { am: "EKHC ማዕከል", en: "EKHC Central" },
    },
    image: "https://images.unsplash.com/photo-1515815760436-94b2b3c29d4b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "rhema-yeka",
    name: { am: "ሪማ አዲስ አበባ ቤተክርስቲያን", en: "Rhema Addis Ababa Church" },
    leader: { am: "ፓስተር ሔኖክ አማኑኤል", en: "Pastor Henok Emanuel" },
    leaderContact: {
      phone: "+251 910 445 908",
      email: "hello@rhemaaddis.example",
      whatsapp: "+251 910 445 908",
    },
    locationName: { am: "የካ አባዶ", en: "Yeka Abado" },
    address: {
      am: "የካ አባዶ ፣ ፒያሳ መንገድ አቅራቢያ ፣ አዲስ አበባ",
      en: "Yeka Abado, near Piassa Road, Addis Ababa",
    },
    coordinates: { lat: 9.0312, lng: 38.8046 },
    statementOfFaith: {
      am: "በመንፈስ ቅዱስ ኃይል የተሞላ ህይወት፣ የእግዚአብሔር ቃል እውነት፣ እና የምስክርነት አገልግሎት እናምናለን።",
      en: "We believe in a Spirit-filled life, the truth of God’s Word, and a ministry of witness.",
    },
    weeklyPrograms: [
      { day: { am: "እሁድ", en: "Sunday" }, time: "8:00 AM & 11:00 AM", activity: { am: "የአምልኮ አገልግሎት", en: "Worship Service" } },
      { day: { am: "ሐሙስ", en: "Thursday" }, time: "6:30 PM", activity: { am: "የፈውስ እና ጸሎት ማታ", en: "Healing and Prayer Night" } },
    ],
    events: [
      {
        title: { am: "የቀጣይ ትውልድ ኮንፈረንስ", en: "Next Generation Conference" },
        description: { am: "ቤተሰብ፣ ወጣቶች እና አገልግሎት የሚያበረታታ ዝግጅት።", en: "A gathering that strengthens family, youth, and ministry." },
        schedule: { am: "በየዓመቱ አንድ ጊዜ", en: "Once a year" },
      },
    ],
    socials: {
      website: "https://rhemaaddis.example",
      facebook: "RhemaAddis",
      instagram: "rhema_addis",
      telegram: "RhemaAddis",
    },
    donation: {
      method: { am: "ቴሌብር", en: "Telebirr" },
      accountNumber: "0911002211",
      accountName: { am: "ሪማ ቤተክርስቲያን", en: "Rhema Church" },
    },
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=1200&q=80",
  },
];