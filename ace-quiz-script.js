document.addEventListener("DOMContentLoaded", () => {

    const emailForm = document.querySelector("#email-form");
    const submitButton = document.querySelector("#submit-button");
    const emailErrorMessage = document.querySelector("#email-error-message");
		if (!emailForm || !submitButton) {
        return;
    }

    let emailIsValid = false;

    const validateEmail = (value) => {
        const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
        if (value.match(emailValidation)) {
            return true;
        }
        return false;
    };
    const applyInvalidStyles = (el) => {
        el.classList.remove("input-valid-state");
        el.classList.add("input-error-state");
    };
    const applyValidStyle = (el) => {
        el.classList.remove("input-error-state");
        el.classList.add("input-valid-state");
    };
    const disableSubmitButton = () => {
        submitButton.disabled = true;
        submitButton.classList.add("submit-disabled-state");
    };
    const enableSubmitButton = () => {
        submitButton.disabled = false;
        submitButton.classList.remove("submit-disabled-state");
    };
    const showEmailError = () => {
        emailErrorMessage.classList.remove("hidden");
    };
    const hideEmailError = () => {
        emailErrorMessage.classList.add("hidden");
    };
    const updateSubmitButton = () => {
        if (emailIsValid) {
            enableSubmitButton();
        }
        else {
            disableSubmitButton();
        }
    };

    emailForm.addEventListener("input", (event) => {
        const emailFormValue = event.target.value;
        if (validateEmail(emailFormValue)) {
            emailIsValid = true;
            applyValidStyle(emailForm);
            hideEmailError(emailForm);
        }
        else {
            emailIsValid = false;
            applyInvalidStyles(emailForm);
            showEmailError(emailForm);
        }
        updateSubmitButton();
    });

    updateSubmitButton();
});

// add variables

var delay = 600;
var fadeDelay = 500;

 $(document).ready(function() {

    // Names are handled in Webflow Designer, these results names are used as a placeholder and guide for debugging
    var results = ['Accounts', 'Strategy', 'Creative', 'Media', 'Production', 'PR', 'Developer'];
    // Score at end determines result
    var score = [];
    // Tracks all scores
    var allScores = [];
    // Total n of questions
    var nQuestions = 20;
    // Number representing current question
    var currentQ = 0;

    function initScore(arr) {

        for (var i = 0; i < results.length; i++) {
            arr[i] = 0;
        }

        return arr;
    }

    initScore(score);

    // For single answer questions
           
    $(".btn").on( "click", function() {

        // Set in Webflow as custom attributes on each answer

        var meta1 = $( this ).attr( "_accounts" );
        var meta2 = $( this ).attr( "_strategy" );
        var meta3 = $( this ).attr( "_creative" );
        var meta4 = $( this ).attr( "_media" );
        var meta5 = $( this ).attr( "_production" );
        var meta6 = $( this ).attr( "_pr" );
        var meta7 = $( this ).attr( "_developer" );

        // Temporary array to loop through meta data for each question

        var metaArray = [meta1, meta2, meta3, meta4, meta5, meta6, meta7];

        for (var i = 0; i < metaArray.length; i++) {
            // Parse data to integers, then update score
            metaArray[i] = metaArray[i] || 0;
            // Update overall score
            score[i] += parseInt(metaArray[i]);
        }

        allScores.push(score);
        console.log('allscores = ' + allScores + ' with type: ' + typeof allScores);
        console.log('score = ' + score);

    });

    // Restart button

    $('.restart').click(function() {
        $('#rone, #rtwo, #rthree, #rfour, #rfive, #rsix, #rseven').each(function(){
            $(this).fadeOut(fadeDelay);
        });
        $('#intro').delay(delay).fadeIn(fadeDelay);
        initScore(score);
    });

    // Back button
    // Subtract score array associated with question from score array, but check first if metaArray exists i.e. is after q1    

    function goBack() {
        var prevScores = allScores[currentQ - 1];
        for (var i = 0; i < score.length; i++) {
            score[i] -= prevScores[i];
        }
    }


    $('#q1  > #backButton').click(function() {
        $('#q1').fadeOut(fadeDelay);
        $('#intro').delay(delay).fadeIn(fadeDelay);
        goBack();
        console.log('score is now : ' + score + ' after back');
        currentQ -= 1;
        console.log('currentQ = ' + currentQ);
    });

    $('#q2  > #backButton').click(function() {
        $('#q2').fadeOut(fadeDelay);
        $('#q1').delay(delay).fadeIn(fadeDelay);
        goBack();
        console.log('score is now : ' + score + ' after back');
        currentQ -= 1;
        console.log('currentQ = ' + currentQ);
    });

    $('#q3  > #backButton').click(function() {
        $('#q3').fadeOut(fadeDelay);
        $('#q2').delay(delay).fadeIn(fadeDelay);
        goBack();
        console.log('score is now : ' + score + ' after back');
        currentQ -= 1;
        console.log('currentQ = ' + currentQ);
    });

    $('#q4  > #backButton').click(function() {
        $('#q4').fadeOut(fadeDelay);
        $('#q3').delay(delay).fadeIn(fadeDelay);
        goBack();
        console.log('score is now : ' + score + ' after back');
        currentQ -= 1;
        console.log('currentQ = ' + currentQ);
    });       

    $('#q5  > #backButton').click(function() {
        $('#q5').fadeOut(fadeDelay);
        $('#q4').delay(delay).fadeIn(fadeDelay);
        goBack();
        console.log('score is now : ' + score + ' after back');
        currentQ -= 1;
        console.log('currentQ = ' + currentQ);
    });       

    $('#q6  > #backButton').click(function() {
        $('#q6').fadeOut(fadeDelay);
        $('#q5').delay(delay).fadeIn(fadeDelay);
        goBack();
        console.log('score is now : ' + score + ' after back');
        currentQ -= 1;
        console.log('currentQ = ' + currentQ);
    });       

    $('#q7  > #backButton').click(function() {
        $('#q7').fadeOut(fadeDelay);
        $('#q6').delay(delay).fadeIn(fadeDelay);
        goBack();
        console.log('score is now : ' + score + ' after back');
        currentQ -= 1;
        console.log('currentQ = ' + currentQ);
    });       

    $('#q8  > #backButton').click(function() {
        $('#q8').fadeOut(fadeDelay);
        $('#q7').delay(delay).fadeIn(fadeDelay);
        goBack();
        console.log('score is now : ' + score + ' after back');
        currentQ -= 1;
        console.log('currentQ = ' + currentQ);
    });       

    $('#q9  > #backButton').click(function() {
        $('#q9').fadeOut(fadeDelay);
        $('#q8').delay(delay).fadeIn(fadeDelay);
        goBack();
        console.log('score is now : ' + score + ' after back');
        currentQ -= 1;
        console.log('currentQ = ' + currentQ);
    });       

    $('#q10  > #backButton').click(function() {
        $('#q10').fadeOut(fadeDelay);
        $('#q9').delay(delay).fadeIn(fadeDelay);
        goBack();
        console.log('score is now : ' + score + ' after back');
        currentQ -= 1;
        console.log('currentQ = ' + currentQ);
    });
	 
    $('#q11  > #backButton').click(function() {
        $('#q11').fadeOut(fadeDelay);
        $('#10').delay(delay).fadeIn(fadeDelay);
        goBack();
        console.log('score is now : ' + score + ' after back');
        currentQ -= 1;
        console.log('currentQ = ' + currentQ);
    });

    $('#q12  > #backButton').click(function() {
        $('#q12').fadeOut(fadeDelay);
        $('#q11').delay(delay).fadeIn(fadeDelay);
        goBack();
        console.log('score is now : ' + score + ' after back');
        currentQ -= 1;
        console.log('currentQ = ' + currentQ);
    });

    $('#q13  > #backButton').click(function() {
        $('#q13').fadeOut(fadeDelay);
        $('#q12').delay(delay).fadeIn(fadeDelay);
        goBack();
        console.log('score is now : ' + score + ' after back');
        currentQ -= 1;
        console.log('currentQ = ' + currentQ);
    });

    $('#q14  > #backButton').click(function() {
        $('#q14').fadeOut(fadeDelay);
        $('#q13').delay(delay).fadeIn(fadeDelay);
        goBack();
        console.log('score is now : ' + score + ' after back');
        currentQ -= 1;
        console.log('currentQ = ' + currentQ);
    });       

    $('#q15  > #backButton').click(function() {
        $('#q15').fadeOut(fadeDelay);
        $('#q14').delay(delay).fadeIn(fadeDelay);
        goBack();
        console.log('score is now : ' + score + ' after back');
        currentQ -= 1;
        console.log('currentQ = ' + currentQ);
    });       

    $('#q16  > #backButton').click(function() {
        $('#q16').fadeOut(fadeDelay);
        $('#q15').delay(delay).fadeIn(fadeDelay);
        goBack();
        console.log('score is now : ' + score + ' after back');
        currentQ -= 1;
        console.log('currentQ = ' + currentQ);
    });       

    $('#q17  > #backButton').click(function() {
        $('#q17').fadeOut(fadeDelay);
        $('#q16').delay(delay).fadeIn(fadeDelay);
        goBack();
        console.log('score is now : ' + score + ' after back');
        currentQ -= 1;
        console.log('currentQ = ' + currentQ);
    });       

    $('#q18  > #backButton').click(function() {
        $('#q18').fadeOut(fadeDelay);
        $('#q17').delay(delay).fadeIn(fadeDelay);
        goBack();
        console.log('score is now : ' + score + ' after back');
        currentQ -= 1;
        console.log('currentQ = ' + currentQ);
    });       

    $('#q19  > #backButton').click(function() {
        $('#q19').fadeOut(fadeDelay);
        $('#q18').delay(delay).fadeIn(fadeDelay);
        goBack();
        console.log('score is now : ' + score + ' after back');
        currentQ -= 1;
        console.log('currentQ = ' + currentQ);
    });       

    $('#q20  > #backButton').click(function() {
        $('#q20').fadeOut(fadeDelay);
        $('#q19').delay(delay).fadeIn(fadeDelay);
        goBack();
        console.log('score is now : ' + score + ' after back');
        currentQ -= 1;
        console.log('currentQ = ' + currentQ);
    });    


    // Results begins

    $('#calc .submit').click(function() {

        // Finds index of max int in array, used to compute personality answer
        // Essentially finding highest score in score array

        function indexOfMax(arr) {
            if (arr.length === 0) {
                return -1;
            };

            var max = arr[0];
            var maxIndex = 0;

            for (var i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    maxIndex = i;
                    max = arr[i];
                };
            };

            return maxIndex;
        };

        $('#calc').fadeOut(1000);

        console.log('index of max = ' + indexOfMax(score));
        console.log(results[indexOfMax(score)]);

        switch (indexOfMax(score)) {
            case 0:
                $('#rone').delay(1100).fadeIn(fadeDelay);;
                break;
            case 1:
                $('#rtwo').delay(1100).fadeIn(fadeDelay);
                break;
            case 2:
                $('#rthree').delay(1100).fadeIn(fadeDelay);
                break;
            case 3:
                $('#rfour').delay(1100).fadeIn(fadeDelay);
                break;
            case 4:
                $('#rfive').delay(1100).fadeIn(fadeDelay);
                break;
            case 5:
                $('#rsix').delay(1100).fadeIn(fadeDelay);
                break;
            case 6:
                $('#rseven').delay(1100).fadeIn(fadeDelay);
                break;
        }

        // Add variables add results
        $('#rintro').delay(1100).fadeIn(fadeDelay);

        });

        // Results ends


        // Fades in out

        $('#intro > .btnintro').click(function() {
            $('#intro').fadeOut(fadeDelay);
            $('#q1').delay(delay).fadeIn(fadeDelay);
            console.log('currentQ = ' + currentQ);
        });

        $('#q1 > .btn').click(function() {
            $('#q1').fadeOut(fadeDelay);
            $('#q2').delay(delay).fadeIn(fadeDelay);
            currentQ++;
            console.log('currentQ = ' + currentQ);
        });

        $('#q2  > .btn').click(function() {
            $('#q2').fadeOut(fadeDelay);
            $('#q3').delay(delay).fadeIn(fadeDelay);
            currentQ++;
            console.log('currentQ = ' + currentQ);
        });

        $('#q3  > .btn').click(function() {
            $('#q3').fadeOut(fadeDelay);
          $('#q4').delay(delay).fadeIn(fadeDelay);
          currentQ++;
          console.log('currentQ = ' + currentQ);
        });

        $('#q4  > .btn').click(function() {
            $('#q4').fadeOut(fadeDelay);
          $('#q5').delay(delay).fadeIn(fadeDelay);
          currentQ++;
          console.log('currentQ = ' + currentQ);
        });

        $('#q5  > .btn').click(function() {
            $('#q5').fadeOut(fadeDelay);
          $('#q6').delay(delay).fadeIn(fadeDelay);
          currentQ++;
          console.log('currentQ = ' + currentQ);
        });

        $('#q6  > .btn').click(function() {
            $('#q6').fadeOut(fadeDelay);
          $('#q7').delay(delay).fadeIn(fadeDelay);
          currentQ++;
          console.log('currentQ = ' + currentQ);
        });

        $('#q7  > .btn').click(function() {
            $('#q7').fadeOut(fadeDelay);
          $('#q8').delay(delay).fadeIn(fadeDelay);
          currentQ++;
          console.log('currentQ = ' + currentQ);
        });

        $('#q8  > .btn').click(function() {
            $('#q8').fadeOut(fadeDelay);
          $('#q9').delay(delay).fadeIn(fadeDelay);
          currentQ++;
          console.log('currentQ = ' + currentQ);
        });

        $('#q9  > .btn').click(function() {
            $('#q9').fadeOut(fadeDelay);
          $('#q10').delay(delay).fadeIn(fadeDelay);
          currentQ++;
          console.log('currentQ = ' + currentQ);
        });

        $('#q10  > .btn').click(function() {
            $('#q10').fadeOut(fadeDelay);
          $('#11').delay(delay).fadeIn(fadeDelay);
          currentQ++;
          console.log('currentQ = ' + currentQ);
        });
        
         $('#q11 > .btn').click(function() {
            $('#q11').fadeOut(fadeDelay);
            $('#q12').delay(delay).fadeIn(fadeDelay);
            currentQ++;
            console.log('currentQ = ' + currentQ);
        });

        $('#q12  > .btn').click(function() {
            $('#q12').fadeOut(fadeDelay);
            $('#q13').delay(delay).fadeIn(fadeDelay);
            currentQ++;
            console.log('currentQ = ' + currentQ);
        });

        $('#q13  > .btn').click(function() {
            $('#q13').fadeOut(fadeDelay);
          $('#q14').delay(delay).fadeIn(fadeDelay);
          currentQ++;
          console.log('currentQ = ' + currentQ);
        });

        $('#q14  > .btn').click(function() {
            $('#q14').fadeOut(fadeDelay);
          $('#q15').delay(delay).fadeIn(fadeDelay);
          currentQ++;
          console.log('currentQ = ' + currentQ);
        });

        $('#q15  > .btn').click(function() {
            $('#q15').fadeOut(fadeDelay);
          $('#q16').delay(delay).fadeIn(fadeDelay);
          currentQ++;
          console.log('currentQ = ' + currentQ);
        });

        $('#q16  > .btn').click(function() {
            $('#q16').fadeOut(fadeDelay);
          $('#q17').delay(delay).fadeIn(fadeDelay);
          currentQ++;
          console.log('currentQ = ' + currentQ);
        });

        $('#q17  > .btn').click(function() {
            $('#q17').fadeOut(fadeDelay);
          $('#q18').delay(delay).fadeIn(fadeDelay);
          currentQ++;
          console.log('currentQ = ' + currentQ);
        });

        $('#q18  > .btn').click(function() {
            $('#q18').fadeOut(fadeDelay);
          $('#q19').delay(delay).fadeIn(fadeDelay);
          currentQ++;
          console.log('currentQ = ' + currentQ);
        });

        $('#q19  > .btn').click(function() {
            $('#q19').fadeOut(fadeDelay);
          $('#q20').delay(delay).fadeIn(fadeDelay);
          currentQ++;
          console.log('currentQ = ' + currentQ);
        });

        $('#q20  > .btn').click(function() {
            $('#q20').fadeOut(fadeDelay);
          $('#calc').delay(delay).fadeIn(fadeDelay);
        });

        $('#email-form > .submit').click(function() {
            $('#calc').fadeOut(fadeDelay);
          $('#results').delay(delay).fadeIn(fadeDelay);
        });
});
