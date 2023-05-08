// TESTING

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

 $(document).ready(function() {

    // Names are handled in Webflow Designer, these results names are used as a placeholder and guide for debugging
    var results = ['Accounts', 'Strategy', 'Creative', 'Media', 'Production', 'PR', 'Developer'];

    var score = [];

    var prevScore = [];

    function initScore(arr) {

        for (var i = 0; i < results.length; i++) {
            arr[i] = 0;
        }

        return arr;
    }

    initScore(score);
    initScore(prevScore);

    console.log('score init: ' + score);

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
	
	prevScore.push(score);
    }

    console.log('score = ' + score);
    console.log('prevScore = ' + prevScore);

    });

    // Restart button

    $('.restart').click(function() {
        $('#rone, #rtwo, #rthree, #rfour, #rfive, #rsix, #rseven').each(function(){
            $(this).fadeOut(500);
        });
        $('#intro').delay(600).fadeIn(500);
        initScore(score);
    });

    // Back button
    // Subtract metaArray (last q score) from score array, but check first if metaArray exists i.e. is after q1
    
    var subtractedPrevScore = [];       

    function subtractPrevScore() {        
        for (var i = 0; i <= score.length-1 ; i++) {
            score[i] = (score[i] - prevScore[i]);
        }   
    };

    console.log(subtractedPrevScore);

    $('#q1  > #backButton').click(function() {
        $('#q1').fadeOut(500);
        $('#intro').delay(600).fadeIn(500);
        subtractPrevScore();
        console.log('score is now : ' + score + ' after back');
    });

    $('#q2  > #backButton').click(function() {
        $('#q2').fadeOut(500);
        $('#q1').delay(600).fadeIn(500);
        subtractPrevScore();
        console.log('score is now : ' + score + ' after back');
    });

    $('#q3  > #backButton').click(function() {
        $('#q3').fadeOut(500);
        $('#q2').delay(600).fadeIn(500);
        subtractPrevScore();
        console.log('score is now : ' + score + ' after back');
    });

    $('#q4  > #backButton').click(function() {
        $('#q4').fadeOut(500);
        $('#q3').delay(600).fadeIn(500);
        subtractPrevScore();
        console.log('score is now : ' + score + ' after back');
    });       

    $('#q5  > #backButton').click(function() {
        $('#q5').fadeOut(500);
        $('#q4').delay(600).fadeIn(500);
        subtractPrevScore();
        console.log('score is now : ' + score + ' after back');
    });       

    $('#q6  > #backButton').click(function() {
        $('#q6').fadeOut(500);
        $('#q5').delay(600).fadeIn(500);
        subtractPrevScore();
        console.log('score is now : ' + score + ' after back');
    });       

    $('#q7  > #backButton').click(function() {
        $('#q7').fadeOut(500);
        $('#q6').delay(600).fadeIn(500);
        subtractPrevScore();
        console.log('score is now : ' + score + ' after back');
    });       

    $('#q8  > #backButton').click(function() {
        $('#q8').fadeOut(500);
        $('#q7').delay(600).fadeIn(500);
        subtractPrevScore();
        console.log('score is now : ' + score + ' after back');
    });       

    $('#q9  > #backButton').click(function() {
        $('#q9').fadeOut(500);
        $('#q8').delay(600).fadeIn(500);
        subtractPrevScore();
        console.log('score is now : ' + score + ' after back');
    });       

    $('#q10  > #backButton').click(function() {
        $('#q10').fadeOut(500);
        $('#q9').delay(600).fadeIn(500);
        subtractPrevScore();
        console.log('score is now : ' + score + ' after back');
    });
	 
    $('#q11  > #backButton').click(function() {
        $('#q11').fadeOut(500);
        $('#10').delay(600).fadeIn(500);
        subtractPrevScore();
        console.log('score is now : ' + score + ' after back');
    });

    $('#q12  > #backButton').click(function() {
        $('#q12').fadeOut(500);
        $('#q11').delay(600).fadeIn(500);
        subtractPrevScore();
        console.log('score is now : ' + score + ' after back');
    });

    $('#q13  > #backButton').click(function() {
        $('#q13').fadeOut(500);
        $('#q12').delay(600).fadeIn(500);
        subtractPrevScore();
        console.log('score is now : ' + score + ' after back');
    });

    $('#q14  > #backButton').click(function() {
        $('#q14').fadeOut(500);
        $('#q13').delay(600).fadeIn(500);
        subtractPrevScore();
        console.log('score is now : ' + score + ' after back');
    });       

    $('#q15  > #backButton').click(function() {
        $('#q15').fadeOut(500);
        $('#q14').delay(600).fadeIn(500);
        subtractPrevScore();
        console.log('score is now : ' + score + ' after back');
    });       

    $('#q16  > #backButton').click(function() {
        $('#q16').fadeOut(500);
        $('#q15').delay(600).fadeIn(500);
        subtractPrevScore();
        console.log('score is now : ' + score + ' after back');
    });       

    $('#q17  > #backButton').click(function() {
        $('#q17').fadeOut(500);
        $('#q16').delay(600).fadeIn(500);
        subtractPrevScore();
        console.log('score is now : ' + score + ' after back');
    });       

    $('#q18  > #backButton').click(function() {
        $('#q18').fadeOut(500);
        $('#q17').delay(600).fadeIn(500);
        subtractPrevScore();
        console.log('score is now : ' + score + ' after back');
    });       

    $('#q19  > #backButton').click(function() {
        $('#q19').fadeOut(500);
        $('#q18').delay(600).fadeIn(500);
        subtractPrevScore();
        console.log('score is now : ' + score + ' after back');
    });       

    $('#q20  > #backButton').click(function() {
        $('#q20').fadeOut(500);
        $('#q19').delay(600).fadeIn(500);
        subtractPrevScore();
        console.log('score is now : ' + score + ' after back');
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
                $('#rone').delay(1100).fadeIn(500);;
                break;
            case 1:
                $('#rtwo').delay(1100).fadeIn(500);
                break;
            case 2:
                $('#rthree').delay(1100).fadeIn(500);
                break;
            case 3:
                $('#rfour').delay(1100).fadeIn(500);
                break;
            case 4:
                $('#rfive').delay(1100).fadeIn(500);
                break;
            case 5:
                $('#rsix').delay(1100).fadeIn(500);
                break;
            case 6:
                $('#rseven').delay(1100).fadeIn(500);
                break;
        }

        // Add variables add results
        $('#rintro').delay(1100).fadeIn(500);

        });

        // Results ends


        // Fades in out

        $('#intro > .btnintro').click(function() {
            $('#intro').fadeOut(500);
            $('#q1').delay(600).fadeIn(500);
        });

        $('#q1 > .btn').click(function() {
            $('#q1').fadeOut(500);
            $('#q2').delay(600).fadeIn(500);
        });

        $('#q2  > .btn').click(function() {
            $('#q2').fadeOut(500);
            $('#q3').delay(600).fadeIn(500);
        });

        $('#q3  > .btn').click(function() {
            $('#q3').fadeOut(500);
          $('#q4').delay(600).fadeIn(500);
        });

        $('#q4  > .btn').click(function() {
            $('#q4').fadeOut(500);
          $('#q5').delay(600).fadeIn(500);
        });

        $('#q5  > .btn').click(function() {
            $('#q5').fadeOut(500);
          $('#q6').delay(600).fadeIn(500);
        });

        $('#q6  > .btn').click(function() {
            $('#q6').fadeOut(500);
          $('#q7').delay(600).fadeIn(500);
        });

        $('#q7  > .btn').click(function() {
            $('#q7').fadeOut(500);
          $('#q8').delay(600).fadeIn(500);
        });

        $('#q8  > .btn').click(function() {
            $('#q8').fadeOut(500);
          $('#q9').delay(600).fadeIn(500);
        });

        $('#q9  > .btn').click(function() {
            $('#q9').fadeOut(500);
          $('#q10').delay(600).fadeIn(500);
        });

        $('#q10  > .btn').click(function() {
            $('#q10').fadeOut(500);
          $('#11').delay(600).fadeIn(500);
        });
        
         $('#q11 > .btn').click(function() {
            $('#q11').fadeOut(500);
            $('#q12').delay(600).fadeIn(500);
        });

        $('#q12  > .btn').click(function() {
            $('#q12').fadeOut(500);
            $('#q13').delay(600).fadeIn(500);
        });

        $('#q13  > .btn').click(function() {
            $('#q13').fadeOut(500);
          $('#q14').delay(600).fadeIn(500);
        });

        $('#q14  > .btn').click(function() {
            $('#q14').fadeOut(500);
          $('#q15').delay(600).fadeIn(500);
        });

        $('#q15  > .btn').click(function() {
            $('#q15').fadeOut(500);
          $('#q16').delay(600).fadeIn(500);
        });

        $('#q16  > .btn').click(function() {
            $('#q16').fadeOut(500);
          $('#q17').delay(600).fadeIn(500);
        });

        $('#q17  > .btn').click(function() {
            $('#q17').fadeOut(500);
          $('#q18').delay(600).fadeIn(500);
        });

        $('#q18  > .btn').click(function() {
            $('#q18').fadeOut(500);
          $('#q19').delay(600).fadeIn(500);
        });

        $('#q19  > .btn').click(function() {
            $('#q19').fadeOut(500);
          $('#q20').delay(600).fadeIn(500);
        });

        $('#q20  > .btn').click(function() {
            $('#q20').fadeOut(500);
          $('#calc').delay(600).fadeIn(500);
        });

        $('#email-form > .submit').click(function() {
            $('#calc').fadeOut(500);
          $('#results').delay(600).fadeIn(500);
        });
});
