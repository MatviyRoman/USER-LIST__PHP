<?php
$id = trim(filter_var($_POST['id'], FILTER_SANITIZE_NUMBER_INT));
$sql = 'SELECT * FROM `users` WHERE `id` = :id';
$query = $pdo->prepare($sql);
$query->execute(['id' => $id]);
$user = $query->fetch(PDO::FETCH_OBJ);
var_dump($user);
?>

<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">Форма</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form method="post" class="post">
                <h1><?=$user->id?></h1>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="first-name" class="col-form-label">First name:</label>
                        <input type="text" class="form-control" name="first_name" id="first_name">
                    </div>

                    <div class="form-group">
                        <label for="last-name" class="col-form-label">Last name:</label>
                        <input type="text" class="form-control" name="last_name" id="last_name">
                    </div>
                    <div class="form-group custom-control
                                custom-switch">
                        <label for="status" class="switch">
                            <input type="checkbox" name="status" id="status" value="0">
                            <span class="slider round"></span>
                        </label>
                        <span class="status_text">status <span class="text">off</span></span>
                    </div>
                    <div class="form-group">
                        <select class="form-control custom-select" name="role" id="role" size="1">
                            <option value="null" selected>Role</option>
                            <option value="1">Admin</option>
                            <option value="2">User</option>
                        </select>
                    </div>
                    <div class="delete_text">
                        Delete user
                    </div>
                    <p class="error" id="error"></p>
                </div>
                <div class="modal-footer">
                    <div class="add_text">
                        <!-- <input type="hidden" name="add_user" id="id" value="<?=$user->id?>"> -->
                        <button type="button" class="btn btn-success user" id="add_user">Save</button>
                    </div>
                    <div class="delete_text">
                        <input type="hidden" name="del_user" id="id" value="<?=$user->id?>">
                        <button type="button" class="btn btn-success user" id="del_user">Save</button>
                    </div>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
            </form>
        </div>
    </div>
</div>