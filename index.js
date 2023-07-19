const button = document.querySelector("#btn");
button.addEventListener("click", result);



function result(e) {
  e.preventDefault();

	let points=0;

	if(document.querySelector('#answer1').checked){	
    points++;
		}
	if(document.querySelector('#answer2').checked){	
        points++;
		}
	if(document.querySelector('#answer3').checked) {	
        points++;
		}
  if(document.querySelector('#answer4').checked) {	
    points++;
      }

  if(document.querySelector('#answer5').checked) {	
    points++;
    }
    if(document.querySelector('#answer6').checked) {	
        points++;
        }
  if(document.querySelector('#answer7').checked) {	
          points++;
          }
  document.querySelector("#disp").textContent = "Your points are : " + points + " out of 7" + ".";
}