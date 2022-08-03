<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <!-- poppins -->
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
    <!-- axios -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.27.2/axios.min.js"
        integrity="sha512-odNmoc1XJy5x1TMVMdC7EMs3IVdItLPlCeL5vSUPN2llYKMJ2eByTTAIiiuqLg+GdNr9hF6z81p27DArRFKT7A=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <title>Postello</title>
</head>

<body style="background-color:#D3DEDC; font-family:'Poppins';">
    <div class="container-fluid">
        <div class="row mt-5 justify-content-center">
            <div class="col-5-md bg-light p-5 shadow">
                <h2><strong>Your Password is Changed!</strong></h2><br />
                <p> You can now go back to sign in page.<br />Thank you for choosing our application!</p>
                <button onclick=onSignIn() class="btn-lg btn-dark btn-outline-light px-5 mt-3">
                    Sign In
                </button>
            </div>
        </div>
    </div>
    <script>
        function onSignIn() {
            window.location.href = "http://localhost/signin";
        }
    </script>
</body>

</html>
