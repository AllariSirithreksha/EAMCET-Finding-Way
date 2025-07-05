// Sample data for demonstration
const colleges = [
    {
        name: "JNTU Hyderabad",
        stream: "engineering",
        image: "// Sample data for demonstration
const colleges = [
    {
        name: "JNTU Hyderabad",
        stream: "engineering",
        image: "https://media.telanganatoday.com/wp-content/uploads/2022/07/JNTU.jpg"
    },
    {
        name: "ANGRAU Hyderabad",
        stream: "agriculture",
        image: "https://www.admissionindia.net/uploads/colleges/207/s1.jpg"
   
    },
    {
        name: "Osmania Medical College",
        stream: "medical",
        image: "https://e1.pxfuel.com/desktop-wallpaper/878/140/desktop-wallpaper-of-osmania-medical-college-hyderabad-telangana-india.jpgl"
    },
    {
        name: "CBIT Hyderabad",
        stream: "engineering",
        image: "https://enrollacademy.com/wp-content/uploads/2021/06/CBIT2.png"
    },
];

// DOM Elements
const streamFilter = document.getElementById("streamFilter");
const searchInput = document.getElementById("searchInput");
const collegeList = document.getElementById("collegeList");

// Function to display colleges
function displayColleges(data) {
    collegeList.innerHTML = ""; // Clear existing
    if (data.length === 0) {
        collegeList.innerHTML = "<p>No colleges found.</p>";
        return;
    }
    data.forEach(college => {
        const div = document.createElement("div");
        div.classList.add("college-item");
        div.innerHTML = `
            <img src="${college.image}" alt="${college.name}">
            <h3>${college.name}</h3>
            <p>Stream: ${college.stream.charAt(0).toUpperCase() + college.stream.slice(1)}</p>
        `;
        collegeList.appendChild(div);
    });
}

// Filter + Search Function
function filterColleges() {
    const selectedStream = streamFilter.value;
    const searchText = searchInput.value.toLowerCase();

    const filtered = colleges.filter(college => {
        const matchStream = selectedStream === "all" || college.stream === selectedStream;
        const matchSearch = college.name.toLowerCase().includes(searchText);
        return matchStream && matchSearch;
    });

    displayColleges(filtered);
}

// Event Listeners
streamFilter.addEventListener("change", filterColleges);
searchInput.addEventListener("input", filterColleges);

// Initial Load
window.addEventListener("DOMContentLoaded", () => {
    displayColleges(colleges);
});
"
    },
    {
        name: "ANGRAU Hyderabad",
        stream: "agriculture",
        image: "https://via.placeholder.com/250x150?text=ANGRAU"
    },
    {
        name: "Osmania Medical College",
        stream: "medical",
        image: "https://via.placeholder.com/250x150?text=Osmania+Medical"
    },
    {
        name: "CBIT Hyderabad",
        stream: "engineering",
        image: "https://via.placeholder.com/250x150?text=CBIT"
    },
    {
        name: "PJTS Agricultural University",
        stream: "agriculture",
        image: "https://via.placeholder.com/250x150?text=PJTSAU"
    }
];

// DOM Elements
const streamFilter = document.getElementById("streamFilter");
const searchInput = document.getElementById("searchInput");
const collegeList = document.getElementById("collegeList");

// Function to display colleges
function displayColleges(data) {
    collegeList.innerHTML = ""; // Clear existing
    if (data.length === 0) {
        collegeList.innerHTML = "<p>No colleges found.</p>";
        return;
    }
    data.forEach(college => {
        const div = document.createElement("div");
        div.classList.add("college-item");
        div.innerHTML = `
            <img src="${college.image}" alt="${college.name}">
            <h3>${college.name}</h3>
            <p>Stream: ${college.stream.charAt(0).toUpperCase() + college.stream.slice(1)}</p>
        `;
        collegeList.appendChild(div);
    });
}

// Filter + Search Function
function filterColleges() {
    const selectedStream = streamFilter.value;
    const searchText = searchInput.value.toLowerCase();

    const filtered = colleges.filter(college => {
        const matchStream = selectedStream === "all" || college.stream === selectedStream;
        const matchSearch = college.name.toLowerCase().includes(searchText);
        return matchStream && matchSearch;
    });

    displayColleges(filtered);
}

// Event Listeners
streamFilter.addEventListener("change", filterColleges);
searchInput.addEventListener("input", filterColleges);

// Initial Load
window.addEventListener("DOMContentLoaded", () => {
    displayColleges(colleges);
});
