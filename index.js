let myArr = [65,9,34,12,3,7];
console.log(myArr.map(function(value){
    
alert( "this_is_mapping_of_array_[65,9,34,12,3,7]_using_map"+ ' =' + value);
    }));






let sum = 0;
myArr.forEach(function(item){
    sum += item;
    console.log ("sum" + sum);
    alert("here_is_the_sum_of_an_array_[65,9,34,12,3,7]_using_foreach_loop" + " "+sum);  
});




let special_number = 50
console.log(special_number);
alert("value_of_special_number_is"+ ' ='+ special_number);

special_number = special_number * 3
console.log(special_number);
alert("value_of_special_number_multiply_by_3_is"+ ' ='+ special_number);

special_number = special_number - 10
console.log(special_number);
alert("value_of_special_number_minus_10_is"+ ' ='+ special_number);

special_number = special_number + 5
console.log(special_number);
alert("value_of_special_number_plus_5_is"+ ' ='+ special_number);

special_number = special_number / 10
console.log(special_number);

alert("value_of_special_number_divided_by_10_is"+ ' ='+ special_number);
