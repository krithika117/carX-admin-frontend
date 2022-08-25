<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "navbar.php" ?>
</head>

<body>
    <h1>Services</h1>
    <table class="table">
        <thead>
            <tr>
                <th>Service ID</th>
                <th>Service Name</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    <h2>Add Service</h2>
    <div id="insert_form">
        <input type="text" placeholder="Service Name" id="servicename" required="" />
        <input type="button" id="addservice" value="Submit">
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script>
    <script src="script/validator.js"></script><script src="script/add-service.js"></script>

</body>

</html>