const LinksSocialMedia = {
  github: 'marceloffbrito',
  youtube: '',
  facebook: 'm.ferreira98',
  instagram: 'mferreiira___'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url) //busque
    .then(response => response.json()) //entao | arrow function, função anonima | trasnformar resposta em json
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfo()
