const progress = document.querySelector("progress")

const handleScroll = () => {
  const windowScroll = document.body.scrollTop || document.documentElement.scrollTop
  const offsetHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrolled = windowScroll / offsetHeight
  progress.value = scrolled
}

window.addEventListener("scroll", handleScroll)