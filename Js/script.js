var back = 'cortana.jpg';
var realImage = ['list1.jpg','list2.jpg','list3.jpg','list4.jpg','list5.jpg',];

function randomValue(a, b)//Will return Random Number
{
    return (Math.round(Math.random())-0.5);
} 
var imageCache = []; 
for (var i = 0; i < 5; i++) 
{
    imageCache[i] = new Image(); //creating image cache
    imageCache[i].src = realImage[i]; //putting data in image cache
    realImage[i] = '<img src="'+realImage[i]+'" width="100" height="100" alt="RealImage" \/>';//sending height and width 
  realImage[i+5] = realImage[i];//dublicating values
} 
function displayOverlay(i) 
{
    document.getElementById('t'+i).innerHTML = '<div onclick="displayOrignal('+i+');return false;"><img src="'+back+'" width="100" height="100" alt="OverLay_Image" \/><\/div>';
    //alert(i);getting the click number
} 
var temp1, temp2,countNo, tid, cid; 
window.onload=start; 
function start() 
{
    for (var i = 0; i <= 10 ;i++)
    {
        displayOverlay(i);
        clearInterval(tid);//clearing
        countNo = 0;
        realImage.sort( randomValue );//getting random places
    } 
}
function displayOrignal(value) 
{
    if (countNo>1) //tnp is 0
    {
        //alert('Run third click');
        clearTimeout(cid);//passing 0
        compare();//comparing
    }
    document.getElementById('t'+value).innerHTML = realImage[value];
    if (countNo==0)
    {
        //alert('Run First');
        temp1 = value;
    }
    else 
    {
        //alert('Run Second click');
        temp2 = value;  
        cid = setTimeout('compare()', 600);
    }
    countNo++;//run to set second click
} 
function compare() 
{
    countNo = 0; 
    if (realImage[temp1] != realImage[temp2]) 
    {
        displayOverlay(temp1);
        displayOverlay(temp2);
    } 
}
                    