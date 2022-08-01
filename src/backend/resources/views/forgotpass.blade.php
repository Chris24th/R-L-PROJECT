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

    <div class="container-md">
        <div class="row m-3 justify-content-center p-2">
            <form class="col-md-6 bg-light shadow p-5 mt-5 border-form"
                onsubmit="window.location.href = 'signin'; onReset()">
                <h1 class="mb-5">
                    <strong>Postello</strong>
                </h1>
                <h5 class="mb-5">
                    Change password for
                    <span id='email' class="font-weight-bold"></span>
                </h5>
                <div class="mb-4">
                    <label for="password">New password</label>
                    <input type="password" class="form-control" id="password" required />
                </div>
                <div class="mb-5">
                    <label for="confirmPass">Confirm password</label>
                    <input type="password" class="form-control" id="confirmPass" required />
                </div>
                <div class="d-grid mx-auto my-3 justify-content-end">
                    <input type="submit" class="btn-lg btn-dark btn-outline-light px-5" value="Submit" />
                </div>
            </form>
        </div>
    </div>


    <script>
        let user = JSON.parse(localStorage.getItem("user-info"));
        var email = document.getElementById('email').innerHTML = user.data;
        async function onReset() {
            var password = document.getElementById("password").value;
            var confirmPass = document.getElementById("confirmPass").value;
            let item = {
                email,
                password
            };
            if (password == confirmPass) {
                console.warn(item);
                try {
                    axios({
                        method: "post",
                        url: "http://localhost/api/v1/resetpassword",
                        data: {
                            email,
                            password
                        },
                    }).then((response) =
                        alert('Password changed successfully. You can now Sign in.'),
                        localStorage.clear(),
                        window.close()
                    );
                } catch (e) {
                    alert(e);
                }
            } else alert('Passwords do not Match. Please try again.')
        }
    </script>
</body>

</html>
