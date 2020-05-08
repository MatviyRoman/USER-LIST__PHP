$('#exampleModalCenter').on('show.bs.modal', function (event) {
    let button = $(event.relatedTarget);
    let recipient = button.data('whatever');
    let id = button.data('id');
    $(this).find('.modal-title').text(recipient);
    $(this).find('.hidden').val(id);
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
    $('.edit_text, .delete_text').hide();
    $('#add_user').is(function () {
        $(this).text('Save');
        $(this).attr('class', 'btn btn-success');
    });
});



$('.edit').click(function () {
    console.log("click .edit");
    $('.form-group, .edit_text').show();
    $('.add_text, .delete_text').hide();
    $('#edit_user').is(function () {
        $(this).text('Save changes');
        $(this).attr('class', 'btn btn-success');
    });
});



$('.del').click(function () {
    console.log("click .del");
    $('.form-group, .add_text, .edit_text').hide();
    $('.delete_text').show();
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
    console.log("click #add_user");

    $.ajax({
        url: "ajax/edit_user.php",
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


// $(document).ready(function () {
//     $.ajax({
//         type: 'GET',
//         url: '../../library/library.xml',
//         dataType: 'xml',
//         success: function (xml) {
//             setInterval('refreshPage()', 5000);
//         }
//     });
// });

function refreshPage() {
    location.reload(true);
}