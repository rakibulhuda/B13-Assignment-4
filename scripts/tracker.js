// =============================
// DOM Element References
// =============================
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