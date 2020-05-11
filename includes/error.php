<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="main-box clearfix">
                <div class="error">

                    <?php

if ($error != []) {
    foreach ($error as $err) {
        echo $err, PHP_EOL;
    }
    // exit();
} else {
    foreach ($results as $result) {
        echo $result, PHP_EOL;
    }
}

?>
                </div>
            </div>
        </div>
    </div>
</div>