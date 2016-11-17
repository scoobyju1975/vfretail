<?
	//page details
	$page="home";
    $title="Our Retail Futures";
    $additionalheaders="";
?>
<?php include('includes/header.php'); ?>

    <div id="page-content">
        <div class="main-image">
            <img src="images/photos/homepage_people.png">
        </div>
        <div class="main-content">
            <h1 class="white">Our<br/><strong>Retail Futures</strong></h1>
        </div>
        <div class="arrow-next clickscroll">
            <a href="#section-2">
                <img src="images/arrow_nxt.png" alt="next">
            </a>
        </div>
    </div>
    <div class="section-2" id="section-2">
        <div class="copy-content-wrapper">            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales nulla eu mi placerat viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis id sapien ac diam luctus sollicitudin non in mi. Nam blandit sem a orci maximus, ut ultrices tortor vehicula.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse suscipit massa lectus, ac varius ligula laoreet sed. Curabitur a commodo orci, et mollis metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce iaculis non eros ac venenatis. Phasellus eu libero dolor. Donec eu rutrum nisl. Nam blandit sem a orci maximus, ut ultrices tortor vehicula.</p>

        </div>
    </div>
    <div class="section-image">
        <picture>
            <source media="(min-width: 768px)" srcset="/images/image1024x300.png">
            <source media="(min-width: 500px)" srcset="/images/image768x300.png">
            <source media="(min-width: 0px)" srcset="/images/image500x300.png">
            <img src="/images/image1024x300.png" alt="" />
        </picture>
    </div>
    <div class="section-3" id="section-3">
        <ul class="home-red-nav">
            <li><a href="career-opportunities.php">Career Oportunities</a></li>
            <li><a href="career-toolkit.php">Career Toolkit</a></li>
            <li><a href="">Follow Us</a></li>
        </ul>
    </div>

<?php include('includes/footer.php'); ?>