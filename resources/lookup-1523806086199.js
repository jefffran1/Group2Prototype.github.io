(function(window, undefined) {
  var dictionary = {
    "a61f8973-7f97-4b1b-b0c1-517b1d72db6e": "Course Mapper 2",
    "dccc1140-1640-4fd2-8651-418572b7c05b": "Run 7 lap 2 run",
    "1de392d7-ae43-45bb-886d-e4f333cbef56": "Map Measure",
    "ea8b1a87-01f3-48e6-973d-81a1ca0fcf01": "Course Mapper",
    "81c73d66-c9e7-408e-a478-e3e5468958f6": "Records",
    "9a90cc5f-d914-48bc-b1d9-c74732d444f6": "Settings",
    "6c111bbb-c77c-462f-8d63-a01ba2013fa9": "Acce",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "86871a6a-a5f1-4bc1-8bb9-695344c5defc": "Course Mapper [GPS]",
    "9b8cc678-ec3b-468b-a2de-64c620fcb637": "Run 7 run",
    "06456aef-83f9-4ae2-84fc-7d3a4094ac99": "Running Event",
    "89e86fe2-f470-426f-bb4d-360c81299a2d": "Bluetooth Settings",
    "2fac28cb-38bd-4c1d-9fdd-16ac24188264": "Run 7",
    "11a13328-7748-4f43-ad07-d2bc277b5a6d": "Run 7 lap 2",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);