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

class MainController extends AppController {

    var $name = 'Main';
    var $helpers = array('Html', 'Session');
    var $uses = array();

    function beforeFilter() {
        parent::beforeFilter();
        $this->layout = 'gdp_layout';
        $title_for_layout = 'GameDePosit';
        $this->set(compact('title_for_layout','body_for_layout'));
    }

    function afterFilter(){
        parent::beforeFilter();
        $body_for_layout = '';//"leftmargin='0' topmargin='0' bgcolor='#ffffff' marginheight='0' marginwidth='0'";
    }

    /*
     *
     */
    function index() {
        $this->redirect(array('controller' => 'main', 'action'=>'home'));
    }

    function home(){
    }

    function game(){
    }

    function help(){
    }

}
