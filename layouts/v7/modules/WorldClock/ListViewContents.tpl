<!-- Direct inclusion of library files with reference to layout -->

<link rel="stylesheet" href="layouts/v7/modules/WorldClock/resources/lib/jquery-clock-plugin/css/analog.css" type="text/css"/>
<script src="layouts/v7/modules/WorldClock/resources/lib/jquery-clock-plugin/js/jquery.clock.js"></script>

<div style="text-align:center">
    <ul id="worldclock-on-sidebar" class="analog" data-tx="{$CURRENT_USER->name}">
        <li class="hour"></li>
        <li class="min"></li>
        <li class="sec"></li>
        <li class="meridiem"></li>
    </ul>
</div>

<div style="text-align:center" id="timezone-clocks" class="row-fluid"></div>