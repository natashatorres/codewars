def area_or_perimeter(l , w)
    if l == w 
      return l * w
      else
      return 2 * (l + w)
    end
end


#PREP:
#Paramter: length and width
#Return: either the area (if a sq) or perimeter (if rec)
#Example: area_or_perimeter(6, 10) -> 32 or area_or_perimeter(3, 3) -> 9 
#Pseudocode: 
#1: deteremine if the numbers passed thru the parameters are the same, if they are it's a sq, if not it's a rec
#2: create a conditional where if it is a sq you'd multiple the two numbers to get the area, and if a rec multple each num by 2 and add