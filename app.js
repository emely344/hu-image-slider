const homePageLinkElement = document.getElementById('home-page-link');
        console.log(homePageLinkElement);
        homePageLinkElement.addEventListener('click', function () {
            console.log('you clicked the home page link');
            const homePageClassList = document.getElementById('home-page').classList
                .remove('d-none');
            document.getElementById('about-page-link').classList.add('d-none');
            console.log('homePageClassList', homePageClassList);
        });