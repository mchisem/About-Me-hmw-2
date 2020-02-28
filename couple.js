// Get the modal
var modal = document.getElementById("images");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("wedding");
    var modalImg = document.getElementById("images1");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
    }

    var img = document.getElementById("nick");
    var modalImg = document.getElementById("images1");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
    }

    var img = document.getElementById("cristal");
    var modalImg = document.getElementById("images1");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
    }

    var img = document.getElementById("stares");
    var modalImg = document.getElementById("images1");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = () => {
      modal.style.display = "none";
    }