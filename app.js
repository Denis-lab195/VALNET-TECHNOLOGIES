// Firebase Config
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR-API-KEY",
  authDomain: "YOUR-PROJECT.firebaseapp.com",
  projectId: "YOUR-PROJECT-ID",
  storageBucket: "YOUR-PROJECT.appspot.com",
  messagingSenderId: "SENDER-ID",
  appId: "APP-ID",
  measurementId: "MEASUREMENT-ID"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Load events dynamically
async function loadEvents() {
  const eventsList = document.getElementById("events-list");
  if (!eventsList) return;

  const querySnapshot = await getDocs(collection(db, "events"));
  querySnapshot.forEach((doc) => {
    const event = doc.data();
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<h3>${event.title}</h3><p>${event.date}</p><p>${event.description}</p>`;
    eventsList.appendChild(div);
  });
}
loadEvents();

// Contact Form Submission (you can later add Firebase/EmailJS)
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    form.reset();
  });
}
