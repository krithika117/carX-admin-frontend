var server = "http://127.0.0.1:5000/";
$(document).ready(function () {
    
    $(document).on("click", '.deny', function (e) {
        e.preventDefault();
        var reqId = $(this).attr("id");
        $.ajax({
            method: "POST",
            url: server + "request/denied",
            dataType: 'json',
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify({
                reqId: reqId,
            }),
            dataType: 'json',
            success: function (data) {
                location.replace('adminview.php')
            },
            error: function (err) {}
        })
        alert("Declined.")
    });

    $(document).on("click", '.approve', function (e) {
        e.preventDefault();
        var reqId = $(this).attr("id");
        $.ajax({
            method: "POST",
            url: server + "request/approved",
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify({
                reqId: reqId,
            }),
            dataType: 'json',
            success: function (data) {
                //Add Toastify
                location.replace('dashboard.php')
                //console.log('deleted')
            },
            error: function (err) {
                //console.log(err);
            }
        })
        alert("Approved.")

    });
    load_select3()

    function load_select3() {
        $.ajax({
            method: "POST",
            url: server + 'listdata',
            contentType: 'application/json;charset=UTF-8',
            dataType: 'json',
            success: function (data) {
                $('tbody').empty();
                console.log(data)
                if (data.response.length < 1) {
                    $('tbody').append("No requests due :)");
                }
                else {
                    for (var i = 0; i < data.response.length; i++) {
                        var row = ''
                        row = $('<tr><td>' +
                            data.response[i].reqId +
                            '</td><td>' +
                            data.response[i].name +
                            '</td><td>' +
                            data.response[i].mail +
                            '</td><td>' +
                            data.response[i].location +
                            '</td><td>' +
                            data.response[i].time +
                            '</td><td><button type="button" id="' + data.response[i].reqId + '"class="commonname approve">Approve</button>' +
                            '&nbsp;<button type="button" id="' + data.response[i].reqId + '" class="commonname deny">Deny</button></td></tr>');
                        $('tbody').append(row);
                    }
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('Error: ' + textStatus + ' - ' + errorThrown);
            }

        });
    }

})