<?php
/**
 * Cake Controller
 * @copyright     Copyright 2005-2011, Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       cake
 * @subpackage    cake.cake.libs.controller
 * @since         CakePHP(tm) v 0.2.9
 * @license       MIT License (http://www.opensource.org/licenses/mit-license.php)
 */

class UserController extends AppController {

    var $name = 'User';
    var $helpers = array('Html', 'Session');
    var $uses = array('Good');

    function beforeFilter() {
    	parent::beforeFilter();
    	$this->layout = 'gdp_user_layout';
    	$title_for_layout = 'GameDEPosit';
    	$this->set(compact('title_for_layout','body_for_layout'));
    }
    
    function index() {
    	$data = $this->Good->find('all', array('fields' => array('Good.name', 'Good.price', 'Good.image')));
    	$this->set('data', $data);
    }
}
