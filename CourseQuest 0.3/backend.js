


    var firstYears = ["First-Year Seminar", "First-Year Launch", "Triple-I", "College Thriving","ENGL 105","GLBL Language"];
    var focusCapacities = ["Aesthetic & Interpretive Analysis","Creative Expression, Practice, & Production","Engagement with the Human Past",
    "Ethical & Civic Values","Power, Difference, & Inequality","Quantitative Reasoning","Ways of Knowing","Empirical Investigation Lab"];
    var reflection = ["Research & Discovery", "High-Impact Experience","Lifetime Fitness", "Communication Beyond Carolina"];
    var bigList = [firstYears, focusCapacities, reflection];
    var myDiv1 = document.getElementById("FYF");
    var myDiv2 = document.getElementById("Focus");
    var myDiv3 = document.getElementById("Reflect");
    var divList = [myDiv1, myDiv2, myDiv3];
    var vastList = [];

    var testArea = document.getElementById("testArea");

    for (var i = 0; i < bigList.length; i++) {
        for(var j = 0; j < bigList[i].length; j++){
            var checkBox = document.createElement("input");
            var label = document.createElement("label");
            var linebreak = document.createElement("br");
            checkBox.type = "checkbox";
            checkBox.value = bigList[i][j];
            checkBox.addEventListener('click', function (event) { 
                var check = event.target;
                if(check.checked == 1)
                    vastList.push("You have added a(n) "+check.value+ ". \n");
                else{
                    let temp = vastList.indexOf("You have added a(n) "+check.value+ ". \n");
                    if(temp >= vastList.length)
                        vastList.splice(temp);
                    else
                        vastList.splice(temp, 1);
                    
                }
                testArea.value = "";
                for(let i = 0; i < vastList.length; i++){
                    
                    testArea.value += vastList[i];
                }
            });
            console.log("hi"); 
            divList[i].appendChild(checkBox);
            divList[i].appendChild(label);
            label.appendChild(document.createTextNode(bigList[i][j]));
            divList[i].appendChild(linebreak);
        }

        
    }


    function searchCourse(){

        



    }

    

    
//append child means I can add a child to a element in the page, such as an option in a form


//how do I put user input inside the text area with async toggle of checkbox




//https://www.w3schools.com/howto/howto_css_dropdown.asp
//Get dropdowns working and have the user input of the dropdown boxes be entered into the textarea

//https://blog.hubspot.com/website/html-dropdown
