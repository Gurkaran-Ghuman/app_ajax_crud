$(document).ready(function(){

    let f_name = '';
    let l_name = '';
    let email = '';
    let pass = '';
    let phone = '';
    let address = '';
    let error = 0;
    let operation = 'DESC';

    onLoad();
    blockedUsers();

    $('#f_name').on('keydown keypress keyup',function(e){   

        f_name = $(this).val();
        getSuggestion(f_name);
    });

    $('#l_name').change(function(e){

        l_name = $(this).val();
    });

    $('#email').on('keydown keypress keyup',function(e){

        $('.email_match').html('');
        email = $(this).val();
        isEmailExist(email);

    });

    $('#pass').change(function(e){

        pass = $(this).val();
    });

    $('#phone').change(function(e){

        phone = $(this).val();
    });

    $('#address').change(function(e){

        address = $(this).val();
    });

    function isEmailExist(email){

        $.ajax({
            type: 'POST',
            url:base_url+'server/is_email.php',
            data:{'email':email},

            success:function(data){
                let response = jQuery.parseJSON(data);

                if(response.is_success == true){
                    error = error + 1;
                    $('.email_match').html(response.message);
                    $('.email_match').css('color','green');
                }
            }
        })
    }
    function getSuggestion(f_name){
        jQuery('.suggestion-container').html('');
        $.ajax({
            type:'POST',
            url:base_url+'server/get_suggestion.php',
            datatype:'json',
            data:{'f_name':f_name},

            success:function(data){
                let response = jQuery.parseJSON(data);

                if(response.is_success == true){

                    let html = "<ul class = 'list-group'>";
                    jQuery.each(response.data,function(key,value){

                        html = html + "<li class = 'list-group-item'><a type='button' class='btn btn-secondary wcp-suggestion' data-id ='"+value.id+"'>"+value.f_name+" "+value.l_name+"</a></li>";
                    });

                    html = html + '</ul>';
                    jQuery('.suggestion-container').html(html);
                }
            }
        })
    }

    $('#registerForm').submit(function(e){

        e.preventDefault();
        error = 0;
        let is_validated = validate();

         if(is_validated){

            $.ajax({
                type:'post',
                url:base_url+'server/server.php',
                data:$('#registerForm').serialize(),

                success:function(data){

                    let response = jQuery.parseJSON(data);

                    if(response.is_success == true){

                        $('.success').html(response.message);
                        $('.success').css('color','green');

                    }
                }
            })
       }
    });

    $('#editForm').submit(function(e){

        e.preventDefault();  
        error = 0;
        let is_validated = validate();

        if(is_validated){

            $.ajax({
                type: "POST",
                url: base_url+ "server/update_user_detail.php",
                datatype: 'json',
                data: $('#editForm').serialize(),

                success:function(data){

                    let response = jQuery.parseJSON(data);

                    if(response.is_success == true){

                        $('.success').html(response.message);
                        $('.success').css('color','green');
                        blockedUsers();
                        onLoad();
                        
                    }else{

                        $('.success').html(response.error);
                        $('.success').css('color','red');
                    }
                }
            });
        }
    });

    function validate(){

        if(f_name == ''){
            $('.error-f_name').html('*this field is required!');
            $('.error-f_name').css('color','red');
            error = error+1;
        }
        if(l_name == ''){
            $('.error-l_name').html('*this field is required!');
            $('.error-l_name').css('color','red');
            error = error+1;
        }
        if(email == ''){
            $('.error-email').html('*this field is required!');
            $('.error-email').css('color','red');
            error = error+1;
        }
        if(pass == ''){
            $('.error-pass').html('*this field is required!');
            $('.error-pass').css('color','red');
            error = error+1;
        }
        if(phone == ''){
            $('.error-phone').html('*this field is required!');
            $('.error-phone').css('color','red');
            error = error+1;
        }
        if(address == ''){
            $('.error-address').html('*this field is required!');
            $('.error-address').css('color','red');
            error = error+1;
        }

        if(error == 0){
            return true;
        }
        return false;
    }

    function blockedUsers(){

        $.ajax({
            type:'GET',
            url:base_url+'server/blockedUserListing.php?operation='+operation,
            datatype:'json',

            success:function(data){

                let response = jQuery.parseJSON(data);
                let table_body_html = '';

                if(response.is_success == true){

                    let user_data = response.data;
                    let total_rows = response.total_rows;
                    console.log(user_data);

                    jQuery.each(user_data,function(key,value){

                        let tr ='<tr><td>'+value.id+'</td><td>'+value.f_name+'</td><td>'+value.l_name+'</td>\
                        <td>'+value.email+'</td><td>'+value.pass+'</td><td>'+value.phone+'</td><td>'+value.address+'</td>\
                        <td><a type="button" class="btn btn-danger wcp-delete" data-id = "'+value.id+'" >Delete</a></td>\
                        <td><a type="button" class="btn btn-primary wcp-edit" data-id ="'+value.id+'">Edit</a></td>\
                        <td><a type="button" class="btn btn-secondary wcp-active" data-id ="'+value.id+'">Active</a></td></tr>';
                        table_body_html = table_body_html + tr;
                    });

                    $('#blockedUsers--Body').html(table_body_html);
                    $('.totalBlockedUsers').html(total_rows);
                }
            }
        })
    }

    function onLoad(){

        $.ajax({
            type:'GET',
            url:base_url+'server/listing_server.php?operation='+operation,
            datatype:'json',

            success:function(data){

                let response = jQuery.parseJSON(data);
                let table_body_html = '';

                if(response.is_success == true){

                    let user_data = response.data;
                    let total_rows = response.total_rows;
                    console.log(user_data);

                    jQuery.each(user_data,function(key,value){

                        let tr ='<tr><td>'+value.id+'</td><td>'+value.f_name+'</td><td>'+value.l_name+'</td>\
                        <td>'+value.email+'</td><td>'+value.pass+'</td><td>'+value.phone+'</td><td>'+value.address+'</td>\
                        <td><a type="button" class="btn btn-danger wcp-delete" data-id = "'+value.id+'" >Delete</a></td>\
                        <td><a type="button" class="btn btn-primary wcp-edit" data-id ="'+value.id+'">Edit</a></td>\
                        <td><a type="button" class="btn btn-secondary wcp-block" data-id ="'+value.id+'">Block</a></td></tr>';
                        table_body_html = table_body_html + tr;
                    });

                    $('#tBody').html(table_body_html);
                    $('.totalActiveUsers').html(total_rows);
                }
            }
        });
    }

    $(document).on('click','#home-tab',function(){
        onLoad();
    })
    $(document).on('click','#profile-tab',function(){
        blockedUsers();
    })
    $(document).on('click','.wcp-active',function(){
        let id = $(this).data('id');
        unblockUser(id);
        blockedUsers();
        onLoad();
    })

    $(document).on('click','.wcp-block',function(){
        let id = $(this).data('id');
        blockUserDetail(id);
        onLoad();
        blockedUsers();
    })

    $(document).on('click','.asce',function(){
        operation = $(this).data('operation');
        blockedUsers();
        onLoad();
    });

    $(document).on('click','.desc',function(){
        operation = $(this).data('operation');
        blockedUsers();
        onLoad();
    });

    $(document).on('click','.wcp-suggestion',function(){
        let id = $(this).data('id');
        getUserCompleteDetail(id);
    })

    $(document).on('click','.wcp-edit',function(){
        let id = $(this).data('id');
        getUserDetail(id);
    })

    $(document).on('click','.wcp-delete',function(){
     let id = $(this).data('id');

     $.ajax({
        type: "POST",
        url: base_url + 'delete.php',
        datatype: 'json',
        data: {'id':id},

        success:function(data){

            let response = jQuery.parseJSON(data);

            if(response.is_success == true){

                $('.delete').html(response.message);
                $('.delete').css('color','green');
                blockedUsers();
                onLoad();
                
            }else{

                $('.delete').html(response.message);
                $('.delete').css('color','red');
            }
        }
     })
    });

    function unblockUser(id){
        $.ajax({
            type: 'POST',
            url: base_url+'server/unblockUser.php',
            datatype:'json',
            data:{'id':id},

            success:function(data){

                let response = jQuery.parseJSON(data);

                if(response.is_success == true){
                    $('.unblock_user').html(response.message);
                    $('.unblock_user').css('color','green');
                }else{
                    $('.unblock_user').html(response.message);
                    $('.unblock_user').css('color','red');
                }
            }
        })
    }

    function blockUserDetail(id){
        $.ajax({
            type: 'POST',
            url: base_url+'server/blockUserDetail.php',
            datatype:'json',
            data:{'id':id},

            success:function(data){

                let response = jQuery.parseJSON(data);

                if(response.is_success == true){
                    $('.block_user').html(response.message);
                    $('.block_user').css('color','green');
                }else{
                    $('.block_user').html(response.message);
                    $('.block_user').css('color','red');
                }
            }
        })
    }
    function getUserCompleteDetail(id){
        $.ajax({
            type: 'POST',
            url: base_url+'server/edit_user_detail.php',
            datatype: 'json',
            data: {'id':id},

            success:function(data){

                let response = jQuery.parseJSON(data);

                if(response.is_success == true){

                    let complete_user_detail = response.data;

                    f_name = complete_user_detail.f_name;
                    l_name = complete_user_detail.l_name;
                    email = complete_user_detail.email;
                    pass = complete_user_detail.pass;
                    phone = complete_user_detail.phone;
                    address = complete_user_detail.address;

                    $('#registerForm .f_name').val(complete_user_detail.f_name);
                    $('#registerForm .l_name').val(complete_user_detail.l_name);
                    $('#registerForm .email').val(complete_user_detail.email);
                    $('#registerForm .pass').val(complete_user_detail.pass);
                    $('#registerForm .phone').val(complete_user_detail.phone);
                    $('#registerForm .address').val(complete_user_detail.address);
                    $('#registerForm .id').val(complete_user_detail.id);

                    jQuery('.suggestion-container').html('');
                }
            }
        })
    }
    function getUserDetail(id){
        $.ajax({
            type: "POST",
            url: base_url+'server/edit_user_detail.php',
            datatype: 'json',
            data: {'id':id},

            success:function(data){

                let response = jQuery.parseJSON(data);

                 if(response.is_success == true){

                    let user_detail = response.data;

                    f_name = user_detail.f_name;
                    l_name = user_detail.l_name;
                    email = user_detail.email;
                    pass = user_detail.pass;
                    phone = user_detail.phone;
                    address = user_detail.address;

                    jQuery('#editForm .f_name').val(user_detail.f_name);
                    jQuery('#editForm .l_name').val(user_detail.l_name);
                    jQuery('#editForm .email').val(user_detail.email);
                    jQuery('#editForm .pass').val(user_detail.pass);
                    jQuery('#editForm .phone').val(user_detail.phone);
                    jQuery('#editForm .address').val(user_detail.address);
                    jQuery('#editForm .user_id').val(user_detail.id);

                    jQuery('#editFormModal').modal('show');

                 }else{

                    console.log(response.message);
                 }
            }
        })

    }
});