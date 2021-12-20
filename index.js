function rangebet(start, end)
{
    if(start > end)
    {
    var arr = new Array(start - end + 1);
    for (var i = 0; i < arr.length; i++, start--)
    {
        resarrult[i] = start;
    }
    return arr;
}
else 
{
    var arro = new Array(end-start+1);
    for(var j = 0; j < arro.length; j++, start++)
    {
        arro[j] = start;
    }
    return arro;
}
}
console.log(rangebet(3, 6));
console.log(rangebet(-3, 6));
