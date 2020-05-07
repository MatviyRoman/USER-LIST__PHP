$('#exampleModalCenter').on('show.bs.modal', function (event) {
    let button = $(event.relatedTarget)
    let recipient = button.data('whatever')
    $(this).find('.modal-title').text('Форма ' + recipient)
    // $(this).find('.modal-body input').val(recipient)
});



$("#checkbox_all").click(function () {
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
    $('.form-group').show();
    $('.delete_text').hide();
    $('.user').attr('id', 'add_user');
    $('#del_user').attr('id', 'add_user');
    $('#edit_user').attr('id', 'add_user');
    $('#add_user').is(function () {
        $(this).text('Save');
        $(this).attr('class', 'btn btn-success');
    });
});



$('.edit').click(function () {
    $('.form-group').show();
    $('.delete_text').hide();
    $('.user').attr('id', 'edit_user');
    $('#add_user').attr('id', 'edit_user');
    $('#del_user').attr('id', 'edit_user');
    $('#success').attr('id', 'edit_user');
    $('#edit_user').is(function () {
        $(this).text('Save changes');
        $(this).attr('class', 'btn btn-success');
    });
});



$('.del').click(function () {
    $('.form-group').hide();
    $('.error').hide();
    $('.delete_text').show();
    $('.user').attr('id', 'del_user');
    $('#add_user').attr('id', 'del_user');
    $('#edit_user').attr('id', 'del_user');
    $('#success').attr('id', 'del_user');
    $('#del_user').is(function () {
        $(this).text('Delete');
        $(this).attr('class', 'btn btn-danger');
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
    // const fname = $('#first_name').val();
    // const lname = $('#last_name').val();
    // const status = $('#status').val();
    // const role = $("#role").val();
    console.log("click #del_user");

    $.ajax({

        url: "ajax/del_user.php",
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

// $("#checkbox").click(function () {
//     const fname = $("#first_name").val();
//     const lname = $("#last_name").val();
//     const status = $("#status").val();
//     const role = $("#role").val();
//     console.log("click #add_user");

//     $.ajax({

//         url: "ajax/add_user.php",
//         type: "POST",
//         cache: false,
//         data: {
//             first_name: fname,
//             last_name: lname,
//             status: status,
//             role: role,
//         },
//         dataType: "html",
//         // beforeSend: function() {

//         // },
//         success: function (data) {
//             if (data == "OK") {
//                 $("#add_user").show(function () {
//                     event.preventDefault();
//                     $(this)
//                         .text("Ok. User add")
//                         .addClass("success")
//                         .attr("id", "success");
//                     // .prop("id", "success");
//                 });
//                 $("#error").hide();
//             } else {
//                 $("#error").show(function () {
//                     $(this).text(data);
//                     console.log("error");
//                 });
//             }
//         },
//     });
// });