// namespace all code so that we can control what seeps into the window object
/**
 * Describe the class below
 * @constructor
 */
(function (window, x2o, $) {
    var self,
        ready = $.Deferred(),
        myVar;
  /**
   * What does this function do
   * @class
   */
    var SimpleObjectTemplate = function() {
        self = this;
        self.myVar = undefined;

        self.addPublicMethod('myPublicMethod', myPublicMethod);
    };
  /** @namespace */
    var objectProperties = [
        {
            'name': "MyStringVar",
            'type': "String",
            'value': '',
            'description': "",
            'extendedDescription': ""
        },
        {
            'name': "MyEnum",
            'type': "Option" + JSON.stringify({
                "value1": "Text 1",
                "value2": "Text 2"
                }),
            'value': 'value1',
            'description': "",
            'extendedDescription': ""
        },
        {
            'name': "MyBoolean",
            'type': "Boolean",
            'value': 'False',
            'description': "",
            'extendedDescription': ""
        },
        {
            'name': "MyInteger",
            'type': "Integer",
            'value': '',
            'description': "",
            'extendedDescription': ""
        }
    ];

    // Inheritance setup
    SimpleObjectTemplate.inheritsFrom(x2o.ObjectBase);

    // this event is called when the defined properties have been updated (either by Designer
    // or by Xynco at run-time.
  /**
   * @memberof SimpleObjectTemplate
   */
    SimpleObjectTemplate.prototype.onPropertiesUpdated = function (newProperties, newData) {
        $.when( ready ).then(function() {
            // Deal with properties here...
        });
    };
  /**
   * @memberof SimpleObjectTemplate
   */
    SimpleObjectTemplate.prototype.onWindowResize = function (newProperties, newData) {
    };
  /**
   * @memberof SimpleObjectTemplate
   */
    SimpleObjectTemplate.prototype.init = function () {

        if (typeof self.setInitOptions === 'function') {
            self.setInitOptions({
                'enableStyleOverrides': true
            });
        }

        $.when(self.construct( window.name, objectProperties )).then(function () {

            // Initialization code here...

            ready.resolve();
            self.notifyObjectReady();
        });

        return ready.promise();
    };

    // Export object from namespace
    window.x2oObject = new SimpleObjectTemplate();

    //Bootstrap
  /**
   * Describe the function below
   * @constructor
   */
    $(function () {
        $.when(window.x2oObject.init()).then(function () {
            // POST-CONSTRUCTION CODE
        });
    });
})(window, x2o, jQuery);
