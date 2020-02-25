// Get the modal
var modal = document.getElementById("images");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("chante");
    var modalImg = document.getElementById("images1");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
   
    var img = document.getElementById("teia");
    var modalImg = document.getElementById("images1");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }

    var img = document.getElementById("nia");
    var modalImg = document.getElementById("images1");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }

    var img = document.getElementById("kiara");
    var modalImg = document.getElementById("images1");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }

    var img = document.getElementById("ana");
    var modalImg = document.getElementById("images1");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }

    var img = document.getElementById("charlotte");
    var modalImg = document.getElementById("images1");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }