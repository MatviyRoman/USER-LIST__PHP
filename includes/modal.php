<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">Form</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form method="post" class="post">
                <input type="hidden" name="user_id" class="hidden" value="">
                <div class="modal-body">
                    <div class="form-group">
                        <label for="first-name" class="col-form-label">First name:</label>
                        <input type="text" class="form-control" name="first_name" id="first_name" value="">
                    </div>

                    <div class="form-group">
                        <label for="last-name" class="col-form-label">Last name:</label>
                        <input type="text" class="form-control" name="last_name" id="last_name" min="4" value="">
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
                    <div class="del_text">
                        You really want to delete this user?
                    </div>
                    <div class="set_active_text" id="set_active">
                        You are going to set the status to active for the selected users?
                    </div>
                    <div class="set_not_active_text" id="set_not_active">
                        You are going to set the status to not active for the selected users?
                    </div>
                    <div class="error" id="error">
                        <p class="set_default_text" id="set_default">
                            You have not selected any items
                        </p>
                        <p class="set_delete_text" id="set_delete">
                            You are about to delete selected users?
                        </p>
                        <p class="notcheck_text" id="notcheck">
                            You have not selected any checkpoints
                        </p>
                    </div>
                    <div class="result"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success user add_text" id="add_user">Save</button>
                    <button type="button" class="btn btn-success user edit_text" id="edit_user">Save changes</button>
                    <button type="button" class="btn btn-danger user del_text" id="del_user">Yes</button>
                    <button type="button" class="btn btn-success user set_active_text" id="set_active">Yes</button>
                    <button type="button" class="btn btn-success user set_not_active_text"
                        id="set_not_active">Yes</button>
                    <button type="button" class="btn btn-danger user set_delete_text" id="set_delete">Yes</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal" id="close">Close</button>
                </div>
            </form>
        </div>
    </div>
</div>