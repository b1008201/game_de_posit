<?php

class CommunitiesController extends AppController{

    var$name = "Communities";
    var $helpers = array('Html');
    var $uses = array('Community');

    function beforeFilter() {
        parent::beforeFilter();
        $this->layout = 'gdp_layout';
        $title_for_layout = 'GameDePosit';
        $this->set(compact('title_for_layout','body_for_layout'));

    }

    function index() {

    }

    function musicitem() {
        $this->set("referer", $this->referer());
    }

    function tripitem() {
        $this->set("referer", $this->referer());
    }


    function bbs() {
        if (($this->data)!=NULL) {
            if($this->data["Community"]["comment"]!=NUll){
                $comment["Community"]["comment"] = $this->data["Community"]["comment"];
                $comment["Community"]["username"] = $this->data["Community"]["username"];
                $this->Community->save($comment);
                $this->redirect("/communities/bbs");
            }
        }


        $this->paginate = array(
                'limit' => 5,
                'order' => array('Community.created' => 'desc'),
                );
        $this->set('all_bbs', $this->paginate('Community'));
    }

}
?>
