<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "navbar.php" ?>
</head>
<body>
    <div class="container">
        <select name="places" id="places" class="form-control filter" style="font:black;">
            <option value="" selected hidden disabled>Select Branch</option>
        </select>
        <br>

        <select name="date" id="date" class="form-control filter">
            <option value="" selected hidden disabled>Select Branch</option>
        </select>
        <br>
    </div>
    <table class="table col-7">
        <thead>
            <tr>
                <th>Request ID</th>
                <th>Customer</th>
                <th>Mail</th>
                <th>Slot</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script> <script src="script/validator.js"></script>
    <script src="script/adminview.js"></script>
   
</body>

</html>