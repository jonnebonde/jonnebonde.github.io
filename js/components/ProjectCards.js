
export function renderProjectCards(data) {

  console.log("data")

const container = document.getElementById("project_cards_container");

console.log(container)

data.forEach((project) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h2");
  title.textContent = project.title;
  card.appendChild(title);

  const subtitle = document.createElement("h3");
  subtitle.textContent = project.subtitle;
  card.appendChild(subtitle);

  const description = document.createElement("p");
  description.textContent = project.description;
  card.appendChild(description);

  const img = document.createElement("img");
  img.src = project.imgSrc;
  img.alt = project.imgAlt;
  card.appendChild(img);

  const linksDiv = document.createElement("div");
  linksDiv.classList.add("links");

  const liveSiteLink = document.createElement("a");
  liveSiteLink.classList.add("live-site-link");
  liveSiteLink.href = project.liveSiteLink;
  liveSiteLink.title = project.liveSiteLink;
  liveSiteLink.textContent = "Live site";
  linksDiv.appendChild(liveSiteLink);

  const githubLink = document.createElement("a");
  githubLink.classList.add("github-link");
  githubLink.href = project.githubLink;
  githubLink.title = project.githubLink;
  githubLink.textContent = "Github";
  linksDiv.appendChild(githubLink);

  card.appendChild(linksDiv);

  container.appendChild(card);
});

}

