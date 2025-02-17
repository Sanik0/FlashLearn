 // --- Auto-grow setup function for textareas ---
 function setupGrowingTextarea(textarea) {
    textarea.addEventListener('input', function() {
      // Reset height so it can shrink when deleting text
      textarea.style.height = 'auto';
      // Adjust height to fit content
      textarea.style.height = `${textarea.scrollHeight}px`;
      
      // Enforce a maximum height of 200px
      if (textarea.scrollHeight > 200) {
        textarea.style.overflowY = 'scroll';
        textarea.style.height = '200px';
      } else {
        textarea.style.overflowY = 'hidden';
      }
    });
  }

  // --- On DOM load, set up existing textareas (if any) ---
  document.addEventListener('DOMContentLoaded', function() {
    const textareas = document.querySelectorAll('.growingTextarea');
    textareas.forEach(setupGrowingTextarea);
  });

  // Starting card number (if you wish to start at a specific number)
  let cardCount = 3;

  // --- Function to update card numbers for all cards in the container ---
  function updateCardNumbers() {
    const cards = document.querySelectorAll('#cardContainer .card');
    cards.forEach((card, index) => {
      const numberElement = card.querySelector('.card-actions h3');
      if (numberElement) {
        // Number cards starting from 1
        numberElement.textContent = index + 1;
      }
    });
  }

  // --- Function to add a new card ---
  function addCard() {
    // Create a new card container
    const newCard = document.createElement("div");
    newCard.classList.add("card");

    // Set the card's innerHTML (no duplicate outer .card wrapper)
    newCard.innerHTML = `
      <div class="term-definition">
        <div class="term">
          <h4>Term</h4>
          <div class="textfield grey">
            <textarea name="" class="growingTextarea" rows="1"></textarea>
          </div>
        </div>
        <div class="term">
          <h4>Definition</h4>
          <div class="textfield grey">
            <textarea name="" class="growingTextarea" rows="1"></textarea>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <h3>${cardCount}</h3>
        <div class="actions">
          <a href="#" class="icon-container">
            <i class="uil uil-image"></i>
          </a>
          <a href="#" class="icon-container">
            <i class="uil uil-trash-alt"></i>
          </a>
        </div>
      </div>
    `;

    document.getElementById("cardContainer").appendChild(newCard);

    // Bind auto-grow behavior to the new card's textareas
    const newTextareas = newCard.querySelectorAll('.growingTextarea');
    newTextareas.forEach(setupGrowingTextarea);

    // Add an event listener to the trash icon in this new card
    const trashIcon = newCard.querySelector('.uil-trash-alt');
    trashIcon.addEventListener('click', function(e) {
      e.preventDefault();
      newCard.remove();  // Remove the card from the DOM
      updateCardNumbers(); // Update numbering for the remaining cards
    });

    // Increase the card count for the next card added
    cardCount++; 
}

// =========================================== TABLE EXPAND ===========================================

document.addEventListener('DOMContentLoaded', function() {
  var table = document.getElementById('myTable');
  var rows = table.getElementsByTagName('tr');

  for (var i = 1; i < rows.length; i++) { 
      rows[i].addEventListener('click', function() {
          var cells = this.getElementsByTagName('td');
          for (var j = 0; j < cells.length; j++) {
              cells[j].classList.toggle('expanded');
          }
      });
  }
});

// =========================================== DROPDOWN LINKS ===========================================

function DropdownMenu() {
  var dropdown = document.getElementById("DropdownMenu");
  if (dropdown.style.display === "flex") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "flex";
  }
}