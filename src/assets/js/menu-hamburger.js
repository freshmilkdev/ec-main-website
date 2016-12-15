(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.materialDesignHamburger = factory();
    }
}(this, function() {
    function materialDesignHamburger() {
        'use strict';

        document.querySelector('.material-design-hamburger__icon').addEventListener(
            'click',
            function() {
                var child = this.childNodes[1].classList;
                var menu = document.querySelector('.main-menu-wrapper').classList;
                if (child.contains('material-design-hamburger__icon--to-arrow')) {
                    child.remove('material-design-hamburger__icon--to-arrow');
                    child.add('material-design-hamburger__icon--from-arrow');
                    menu.remove('show');
                } else {
                    child.remove('material-design-hamburger__icon--from-arrow');
                    child.add('material-design-hamburger__icon--to-arrow');
                    menu.add('show');
                }

            });
    }

    return materialDesignHamburger;
}));
