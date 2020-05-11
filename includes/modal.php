<?php
// $id = trim(filter_var($_GET['edit'], FILTER_SANITIZE_NUMBER_INT));
// $sql = 'SELECT * FROM `users` WHERE `id` = :id';
// $query = $pdo->prepare($sql);
// $query->execute(['id' => $id]);
// $user = $query->fetch(PDO::FETCH_OBJ);
// var_dump($user->id);
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
                <input type="hidden" name="user_id" class="hidden" value="<?=$user->id?>">
                <h1><?=$user->id?></h1>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="first-name" class="col-form-label">First name:</label>
                        <input type="text" class="form-control" name="first_name" id="first_name"
                            value="<?=$user->first_name?>">
                    </div>

                    <div class="form-group">
                        <label for="last-name" class="col-form-label">Last name:</label>
                        <input type="text" class="form-control" name="last_name" id="last_name"
                            value="<?=$user->last_name?>">
                    </div>
                    <div class="form-group custom-control
                                custom-switch">
                        <label for="status" class="switch">
                            <!-- <input type="checkbox" name="status" id="status" value="0"> -->
                            <input type="checkbox" name="status" id="status" value="<?=$user->status?>">
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
                        You really want to delete this user?
                    </div>
                    <div class="set_active">
                        You are going to set the status to active for the selected users?
                    </div>
                    <div class="set_not_active">
                        You are going to set the status to not active for the selected users?
                    </div>
                    <div class="set_delete">
                        You are about to delete selected users?
                    </div>
                    <p class="error" id="error"></p>
                </div>
                <div class="modal-footer">
                    <div class="add_text">
                        <button type="button" class="btn btn-success user" id="add_user">Save</button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                    <div class="edit_text">
                        <button type="button" class="btn btn-success user" id="edit_user">Save changes</button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                    <div class="delete_text">
                        <button type="button" class="btn btn-danger user" id="del_user">Yes</button>
                        <button type="button" class="btn btn-success" data-dismiss="modal">No</button>
                    </div>
                    <div class="set_active">
                        <button type="button" class="btn btn-danger user" id="set_active">Yes</button>
                        <button type="button" class="btn btn-success" data-dismiss="modal">No</button>
                    </div>
                    <div class="set_not_active">
                        <button type="button" class="btn btn-danger user" id="set_not_active">Yes</button>
                        <button type="button" class="btn btn-success" data-dismiss="modal">No</button>
                    </div>
                    <div class="set_delete">
                        <button type="button" class="btn btn-danger user" id="set_delete">Yes</button>
                        <button type="button" class="btn btn-success" data-dismiss="modal">No</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>