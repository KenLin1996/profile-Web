//下載履歷
function downloadFile() {
  var link = document.createElement("a");
  link.href = "Resume.pdf"; // 檔案的相對路徑
  link.download = "Ken's Resume.pdf"; // 下載時的檔案名稱

  link.style.display = "none";
  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
}

// nav bar 滑動效果
let nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    nav.style.boxShadow = "";
  } else {
    nav.style.boxShadow = "0px 3px 10px white";
  }
});

// 搜尋功能
const searchInput = document.getElementById("search-input");
const projectList = document.getElementById("project-list");

const allProjects = projectList.querySelectorAll("a");

function searchProjects(searchTerm) {
  const filteredProjects = [...allProjects].filter((project) => {
    return project.textContent.toLowerCase().includes(searchTerm.toLowerCase());
  });
  displayProjects(filteredProjects);
}

function displayProjects(projects) {
  projectList.innerHTML = "";

  if (projects.length > 0) {
    projects.forEach((project) => {
      projectList.appendChild(project);
    });
  } else {
    const noResults = document.createElement("li");
    noResults.textContent = "找不到符合條件的項目";
    projectList.appendChild(noResults);
  }
}

searchInput.addEventListener("keyup", (event) => {
  const searchTerm = event.target.value;
  searchProjects(searchTerm);
});
