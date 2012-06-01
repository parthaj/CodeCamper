﻿define(['amplify'],
    function (amplify) {
        var
            init = function () {
                amplify.request.define('favorites', 'ajax', {
                    url: '/api/favorites/{personId}',
                    dataType: 'json',
                    type: 'GET'
                    //cache:
                });
                amplify.request.define('attendanceAdd', 'ajax', {
                    url: '/api/attendance',
                    dataType: 'json',
                    type: 'POST',
                    //data: data,
                    contentType: 'application/json; charset=utf-8'
                });
            },
            
            getAttendance = function(callbacks, personId) {
                return amplify.request({
                    resourceId: "favorites",
                    data: { personId: personId },
                    success: callbacks.success,
                    error: callbacks.error
                });
            },
            
            addAttendance = function(callbacks, data) {
                return amplify.request({
                    resourceId: "attendanceAdd",
                    data: data,
                    success: callbacks.success,
                    error: callbacks.error
                });
            };

    init();
    
    return {
        getAttendance: getAttendance,
        addAttendance: addAttendance
    };
});