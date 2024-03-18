        // Task 1: Back to top button
        const scrollButton = document.getElementById('scrollButton');
        window.addEventListener('scroll', function() {
            if (window.pageYOffset >= 200) {
                scrollButton.style.display = 'block';
            } else {
                scrollButton.style.display = 'none';
            }
        });

        scrollButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Task 2: Open and auto close window. note: page is being closed after 5 seconds based on the script!!
        const openWindowButton = document.getElementById('openWindowButton');
        openWindowButton.addEventListener('click', function() {
            const newWindow = window.open('', '_blank', 'width=300px, height=300, left=300px, top=200px');
            setTimeout(function() {
                newWindow.close();
            }, 5000); // Close after 5 seconds
        });

        // Task 3: Reset it back! note: based on the script, now it is being increaased dynamically every half second.
        const resetDiv = document.getElementById('resetDiv');
        let width = 0;
        let increment = 1;

        function updateWidth() {
            width += increment;
            resetDiv.style.width = width + '%';
            resetDiv.textContent = width + '%';
            if (width >= 100) {
                width = 0;
            }
        }

        setInterval(updateWidth, 500);