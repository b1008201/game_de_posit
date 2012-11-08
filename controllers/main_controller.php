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
        App::import('Vendor', 'oauth', array('file' => 'OAuth'.DS.'oauth_consumer.php'));
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

    function maricolle(){
    }

    function game(){
    }

    function help(){
    }

    public function twitter() {
        $consumer = $this->createConsumer();
        $requestToken = $consumer->getRequestToken('http://twitter.com/oauth/request_token', 'http://cjg00s8-ahv-app000.c4sa.net/main/twitter_callback');
        $this->Session->write('twitter_request_token', $requestToken);
        $this->redirect('http://twitter.com/oauth/authorize?oauth_token=' . $requestToken->key);
    }

    public function twitter_callback() {
        $requestToken = $this->Session->read('twitter_request_token');
        $consumer = $this->createConsumer();
        $accessToken = $consumer->getAccessToken('http://twitter.com/oauth/access_token', $requestToken);
        var_dump($consumer->post($accessToken->key, $accessToken->secret, 'http://api.twitter.com/1/statuses/update.json', array('status' => 'hello world! written by GameDePosit.app')));
    }

    private function createConsumer() {
        return new OAuth_Consumer('lnaIBId9kLLKty23VZiaQ', '8GfCVAi1Ilrd47iNYPd3KzJHfPOOmtNRTu4yyRio');
    }

    public function twitter_bot(){
        $name = 'GameDEPosit';
        $uses = array();
        // Consumer key の値
        $consumerKey = 'lnaIBId9kLLKty23VZiaQ';
        // Consumer secret の値
        $consumerSecret = '8GfCVAi1Ilrd47iNYPd3KzJHfPOOmtNRTu4yyRio';
        // Access Token の値
        $accessToken = '217319965-JbwJPvSTyImgeQr0NlY9YnGWU75DEm6dqPsAnzmq';
        // Access Token Secret の値
        $accessTokenSecret = 'qr5LcobZlhFpK4oYpp67bIPNhJwIHwyFnPNxTs3oSQ';

        $consumer = new OAuth_Consumer($consumerKey, $consumerSecret);

        $tweet = $consumer->post(
            $accessToken,
            $accessTokenSecret,
            'http://api.twitter.com/1/statuses/update.xml',
            array('status'=>'written by game_de_posit')
        );
 
        pr($tweet);
        exit();
    }
}
