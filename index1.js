var arr=[3, 4, 5, 4, 6, 4, 8, 4]
var f = 1;
var m = 0;
var item;
for (var i=0; i<arr.length; i++)
{
        for (var j=i; j<arr.length; j++)
        {
                if (arr[i] == arr[j])
                 m++;
                if (f<m)
                {
                  f=m; 
                  item = arr[i];
                }
        }
        m=0;
}
console.log(item+" ( " +f +" times ) ") ;
