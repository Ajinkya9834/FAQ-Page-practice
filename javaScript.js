document.querySelectorAll(".accordion-header").forEach((question) => {
    question.addEventListener("click", ()=> {    
 
      const answer = question.nextElementSibling;
 if (answer.style.height > "0px") { 
      question.querySelector(".minus-icon").classList.remove("toggle-icons");
      question.querySelector(".plus-icon").classList.add("toggle-icons");
    } else {
      question.querySelector(".minus-icon").classList.add("toggle-icons");
     question.querySelector(".plus-icon").classList.remove("toggle-icons");
    }

        // Close all other accordion headers and reset their icons
         document.querySelectorAll(".accordion-header").forEach((otherHeader) => {  
      if (otherHeader !== question) {
        const otherAnswer = otherHeader.nextElementSibling;
        if (otherAnswer.style.height <= "0px") {
           // Close the answer directly
          otherHeader.querySelector(".minus-icon").classList.add("toggle-icons");
          otherHeader.querySelector(".plus-icon").classList.remove("toggle-icons");
        }
      }
    });
    });
});


