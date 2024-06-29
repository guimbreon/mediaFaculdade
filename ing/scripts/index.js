function redirectToPage(pageURL, selectedOption) {// "type" is to choose how to play
    // Redirect to the next page with the selected JavaScript option

  if(selectedOption == "Logged"){
    window.location.href = pageURL
  }else{
    window.location.href = pageURL + '?type=' + selectedOption
  }
}
