<?php

class CommunitiesController extends AppController{

var	$name = "Communities";
var $helpers = array('Html');
var $uses = array('Community');

function beforeFilter() {
	parent::beforeFilter();
	$this->layout = 'comm_layout';

}

function index() { 	
	
}

function item() {

}


function bbs() {
	if (($this->data)!=NULL) {
			if($this->data["Community"]["comment"]!=NUll){
		$comment["Community"]["comment"] = $this->data["Community"]["comment"];
		$this->Community->save($comment);
		$this->redirect("/communities/bbs");
			}
		}
	
	$bbs = $this->Community->find('all');
		
	if(!empty($bbs)){
		$this->set("all_bbs", $bbs);	
	}

	}


}



?>