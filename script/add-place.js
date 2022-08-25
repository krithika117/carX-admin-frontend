var server = "http://127.0.0.1:5000/";

$(document).ready(function () {
    //Create API Call
    $('#addplace').on('click', function (e) {
        e.preventDefault();

        var location = document.getElementById("location").value;
        var address = document.getElementById("address").value;
        if (location == "" || address==""){
            alert("Please fill Service Name.");
        } else {
            $.ajax({
                method: "POST",
                url: server + 'add/places',
                contentType: 'application/json;charset=UTF-8',
                data: JSON.stringify({
                    location: location,
                    address: address,
                }),

                success: function (response) {
                    location.replace('add-place.php')
                },

                error: function (err) {
                    alert("Something went wrong")
                }
            });
        }

    });

        //Retrieve API Call
        $.ajax({
            method: "POST",
            url: server + "/show/places",
            dataType: 'json',
            success: function (data) {
                //console.log(data);
                $('tbody').empty();
                for (var i = 0; i < data.response.length; i++) {
                    var row = ''
                    row = $('<tr><td>' +
                        data.response[i].placeId +
                        '</td><td>' +
                        data.response[i].location +
                        '</td><td>' +
                        data.response[i].address +
                        '</td><</tr>');
    
                    $('tbody').append(row);
                    //console.log('done')
                }
    
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Error: ' + textStatus + ' - ' + errorThrown);
            }
        });
    
    
})