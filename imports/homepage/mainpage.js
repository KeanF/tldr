function openNav() {
      document.getElementById("mySidenav").style.width = "650px";
      document.getElementById("main").style.marginLeft = "250px";
      document.body.style.backgroundColor = "grey";
  }

  function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }