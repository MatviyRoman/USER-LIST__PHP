$('.add').click(function () {
    console.log('click #add');
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
    $('.form-group, .add_text').show();
    $('.edit_text, .delete_text, .error, .set_delete, .set_active, .set_not_active, .error').hide();
    $('#add_user').is(function () {
        $(this).text('Save');
        $(this).attr('class', 'btn btn-success');
    });
    $(this).is(function () {
        $('.error').hide();
    });
});


$('#exampleModalCenter').on('show.bs.modal', function (event) {
    const button = $(event.relatedTarget);
    const recipient = button.data('whatever');
    const id = button.data('id');
    $(this).find('.hidden').val(id);
    $('#close, .close').click(function () {
        $('.error').hide();
        console.log('click #close');
    });
    $(this).find('.modal-title').text(recipient);
});



$('.set_default').show();
$('.set_not_active, .set_active, .set_delete, .error').hide();



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
        $('.set_default').show();
        $('.set_not_active, .set_active, .set_delete, .error').hide();
        $('.btn_ok').is(function () {
            $(this).attr('data-whatever', 'You have not selected any items');
        });
    } else if (1 == $(this).val()) {
        $(this).attr('selected', 'selected');
        $('.set_active').show();
        $('.set_delete, .set_not_active, .set_default').hide();
        $('.btn_ok').is(function () {
            $(this).attr('data-whatever', 'You are going to set the status to active for the selected users');
        });
    } else if (2 == $(this).val()) {
        $(this).attr('selected', 'selected');
        $('.set_not_active').show();
        $('.set_delete, .set_active, .set_default').hide();
        $('.btn_ok').is(function () {
            $(this).attr('data-whatever', 'You are going to set the status to not active for the selected users');
            $(this).attr('id', 'set_not_active');
        });
    } else if (3 == $(this).val()) {
        $(this).attr('selected', 'selected');
        $('.set_delete').show();
        $('.set_not_active, .set_active, .set_default').hide();
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
            $('.notcheck').hide();
            console.log('check');
        } else {
            $('.notcheck, .error').show();
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




$('.edit').click(function () {
    console.log('click .edit');
    $('#first_name').val();
    const id = $(this).find('.hidden').val();
    $('.form-group, .edit_text').show();
    $('.add_text, .delete_text, .error, .set_delete, .set_active, .set_not_active, .error').hide();
    $('#edit_user').is(function () {
        $(this).text('Save changes');
        $(this).attr('class', 'btn btn-success');
    });
    $('.error').hide();

    console.log(id);

    $.ajax({
        url: 'ajax/get_user_info.php',
        type: 'GET',
        cache: false,
        data: {
            id: id,
        },
        dataType: 'json',
        success: function (data) {
            console.log(data);
            $.getJSON("ajax/get_user_info.php?id=" + id, function (data) {
                const first_name = data.first_name;
                const last_name = data.last_name;
                const status = data.status;
                const role = data.role;
                $('#first_name').val(first_name);
                $('#last_name').val(last_name);
                $('#status').is(function () {
                    $(this).val(status);
                    if (status == 0) {
                        $(this).prop('checked', false);
                    } else {
                        $(this).prop('checked', true);
                    }
                });
                $('#role').val(role);
            });
        },
    });
});



$('.del').click(function () {
    console.log('click .del');
    $('.form-group, .add_text, .edit_text, .error, .set_delete, .set_active, .set_not_active').hide();
    $('.delete_text').show();
    $('#del_user').is(function () {
        $(this).text('Delete');
        $(this).attr('class', 'btn btn-danger');
    });
    $('#close').is(function () {
        $(this).text('No');
        $(this).attr('class', 'btn btn-success');
    })
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



$('#add_user').click(function () {
    const fname = $('#first_name').val();
    const lname = $('#last_name').val();
    const status = $('#status').val();
    const role = $('#role').val();
    console.log('click #add_user');

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
                $('#add_user').show(function () {
                    event.preventDefault();
                    $(this)
                        .text('Ok. User add')
                        .addClass('success')
                        .attr('id', 'success');
                    setInterval('refreshPage()', 1000);
                });
                $('.error').hide();
            } else {
                $('.error').show(function () {
                    $(this).text(data);
                    console.log('error');
                });
            }
        },
    });
});



$('#edit_user').click(function () {
    const fname = $('#first_name').val();
    const lname = $('#last_name').val();
    const status = $('#status').val();
    const role = $('#role').val();
    const id = $('#exampleModalCenter').find('.hidden').val();
    console.log('click #edit_user');
    console.log(id);

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
                $('#edit_user').show(function () {
                    event.preventDefault();
                    $(this)
                        .text('Ok. User edit')
                        .addClass('success')
                        .attr('id', 'success');
                    setInterval('refreshPage()', 1000);
                });
                $('.error').hide();
            } else {
                $('.error').show(function () {
                    $(this).text(data);
                    console.log('error');
                });
            }
        },
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
                    setInterval('refreshPage()', 1000);
                });
                $('.error').hide();
            } else {
                $('.error').show(function () {
                    $(this).text(data);
                    console.log('error');
                });
            }
        },
    });
});



$('#del_user').click(function () {

    const id = $('#exampleModalCenter').find('.hidden').val();
    // const id = $('.hidden').val();
    console.log('click #del_user');
    console.log(id);

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
                $('#del_user').show(function () {
                    $(this)
                        .text('Ok. User delete')
                        .addClass('success')
                        .attr('id', 'success');
                    // .prop('id', 'success');
                    // setInterval('refreshPage()', 1000);
                    setInterval('location.reload()', 1000);
                });
                $('.error').hide();
            } else {
                $('.error').show(function () {
                    $(this).text(data);
                    console.log('error');
                });
            }
        },
    });
});

function refreshPage() {
    location.reload(true);
}