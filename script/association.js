var server = "http://127.0.0.1:5000/";

$(document).ready(function () {
    //Create API Call
    $('#addassociation').on('click', function (e) {
        e.preventDefault();
        var serviceId = document.getElementById("serviceId").value;
        var placeId = document.getElementById("placeId").value;
        if (serviceId == "" || placeId == ""){
            alert("Please fill all details.");
        } else {
            $.ajax({
                method: "POST",
                url: server + 'create/associations',
                contentType: 'application/json;charset=UTF-8',
                data: JSON.stringify({
                    serviceId: serviceId,
                    placeId: placeId,
                }),

                success: function (response) {
                    //console.log(response)
                    location.replace('association.php')
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
            url: server + "/show/associations",
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
                        '</td><td>' +
                        data.response[i].serviceId +
                        '</td><td>' +
                        data.response[i].serviceName +
                        '</td><td>' +
                        data.response[i].price +
                        '</td></tr>');
    
                    $('tbody').append(row);
                    //console.log('done')
                }
    
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Error: ' + textStatus + ' - ' + errorThrown);
            }
        });
    
    
})