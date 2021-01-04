const data = [
  {
    "id": 1,
    "company": "Photosnap",
    "logo": "./images/photosnap.svg",
    "new": true,
    "featured": true,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["HTML", "CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 2,
    "company": "Manage",
    "logo": "./images/manage.svg",
    "new": true,
    "featured": true,
    "position": "Fullstack Developer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1d ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["Python"],
    "tools": ["React"]
  },
  {
    "id": 3,
    "company": "Account",
    "logo": "./images/account.svg",
    "new": true,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2d ago",
    "contract": "Part Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  },
  {
    "id": 4,
    "company": "MyHome",
    "logo": "./images/myhome.svg",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "5d ago",
    "contract": "Contract",
    "location": "USA Only",
    "languages": ["CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 5,
    "company": "Loop Studios",
    "logo": "./images/loop-studios.svg",
    "new": false,
    "featured": false,
    "position": "Software Engineer",
    "role": "FullStack",
    "level": "Midweight",
    "postedAt": "1w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["Ruby", "Sass"]
  },
  {
    "id": 6,
    "company": "FaceIt",
    "logo": "./images/faceit.svg",
    "new": false,
    "featured": false,
    "position": "Junior Backend Developer",
    "role": "Backend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "UK Only",
    "languages": ["Ruby"],
    "tools": ["RoR"]
  },
  {
    "id": 7,
    "company": "Shortly",
    "logo": "./images/shortly.svg",
    "new": false,
    "featured": false,
    "position": "Junior Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["HTML", "JavaScript"],
    "tools": ["Sass"]
  },
  {
    "id": 8,
    "company": "Insure",
    "logo": "./images/insure.svg",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["Vue", "Sass"]
  },
  {
    "id": 9,
    "company": "Eyecam Co.",
    "logo": "./images/eyecam-co.svg",
    "new": false,
    "featured": false,
    "position": "Full Stack Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "3w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript", "Python"],
    "tools": ["Django"]
  },
  {
    "id": 10,
    "company": "The Air Filter Company",
    "logo": "./images/the-air-filter-company.svg",
    "new": false,
    "featured": false,
    "position": "Front-end Dev",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "1mo ago",
    "contract": "Part Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  }
]
const c = console.log
let filteredArray = []
/*
========
DOM
========
*/
const header = document.querySelector('.header')
const filterContainer = document.querySelector('.filters ul')
const jobsContainer = document.querySelector('.container')

const clear = document.querySelector('.clear')
clear.addEventListener('click', () => {
  header.classList.remove('show')
  filteredArray = []
})

window.addEventListener('DOMContentLoaded', function() {
  showJobs(data)
})

function getIndex(item, parent) {
  let index = 0
  for (let i = 0; i < parent.length; i++) {
    if (parent[i] === item) {
      index = i
    }
  }
  return index
}

/* deleteing filters */
function deleteFilter(e) {
  // c(e.currentTarget.parentElement.childNodes)
  const parentNode = e.currentTarget.parentElement.childNodes
  const index = getIndex(e.currentTarget, parentNode)
  filteredArray.splice(index, 1)
  prepareFilterTags(filteredArray)
}

function prepareFilterTags(arr) {
  const filters = arr.map(filter => {
    return `<li class="tag">${filter}<span class="filter-icon"></span></li>`
  }).join('')
  filterContainer.innerHTML = filters
  const flags = filterContainer.querySelectorAll('.tag')
  flags.forEach(flag => flag.addEventListener('click', deleteFilter))
}

function filterBox() {
  header.classList.add('show')
}

/* print filters */
function showFilters(e) {
  filterBox()
  const tagName = e.currentTarget.textContent
  filteredArray.push(tagName)
  c(filteredArray)
  prepareFilterTags(filteredArray)
}

/* print jobs */
function special(value, value2) {
  if (value) {
    return 'special'
  } else if (value2) {
    return 'justNew'
  } else {
    return ''
  }
}

function newAndFeatured(a, b) {
  if (a && b) {
    return `<span class="flag new">New!</span>
    <span class="flag featured">Featured</span>`
  } else if (a) {
    return `<span class="flag new">New!</span>`
  } else {
    return `
    <span class="flag featured">Featured</span>`
  }
}

function toolsAndLanguages(a, b) {
  const tools = [...a,...b]
  const tags = tools.map(tool => {
    return `<li class="tag">${tool}</li>`
  }).join('')
  return tags
}

function showJobs(data) {
  const content = data.map(job => {
    return `
    <article class="job-item grid-main-area ${special(job.featured, job.new)}">
        <figure class="job-image">
          <img src="${job.logo}" alt="${job.company}">
        </figure>
        <div class="job-info">
          <div class="job-company">
            <p>${job.company}</p>
            <div class="job-flags">${newAndFeatured(job.new, job.featured)}</div>
          </div>
          <div class="job">
            <p>${job.position}</p>
          </div>
          <div class="job-contract">
            <ul>
              <li class="info-contract">${job.postedAt}</li>
              <li class="info-contract">${job.contract}</li>
              <li class="info-contract">${job.location}</li>
            </ul>
          </div>
        </div>
        <!-- horizontal line -->
        <div class="line"></div>
        <!-- filters -->
        <div class="job-tags">
          <ul>
            <div class="roleLevel">
              <li class="tag">${job.role}</li>
              <li class="tag">${job.level}</li>
            </div>
            <div class="tools">${toolsAndLanguages(job.languages, job.tools)}</div>
          </ul>
        </div>
      </article>
    `
  }).join('')
  jobsContainer.innerHTML = content
  const tags = Array.from(document.querySelectorAll('.job-tags .tag')) 
  tags.forEach(tag => tag.addEventListener('click', showFilters))
}