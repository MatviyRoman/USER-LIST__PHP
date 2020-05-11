$('#exampleModalCenter').on('show.bs.modal', function (event) {
    let button = $(event.relatedTarget);
    let recipient = button.data('whatever');
    let id = button.data('id');
    $(this).find('.modal-title').text(recipient);
    $(this).find('.hidden').val(id);
});



$('select.all').change(function () {
    $('option').find('selected', function () {
        if ($(this).is(':selected')) {
            let get = $(this).val();
            console.log(get);
            if ($(this).val() == 1) {
                console.log('select 1');
                $(this).attr("selected", "selected");
                $('.btn_ok').is(function () {
                    $(this).attr('data-whatever', 'You are going to set the status to active for the selected users');
                });
            } else if ($(this).val() == 2) {
                console.log('select 2');
                $(this).attr("selected", "selected");
                $('.btn_ok').is(function () {
                    $(this).attr('data-whatever', 'You are going to set the status to not active for the selected users');
                });
            } else if ($(this).val() == 3) {
                console.log('select 3');
                $(this).attr("selected", "selected");
                $('.btn_ok').is(function () {
                    $(this).attr('data-whatever', 'You are about to delete selected users');
                });
            } else if (!$(this).val()) {
                console.log('select default');
                $(this).attr("selected", "selected");
                $('.btn_ok').is(function () {
                    $(this).attr('disabled', true);
                });
            }
        }
    });
});

$('.btn_ok').is(function () {
    $(this).attr('disabled', true);
});



$('.set_not_active, .set_active, .set_delete').hide();



$('select.all').change(function () {
    $(this).on(function () {
        $(this).prop('selected', true);
    })

    let selected = $(this).children('option:selected').val();
    // console.log('selected ' + selected);

    if (1 == $(this).val()) {
        console.log('select 1');
        $(this).attr("selected", "selected");
        $('.set_active').show();
        $('.set_delete, .set_not_active, .set_default').hide();
        $('.btn_ok').is(function () {
            $(this).attr('data-whatever', 'You are going to set the status to active for the selected users');
            $(this).attr('disabled', false);
            $(this).attr('id', 'set_active');
        });
    } else if (2 == $(this).val()) {
        console.log('select 2');
        $(this).attr("selected", "selected");
        $('.set_not_active').show();
        $('.set_delete, .set_active, .set_default').hide();
        $('.btn_ok').is(function () {
            $(this).attr('data-whatever', 'You are going to set the status to not active for the selected users');
            $(this).attr('disabled', false);
            $(this).attr('id', 'set_not_active');
        });
    } else if (3 == $(this).val()) {
        console.log('select 3');
        $(this).attr("selected", "selected");
        $('.set_delete').show();
        $('.set_not_active, .set_active, .set_default').hide();
        $('.btn_ok').is(function () {
            $(this).attr('data-whatever', 'You are about to delete selected users');
            $(this).attr('disabled', false);
            $(this).attr('id', 'set_delete');
        });
    } else if (0 == $(this).val()) {
        console.log('select default');
        $(this).attr("selected", "selected");
        $('.set_default').show();
        $('.set_not_active, .set_active, .set_delete').hide();
        $('.btn_ok').is(function () {
            $(this).attr('disabled', true);
            $(this).attr('id', 'set_default');
        });
    }
});



$('.checkbox_btn').click(function () {
    let check = [];
    $.each($('.check:checked'), function () {
        check.push($(this).val());
    });
    console.log(check.join("##"));
    let checked = check.join("##");
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



$('.add').click(function () {
    console.log("click .add");
    $('.form-group, .add_text').show();
    $('.edit_text, .delete_text, .set_delete').hide();
    $('#add_user').is(function () {
        $(this).text('Save');
        $(this).attr('class', 'btn btn-success');
    });
});



$('.edit').click(function () {
    console.log("click .edit");
    const id = $('#exampleModalCenter').find('.hidden').val();
    $('.form-group, .edit_text').show();
    $('.add_text, .delete_text, .set_delete').hide();
    $('#edit_user').is(function () {
        $(this).text('Save changes');
        $(this).attr('class', 'btn btn-success');
    });

    // $.ajax({
    //     url: "ajax/get_user_info.php",
    //     type: "POST",
    //     cache: false,
    //     data: {
    //         id: id,
    //         // first_name: fname,
    //         // last_name: lname,
    //         // status: status,
    //         // role: role,
    //     },
    //     dataType: "html",
    //     // beforeSend: function() {

    //     // },
    //     success: function (data) {
    //         if (data == "UPDATE") {
    //             $("#edit_user").show(function () {
    //                 event.preventDefault();
    //                 $(this)
    //                     .text("Ok. User edit")
    //                     .addClass("success")
    //                     .attr("id", "success");
    //                 // .prop("id", "success");
    //                 setInterval('refreshPage()', 1000);
    //             });
    //             $("#error").hide();
    //         } else {
    //             $("#error").show(function () {
    //                 $(this).text(data);
    //                 console.log("error");
    //             });
    //         }
    //     },
    // });
});



$('.del').click(function () {
    console.log("click .del");
    $('.form-group, .add_text, .edit_text, .set_delete').hide();
    $('.delete_text').show();
    $('#del_user').is(function () {
        $(this).text('Delete');
        $(this).attr('class', 'btn btn-danger');
    });
});



$('.checkbox_btn').click(function () {
    console.log("click .checkbox_btn");
    $('.form-group, .add_text, .edit_text, .delete_text').hide();
    $('.all_delete_text').show();
    $('#add_user').is(function () {
        $(this).text('Yes');
        $(this).attr('class', 'btn btn-success');
    });
});



$("#add_user").click(function () {
    const fname = $('#first_name').val();
    const lname = $('#last_name').val();
    const status = $('#status').val();
    const role = $("#role").val();
    console.log("click #add_user");

    $.ajax({
        url: "ajax/add_user.php",
        type: "POST",
        cache: false,
        data: {
            first_name: fname,
            last_name: lname,
            status: status,
            role: role,
        },
        dataType: "html",
        // beforeSend: function() {

        // },
        success: function (data) {
            if (data == "OK") {
                $("#add_user").show(function () {
                    event.preventDefault();
                    $(this)
                        .text("Ok. User add")
                        .addClass("success")
                        .attr("id", "success");
                    // .prop("id", "success");
                    setInterval('refreshPage()', 1000);
                });
                $("#error").hide();
            } else {
                $("#error").show(function () {
                    $(this).text(data);
                    console.log("error");
                });
            }
        },
    });
});



$("#edit_user").click(function () {
    const fname = $('#first_name').val();
    const lname = $('#last_name').val();
    const status = $('#status').val();
    const role = $("#role").val();
    const id = $('#exampleModalCenter').find('.hidden').val();
    console.log("click #edit_user");

    $.ajax({
        url: "ajax/edit_user.php",
        type: "POST",
        cache: false,
        data: {
            id: id,
            first_name: fname,
            last_name: lname,
            status: status,
            role: role,
        },
        dataType: "html",
        // beforeSend: function() {

        // },
        success: function (data) {
            if (data == "UPDATE") {
                $("#edit_user").show(function () {
                    event.preventDefault();
                    $(this)
                        .text("Ok. User edit")
                        .addClass("success")
                        .attr("id", "success");
                    // .prop("id", "success");
                    setInterval('refreshPage()', 1000);
                });
                $("#error").hide();
            } else {
                $("#error").show(function () {
                    $(this).text(data);
                    console.log("error");
                });
            }
        },
    });
});



$("#all_del_user").click(function () {


    let check = [];
    $.each($('.check:checked'), function () {
        check.push($(this).val());
    });
    let checked = check.join("##");
    console.log(checked);
    console.log("click #all_del_user");

    $.ajax({
        url: "ajax/checked_user.php",
        type: "POST",
        cache: false,
        data: {
            checkbox: checked,
        },
        dataType: "html",
        // beforeSend: function() {

        // },
        success: function (data) {
            if (data == "DELETES") {
                $("#edit_user").show(function () {
                    event.preventDefault();
                    $(this)
                        .text("Ok. User edit")
                        .addClass("success")
                        .attr("id", "success");
                    // .prop("id", "success");
                    setInterval('refreshPage()', 1000);
                });
                $("#error").hide();
            } else {
                $("#error").show(function () {
                    $(this).text(data);
                    console.log("error");
                });
            }
        },
    });
});



$("#del_user").click(function () {

    const id = $('#exampleModalCenter').find('.hidden').val();
    // const id = $('.hidden').val();
    console.log("click #del_user");
    console.log(id);

    $.ajax({

        url: "ajax/del_user.php",
        type: "POST",
        cache: false,
        data: {
            id: id,
        },
        dataType: "html",
        // beforeSend: function() {

        // },
        success: function (data) {
            if (data == "DELETE") {
                $("#del_user").show(function () {
                    event.preventDefault();
                    $(this)
                        .text("Ok. User delete")
                        .addClass("success")
                        .attr("id", "success");
                    // .prop("id", "success");
                    // setInterval('refreshPage()', 1000);
                    setInterval('location.reload()', 1000);        // Using .reload() method.
                });
                $("#error").hide();
            } else {
                $("#error").show(function () {
                    $(this).text(data);
                    console.log("error");
                });
            }
        },
    });
});

function refreshPage() {
    location.reload(true);
}