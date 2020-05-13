<?php
require_once $_SERVER['DOCUMENT_ROOT'] . '/includes/config.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/includes/modal.php';
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User list</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="./css/style.min.css">
</head>

<body>
    <form action="" method="post">

        <?php
require $_SERVER['DOCUMENT_ROOT'] . '/includes/action.php';
?>

        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="main-box clearfix">
                        <div class="table-responsive">
                            <table class="table user-list">
                                <thead>
                                    <tr>
                                        <th><span>
                                                <div class="custom-control
                                                    custom-checkbox">
                                                    <input type="checkbox" name="checkbox_all[]" id="checkbox_all"
                                                        value="<?=$row->id?>">
                                                    <label for="checkbox_all">all</label>
                                                </div>
                                            </span>
                                        </th>
                                        <th><span>Name</span></th>
                                        <th class="text-center"><span>Status</span></th>
                                        <th class="text-center"><span>Role</span></th>
                                        <th><span>Options</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php
$sql = 'SELECT * FROM `users` ORDER BY `id` DESC LIMIT 10';
$query = $pdo->query($sql);

while ($row = $query->fetch(PDO::FETCH_OBJ)) {?>
                                    <tr>
                                        <td>
                                            <input type="checkbox" name="checkbox" class="checkbox-<?=$row->id?> check"
                                                value="<?=$row->id?>">
                                        </td>
                                        <td>
                                            <a href="?id=<?=$row->id?>"
                                                class="user-link"><?=$row->first_name, ' ', $row->last_name?></a>
                                        </td>
                                        <td>
                                            <?php if ($row->status) {?>
                                            <div class="status active"></div>
                                            <?php } else {?>
                                            <div class="status"></div>
                                            <?php }?>
                                        </td>
                                        <td class="text-center">
                                            <?php if ($row->role == 1) {?>
                                            <span class="user-subhead">Admin</span>
                                            <?php } else {?>
                                            <span class="user-subhead">User</span>
                                            <?php }?>
                                        </td>
                                        <td style="width: 20%;">
                                            <input type="hidden" name="user_id" class="hidden" value="<?=$row->id?>">
                                            <a href="?edit=<?=$row->id?>" class="table-link edit" data-toggle="modal"
                                                data-target="#exampleModalCenter"
                                                data-whatever="User editing id=<?=$row->id?>" data-id="<?=$row->id?>">
                                                <span class="fa-stack">
                                                    <i class="fa fa-square
                                                    fa-stack-2x"></i>
                                                    <i class="fa fa-pencil
                                                    fa-stack-1x fa-inverse"></i>
                                                </span>
                                            </a>
                                            <a href="?del=<?=$row->id?>" class="table-link
                                            danger del" data-toggle="modal" data-target="#exampleModalCenter"
                                                data-whatever="Deleting user id=<?=$row->id?>" data-id="<?=$row->id?>">
                                                <span class="fa-stack">
                                                    <i class="fa fa-square
                                                    fa-stack-2x"></i>
                                                    <i class="fa fa-trash-o
                                                    fa-stack-1x fa-inverse"></i>
                                                </span>
                                            </a>
                                        </td>
                                    </tr>
                                    <?php
}
?>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php
require $_SERVER['DOCUMENT_ROOT'] . '/includes/action.php';
?>
    </form>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous">
    </script>
    <script src="./js/main.min.js" deffer></script>
</body>

</html>