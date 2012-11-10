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
    function _createConsumer() {
        return new OAuth_Consumer('lnaIBId9kLLKty23VZiaQ', '8GfCVAi1Ilrd47iNYPd3KzJHfPOOmtNRTu4yyRio');
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

    function tweet(){
        $callbackUrl = 'http://'.env('HTTP_HOST').'/main/tweet_callback';
        $consumer = $this->_createConsumer();
        $requestToken = $consumer->getRequestToken('http://api.twitter.com/oauth/request_token', $callbackUrl);
        $this->Session->write('twitter_request_token', $requestToken);
        $this->redirect('http://api.twitter.com/oauth/authorize?oauth_token=' . $requestToken->key);
    }

    function tweet_callback(){
        if(!empty($this->data)){
            if(!empty($this->data['message'])){
                $comment = $this->data['message']." #GameDEPosit";
                $requestToken = $this->Session->read('twitter_request_token');
                $consumer = $this->_createConsumer();
                $accessToken = $consumer->getAccessToken('http://api.twitter.com/oauth/access_token', $requestToken);
                $tweet = $consumer->post($accessToken->key, $accessToken->secret, 'http://api.twitter.com/1/statuses/update.json', array('status' => $comment));
                $results['message'] = '投稿しました．';
                $results['div'] = 'control-group success';
                $results['input'] = 'inputSuccess';
                echo "<!--";var_dump($tweet);echo"-->";
            }else{
                $results['message'] = 'コメントを入力して下さい．';
                $results['div'] = 'control-group error';
                $results['input'] = 'inputError';
            }
            $this->set('results',$results);
        }else{

        }
    }
}
