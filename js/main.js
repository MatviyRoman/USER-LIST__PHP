$('.default').show();

$('.form-group, .error, .result, #notcheck, #add_user, #edit_user, #del_user, .add_text, .edit_text, .del_text, .set_active_text, .set_not_active_text, .set_delete_text, .all_active, .all_not_active, .all_delete').hide();

$('.add').click(function () {
    $('.form-group, #add_user, .add_text').show();
    $('.error, .result').hide();
    $('#first_name').val('');
    $('#last_name').val('');
    $('#status').is(function () {
        $(this).val(0);
        if ($(this).val() == 0) {
            $(this).prop('checked', false);
        } else {
            $(this).prop('checked', true);
        }
    });
    $('#role').val('null');
    $('#add_user').is(function () {
        $(this)
            .text('Save')
            .attr('class', 'btn btn-success');
    });
    $('#close').is(function () {
        $(this)
            .text('Close')
            .attr('class', 'btn btn-danger');
    });
    console.log('click .add');
});



$('#add_user').click(function () {
    const fname = $('#first_name').val();
    const lname = $('#last_name').val();
    const status = $('#status').val();
    const role = $('#role').val();

    $.ajax({
        url: 'ajax/add_user.php',
        type: 'POST',
        cache: false,
        data: {
            first_name: fname,
            last_name: lname,
            status: status,
            role: role,
        },
        dataType: 'html',
        success: function (data) {
            if (data == 'OK') {
                $(this).show(function () {
                    $('.result')
                        .show()
                        .text('You have successfully added a user.')
                        .attr('id', 'success');
                });
                $('.error').hide();
                updateData();
            } else {
                $('.result').hide();
                $('.error').show(function () {
                    $(this).text(data);
                    console.log('error');
                });
            }
        },
    });
    console.log('click #add_user');
});



$('.edit').click(function () {
    const id = $(this).find('.hidden').val();
    $('.form-group, #edit_user, .edit_text').show();
    $('.error, .result').hide();
    $('#edit_user').is(function () {
        $(this)
            .text('Save changes')
            .attr('class', 'btn btn-success');
    });
    $('#close').is(function () {
        $(this)
            .text('No')
            .attr('class', 'btn btn-danger');
    });

    $.ajax({
        url: 'ajax/get_user_info.php',
        type: 'GET',
        cache: false,
        data: {
            id: id,
        },
        dataType: 'json',
        success: function (data) {
            $.getJSON("ajax/get_user_info.php?id=" + id, function (data) {
                const first_name = data.first_name;
                const last_name = data.last_name;
                const status = data.status;
                const role = data.role;
                $('#first_name').val(first_name);
                $('#last_name').val(last_name);
                $('#status').is(function () {
                    $(this).val(status);
                    if (status == 0) $(this).prop('checked', false);
                    else $(this).prop('checked', true);
                });
                $('#role').val(role);
            });
            //console.log(data);
        },
    });
    console.log('click .edit id=' + id);
});



$('#edit_user').click(function () {
    const fname = $('#first_name').val();
    const lname = $('#last_name').val();
    const status = $('#status').val();
    const role = $('#role').val();
    const id = $('#exampleModalCenter').find('.hidden').val();

    $.ajax({
        url: 'ajax/edit_user.php',
        type: 'POST',
        cache: false,
        data: {
            id: id,
            first_name: fname,
            last_name: lname,
            status: status,
            role: role,
        },
        dataType: 'html',
        success: function (data) {
            if (data == 'UPDATE') {
                $(this).show(function () {
                    $('.result')
                        .show()
                        .text('You have successfully edited the user.')
                        .attr('id', 'success');
                });
                $('.error').hide();
                updateData();
            } else {
                $('.result').hide();
                $('.error').show(function () {
                    $(this).text(data);
                    console.log('error');
                });
            }
        },
    });
    console.log('click #edit_user id=' + id);
});



$('.del').click(function () {
    const id = $(this).find('.hidden').val();
    $('#del_user, .del_text').show();
    $('.form-group, .error, .result').hide();
    $('#del_user').is(function () {
        $(this)
            .text('Delete')
            .attr('class', 'btn btn-danger');
    });
    $('#close').is(function () {
        $(this)
            .text('No')
            .attr('class', 'btn btn-success');
    });
    console.log('click .del id=' + id);
});



$('#del_user').click(function () {
    const id = $('#exampleModalCenter').find('.hidden').val();

    $.ajax({
        url: 'ajax/del_user.php',
        type: 'POST',
        cache: false,
        data: {
            id: id,
        },
        dataType: 'html',
        // beforeSend: function() {

        // },
        success: function (data) {
            if (data == 'DELETE') {
                $(this).show(function () {
                    $('.result')
                        .show()
                        .text('You have successfully deleted the user.')
                        .attr('id', 'success');
                });
                $('.error, .del_text').hide();
                updateData();
            } else {
                $('.result').hide();
                $('.error, #del_user, .del_text').show(function () {
                    $(this).text(data);
                    console.log('error');
                });
            }
        },
    });
    console.log('click #del_user id=' + id);
});


$('#exampleModalCenter').on('show.bs.modal', function (event) {
    const button = $(event.relatedTarget);
    const recipient = button.data('whatever');
    const id = button.data('id');
    $(this).find('.hidden').val(id);
    $('#close, .close').click(function () {
        $('.form-group, .error, .result, #notcheck, #add_user, #edit_user, #del_user, .add_text, .edit_text, .del_text, .set_active_text, .set_not_active_text, .set_delete_text, .all_active, .all_not_active, .all_delete').hide();
        console.log('click #close');
    });
    $(this).find('.modal-title').text(recipient);
});



$('select.all').change(function () {
    $(this).on(function () {
        $(this).prop('selected', true);
    })
    const selected = $(this).children('option:selected').val();
    console.log('selected ' + selected);

    ($('.error').show(function () {
        $('#exampleModalCenter').find('.modal-title').text('Error');
        $('#set_not_active, #set_active, #set_delete').hide();
        console.log('error');
    }));

    if (0 == $(this).val()) {
        $(this).attr('selected', 'selected');
        $('.default, #notcheck').show();
        $('.all_not_active, .all_active, .all_delete, .del_text .error').hide();
        $('.btn_ok').is(function () {
            $(this).attr('data-whatever', 'You have not selected any items');
        });
    } else if (1 == $(this).val()) {
        $(this).attr('selected', 'selected');
        $('.all_active, #notcheck').show();
        $('.all_not_active, .all_delete, .default').hide();
        $('.btn_ok').is(function () {
            $(this).attr('data-whatever', 'You are going to set the status to active for the selected users');
        });
    } else if (2 == $(this).val()) {
        $(this).attr('selected', 'selected');
        $('.all_not_active, #notcheck').show();
        $('.all_delete, .all_active, .default').hide();
        $('.btn_ok').is(function () {
            $(this).attr('data-whatever', 'You are going to set the status to not active for the selected users');
            $(this).attr('id', 'set_not_active');
        });
    } else if (3 == $(this).val()) {
        $(this).attr('selected', 'selected');
        $('.all_delete, #notcheck').show();
        $('.all_not_active, .all_active, .default').hide();
        $('.btn_ok').is(function () {
            $(this).attr('data-whatever', 'You are about to delete selected users');
            $(this).attr('disabled', false);
        });
    }
});



$('.checkbox_btn').click(function () {
    const check = [];
    $.each($('.check:checked'), function () {
        check.push($(this).val());
    });
    console.log(check.join('##'));
    const checked = check.join('##');
    if ($('.check:checked').change(function () {
        $('.error').show();
    }));

    $('.check').on('change', function () {
        if ($('.check').prop('checked')) {
            $('#notcheck').hide();
            console.log('check');
        } else {
            $('#notcheck, .error').show();
            console.log('notcheck');
        }
    });
});



$('#checkbox_all').click(function () {
    $('.check').not(this).prop('checked', this.checked);
});

$('.check').change(function () {
    if ($('.check:checked').length == $('.check').length) {
        $('#checkbox_all').prop('checked', true);
    } else {
        $('#checkbox_all').prop('checked', false);
    }
});



$('#status').click(function () {
    if (this.checked) {
        $(this).attr('value', 1);
        $('.text').text('on');
    }
    else {
        $(this).attr('value', 0);
        $('.text').text('off');
    }
});



$('.checkbox_btn').click(function () {
    console.log('click .checkbox_btn');
    $('.form-group, .add_text, .edit_text, .delete_text').hide();
    $('.all_delete_text').show();
    $('#add_user').is(function () {
        $(this).text('Yes');
        $(this).attr('class', 'btn btn-success');
    });
});



$('.set_default').click(function () {
    $('.error').show();
});



$('.set_active').click(function () {

    let check = [];
    $.each($('.check:checked'), function () {
        check.push($(this).val());
    });
    let checked = check.join('##');
    console.log(checked);
    console.log('click .set_active');

    $.ajax({
        url: 'ajax/set_active.php',
        type: 'POST',
        cache: false,
        data: {
            checkbox: checked,
        },
        dataType: 'html',
        success: function (data) {
            if (data == 'ACTIVE') {
                $('#edit_user').show(function () {
                    // event.preventDefault();
                    $(this)
                        .text('Ok. User edit')
                        .addClass('success')
                        .attr('id', 'success');
                    setInterval('refreshPage()', 1000);
                });
                $('.error').hide();
                updateData();
            } else {
                $('.error').show(function () {
                    $(this).text(data);
                    console.log('error');
                });
            }
        },
    });
});



$('.set_not_active').click(function () {

    let check = [];
    $.each($('.check:checked'), function () {
        check.push($(this).val());
    });
    let checked = check.join('##');
    console.log(checked);
    console.log('click .set_not_active');

    $.ajax({
        url: 'ajax/set_not_active.php',
        type: 'POST',
        cache: false,
        data: {
            checkbox: checked,
        },
        dataType: 'html',
        success: function (data) {
            if (data == 'NOTACTIVE') {
                $('#edit_user').show(function () {
                    $(this)
                        .text('Ok. User edit')
                        .addClass('success')
                        .attr('id', 'success');
                    setInterval('refreshPage()', 1000);
                });
                $('.error').hide();
                updateData();
            } else {
                $('.error').show(function () {
                    $(this).text(data);
                    console.log('error');
                });
            }
        },
    });
});




$('.set_delete').click(function () {

    let check = [];
    $.each($('.check:checked'), function () {
        check.push($(this).val());
    });
    let checked = check.join('##');
    console.log(checked);
    console.log('click .set_delete');

    $.ajax({
        url: 'ajax/set_delete.php',
        type: 'POST',
        cache: false,
        data: {
            checkbox: checked,
        },
        dataType: 'html',
        success: function (data) {
            if (data == 'DELETES') {
                $('#edit_user').show(function () {
                    // event.preventDefault();
                    $(this)
                        .text('Ok. User edit')
                        .addClass('success')
                        .attr('id', 'success');
                });
                $('.error').hide();
                updateData();
            } else {
                $('.error').show(function () {
                    $(this).text(data);
                    console.log('error');
                });
            }
        },
    });
});



function updateData() {
    // $.get('ajax/db-info.php', function (data) {
    //     $('#content').html(data);
    // });
    $.ajax({
        type: "GET",
        url: 'ajax/db-info.php',
        success: function (response) {
            $('#content').html(response);
        },
    });
};