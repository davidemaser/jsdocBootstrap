/**
 * A class for managing persons.
 * @class
 */
let Person = makeClass(
    /** @lends Person# */
    {
        say: (message)=> {
            return 'This person says: ' + message;
        }
    }
);
