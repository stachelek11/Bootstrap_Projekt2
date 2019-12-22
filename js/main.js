document.getElementById('get-btn').addEventListener('click', getAjax);

function getAjax() {
    const xhr = new XMLHttpRequest();

    console.log(xhr);

    xhr.onload = () => {
        if (xhr.status === 200) {
            document.getElementById('response').textContent = xhr.responseText;
        }
    }

    xhr.open('GET', 'ciekawostka.txt', true);
    xhr.send();

}


function tabelka() {


    $(document).ready(function () {
        $('#dtBasicExample').DataTable({info:false});
        $('.dataTables_length').addClass('bs-select');
    });
}

function form_pole_uploadu() {
    $('.file-upload').file_upload();
}



function walidacja() {
    $('#imie').on('blur', function() {
        var input = $(this);
        var imie_length = input.val().length;
        if(imie_length >= 5 && imie_length <= 15){
            input.removeClass("is-invalid").addClass("is-valid");
            input.next('.komunikat').text("Wprowadzono poprawną nazwę.").removeClass("blad").addClass("ok");
        }
        else{
            input.removeClass("is-valid").addClass("is-invalid");
            input.next('.komunikat').text("Nazwa musi mieć więcej niż 4 i mniej niż 16 znaków!").removeClass("ok").addClass("blad");

        }
    });

    $('#nazwisko').on('blur', function() {
        var input = $(this);
        var nazwisko_length = input.val().length;
        if(nazwisko_length >= 5 && nazwisko_length <= 15){
            input.removeClass("is-invalid").addClass("is-valid");
            input.next('.komunikat').text("Wprowadzono poprawną nazwę.").removeClass("blad").addClass("ok");
        }
        else{
            input.removeClass("is-valid").addClass("is-invalid");
            input.next('.komunikat').text("Nazwa musi mieć więcej niż 4 i mniej niż 16 znaków!").removeClass("ok").addClass("blad");

        }
    });

    $('#wyslij button').click(function(event){
        var imie = $('#imie');
        var nazwisko = $('#nazwisko');

        if(imie.hasClass('is-valid') && nazwisko.hasClass('is-valid')){
            alert("Pomyślnie wysłano formularz.");
        }
        else {
            event.preventDefault();
            alert("Uzupełnij brakujące pola!");
        }
    });

}