document.addEventListener('DOMContentLoaded', () => {
    var mobileNavbarBtn = document.getElementById('mobile-nav-btn');
    var mobileNavbarContainer = document.querySelector(".mobile-navbar");


    mobileNavbarBtn.addEventListener('click',() => {
        if (mobileNavbarContainer.classList.contains("show-navbar")) {
            mobileNavbarContainer.classList.remove("show-navbar");
            mobileNavbarContainer.classList.add("hidden-navbar");
        } else {
            mobileNavbarContainer.classList.remove("hidden-navbar");
            mobileNavbarContainer.classList.add("show-navbar");
        }
    });

    /* Check Screen Size */ 

    const mediaQuery = window.matchMedia("(min-width: 768px)");

    function handleScreenChange(e) {
        if (e.matches && mobileNavbarContainer.classList.contains("show-navbar")) {
            mobileNavbarContainer.classList.add("hidden-navbar");
        }
    }

    mediaQuery.addEventListener('change', handleScreenChange);
    handleScreenChange(mediaQuery);
});


document.addEventListener('DOMContentLoaded', () => {

    var serviceTitle = document.querySelectorAll(".service-title");
    
    var serviceDescription = document.querySelectorAll(".service-description");
    
    var serviceColors = [
        "var(--graphic-side-color)",
        "var(--photography-side-color)"
    ];
    
    var mobileScreenSize = window.matchMedia("(max-width: 768px)");

    mobileScreenSize.addEventListener('change', addMobileImages);
    
    addMobileImages(mobileScreenSize);

    function addMobileImages(x) {
        var containerImageClasses = document.querySelectorAll(".container-image");
        var projectBoxes = document.querySelectorAll(".project-box");
        
        if (x.matches) {
            const mobilePictures = [
                '/images/mobile/image-transform.jpg',
                '/images/mobile/image-stand-out.jpg',
                '/images/mobile/image-graphic-design.jpg',
                '/images/mobile/image-photography.jpg',
            ];

            const mobileProjectPictures = [
                'images/mobile/image-gallery-milkbottles.jpg',
                'images/mobile/image-gallery-orange.jpg',
                'images/mobile/image-gallery-cone.jpg',
                'images/mobile/image-gallery-sugar-cubes.jpg',
            ];

            containerImageClasses.forEach((dt, idx) => {
                dt.style.backgroundImage = `url("${mobilePictures[idx]}")`;});
            
            projectBoxes.forEach((val, idx) => {
                val.style.backgroundImage = `url("${mobileProjectPictures[idx]}")`;
            });
            
            } else {
            const desktopPictures = [
                '/images/desktop/image-transform.jpg',
                '/images/desktop/image-stand-out.jpg',
                '/images/desktop/image-graphic-design.jpg',
                '/images/desktop/image-photography.jpg',
            ];

            const desktopProjectPictures = [
                'images/desktop/image-gallery-milkbottles.jpg',
                'images/desktop/image-gallery-orange.jpg',
                'images/desktop/image-gallery-cone.jpg',
                'images/desktop/image-gallery-sugarcubes.jpg',
            ]

            containerImageClasses.forEach((dt, idx) => {
                dt.style.backgroundImage = `url("${desktopPictures[idx]}")`;});
            
            projectBoxes.forEach((val, idx) => {
                val.style.backgroundImage = `url("${desktopProjectPictures[idx]}")`;
            });
        }
    } 



    serviceTitle.forEach((val, idx) => {
        val.style.color = `${serviceColors[idx]}`;
    });

    serviceDescription.forEach((val, idx) => {
        val.style.color = `${serviceColors[idx]}`;
    });
});