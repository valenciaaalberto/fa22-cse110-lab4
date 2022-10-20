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

## Q12
### A) To access the name object, you write 'student.name'
### B) To access the value of the Grad Year property in the student object, you write 'student['Grad Year']'
### C) To call the function for the greeting property in the student object, you write 'student.function()' not sure if correct
### D) To access the name property of the object in the Favorite Teacher property in student, you write 'student['Favorite Teacher'].name'
### E) To Access index zero in the array of the courseLoad property of the student object, you write 'student.courseload[0]'.

## Q13
### A) ‘3’ + 2 = 32 because integers map to their exact string representation
### B) ‘3’ - 2 = 1 because - operation is not overloaded and operands are converted to numbers
### C)  3 + null = 3 because like false, null assumes the value 0
### D) ‘3’ + null = 3null because the + operation is overloaded such that strings are concatenated
### E) true + 3 = 4 because true assumes the value 1
### F) false + null = 0 because each value is intrepreted as the integer 0
### G) '3' + undefined = 3undefined because the + operation is overloaded such that strings are concatenated
### H) '3' - undefined = NaN because undefined assumes the value Nan so the it's integer value does not permit it to be subtracted

## Q13

### A) True because '2' becomes an integer and 2 is greater than 1
### B) False because the dictionary compares the first letter in the string such that 2 is not less than 1.
### C) True because '2' becomes an integer and so 2 does equal 2.
### D) False because both each side is a differnt type so comparing different types is automatically false.
### E) False because true = 1 which is not equal to 2.
### F) True because Boolean(2) = true which means we are comparing the correct types and then true does equal true.

## Q15)

The diffence between == and === is that === short circuits if you are comparing two different types whereas == is not strict with the values btoueing compared and looks at the values instead. 