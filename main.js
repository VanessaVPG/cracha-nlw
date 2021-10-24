const linksSocialMedia = {
  github: 'VanessaVPG',
  youtube: 'channel/UCHX6PoEhm-kLL15k3tc9Wxw',
  instagram: 'vanessa.vpg',
  facebook: 'vanessa.vpg.vanessa',
  linkedin: 'vanessavpg'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHugProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userAvatar.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHugProfileInfos()
