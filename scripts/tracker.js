let totalJobCount = document.getElementById("totalJobCount");
totalJobCount.innerText = 0;

let interviewedCount = document.getElementById("interviewedCount");
interviewedCount.innerText = 0;

let rejectedCount = document.getElementById("rejectedCount");
rejectedCount.innerText = 0;

let allTab = document.getElementById("allTab");
let interviewTab = document.getElementById("interviewTab");
let rejectedTab = document.getElementById("rejectedTab");

const jobPosts = [
    {
        id: 1,
        company: "Brain Station 23",
        position: "Frontend Developer",
        location: "Dhaka",
        type: "Full-time",
        salary: "৳60,000 – ৳90,000",
        status: "NOT APPLIED",
        description: "Develop responsive web interfaces for international clients using React, TypeScript, and modern UI libraries. Collaborate with global teams in agile environments."
    },
    {
        id: 2,
        company: "Enosis Solutions",
        position: "Software Engineer",
        location: "Dhaka",
        type: "Full-time",
        salary: "৳55,000 – ৳85,000",
        status: "NOT APPLIED",
        description: "Build scalable enterprise applications using Java/Spring Boot and cloud platforms. Work on projects for healthcare and logistics sectors in the US and Europe."
    },
    {
        id: 3,
        company: "Vivasoft Limited",
        position: "Backend Developer",
        location: "Dhaka",
        type: "Full-time",
        salary: "৳65,000 – ৳100,000",
        status: "NOT APPLIED",
        description: "Design and maintain RESTful APIs and microservices using Node.js and .NET Core. Focus on high-availability systems for fintech and e-commerce clients."
    },
    {
        id: 4,
        company: "Cefalo Bangladesh",
        position: "React Developer",
        location: "Dhaka",
        type: "Full-time",
        salary: "৳70,000 – ৳110,000",
        status: "NOT APPLIED",
        description: "Create dynamic user experiences for Scandinavian clients using React, Redux, and GraphQL. Emphasis on performance, accessibility, and clean code."
    },
    {
        id: 5,
        company: "KAZ Software",
        position: "UI Engineer",
        location: "Dhaka",
        type: "Full-time",
        salary: "৳60,000 – ৳95,000",
        status: "NOT APPLIED",
        description: "Implement pixel-perfect, responsive designs using Tailwind CSS and modern JavaScript frameworks. Work closely with UX designers on SaaS products."
    },
    {
        id: 6,
        company: "BJIT Group",
        position: "Full Stack Developer",
        location: "Dhaka",
        type: "Full-time",
        salary: "৳50,000 – ৳80,000",
        status: "NOT APPLIED",
        description: "Develop end-to-end solutions using Angular, .NET, and SQL Server for Japanese and European clients. Participate in full SDLC from requirement to deployment."
    },
    {
        id: 7,
        company: "DataSoft Systems",
        position: "Mobile App Developer",
        location: "Dhaka",
        type: "Full-time",
        salary: "৳55,000 – ৳85,000",
        status: "NOT APPLIED",
        description: "Build cross-platform mobile apps using Flutter and Firebase for government and private sector clients in Bangladesh and abroad."
    },
    {
        id: 8,
        company: "Therap (BD) Ltd.",
        position: "JavaScript Engineer",
        location: "Dhaka",
        type: "Full-time",
        salary: "৳60,000 – ৳90,000",
        status: "NOT APPLIED",
        description: "Enhance a leading disability services platform used in the US. Work with legacy and modern JavaScript stacks, focusing on maintainability and user experience."
    },
    {
        id: 9,
        company: "bKash",
        position: "Frontend Engineer",
        location: "Dhaka",
        type: "Full-time",
        salary: "৳80,000 – ৳130,000",
        status: "NOT APPLIED",
        description: "Develop secure and high-performance interfaces for Bangladesh's largest mobile financial service. Use React, TypeScript, and strict security best practices."
    },
    {
        id: 10,
        company: "SSL Wireless",
        position: "Web Developer",
        location: "Dhaka",
        type: "Full-time",
        salary: "৳45,000 – ৳75,000",
        status: "NOT APPLIED",
        description: "Build internal tools and customer-facing portals using Laravel and Vue.js. Support digital transformation initiatives for telecom and banking clients."
    }
];

allTab.addEventListener("click", function () {
    makeTabActive(allTab);
    filterJobs("ALL");
});

interviewTab.addEventListener("click", function () {
    makeTabActive(interviewTab);
    filterJobs("INTERVIEW");
});

rejectedTab.addEventListener("click", function () {
    makeTabActive(rejectedTab);
    filterJobs("REJECTED");
});

function makeTabActive(activeTab) {
    const tabs = [allTab, interviewTab, rejectedTab];
    const inactiveClasses = ["bg-white", "text-gray-700", "border-gray-300"];
    const activeClasses = ["tab-active", "bg-[#3b82f6]", "text-white", "border-[#3b82f6]"];

    tabs.forEach(tab => {
        activeClasses.forEach(cls => tab.classList.remove(cls));
        inactiveClasses.forEach(cls => tab.classList.add(cls));
    });

    // Activate clicked tab
    inactiveClasses.forEach(cls => activeTab.classList.remove(cls));
    activeClasses.forEach(cls => activeTab.classList.add(cls));
}

function filterJobs(status) {
    const allCards = document.querySelectorAll("#jobPostParent > div[id^='jobPosts']");
    const emptyState = document.getElementById("emptyState");
    let visibleCount = 0;
    let totalCount = 0;

    allCards.forEach((card) => {
        if (card.id === "jobPosts") return;

        totalCount++;

        if (status === "ALL") {
            card.style.display = "block";
            visibleCount++;
        } else {
            const cardStatus = card.querySelector("span").textContent.trim();
            if (cardStatus === status) {
                card.style.display = "block";
                visibleCount++;
            } else {
                card.style.display = "none";
            }
        }
    });

    if (visibleCount === 0) {
        emptyState.style.display = "flex";
    } else {
        emptyState.style.display = "none";
    }

    // Update job count
    const countElement = document.getElementById("availableJobsCount");
    if (status === "ALL") {
        countElement.textContent = `${totalCount} ${totalCount > 1 ? "jobs" : "job"}`;
    } else {
        countElement.textContent = `${visibleCount} out of ${totalCount} ${totalCount > 1 ? "jobs" : "job"}`;
    }
}

function updateJobStatus(jobId, newStatus) {
    const jobPost = jobPosts.find(job => job.id === jobId);
    if (!jobPost) return;

    // Validate status
    const VALID_STATUSES = ["NOT APPLIED", "INTERVIEW", "REJECTED"];
    if (!VALID_STATUSES.includes(newStatus)) return;

    jobPost.status = newStatus;

    const cardId = "jobPosts" + jobId;
    const card = document.getElementById(cardId);
    if (!card) return;

    const statusSpan = card.querySelector("span");
    statusSpan.textContent = newStatus;

    // Reset status badge classes
    statusSpan.classList.remove("bg-gray-200", "text-gray-800", "bg-green-200", "text-green-800", "bg-red-200", "text-red-800");

    if (newStatus === "INTERVIEW") {
        statusSpan.classList.add("bg-green-200", "text-green-800");
    } else if (newStatus === "REJECTED") {
        statusSpan.classList.add("bg-red-200", "text-red-800");
    } else {
        statusSpan.classList.add("bg-gray-200", "text-gray-800");
    }

    // 🎬 TRIGGER ANIMATION
    triggerCardAnimation(card, newStatus);

    // Refresh counters
    updateCounters();

    // Re-apply current active tab filter
    let activeTab = "ALL";
    if (interviewTab.classList.contains("tab-active")) {
        activeTab = "INTERVIEW";
    } else if (rejectedTab.classList.contains("tab-active")) {
        activeTab = "REJECTED";
    }
    filterJobs(activeTab);
}

// 🎬 New helper function: Trigger card animation
function triggerCardAnimation(card, status) {
    // Remove any existing animation classes first
    card.classList.remove("card-status-change", "interview", "rejected");

    // Force reflow to restart animation (magic trick ✨)
    void card.offsetWidth;

    // Add animation classes based on status
    card.classList.add("card-status-change");
    if (status === "INTERVIEW") {
        card.classList.add("interview");
    } else if (status === "REJECTED") {
        card.classList.add("rejected");
    }
}

function updateCounters() {
    const totalCount = jobPosts.length;
    const interviewCount = jobPosts.filter(job => job.status === "INTERVIEW").length;
    const rejectedCountValue = jobPosts.filter(job => job.status === "REJECTED").length; // ← Renamed to avoid shadowing

    totalJobCount.innerText = totalCount;
    interviewedCount.innerText = interviewCount;
    rejectedCount.innerText = rejectedCountValue; // ← Use renamed variable
}

function deleteJob(jobId) {
    const cardId = "jobPosts" + jobId;
    const card = document.getElementById(cardId);
    if (card) {
        card.remove();
    }

    const jobIndex = jobPosts.findIndex(job => job.id === jobId);
    if (jobIndex > -1) {
        jobPosts.splice(jobIndex, 1);
    }

    updateCounters();

    let activeTab = "ALL";
    if (interviewTab.classList.contains("tab-active")) {
        activeTab = "INTERVIEW";
    } else if (rejectedTab.classList.contains("tab-active")) {
        activeTab = "REJECTED";
    }
    filterJobs(activeTab);
}

function loadJobs() {
    for (let index in jobPosts) {
        let jobPost = jobPosts[index];
        let jobPostTemplate = document.getElementById("jobPosts");
        let clonedJobPost = jobPostTemplate.cloneNode(true);

        // Setup card
        clonedJobPost.id = "jobPosts" + jobPost.id;
        clonedJobPost.style.display = "block";

        clonedJobPost.querySelector("h4").textContent = jobPost.company;
        let paragraphs = clonedJobPost.querySelectorAll("p");
        paragraphs[0].textContent = jobPost.position;
        paragraphs[1].textContent = `${jobPost.location} • ${jobPost.type} • ${jobPost.salary}`;
        paragraphs[2].textContent = jobPost.description;

        // Setup status badge
        let statusSpan = clonedJobPost.querySelector("span");
        statusSpan.textContent = jobPost.status;

        statusSpan.classList.remove("bg-gray-200", "text-gray-800");
        if (jobPost.status === "INTERVIEW") {
            statusSpan.classList.add("bg-green-200", "text-green-800");
        } else if (jobPost.status === "REJECTED") {
            statusSpan.classList.add("bg-red-200", "text-red-800");
        } else {
            statusSpan.classList.add("bg-gray-200", "text-gray-800");
        }

        // Attach event listeners to buttons
        const buttons = clonedJobPost.querySelectorAll("button:not(.delete-btn)");

        // Interview
        buttons[0].addEventListener("click", function () {
            updateJobStatus(jobPost.id, "INTERVIEW");
        });

        // Rejected
        buttons[1].addEventListener("click", function () {
            updateJobStatus(jobPost.id, "REJECTED");
        });

        // Delete
        const deleteBtn = clonedJobPost.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", function () {
            deleteJob(jobPost.id);
        });

        // Append
        document.getElementById("jobPostParent").appendChild(clonedJobPost);
    }
}

loadJobs();
updateCounters();
filterJobs("ALL");