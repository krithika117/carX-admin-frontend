<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "navbar.php" ?>
</head>

<body>
    <h2>Places & Services</h2>
    <table class="table">
        <thead>
            <tr>
                <th>Place ID</th>
                <th>Place Location</th>
                <th>Place Address</th>
                <th>Service ID</th>
                <th>Service Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    <h2>Add Association</h2>
    <div id="insert_form"> 
        <input type="text" placeholder="Place ID" id="placeId" required="" />
        <input type="text" placeholder="Service ID" id="serviceId" required="" />
        <input type="button" id="addassociation" value="Submit">
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script>
    <script src="script/validator.js"></script><script src="script/association.js"></script>
    

</body>

</html>