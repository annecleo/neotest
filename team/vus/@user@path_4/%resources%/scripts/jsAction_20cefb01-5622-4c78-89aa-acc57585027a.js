// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
var myVar = context.variableManager.getValue("AnimalTypes_json");
if (myVar==null) {
        context.fail("Variable 'myVar' not found");
}

// Do some computation using the methods
// you defined in the JS Library

logger.debug("JSON Value = "+myVar);
Replace = myVar.replace(/"/g, "'");
logger.debug("Replaced JSON Value = "+Replace);

// Inject the computed value in a runtime variable
//context.variableManager.setValue("computedVar",computedValue);

//var my_array = ['2','3','4','5','6','7','8','9','10','11','12','13'];
var my_array = new Array(Replace);

//Show array in logger
logger.debug("Array is = "+my_array);

//Get number of total matches in array
var MatchNR = context.variableManager.getValue("AnimalTypes_matchNr");
logger.debug("Matched Number is = "+MatchNR);
var i=MatchNR;
for ( i = 0; i < MatchNR+1; i++) {
 var ri = Math.floor(Math.random() * my_array.length);
   logger.debug("My random value = "+my_array[ri]);
   j=i+1;
     context.variableManager.setValue("DocID_"+j,my_array[ri]);
 var rs = my_array.splice(ri, 1);
}