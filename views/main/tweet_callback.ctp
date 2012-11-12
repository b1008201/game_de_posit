<section id="help">
    <div class="container">
        <div class="row">
            <div class="span9">
                <?php if(!empty($results)): ?>
                <div class="<?php echo $results['div'];?>">
                <form  action="./tweet_callback" method="post">
                    <fieldset>
                        <p><legend>Twitterに投稿する</legend></p>
                        <input type="text" placeholder="コメント欄" name="data[message]" id="<?php echo $results['input'];?>">
                        <button type="submit" class="btn btn-primary" style="margin-bottom:9px">ツイートする</button><br>
                        <p><span class="help-inline"><?php echo $results['message'];?></span></p>
                    </fieldset>
                </form>
                <?php else:?>
                <div>
                <form  action="./tweet_callback" method="post">
                    <fieldset>
                        <p><legend>Twitterに投稿する</legend></p>
                        <input type="text" placeholder="コメント欄" name="data[message]" value="100dpしたよ!" class='span7'>
                        <button type="submit" class="btn btn-primary" style="margin-bottom:9px">ツイートする</button>
                        <p><span class="help-inline">あなたのデポジット状況をTwitterで共有しましょう．</span></p>
                    </fieldset>
                </form>
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>

