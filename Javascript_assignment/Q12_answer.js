let grid_data;
let data;
let data2;
let count=100;
function show_div()
{
    if(document.getElementById("create_blog").style.display==="block")
    {
        document.getElementById("create_blog").style.display="none";
    }
    else{
        document.getElementById("create_blog").style.display="block";
    }
    
}


async function get_data()
{

    await fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>{
      return res.json();
    })
    .then(info=>{
        data=info;
        console.log(info);
    })

    display_blog(data);
}

 function remove_blog(val)
{
    if(confirm(`Do you really want to remove Blog with id=${val} ?`))
    {
        data2= data.filter(element => element.id!=val);
        data=data2;
    // console.log(data2);
    display_blog(data);
    }
   
}

function add_blog()
{
    let userid=document.getElementById("user_id").value;
    count++;
    let title=document.getElementById("blog_title").value;
    let body=document.getElementById("blog_body").value;
    const obj1={
        userId:userid,
        id:count,
        title:title,
        body:body
    }

    data2.push(obj1);
    display_blog(data2);

    alert("Blog added successfully!!!");

    document.getElementById("user_id").value="";
    document.getElementById("blog_title").value="";
    document.getElementById("blog_body").value="";
   
}

function display_blog(blog_data)
{
    console.log(blog_data);
    grid_data="";
    for(let i=0;i<blog_data.length;i++)
    {
         grid_data+='<div class="w-74 border rounded-lg p-3 bg-stone-500"><div class="flex justify-between" ><div>'+blog_data[i].id+'</div><div><button class="text-white bg-red-600 rounded p-1" onclick="remove_blog(this.id)" id="'+blog_data[i].id+'">Delete</button></div></div><div><span class="text-stone-950">Title-</span><br/>'+blog_data[i].title+'</div><div><span class="text-stone-950">Body-</span><br/>'+blog_data[i].body+'</div></div>';
    }

    document.getElementById("blog_div").innerHTML=grid_data;
}
