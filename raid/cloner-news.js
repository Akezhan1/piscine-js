function fetchingById(id) {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((resp)=>resp.json()).then(loadData)
}

let posts = []

const loadData = post => {
  let element = document.createElement('div')
  element.id = post.id
  let title = document.createElement('h2')
  title.textContent = post.title
  let type = document.createElement('p')
  type.textContent = post.type
  element.appendChild(title)
  element.appendChild(type)
  document.body.appendChild(element)
  console.log(post)
  posts.push(post)
}
  
const urls = [
  'https://hacker-news.firebaseio.com/v0/askstories.json',
  'https://hacker-news.firebaseio.com/v0/showstories.json',
  'https://hacker-news.firebaseio.com/v0/jobstories.json'
]

Promise.all(urls.map(url=>fetch(url))).then(responses => responses.forEach(response => response.json().then(ids=> ids.forEach(id=>fetchingById(id)))))