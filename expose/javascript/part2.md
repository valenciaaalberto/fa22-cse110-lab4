# Answer to Part Two Questions

## Q1
Line 12 after execution prints "3" because var i is not restricted to its scope.

## Q2
Line 13 after exection prints "150" because var discountedPrice does not have a restricted scope so on the last iteration it will contain the the array's last discounted price.

## Q3
Similar to the reason for Q2, line 14 will print "150" because it stores the last discounted price of the last item in the array and it is of var type so its scope is not constrained.

## Q4
The function will return the array containing the discounted values because during the loop the array is instantiated to contain all the discounted prices from the price array. The array will contain [50,100,150].

## Q5
Line 12 will cause an error because the variable i is of the type var and because of that, it cannot be accesed beyond its declaration in the loop.

## Q6
Similar to Q5, discountedPrice is of the let type so it cannot be reach beyond the for loop.

## Q7
Line 14 prints 150 because finalPrice is instantiated prior to the for loop so it is accessible according to its scope and since it is updated each time in the for loop, it will retain the last value it is updated to which is 150.

## Q8

The function will return the array of updated discounted prices [ 50, 100, 150 ]. This is because the array discounted's scope is accessible through the entire function. Moreover, since it is update in the for loop that is why it has updated discount values.

## Q9
Line 11 will return an error because i is accessed outside of its scope

## Q10
Line 12 will print "3" because the variable length is a const and is not being updated after instantiation, so there is no error there.

## Q11
This function returns [ 50, 100, 150 ] because while the discounted array is const, this means that each index in the array cannot be updated, which it is not so there is no issue there and the array stores the correct discounted values.
