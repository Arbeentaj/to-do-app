var arr =[{}];
	
	function addTask()
	{
		//debugger;
		var del=Math.floor(Math.random()*100), edi=Math.floor(Math.random()*1000),tik=Math.floor(Math.random()*10000);
		var thingName =document.getElementById("name1").value;
		var categoryName =document.getElementById("cate").value;
		
		
		var taskButton=document.getElementById("addtask");
		 //taskButton.addEventListener('click' , function(event){
		 var taskName = thingName.value;
		 cellText=[];
		//var body1 = document.getElementById("body");
		var tabbody = document.getElementById("tblid");
		var div1 =document.getElementById("innerdiv");
		var div2 = document.getElementById("contbox");
		var row = document.createElement("tr");
			
				//debugger;
				var cell = document.createElement("td");
				cell.setAttribute('id',idofname);
				cellText= document.createTextNode(thingName);
				
				var cat = document.createElement("td");
				cat.setAttribute('id',idofcat);
				 catText= document.createTextNode(categoryName);
				
				var date = document.createElement("td");
				curDate = new Date();
				datText = document.createTextNode(curDate);
				
				var comp = document.createElement("td");
				chkbox =document.createElement("input");
				comp1Text =document.createElement("i");
				comp2Text =document.createElement("i");
				
				
				chkbox.setAttribute('type','checkbox');
				chkbox.setAttribute('id',tik);
				comp1Text.setAttribute('class','fa fa-pencil-square-o');
				comp1Text.setAttribute('id',edi);
				comp1Text.setAttribute('onclick','editfunc(comp1Text.getAttribute("id")),idofname,idofcat');
				comp2Text.setAttribute('class','fa fa-trash-o');
				comp2Text.setAttribute('id',del);
				comp2Text.setAttribute('onclick','deletefunc(comp2Text.getAttribute("id"))');
				
				
				
				 
				cell.appendChild(cellText);
				cat.appendChild(catText);
				date.appendChild(datText);
				comp.appendChild(chkbox);
				comp.appendChild(comp1Text);
				comp.appendChild(comp2Text);
				
				
			
				
				row.appendChild(cell);
				row.appendChild(cat);
				row.appendChild(date);
				row.appendChild(comp);
				tabbody.appendChild(row);
		
		 arr=[{"name":thingName,"category":categoryName,"createdDate":curDate,"completed":false}];
		 
		 localStorage.setItem('list',JSON.stringify(arr));
		 //localStorage.getItem(key)
		 //body.appendChild(div1);
		 
		//		 });
			
		 
	}	

		function deletefunc(del)
		{
			
			document.getElementById(del).parentNode.parentNode.remove();
			
			
		}

		function editfunc(edi,idname,idcatg){
		
		 var nameChange = document.getElementById(edi).parentNode.parentNode;
		 alert(nameChange);
		 // var nameChange = document.getElementById(changename).value;
		 // var catgChange = document.getElementById(changecatg).value;
		 
			document.getElementById("changename").value =nameChange;
			//document.getElementById("cate").value=catgChange;
			alert("hi");
			
		}