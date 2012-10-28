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

class HomeController extends AppController {

    var $name = 'Home';
    var $helpers = array('Html', 'Session');
    var $uses = array();

    function beforeFilter() {
        parent::beforeFilter();
        $this->layout = 'gdp_layout';

    }

    function afterFilter(){
        parent::beforeFilter();
        $body_for_layout = '';//"leftmargin='0' topmargin='0' bgcolor='#ffffff' marginheight='0' marginwidth='0'";
        $title_for_layout = 'title';
        $this->set(compact('title_for_layout','body_for_layout'));
    }

    /*
     *
     */
    function index() {
        /*
        $path = func_get_args();

        $count = count($path);
        if (!$count) {
            $this->redirect('/');
        }
        $page = $subpage = $title_for_layout = null;

        if (!empty($path[0])) {
            $page = $path[0];
        }
        if (!empty($path[1])) {
            $subpage = $path[1];
        }
        if (!empty($path[$count - 1])) {
            $title_for_layout = Inflector::humanize($path[$count - 1]);
        }

        $this->render(implode('/', $path));
        */

        //$this->redirect(array('controller'=>'Users', 'action'=>'index'));
    }

    function tester(){

    }

}
