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
    // Question IDs to loop
     var questionIds = [
       "#q1", "#q2", "#q3", "#q4", "#q5",
       "#q6", "#q7", "#q8", "#q9", "#q10",
       "#q11", "#q12", "#q13", "#q14", "#q15",
       "#q16", "#q17", "#q18", "#q19", "#q20"
     ];
    // Score at end determines result
    var score = [];
    // Tracks all scores
    var allScores = [[]];
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
    
    function initAllScores(arr) {
    
        for (var i = 0; i < nQuestions; i++) {
        allScores.push([]);
      }
    }
    
    initAllScores(allScores);

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
            allScores[currentQ].push(parseInt(metaArray[i]));
        }

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
        var prevScore = allScores[currentQ - 1];
        allScores[currentQ - 1] = [];
        for (var i = 0; i < score.length; i++) {
            score[i] -= prevScore[i];
        }
        currentQ -= 1;
        // console.log('score is now: ' + score + ' after back');
        // console.log('currentQ is now:' + currentQ) + ' after back';
    }
    
    // Handle back to intro
    $('#q1  > #backButton').click(function() {
        $('#q1').fadeOut(fadeDelay);
        $('#intro').delay(delay).fadeIn(fadeDelay);
        // console.log('score is now : ' + score + ' after back');
      	// console.log('currentQ = ' + currentQ + ' after back');
        currentQ -= 1;
    });

    // Use a loop to add the click event handler to each back button
    for (let i = 1; i < questionIds.length; i++) {
        const currentId = questionIds[i];
        const prevId = questionIds[i - 1];
        const backButton = $(`${currentId} > #backButton`);
        backButton.click(() => {
            $(currentId).fadeOut(fadeDelay);
            $(prevId).delay(delay).fadeIn(fadeDelay);
            goBack();
        });
    }


    // Results begins

    $('#calc .submit').click(function() {

        // Finds index of max int in array, used to compute personality answer
        // Essentially finding highest score in score array

        function indexOfMax(arr) {
            if (arr.length === 0) {
                return -1;
            }

            var max = arr[0];
            var maxIndex = 0;

            for (var i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    maxIndex = i;
                    max = arr[i];
                }
            }

            return maxIndex;
        }

        $('#calc').fadeOut(1000);

        console.log('index of max = ' + indexOfMax(score));
        console.log(results[indexOfMax(score)]);

        switch (indexOfMax(score)) {
            case 0:
                $('#rone').delay(1100).fadeIn(fadeDelay);
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


        // Fades in out

        $('#intro > .btnintro').click(function() {
            $('#intro').fadeOut(fadeDelay);
            $('#q1').delay(delay).fadeIn(fadeDelay);
            currentQ++;
            // console.log('currentQ = ' + currentQ);
        });

        // use a loop to bind the click event to each question
        questionIds.forEach(function(questionId, index) {
          $(questionId + " > .btn").click(function() {
            $(questionId).fadeOut(fadeDelay);
            if (index < questionIds.length - 1) {
              var nextQuestionId = questionIds[index + 1];
              $(nextQuestionId).delay(delay).fadeIn(fadeDelay);
              currentQ++;
              // console.log("currentQ = " + currentQ);
            }
          });
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
