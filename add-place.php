<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "navbar.php" ?>
</head>

<body>
    <h1>Places</h1>
    <table class="table">
        <thead>
            <tr>
                <th>Place ID</th>
                <th>Place Location</th>
                <th>Place Address</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    <h2>Add Place</h2>
    <div id="insert_form">
        <input type="text" placeholder="Place Location" id="location" required="" />
        <input type="text" placeholder="Place Address" id="address" required="" />
        <input type="button" id="addplace" value="Submit">
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script>
    <script src="script/validator.js"></script>
<script src="script/add-place.js"></script>
</body>

</html>