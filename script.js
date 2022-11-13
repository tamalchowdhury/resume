const copyEl = document.getElementById("copy")

copyEl.addEventListener("click", copyToClipboard)

function copyToClipboard(event) {
  const driveURL =
    "https://docs.google.com/document/d/1jZ0OooyveHh_0cZ3MLxXTmue8G64F9u-rsdnpWYGDiw/edit?usp=sharing"

  try {
    navigator.clipboard.writeText(driveURL)
    copyEl.textContent = "Link copied to clipboard!"
  } catch (error) {
    console.log("error trying to copy link to clipboard", error)
  }
}
