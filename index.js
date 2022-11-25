// Write your solution in this file!
let employee = {
    name:"", streetAddress:""
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]= value;
    return employee
}
function updateEmployeeWithKeyAndValue(employee,key,value){
let copyEmployee = {...employee}//this is how we clone an object
copyEmployee[key] = value;
return copyEmployee
}
function deleteFromEmployeeByKey(employee,key){
    let copyEmployee = {...employee}
    delete copyEmployee[key]
    return copyEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key]
    return employee
}