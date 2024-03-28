(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"2":function(container,depth0,helpers,partials,data) {
    return "\n<section>\n    <div id=\"teton\" class=\"bg-white hidden\">\n        <button class=\"flex flex-row justify-center items-center \" >\n            <div class=\"text-xl p-20 text-left w-1/2\"> <span class=\"\"> Jackson,WY</span> <br><span class=\"text-7xl\">CAMP TETON</span></div>\n            <img src=\"/build/img/RD_Teton2_0478_F-cropped_2022-12-12-173545_fxxt.avif\" alt=\"\" class=\"size-1/2 animate-fadeIn\">\n        </button>\n    </div>\n<div id=\"shield\" class=\" bg-white hidden\">\n    <button class=\"flex flex-row justify-center items-center \" >\n        <div class=\"text-xl p-20 text-left w-1/2\"> <span class=\"\"> Austin, Tx</span> <br><span class=\"text-7xl \">CAMPSITE AT SHIELD RANCH</span></div>\n        <img src=\"/build/img/campsite_at_shield.avif\" alt=\"\" class=\"size-1/2 animate-fadeIn\">\n    </button>\n</div>\n<div id=\"elizita\" class=\"bg-white\">\n    <button class=\"flex flex-row justify-center items-center \" >\n        <div class=\"text-xl p-20 text-left w-1/2\"> <span class=\"\"> HEBRONVILLE, TX</span> <br><span class=\"text-7xl \">ELIZITA RANCH</span></div>\n        <img src=\"/build/img/AWA-ElizitaRanch-exteriors-033_2022-10-27-192126.avif\" alt=\"\" class=\"size-1/2 animate-fadeIn\">\n    </button>\n</div>\n\n</section>\n\n\n\n<section>\n    <div class=\"pt-24\">OUR STUDIO</div>\n    <p class=\"px-36 py-10 text-4xl\">Andersson / Wise is an architectural design firm in Austin, Texas focused on the idea that a collaborative approach to design leads to a built solution attuned to its purpose. We are an office of thirty-one architects and designers dedicated to excellence in public, educational, religious, hospitality, and residential architectural master planning, design and interiors.</p>\n    <div class=\"flex justify-end\">\n        <div class=\"grid auto-cols-max self-end\">\n            <a class=\" hover:animate-speedunderline hover:border-b-4 hover:border-black text-nowrap \" href=\"/build/Studio.html\">MORE ABOUT US  </a>\n        </div>\n        <p class=\"px-5\">&#8594;</p>                \n    </div>\n\n</section>\n\n";
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"5":function(container,depth0,helpers,partials,data) {
    return "\n<section>\n<div>RECENTLY</div>\n<div class=\"grid grid-cols-1 lg:grid-cols-3 w-10/12 m-auto\">\n    <div class=\"p-10\">\n        <button class=\"text-left\"><div class=\" bg-black\"><img src=\"/build/img/residence.avif\" alt=\"\" class=\"hover:opacity-80\"> <span class=\"absolute bottom-0 right-0 text-white\">&#8594;</span></div>\n            <p class=\"text-2xl my-3\">RESIDENCE ON MOUNT BARKER</p>\n            <p class=\"text-sm\">LIVING / AUSTIN, TX</p>\n        </button>\n    </div>\n    <div class=\" p-10\">\n        <button class=\"text-left\"><div class=\" bg-black\"><img src=\"/build/img/Tarryhill-Andrew-Pogue-V-Ext-Courtyard-Enterance-5.avif\" alt=\"\" class=\"hover:opacity-80\"> <span class=\"absolute bottom-0 right-0 text-white\">&#8594;</span></div>\n            <p class=\"text-2xl my-3\">TARRYHILL RESIDENCE</p>\n            <p class=\"text-sm\">LIVING / AUSTIN, TX</p>\n        </button>\n    </div>\n    <div class=\"p-10\">\n        <button class=\"text-left\"><div class=\" bg-black\"><img src=\"/build/img/All-Saints.avif\" alt=\"\" class=\"hover:opacity-80\"> <span class=\"absolute bottom-0 right-0 text-white\">&#8594;</span></div>\n            <p class=\"text-2xl my-3\">ALL SAINTS PRESBYTERIAN CHURCH</p>\n            <p class=\"text-sm\">LIVING / AUSTIN, TX</p>\n        </button>\n    </div>\n</div>\n<div class=\"flex justify-end\">\n    <div class=\"grid auto-cols-max self-end\">\n        <a class=\" hover:animate-speedunderline hover:border-b-4 hover:border-black text-nowrap \" href=\"/build/Projects.html\">VIEW ALL PROJECTS  </a>\n    </div>\n    <p class=\"px-5\">&#8594;</p>                \n</div>\n</section>\n\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div>\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"nav"),depth0,{"name":"nav","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"basemargin"),depth0,{"name":"basemargin","fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<section>\n    <div class=\"flex flex-row justify-between m-auto\">\n        <img src=\"/build/img/Leonid_Furmansky_Camp_Shield_Andersson_Wise_Web_-60.avif\" alt=\"\" class=\"size-1/2\">\n        <div class=\"flex flex-col\">\n            <div class=\"m-60\">\n                <p class=\"mb-20\"> FEATURED PROJECT</p>\n                <p class=\"text-4xl mt-20\"> CAMPSITE AT SHIELD RANCH</p>\n                <p class=\"my-20\">Campsite at Shield Ranch brings to fruition as sustainable 100% off-grid community designed to engage and celebrate the natural context of this 6800-acre hill country ecologically diverse sanctuary</p>\n                <div class=\"flex justify-end\">\n                    <div class=\"grid auto-cols-max self-end\">\n                        <a class=\" hover:animate-speedunderline hover:border-b-4 hover:border-black text-nowrap \" href=\"/build/Projects.html\">VIEW THE PROJECT  </a>\n                    </div>\n                    <p class=\"px-5\">&#8594;</p>                \n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"basemargin"),depth0,{"name":"basemargin","fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"footer"),depth0,{"name":"footer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n\n";
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["pageContent"],"data":data,"loc":{"start":{"line":7,"column":0},"end":{"line":45,"column":11}}}) || fn;
  return fn;
  }

,"useDecorators":true,"4_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"args":["pageContent"],"data":data,"loc":{"start":{"line":68,"column":0},"end":{"line":100,"column":11}}}) || fn;
  return fn;
  }

,"usePartial":true,"useData":true,"useDepths":true});
})();