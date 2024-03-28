(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['nav'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\n<div class=\" w-full\">\n  <header class=\"m-5\">\n    <div class=\" flex justify-between \">\n      <h1 class=\"\">\n          <a href=\"/build/Anderssonwise.html\">\n              <Span class=\"text-4xl \">AW</SPan>\n           </a>\n      </h1>\n      <div class=\"fixed right-0 top-0 z-20\">\n        <button id=\"hamburger-button\" class=\"relative text-4xl h-32 w-16 cursor-pointer mr-5\">\n          &#9776; \n        </button>\n      </div>\n    </div>\n  </header>\n  <div id=\"mobile-menu\"\n    class=\"hidden h-screen w-screen fixed top-0 bg-amber-800 opacity-80 text-6xl text-white p-4 m-auto z-20\">\n    <nav class=\" items-center flex flex-col justify-center m-auto\" aria-label=\"mobile\">\n      <div class=\"grid auto-cols-max self-center p-5\">\n        <a class=\" hover:animate-speedunderline hover:border-b-4 hover:border-white text-nowrap \" href=\"/build/Studio.html\">STUDIO</a>\n    </div>\n    <div class=\"grid auto-cols-max self-center p-5\">\n      <a class=\" hover:animate-speedunderline hover:border-b-4 hover:border-white text-nowrap \" href=\"/build/Projects.html\">PROJECTS</a>\n    </div>\n    <div class=\"grid auto-cols-max self-center p-5\">\n      <a class=\" hover:animate-speedunderline hover:border-b-4 hover:border-white text-nowrap \" href=\"/build/press-awards.html\">PRESS + AWARDS</a>\n    </div>\n    <div class=\"grid auto-cols-max self-center p-5\">\n      <a class=\" hover:animate-speedunderline hover:border-b-4 hover:border-white text-nowrap \" href=\"/build/Contact.html\">CONTACTS </a>\n    </div>\n  </div>\n\n\n    </nav>\n  </div>\n</div>";
},"useData":true});
})();