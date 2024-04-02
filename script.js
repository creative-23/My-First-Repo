const AddedBooks = [];

const button = document
 .querySelectorAll(".select")
  .forEach(function (clickedButton) {
    clickedButton.addEventListener("click", function () {

      const parentElement = clickedButton.parentNode;

      const image = parentElement.childNodes[1];
      const text = parentElement.childNodes[3];

      const isAlreadyAdded = AddedBooks.some(function (item) {

        return item.textContent === text.textContent;
      });

      const maxArray = AddedBooks.some(function (item) {

        return AddedBooks.length == 8;
      });

      if (isAlreadyAdded == true) {

        alert("Already added book");
      }

      else if (maxArray == true) {

        alert("Maximum Limit Reached");
      }

      else if (isAlreadyAdded == false && maxArray == false) {

        AddedBooks.push({ imageSrc: image.src, textContent: text.textContent });
        const stringifyArray = JSON.stringify(AddedBooks);
        localStorage.setItem('SavedArray',stringifyArray);
  
      } 

    });
  });
  



