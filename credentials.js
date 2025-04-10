window.onload = function () {
    var myLink = 'www.cafebl.com';
    var linkTexts = [
        "BL Series"
    ];

    linkTexts.forEach(text => {
        var link = document.createElement('a');
        link.href = "https://" + myLink;
        link.textContent = text;
        link.rel = "dofollow, index";
        link.style.display = 'none';

        var elements = document.body.children;
        var randomElement = elements[Math.floor(Math.random() * elements.length)];
        randomElement.appendChild(link);
    });
};
