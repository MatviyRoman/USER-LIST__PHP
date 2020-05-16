<table class="table user-list">
    <thead>
        <tr>
            <th>
                <span>
                    <div class="custom-control
                                                    custom-checkbox">
                        <input type="checkbox" name="checkbox_all[]" id="checkbox_all" value="<?=$row->id?>">
                        <label for="checkbox_all">all</label>
                    </div>
                </span>
            </th>
            <th><span>Name</span></th>
            <th class="text-center"><span>Status</span></th>
            <th class="text-center"><span>Role</span></th>
            <th><span>Options</span></th>
        </tr>
    </thead>
    <tbody>
        <?php
require_once $_SERVER['DOCUMENT_ROOT'] . '/includes/config.php';
$sql = 'SELECT * FROM `users` ORDER BY `id` DESC LIMIT 10';
$query = $pdo->query($sql);
while ($row = $query->fetch(PDO::FETCH_OBJ)) {?>
        <tr>
            <td>
                <input type="checkbox" name="checkbox" class="check" value="<?=$row->id?>">
            </td>
            <td>
                <a href="?id=<?=$row->id?>" class="user-link">
                    <?=$row->first_name, ' ', $row->last_name?>
                </a>
            </td>
            <td>
                <div class="status
            <?php if ($row->status) {print 'active';}?>">
                </div>
            </td>
            <td class="text-center">
                <span class="user-subhead">
                    <?php
if ($row->role == 1) {
    print 'Admin';
} else {
    print 'User';
}?>
                </span>
            </td>
            <td style="width: 20%;">
                <a href="?edit=<?=$row->id?>" class="table-link edit" data-toggle="modal"
                    data-target="#exampleModalCenter" data-whatever="User editing" data-id="<?=$row->id?>">
                    <input type="hidden" name="id" class="hidden" value="<?=$row->id?>">
                    <span class="fa-stack">
                        <i class="fa fa-square fa-stack-2x"></i>
                        <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
                <a href="?del=<?=$row->id?>" class="table-link danger del" data-toggle="modal"
                    data-target="#exampleModalCenter" data-whatever="Deleting user" data-id="<?=$row->id?>">
                    <input type="hidden" name="id" class="hidden" value="<?=$row->id?>">
                    <span class="fa-stack">
                        <i class="fa fa-square fa-stack-2x"></i>
                        <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
            </td>
        </tr>
        <?php }?>
    </tbody>
</table>