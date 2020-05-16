// updateData();

$('.form-group, .error, .result, #notcheck, #add_user, #edit_user, #del_user, .add_text, .edit_text, .del_text, .set_default, .set_active, .set_notactive, .set_delete, .all_delete, .all_notactive, .all_active').hide();

$('input, select').click(function () {
    $('.error, .result').hide();
});

$(document).on('click', '.add', function () {
    event.preventDefault();
    $('.form-group, .error, .result, #notcheck, #add_user, #edit_user, #del_user, .add_text, .edit_text, .del_text, .set_default, .set_active, .set_notactive, .set_delete').hide();
    $('.form-group, #add_user, .add_text').show();
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
                $('.add').is(function () {
                    $('.result')
                        .show()
                        .text('You have successfully added a user');
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



$(document).on('click', '.edit', function () {
    event.preventDefault();
    const id = $(this).find('.hidden').val();
    $('.form-group, .error, .result, #notcheck, #add_user, #edit_user, #del_user, .add_text, .edit_text, .del_text, .set_default, .set_active, .set_notactive, .set_delete').hide();
    $('.form-group, #edit_user, .edit_text').show();
    $('#edit_user').is(function () {
        $(this)
            .text('Save change')
            .attr('class', 'btn btn-success');
    });
    $('#close').is(function () {
        $(this)
            .text('Canсel')
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
                // $(this).is(function () {
                $('.result')
                    .show()
                    .text('You have successfully edited the user');
                // });
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
    return false;
});



$(document).on('click', '.del', function () {
    event.preventDefault();
    const id = $(this).find('.hidden').val();
    $('.form-group, .error, .result, #notcheck, #add_user, #edit_user, #del_user, .add_text, .edit_text, .del_text, .set_default, .set_active, .set_notactive, .set_delete').hide();
    $('#del_user, .del_text').show();
    $('.del_text').css('color', '#f00');
    $('#del_user').is(function () {
        $(this)
            .css('color', '#fff')
            .text('Yes')
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
                // $(this).is(function () {
                $('.result')
                    .show()
                    .text('You have successfully deleted the user');
                // });
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
    console.log('click #del_user id=' + id);
});


$('#exampleModalCenter').on('show.bs.modal', function (event) {
    const button = $(event.relatedTarget);
    const recipient = button.data('whatever');
    let id = button.data('id');
    if (!id) id = 'modal';
    $(this).find('.hidden').val(id);
    $('.bgclose, #close, .close').click(function () {
        // console.log('click #close modal id=' + id);
    });
    $('#close, .close').click(function () {
        // $('.form-group, .error, .result, #notcheck, #add_user, #edit_user, #del_user, .add_text, .edit_text, .del_text, .set_default, .set_active, .set_notactive, .set_delete').hide();
    });
    $(this).find('.modal-title').text(recipient);
    $('.error, .result').hide();
});



$('#checkbox_all').click(function () {
    $('.check').not(this).prop('checked', this.checked);
    console.log('select all checkbox');
});

$('.check').change(function () {
    if ($('.check:checked').length == $('.check').length) {
        $('#checkbox_all').prop('checked', true);
        console.log('select all checkbox');
    } else {
        $('#checkbox_all').prop('checked', false);
        console.log('select not all checkbox');
    };
});



$('select.all').click(function () {
    $(this).on(function () {
        $(this).prop('selected', true);
    })
    const selected = $(this).children('option:selected').val();

    ($('.error').show(function () {
        $('#exampleModalCenter').find('.modal-title').text('Error');
        $('#set_not_active, #set_active, #set_delete').hide();
        console.log('error');
    }));

    if (0 == $(this).val()) {
        $(this).attr('selected', 'selected');
        $('.default, .all_not_active, .all_active, .all_delete, .error, .result').hide();
        $('.default, #notcheck, .error').show();
        $('.btn_ok').is(function () {
            $(this).attr('data-whatever', 'You have not selected any items');
        });
    } else if (1 == $(this).val()) {
        $(this).attr('selected', 'selected');
        $('.default, .all_not_active, .all_active, .all_delete, .error, .result').hide();
        $('.all_active, #notcheck, .error').show();
        $('.btn_ok').is(function () {
            $(this).attr('data-whatever', 'You are going to set the status to active for the selected users');
        });
    } else if (2 == $(this).val()) {
        $(this).attr('selected', 'selected');
        $('.default, .all_not_active, .all_active, .all_delete, .error, .result').hide();
        $('.all_not_active, #notcheck, .error').show();
        $('.btn_ok').is(function () {
            $(this).attr('data-whatever', 'You are going to set the status to not active for the selected users');
        });
    } else if (3 == $(this).val()) {
        $(this).attr('selected', 'selected');
        $('.default, .all_not_active, .all_active, .all_delete, .error, .result').hide();
        $('.all_delete, #notcheck, .error').show();
        $('.btn_ok').is(function () {
            $(this).attr('data-whatever', 'You are about to delete selected users');
            $(this).attr('disabled', false);
        });
    };
    console.log('selected ' + selected);
});



$('.btn_ok, .all_active, .all_not_active, .all_delete').click(function () {
    $('.form-group, .add_text, .edit_text, .del_text').hide();
    const check = [];
    $.each($('.check:checked'), function () {
        check.push($(this).val());
    });
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
    console.log('click btn_ok ' + check.join('##'));
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



$('.default').click(function () {
    $('.error, #notcheck').show();
    $('.del_text').hide();
});




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



$('.all_delete').click(function () {
    // event.preventDefault();
    $('.form-group, .error, .result, #notcheck, #add_user, #edit_user, #del_user, .add_text, .edit_text, .del_text, .set_active_text, .set_not_active_text, .set_delete_text, .all_active, .all_not_active, .all_delete').hide();
    $('#set_delete, .set_delete_text').show();
    $('#set_delete').is(function () {
        $(this)
            .text('Delete All')
            .attr('class', 'btn btn-danger');
    });
    $('#close').is(function () {
        $(this)
            .text('Close')
            .attr('class', 'btn btn-success');
    });
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
    console.log('click .add');
});



$('.set_active').click(function () {

    const check = [];
    $.each($('.check:checked'), function () {
        check.push($(this).val());
    });
    const checked = check.join('##');
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
                $(this).is(function () {
                    // event.preventDefault();
                    $('.result')
                        .text('Ok. User edit')
                        .addClass('success')
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
});



$('.set_not_active').click(function () {

    const check = [];
    $.each($('.check:checked'), function () {
        check.push($(this).val());
    });
    const checked = check.join('##');
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
                $(this).is(function () {
                    $('.result')
                        .text('Ok. User edit')
                        .addClass('success')
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
});




$('#set_delete').click(function () {

    const check = [];
    $.each($('.check:checked'), function () {
        check.push($(this).val());
    });
    const checked = check.join('##');
    console.log('click #set_delete' + checked);

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
                $(this).is(function () {
                    //event.preventDefault();
                    $('.result')
                        .text('You have successfully deleted the selected users.')
                        .addClass('success')
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
});



function updateData() {
    $.get('ajax/db-info.php', function (data) {
        $('#content').html(data);
    });
    // $.ajax({
    //     type: "GET",
    //     url: 'ajax/db-info.php',
    //     success: function (response) {
    //         $('#content').html(response);
    //     },
    // });
};