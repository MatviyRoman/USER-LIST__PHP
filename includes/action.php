<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="main-box clearfix">
                <div class="action">
                    <button type="button" class="btn btn-success add" data-toggle="modal"
                        data-target="#exampleModalCenter" data-whatever="Add a new user">Add
                    </button>
                    <select class="all" name="all" size="1">
                        <option value="0" selected>Please select</option>
                        <option value="1">Set active</option>
                        <option value="2">Set not active</option>
                        <option value="3">Delete</option>
                    </select>
                    <div class="set_default">
                        <button type="button" name="btn_ok" class="btn_ok btn btn-success checkbox_btn"
                            data-toggle="modal" data-target="#exampleModalCenter" data-whatever="please choise"
                            id="set_default">Ok</button>
                    </div>
                    <div class="set_active">
                        <button type="button" name="btn_ok" class="btn_ok btn btn-success checkbox_btn"
                            data-toggle="modal" data-target="#exampleModalCenter"
                            data-whatever="You are going to set the status to active for the selected users"
                            id="set_active">Ok</button>
                    </div>
                    <div class="set_not_active">
                        <button type="button" name="btn_ok" class="btn_ok btn btn-success checkbox_btn"
                            data-toggle="modal" data-target="#exampleModalCenter"
                            data-whatever="You are going to set the status to not active for the selected users"
                            id="set_not_active">Ok</button>
                    </div>
                    <div class="set_delete">
                        <button type="button" name="btn_ok" class="btn_ok btn btn-success checkbox_btn"
                            data-toggle="modal" data-target="#exampleModalCenter"
                            data-whatever="You are about to delete selected users" id="set_delete">Ok</button>
                    </div>
                    <p class="error"></p>
                </div>
            </div>
        </div>
    </div>
</div>