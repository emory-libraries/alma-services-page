console.log("hello JS.");

(function () {
    "use strict";
    'use strict';
    
    
    var app = angular.module('viewCustom',[ 'angularLoad']);
    
    /****************************************************************************************************/
    
     /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/
    
     /*var app = angular.module('centralCustom', ['angularLoad']);*/
    
     /****************************************************************************************************/
     
     
     
     
     
     /* these experiments below, from notes in the readme don't work */
     
   /* app.component('prmSearchBarAfter', {
        template: ` < span style = "margin-left: 40%;" > Hello World < / span > `
    });
     app.component('prm-logo-after', {
        template: ` < p > Hello World < / p > `
    }); */

/* define these two things: first, the locally added component, second, the Primo directive to add it to */
/* 
    app.component('myInstitutionComponent', {
});

app.component('prmSearchBarAfter', {
});
*/


/* app.component('myInstitutionComponent', {
    template: `<span style="margin-left: 40%;">Hello World</span>`
});  


app.component('prmTopBarAfter', {
        bindings: {parentCtrl: `<`},
        template: `<my-institution-component></my-institution-component>`    
});
 * /
    
    
     /* app.component('prmLogoAfter', {
        template: `<span style="margin-left: 40%;">Hello World Again</span>`
    });
    app.component('prm-logo-after', {
        template: `<span style="margin-left: 40%;">Hello World Again</span>`
    });*/
    
    /* BG's example */
    app.component('prmServiceLinksAfter',{
    bindings: {parentCtrl: '<'},
    require: {
    primoExploreCtrl: '^primoExplore'
    },
    controller: 'prmServiceLinksAfterController',
    template: `<div ng-if=$ctrl.display_it> <a class="arrow-link md-primoExplore-theme" href="https://kleene.library.emory.edu/cgi-bin/get_alma_bib?doc_id={{$ctrl.doc_id}}&format=marcedit" target="_blank">Staff view</a></div> `
});


})

