let Person = makeClass(
    /** @lends Person# */
    {
        /**
         * A class for managing persons.
         * @constructs
         */
        initialize: function(name) {
            this.name = name;
        },
        say: function(message) {
            return this.name + ' says: ' + message;
        }
    }
);


//
let People = makeClass({
        /**
         * A class for managing people.
         * @constructs People
         */
        initialize: function(name) {
            this.name = name;
        },
        /** @memberof People# */
        say: function(message) {
            return this.name + ' says: ' + message;
        }
    }
);
