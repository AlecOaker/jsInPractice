window.addEventListener('DOMContentLoaded', function() {

    //tabs

    'use strict';
     startTabs('info-header-tab', '.info-header', '.info-tabcontent');
    function startTabs(tabs, tabsParent, tabsContent) {
        let tab = document.getElementsByClassName(tabs),
            info = document.querySelector(tabsParent),
            tabContent = document.querySelectorAll(tabsContent);
       
        function hideTabContent(a) {
            for(let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }
        hideTabContent(1);

        function showTabContent(b) {
            if(tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }

        info.addEventListener('click', function(event) {
            let target = event.target;
            if (target && target.classList.contains(tabs)) {
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });
    }

    // Timer
    startTimer('.hours', '.minutes', '.seconds', 'timer', '2023-04-15', 10800000);
    function startTimer(hClass, mClass, sClass, timerID, deadl, timeCorrector) {
        let deadline = deadl; 
        
        function getTimeRemaining(endtime) {
            let t = (Date.parse(endtime) - timeCorrector) - Date.parse(new Date()),
                seconds = Math.floor((t/1000) % 60),
                minutes = Math.floor((t/1000/60) % 60),
                hours = Math.floor(t/1000/60/60);
                console.log(Date.parse(endtime));
                return {
                    'total' : t,
                    'hours' : hours,
                    'minutes' : minutes,
                    'seconds' : seconds
                };
        }      
        function setClock(id, endtime) {
            let timer = document.getElementById(id),
                hours = timer.querySelector(hClass),
                minutes = timer.querySelector(mClass),
                seconds = timer.querySelector(sClass),
                timeInterval = setInterval(updateCLock, 1000);

            function updateCLock() {
                let t = getTimeRemaining(endtime);
                
                if(t.hours < 10) {
                    hours.textContent = '0' + t.hours;
                } else {
                    hours.textContent = t.hours;
                }

                if(t.minutes < 10) {
                    minutes.textContent = '0' + t.minutes;
                } else {
                    minutes.textContent = t.minutes;
                }

                if(t.seconds < 10) {
                    seconds.textContent = '0' + t.seconds;
                } else {
                    seconds.textContent = t.seconds;
                }
                        
                if(t.total <= 0) {
                    clearInterval(timeInterval);
                }
            }
        } 
        setClock(timerID, deadline);
    }
    


});