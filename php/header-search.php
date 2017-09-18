<?php

$loadedCount = $_GET['loadedCount'];

if ( $loadedCount == 0 ){

echo " 
    <div class=\"search__popup-title\">
        <h2>Bonus lists</h2>
    </div>

    <div class=\"search__popup-wrap search__popup_lists\">
        <a href=\"#\" class=\"search__popup-item\">
            <i>Casino Room Bonuses</i>
            <span>3 new</span>
        </a>
        <a href=\"#\" class=\"search__popup-item\">
            <i>Vegas Casino Bonuses</i>
            <span>2 new</span>
        </a>
        <a href=\"#\" class=\"search__popup-item\">
            <i>Very Vegas Mobile Casino</i>
            <span>2 new</span>
        </a>
    </div>

    <div class=\"search__popup-title\">
        <h2>Bonus offers</h2>
    </div>

    <div class=\"search__popup-wrap search__popup_offers\">
        <a href=\"#\" class=\"search__popup-item\">
            <i>100 Free Spins at Casino Room</i>
        </a>
        <a href=\"#\" class=\"search__popup-item\">
            <i>15-100 Free Spins at Casino Extra & Lucky 31 Casino</i>
        </a>
        <a href=\"#\" class=\"search__popup-item\">
            <i>Very Vegas Mobile Casino</i>
        </a>
    </div>
       
    <div class=\"search__popup-title\">
        <h2>GAMES</h2>
    </div>

    <div class=\"search__popup-wrap search__popup_offers\">
        <a href=\"#\" class=\"search__popup-item\">
            <i>Starburst</i>
        </a>
        <a href=\"#\" class=\"search__popup-item\">
            <i>Cleopatra</i>
        </a>
        <a href=\"#\" class=\"search__popup-item\">
            <i>Fairytale Legends Red Riding Hood</i>
        </a>
    </div>
    
";

} else if ( $loadedCount >= 1 && $loadedCount < 5 ) {

echo " 
    <div class=\"search__popup-title\">
        <h2>Bonus lists</h2>
    </div>

    <div class=\"search__popup-wrap search__popup_lists\">
        <a href=\"#\" class=\"search__popup-item\">
            <i>Casino Room Bonuses</i>
            <span>3 new</span>
        </a>
        <a href=\"#\" class=\"search__popup-item\">
            <i>Vegas Casino Bonuses</i>
            <span>2 new</span>
        </a>
        <a href=\"#\" class=\"search__popup-item\">
            <i>Very Vegas Mobile Casino</i>
            <span>2 new</span>
        </a>
    </div>

    <div class=\"search__popup-title\">
        <h2>Bonus offers</h2>
    </div>

    <div class=\"search__popup-wrap search__popup_offers\">
        <a href=\"#\" class=\"search__popup-item\">
            <i>100 Free Spins at Casino Room</i>
        </a>
        <a href=\"#\" class=\"search__popup-item\">
            <i>15-100 Free Spins at Casino Extra & Lucky 31 Casino</i>
        </a>
        <a href=\"#\" class=\"search__popup-item\">
            <i>Very Vegas Mobile Casino</i>
        </a>
    </div>
       
    <div class=\"search__popup-title\">
        <h2>GAMES</h2>
    </div>

    <div class=\"search__popup-wrap search__popup_offers\">
        <a href=\"#\" class=\"search__popup-item\">
            <i>Starburst</i>
        </a>
        <a href=\"#\" class=\"search__popup-item\">
            <i>Cleopatra</i>
        </a>
        <a href=\"#\" class=\"search__popup-item\">
            <i>15-100 Free Spins at Casino Extra & Lucky 31 Casino</i>
        </a>
    </div>

    <a href=\"#\" id=\"search__popup-links\">Show all results for \"<span></span>\"</a>          
";

} else if ( $loadedCount >= 5 ) {

    echo "
        <p id=\"search__popup-no-results\">Sorry, there are no results for your query.</p>
        <a href=\"#\" id=\"search__popup-links\">Show all results for \"<span></span>\"</a>  
    ";

};

?>