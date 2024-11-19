Vtiger_List_Js.extend('WorldClock_List_Js', {}, {

    //Default function invoked by Vtiger Client Framework on specific view
    registerEvents: function(){
        var self = this;
        this.initializeSidebarClock(function(){
            self.initializeSidebarClocks();
        })
    },

    initializeSidebarClock: function(next){
        var offset = (new Date()).getTimezoneOffset() * -1 / 60.0;
        jQuery('#worldclock-on-sidebar').clock({offset: offset});
        next();
    },

    initializeSidebarClocks: function(){
        var self = this;
        jQuery.ajax({
            datatype: 'jsonp',
            url: 'http://gomashup.com/json.php?fds=geo/timezone/location&jsoncallback=?',
            success: function(response){
                var timezones = response.result;
                self._createClockUIForTimezones(timezones);
            }
        });
    },

    _createClockUIForTimezones: function(timezones){
        var self = this;
        if(timezones.length){
            self._createClockUIForTimezone(timezones.shift(), function(){
                self._createClockUIForTimezones(timezones);
            });
        }
    },

    _createClockUIForTimezone: function(timezone, next){
        var clockUI = jQuery(
            '<div class="span4 marginLeftZero"><ul class="analog"><li class="hour"></li><li class="min"></li><li class="sec"></li><li class="meridiem"></li></ul><label></label></div>'
        );
        var container = jQuery("#timezone-clocks");
        jQuery('label', clockUI).html(timezone.TimezoneId.replace('-', '/'));
        container.append(clockUI);

        clockUI.clock({offset: timezone.GMT});
        next();
    }
})